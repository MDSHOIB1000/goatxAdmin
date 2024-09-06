import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { addCourseDegree,  getupdateCourseDegreeStatusId, updateCourseDegree } from '../../../../../api/login/Login';
import { toast } from 'react-toastify';

function CourceDegreeTypeForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Course Degree Type ",
    }
    const [initialValues, setInitialValues] = useState({
        course_type_name: "",
        isActive: "",
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.course_type_name) {
            errors.course_type_name = "Affilated By Is Required";
        }
        if (!values.isActive) {
            errors.isActive = "Affilated Status Is Required";
        }
        return errors;
    };
    const blankBtn = () => {
        setInitialValues({ course_type_name: "", isActive: "" });
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
                    const res = await addCourseDegree(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Course Type Successfully");
                        navigate(`/course-degree-list`)
                    }
                    blankBtn()
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateCourseDegree(params.id, values);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Course Type Successfully");
                        blankBtn()
                        navigate(`/course-degree-list`)
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Course Type Successfully");
                        blankBtn()
                    }
                    // getFloorMasters(page)

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
                    const response = await getupdateCourseDegreeStatusId(params.id);
                    setInitialValues(response?.data);

                } else {
                    setInitialValues({
                        course_type_name: "",
                        isActive: "",
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
                                    Course Types
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
                                                <div className="col-xl-5 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.course_type_name}
                                                        hasError={errors.course_type_name && touched.course_type_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.course_type_name}
                                                        autoFocus={true}
                                                        id="course_type_name"
                                                        name="course_type_name"
                                                        placeholder="Course type"
                                                    />
                                                </div>
                                                <div className="col-xl-5 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.isActive}
                                                        name="isActive"
                                                    >
                                                        <option value="" disabled>
                                                            Select  Status
                                                        </option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    <Link to='/course-degree-list' type='submit' className="btn btn-danger light ms-1">Cancel</Link>
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

export default CourceDegreeTypeForm
