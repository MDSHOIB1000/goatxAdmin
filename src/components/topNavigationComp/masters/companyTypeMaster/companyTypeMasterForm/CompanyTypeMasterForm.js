import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../../../../common/CustomInputField';
import { addCompanyType, getupdateCompanyTypeId, updateCompanyType } from '../../../../../api/login/Login';
function CompanyTypeMasterForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Company Type  Master",
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
        course: "",
        stream: "",
        isActive: true,
    });

    const params = useParams();
    const navigate = useNavigate();
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Company Name  Is Required";
        }
        if (!values.course) {
            errors.course = "Course Is Required";
        }
        if (!values.stream) {
            errors.stream = "Stream Is Required";
        }
        if (!values.isActive) {
            errors.isActive = "Status Is Required";
        }
        return errors;
    };



    const blankBtn = () => {
        setInitialValues({ name: "", stream: "", course: "" });
    }
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addCompanyType(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage(" Company Type Successfully");
                        navigate(`/company-type-master`)
                    }
                    blankBtn()
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateCompanyType(params.id, values);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Company Type Successfully");
                        blankBtn()
                        navigate(`/company-type-master`)
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Company Type Successfully");
                        blankBtn()
                    }

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };



    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getupdateCompanyTypeId(params.id);
                    setInitialValues(response?.data);

                } else {
                    setInitialValues({
                        name: "",
                        type: ""
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Company Type
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Company Type Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.stream}
                                                        hasError={errors.stream && touched.stream}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.stream}
                                                        autoFocus={true}
                                                        id="stream"
                                                        name="stream"
                                                        placeholder="Stream"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.course}
                                                        hasError={errors.course && touched.course}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.course}
                                                        autoFocus={true}
                                                        id="course"
                                                        name="course"
                                                        placeholder="Course"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.isActive}
                                                        name="isActive"
                                                    >
                                                        {/* <option value="" disabled>
                                                            Select Status
                                                        </option> */}
                                                        <option value={true} >
                                                            Active
                                                        </option>
                                                        <option value={false} >
                                                            In Active
                                                        </option>

                                                    </select>
                                                    {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to='/company-type-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link>
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyTypeMasterForm
