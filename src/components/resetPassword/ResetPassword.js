import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../assets/images/logo/login.jpg"
import logoin from "../../assets/images/logo/merchant.paypanda.in-1697112771.png"
import { resetPassword } from "../../api/login/Login";
import CustomPassInputField from "../../common/CustomPassInputField";

function ResetPassword() {
    const token = window.localStorage.getItem("otpToken")
    console.log(token);
    const [initialValues, setInitialValues] = useState({
        user_id: token,
        password: "",
        repassword: '',

    });
    const params = useParams();
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(false)


    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.password) {
            errors.password = "New Password is required";
        }
        if (!values.repassword) {
            errors.repassword = "Confirm Password  is required";
        }

        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message ? message : "Reset Password Successfully!"}`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            const res = await resetPassword(values);
            console.log(res.error);
            if (res.error === false) {
                toastSuccessMessage();
                setTimeout(() => {
                    navigate('/loginPage')
                }, [4000])
            }
            if(res.error === true) {
                // setErrorMessage(true)
                toastSuccessMessage(res.message);
                setTimeout(() => {
                    navigate('/forgot-password')
                }, [4000])
            }
            if (res.message === "jwt must be provided") {
                toastSuccessMessage(res.message);
                setTimeout(() => {
                    navigate('/forgot-password')
                }, [4000])
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="authincation h-100 h-100-2">
            <div className="container-fluid">
                <div className="row h-100">
                    <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
                        <div className="login-form">
                            <div className="text-center">
                                <h3 className="title">Reset Password</h3>
                                <p>Reset your account password to start using PayPanda</p>
                            </div>
                            <div className='d-flex justify-content-around'>
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
                                                        <CustomPassInputField
                                                            type="password"
                                                            value={values.password}
                                                            hasError={errors.password && touched.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.password}
                                                            autoFocus={true}
                                                            id="password"
                                                            name="password"
                                                            placeholder="Enter New Password"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            value={values.repassword}
                                                            hasError={errors.repassword && touched.repassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.repassword}
                                                            autoFocus={true}
                                                            id="repassword"
                                                            name="repassword"
                                                            placeholder="Confirm Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/forgot-password' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        save
                                                    </button>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="pages-left h-100">
                            <div className="login-content">
                                <a href="#">
                                    <img src={logoin} className="mb-3 logo-dark" alt="logo" />
                                </a>
                                <p>
                                    PayPanda uses line charts to visualize customer-related
                                    metrics and trends over time.
                                </p>
                            </div>
                            <div className="login-media text-center">
                                <img src={logo} alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className='text-center' />
        </div>
    )
}

export default ResetPassword
