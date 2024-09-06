import React from 'react'
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import { addVirtualWallets, usersList, virtualWallets, walletsReport } from "../../../api/login/Login";
import CustomTextArea from '../../../common/CustomTextArea';
import { Alert } from 'antd';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
function AddUpdateVirtualWall() {
    const token = window.localStorage.getItem('userToken')
    const [errMessage, setErrorMessage] = useState(false)
    const [getToken, setGetToken] = useState(false)
    const [inpFlg, setInpFlag] = useState(true)
    const [auth, setAuth] = useState(false)
    const [initialValues, setInitialValues] = useState(
        {
            token: "",
            otp: "",
            amount: null,
            orderId: "",
            message: "",
            operatorId: "",
        });
    // const params = useParams();
    const validate = (values) => {
        let errors = {};
        if (!values.amount) {
            errors.amount = "Amount is required";
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        if (!values.otp) {
            errors.otp = "Otp is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`Virtual Wallelt Success!`, {
            position: "top-center",
        });
    };
    const otpSuccessMessage = () => {
        toast.success(`OTP  Success!`, {
            position: "top-right",
        });
    };

    const userGetId = async () => {
        const res = await usersList()
        const findData = res.data.find((item) => {
            return (item._id);

        })
        const clone = { ...initialValues, user_id: findData?._id }
        setInitialValues(clone)
    }

    const sendOtp = async () => {
        try {
            const otpToken = await virtualWallets(token)
            setGetToken(otpToken?.data?.token)
            if (otpToken.error === false || otpToken.statusCode === 200) {
                otpSuccessMessage()
                setInpFlag(false)
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message)
        }

    }

    const submitForm = async (values) => {
        const cloneOtp = { ...values, token: getToken }
        try {
            const res = await addVirtualWallets(cloneOtp);
            setAuth(res?.data?.message)
            if (res?.statusCode == "200") {
                toastSuccessMessage();
            }
        } catch (error) {

        }


    };

    useEffect(() => {
        userGetId()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {/* {params?.id ? "UPDATE" : "ADD"} COUNTRY */}
                                        ADD  Virtual WALLET
                                    </h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
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
                                                            type="number"
                                                            value={values.amount}
                                                            hasError={
                                                                errors.amount && touched.amount
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.amount && errors.amount
                                                            }
                                                            autoFocus={true}
                                                            id="amount"
                                                            name="amount"
                                                            placeholder="Enter Amount *"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.orderId}
                                                            hasError={
                                                                errors.orderId && touched.orderId
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.orderId && errors.orderId
                                                            }
                                                            autoFocus={true}
                                                            id="orderId"
                                                            name="orderId"
                                                            placeholder="Enter Your Odered Id *"
                                                        />
                                                    </div>

                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.operatorId}
                                                            hasError={
                                                                errors.operatorId && touched.operatorId
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.operatorId && errors.operatorId
                                                            }
                                                            autoFocus={true}
                                                            id="operatorId"
                                                            name="operatorId"
                                                            placeholder="Enter Your Operator Id *"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            disable={inpFlg}
                                                            type="number"
                                                            value={values.otp}
                                                            hasError={
                                                                errors.otp && touched.otp
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.otp && errors.otp
                                                            }
                                                            autoFocus={true}
                                                            id="otp"
                                                            name="otp"
                                                            placeholder="Enter Your OTP"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            value={values.message}
                                                            hasError={
                                                                errors.message && touched.message
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.message && errors.message
                                                            }
                                                            autoFocus={true}
                                                            id="message"
                                                            name="message"
                                                            placeholder="Message"
                                                        />
                                                    </div>
                                                    <div className='col-xl-6 mb-3'>
                                                        <div className='d-flex justify-content-end'>
                                                            <button
                                                                className="btn btn-warning h-100 me-1"
                                                                type="button"
                                                                onClick={sendOtp}
                                                            >
                                                                Send OTP
                                                            </button>
                                                        </div>
                                                    </div>




                                                    <div className='col-xl-6 mb-3'>
                                                        <Link
                                                            to="/wallet/virtual-wallet"
                                                            className="btn btn-danger light ms-1"
                                                        >
                                                            Back
                                                        </Link>

                                                        <button
                                                            className="btn btn-primary me-1"
                                                            type="submit"
                                                            disabled={!isValid || !dirty}
                                                        >
                                                            {/* {params?.id ? "Update" : "Add"} */}
                                                            Add
                                                        </button>

                                                    </div>
                                                    {errMessage ? (<div className="col-xl-12 mb-3 bg-danger text-light">
                                                        <div className='card w-100'>{errMessage}</div>
                                                    </div>) : null}
                                                    {auth ? (<div className='col-xl-6 mb-3'><Alert style={{ backgroundColor: `${auth === "Success" ? "blue" : "red"}`, color: "white" }} message={auth === "Success" ? "Now You Are Authorised" : "You Are Unauthorised"} type="info" closable /></div>) : ""}

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

export default AddUpdateVirtualWall