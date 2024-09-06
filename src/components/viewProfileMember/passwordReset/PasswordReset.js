
import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"


import { useEffect, useState } from "react";
import CustomInputField from "../../../common/CustomInputField";
function PasswordReset() {
    const [initialValues, setInitialValues] = useState({
        NewPassword: "",
        SecurityPin: "",
    });
    const params = useParams();
    const navigate = useNavigate()



    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.NewPassword) {
            errors.NewPassword = "New Password  is required";
        }
        if (!values.SecurityPin) {
            errors.SecurityPin = "Security Pin  is required";
        }

        return errors;
    };

    // const toastSuccessMessage = () => {
    //     toast.success(`${params?.id ? "Update" : "Add"} Bank Master Successfully.`, {
    //         position: "top-center",
    //     });
    // };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    // const res = await bankMasterAdd(values);
                    // if (res?.statusCode == "200") {
                    //     toastSuccessMessage();
                    //     setTimeout(() => {
                    //         navigate('/bank-master')
                    //     }, [4000])
                    // }
                } catch (error) {

                }

            } else {
                try {
                    // const res = await bankMasterUpdate(params.id, values);
                    // if (res?.statusCode == "200") {
                    //     toastSuccessMessage();
                    //     setTimeout(() => {
                    //         navigate('/bank-master')
                    //     }, [4000])
                    // }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    // useEffect(() => {
    //     const fetchCurrency = async () => {
    //         try {
    //             if (params?.id) {
    //                 const response = await getBnakMasterId(params.id);
    //                 const currencyData = response.data;
    //                 setInitialValues(currencyData);
    //             } else {
    //                 setInitialValues({
    //                     bank_name: "",
    //                     SecurityPin: "",
    //                     ifsc_code: '',
    //                     bank_id: '',
    //                     eko_bank_code: '',
    //                     paysprint_bank_id: '',
    //                     is_active: true
    //                 });
    //             }
    //         } catch (error) {
    //             console.error("Error fetching currency:", error);
    //         }
    //     };

    //     fetchCurrency();
    // }, [params?.id]);
    return (
        <>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0">
                                {/* {params?.id ? "UPDATE" : "ADD"} */}
                                Password Reset

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
                                            <div className="col-xl-12 mb-3">

                                                <CustomInputField
                                                    type="password"
                                                    value={values.NewPassword}
                                                    hasError={errors.NewPassword && touched.NewPassword}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.NewPassword}
                                                    autoFocus={true}
                                                    id="NewPassword"
                                                    name="NewPassword"
                                                    placeholder="New Password"
                                                />
                                            </div>
                                            <div className="col-xl-12 mb-3">

                                                <CustomInputField
                                                    type="password"
                                                    value={values.SecurityPin}
                                                    hasError={errors.SecurityPin && touched.SecurityPin}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.SecurityPin}
                                                    autoFocus={true}
                                                    id="SecurityPin"
                                                    name="SecurityPin"
                                                    placeholder="Security Pin"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            {/* <Link to='/bank-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                            <button
                                                className="btn btn-primary me-1"
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                            >
                                                {/* {params?.id ? "Update" : "Add"} */}
                                                Password Reset
                                            </button>
                                        </div>
                                    </form>
                                );
                            }}
                        </Formik>

                    </div>
                </div>
            </div>
        </>
    )
}
export default PasswordReset