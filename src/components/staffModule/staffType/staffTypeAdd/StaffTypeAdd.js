import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getstaffType, staffTypeAdd, staffTypeUpdate } from "../../../../api/login/Login";
import { Formik } from "formik";
import CustomInputField from "../../../../common/CustomInputField";

function StaffTypeAdd() {
    const [conbo, setCombo] = useState(null)
    const [StffTypeconbo, setStffTypeconbo] = useState(null)
    const [initialValues, setInitialValues] = useState({
        staff_type: "",
        is_active: ""
    });
    const params = useParams();
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        if (!values.staff_type) {
            errors.staff_type = " Staff Type is required";
        }
        if (!values.is_active) {
            errors.is_active = "Is Active is required";
        }
        // if (!values.staff_type_id) {
        //     errors.staff_type_id = "Staff Type Id is required";
        // }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };

    // const curencyidget = async () => {
    //     try {
    //         const data = await languageList()
    //         const dataDtafType = await staffType()

    //         setCombo(data?.data)
    //         setStffTypeconbo(dataDtafType?.data)

    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await staffTypeAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                    }
                } catch (error) {

                }

            } else {
                try {
                    await staffTypeUpdate(params.id, values);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        // curencyidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getstaffType(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    // setInitialValues({
                    //     name: "",
                    //     code: "",
                    //     curruncy_id: "",
                    // });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={''} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"}  STAFF
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
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.staff_type}
                                                            hasError={errors.staff_type && touched.staff_type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.staff_type}
                                                            autoFocus={true}
                                                            id="staff_type"
                                                            placeholder="Staff Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="is_active" name="is_active" value={values.is_active} onChange={handleChange}
                                                            hasError={
                                                                errors.is_active && touched.is_active
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.is_active && errors.is_active
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Type Staff</option>

                                                            <option value={true}>
                                                                In Active
                                                            </option>
                                                            <option value={false}>
                                                                In Deactive
                                                            </option>

                                                        </select>

                                                    </div>


                                                </div>
                                                <div>
                                                    <Link to='/staff-type' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"

                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>



                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default StaffTypeAdd