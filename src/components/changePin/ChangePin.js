import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import Loadar from '../../common/loader/Loader';
import CustomPassInputField from '../../common/CustomPassInputField';
import { changePin, sendForgotPinOtp } from '../../api/login/Login';
import Alert from '../../common/AlertMessages';
import Button from 'react-bootstrap/Button';
import ForgotPinModal from './forgotPin/ForgotPinForm';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

function ChangePin() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const token = window.localStorage.getItem("userToken");
    const [modalShow, setModalShow] = useState(false);
    const [initialValues, setInitialValues] = useState({
        user_id: token,
        oldPin: '',
        newPin: '',
        confirmPin: ''
    });

    const validate = (values) => {
        let errors = {};
        const regexPassword = /^\d{4}$/;

        if (!values?.oldPin) {
            errors.oldPin = "Old PIN is required";
        }

        if (!values?.newPin) {
            errors.newPin = "New PIN is required";
        } else if (!regexPassword.test(values?.newPin)) {
            errors.newPin = "Enter a valid 4-digit PIN.";
        }

        if (!values?.confirmPin) {
            errors.confirmPin = "Confirm PIN is required";
        } else if (values?.newPin !== values?.confirmPin) {
            errors.confirmPin = "Confirm PIN must match New PIN";
        }

        return errors;
    };

    const toastSuccessMessage = (message) => {
        /*  toast.success(message === 'success' ? message : ` Try Again ${message}`, {
             position: "top-right",
         }); */
        toast.success("PIN CHANGE SUCCESSFUllY ", {
            position: "top-right",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        try {
            setLoading(true);
            const res = await changePin(values);
            setErrorMessage(res?.data.message);
            if (res.statusCode === "200") {
                toastSuccessMessage(res?.message);
                setInitialValues({
                    user_id: token,
                    oldPin: '',
                    newPin: '',
                    confirmPin: ''
                })
            } else if (res.statusCode === "403") {
                toastErrorMessage(res?.message);
            }
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    const handleForgotPin = async () => {
        setModalShow(true)
        try {
            const res = await sendForgotPinOtp(token);
            if (res.data.message === 'success') {
                toastSuccessMessage(res.message);
                setTimeout(() => {
                    setModalShow(true);
                }, 2000);
            }
        } catch (error) {
            setErrorMessage(error.message);
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
                                            <div className="tbl-caption">
                                                <h4 className="heading mb-0">Change PIN</h4>
                                                <div>
                                                    <Button className="py-0 px-2 bg-warning rounded-2 fs-6" role="button" aria-controls="offcanvasExample" onClick={handleForgotPin}>FORGOT PIN</Button>
                                                </div>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            placeholder="Enter Your Old PIN"
                                                            value={values.oldPin}
                                                            hasError={errors.oldPin && touched.oldPin}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.oldPin}
                                                            id="oldPin"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            placeholder="Enter New PIN"
                                                            value={values.newPin}
                                                            hasError={errors.newPin && touched.newPin}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.newPin}
                                                            id="newPin"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomPassInputField
                                                            type="password"
                                                            placeholder="Enter Confirm PIN"
                                                            value={values.confirmPin}
                                                            hasError={errors.confirmPin && touched.confirmPin}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.confirmPin}
                                                            id="confirmPin"
                                                        />
                                                    </div>
                                                    {/* {errorMessage && (
                                                        <div className="col-xl-6 mb-3">
                                                            <div style={{backgroundColor:"red" ,zIndex:"99"}}>

                                                            <Alert variant="filled"  severity="warning"  closeBtn={setErrorMessage}>
                                                                <div style={{backgroundColor:"red"}}>{errorMessage}</div>
                                                            </Alert>
                                                        </div>
                                                        </div>
                                                    )} */}
                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty}>
                                                        Change PIN
                                                    </button>
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
            <ForgotPinModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default ChangePin;
