import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import { changePassword } from '../../api/login/Login';
import { Formik } from 'formik';
import Loadar from '../../common/loader/Loader';
import CustomPassInputField from '../../common/CustomPassInputField';
import Alert from '../../common/AlertMessages';
// import { Alert, Space } from 'antd';

function ChangePassword() {
    const [loading, setLoading] = useState(false);
    const token = window.localStorage.getItem("userToken");
    const [errrorMessage, setErrorMessage] = useState(false);
    const [initialValues, setInitialValues] = useState({
        user_id: token,
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const validate = (values) => {
        let errors = {};
        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (!values?.oldPassword) {
            errors.oldPassword = "Old Password is required";
        }

        if (!values?.newPassword) {
            errors.newPassword = "New Password  Is Required";
        } else if (!regexPassword.test(values?.newPassword)) {
            errors.newPassword = "Password must  8 digits and more than 8 digits  with one special character & Capital Letter & Small Letter.";
        }
        if (!values?.confirmPassword) {
            errors.confirmPassword = "Confirm Password  Is Required";
        } else if (!regexPassword.test(values?.confirmPassword)) {
            errors.confirmPassword = "confirm password is must match New Password";
        }

        return errors;
    };
    const toastSuccessMessage = () => {
        toast.success(`Password Changed Successfully.`, {
            position: "top-center",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(`Please Try Again ${message}`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {
        console.log(initialValues);
        try {
            setLoading(true);
            const res = await changePassword(values);
            setErrorMessage(res.message)
            if (res.data.mesage === "success") {
                toastSuccessMessage()
            }else{

                toastErrorMessage(res.message)
            }
            setLoading(false);
        } catch (error) {
            toastErrorMessage(error.message)
        }
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
                className="tbl-captionn"
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
                        <div className="row m-4">
                            {loading && <Loadar />}
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption ">
                                                <h4 className="heading mb-0">Change Password</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            placeholder="Enter Your Old Password "
                                                            value={values?.oldPassword}
                                                            hasError={errors.oldPassword && touched.oldPassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.oldPassword}
                                                            id="oldPassword"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            placeholder="Enter New Password "
                                                            value={values?.newPassword}
                                                            hasError={errors.newPassword && touched.newPassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.newPassword}
                                                            id="newPassword"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            placeholder="Enter Confirm Password"
                                                            value={values?.confirmPassword}
                                                            hasError={errors.confirmPassword && touched.confirmPassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.confirmPassword}
                                                            id="confirmPassword"
                                                        />
                                                    </div>
                                                    {/* {errrorMessage ? <div className="col-xl-6 mb-3">
                                                        <Alert variant="filled" severity="warning" closeBtn={setErrorMessage}>
                                                            {errrorMessage}
                                                        </Alert>
                                                       
                                                    </div> : ""} */}
                                                </div>

                                                <div>
                                                    {/* <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    <div className='d-flex justify-content-center'>
                                                        {/* <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                        <button className="btn btn-primary me-1" disabled={!isValid || !dirty}>
                                                            Change Password
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer className="text-center" />
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}

export default ChangePassword