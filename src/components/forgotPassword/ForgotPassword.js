import React, { useState, useEffect } from 'react';
import login from "../../assets/images/logo/merchant.paypanda-logo.png";
import loginimg from "../../assets/images/logo/login.jpg";
import CustomInputField from "../../common/CustomInputField";
import { sendOtpByEmail, sendOtpByPhone, sendVerifyEmailOtp, sendVerifyPhoneOtp } from '../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [isEmail, setIsEmail] = useState(true);
    const [isPhone, setIsPhone] = useState(false);
    const [isOtpUi, setIsOtpUi] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isToken, setIsToken] = useState("");
    const [initialValues, setInitialValues] = useState({ emailId: "" });
    const [initialPhone, setInitialPhone] = useState({ mobileNo: "" });
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(0);
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();
    window.localStorage.setItem("otpToken", isToken);

    const handleRadio = () => {
        setIsEmail(!isEmail);
        setIsPhone(!isPhone);
    };

    const toastErrorMessage = (message) => {
        toast.error(message);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'mobileNo') {
            // Ensure the value starts with "+" and contains only numbers after that
            if (!/^\+?\d*$/.test(value)) {
                return; // Do not update state if validation fails
            }
        }
        const newState = isEmail ? { ...initialValues, [name]: newValue } : { ...initialPhone, [name]: newValue };
        isEmail ? setInitialValues(newState) : setInitialPhone(newState);
    };

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = isEmail ? initialValues : initialPhone;
        if (!payload.emailId && !payload.mobileNo) {
            toastErrorMessage("Please fill out the required field.");
            return;
        }
        try {
            setIsLoading(true);
            const res = isEmail ? await sendOtpByEmail(payload) : await sendOtpByPhone(payload);
            setIsToken(res?.data?.data?.user);
            if (payload && res.data?.statusCode === 200) {
                setIsOtpUi(true);
                setIsLoading(false);
                setOtpSent(true);
                toastSuccessMessage("OTP Sent Successfully");

                // Start the 5-minute countdown
                setTimeLeft(0.5 * 60);
            } else if (res?.data?.error) {
                setIsLoading(false);
                toastErrorMessage(res?.data?.message);
            } else {
                setIsOtpUi(false);
            }

        } catch (error) {
            console.error(error);
        }
    };

    const handleOtpChange = (index, value, event) => {
        const newOtpDigits = [...otpDigits];
        if (value.length > 1) {
            value = value.slice(0, 1);
        }
        newOtpDigits[index] = value;
        setOtpDigits(newOtpDigits);

        if (value && index < 5) {
            document.getElementById(`otp${index + 1}`).focus();
        }

        if (!value && index > 0 && (event.key === 'Backspace' || event.key === 'Delete')) {
            document.getElementById(`otp${index - 1}`).focus();
        }
    };

    const handleOtpSubmit = async () => {
        const isAnyBlank = otpDigits.some(digit => digit === "");
        if (isAnyBlank) {
            toast.error("Please fill all OTP fields correctly.");
        } else {
            const otp = otpDigits.join("");
            const otpDatas = { otp, user_id: isToken };
            try {
                const res = isPhone ? await sendVerifyPhoneOtp(otpDatas) : await sendVerifyEmailOtp(otpDatas);
                if (!res.error) {
                    toastSuccessMessage(res.data.message);
                    setTimeout(() => {
                        navigate("/reset-password");
                    }, 500);
                } else {
                    toastSuccessMessage(res.message);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const isAllOtpFilled = otpDigits.every(digit => digit !== "");

    // Handle timer countdown
    useEffect(() => {
        let timerId;
        if (timeLeft > 0) {
            timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else {
            clearTimeout(timerId);
            setOtpSent(true); // Allow re-sending OTP after timer ends
        }
        return () => clearTimeout(timerId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
                                <div className="mb-4">
                                    <div className="form-check custom-checkbox mb-3">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="customradio1"
                                            name='forgotpassword'
                                            onChange={handleRadio}
                                            checked={isEmail}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customradio1"
                                        >
                                            Send Otp By Email
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="form-check custom-checkbox mb-3">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="customradio2"
                                            name='forgotpassword'
                                            onChange={handleRadio}
                                            checked={isPhone}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customradio2"
                                        >
                                            Send Otp By Phone No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {isEmail && (
                                <form onSubmit={handleSubmit}>
                                    <>
                                        <div className="mb-4">
                                            <CustomInputField
                                                type="email"
                                                placeholder="Enter Email"
                                                value={initialValues.emailId}
                                                name="emailId"
                                                onChange={handleInputChange}
                                                id="email"
                                            />
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="">
                                                <button className='btn btn-success text-white' type='button' onClick={() => navigate("/loginPage")}>
                                                    Back
                                                </button>
                                            </div>
                                            <div className="">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary text-white"
                                                    disabled={!initialValues.emailId || isLoading || (otpSent && timeLeft > 0)}
                                                >
                                                    {isLoading ? (
                                                        <small><Spinner animation="grow" size="sm" /> OTP SENDING...</small>
                                                    ) : (
                                                        otpSent ? (
                                                            timeLeft > 0 ? (
                                                                `Resend OTP (${formatTime(timeLeft)})`
                                                            ) : (
                                                                'Resend OTP'
                                                            )
                                                        ) : (
                                                            'Send OTP'
                                                        )
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                </form>
                            )}

                            {isPhone && (
                                <form onSubmit={handleSubmit}>
                                    <>
                                        <div className="mb-1">
                                            <CustomInputField
                                                type="text"
                                                placeholder="Enter Mobile No"
                                                value={initialPhone.mobileNo}
                                                name="mobileNo"
                                                onChange={handleInputChange}
                                                id="number"
                                            />
                                        </div>
                                        <div className='text-black text-center w-100'>Enter Your Mobile No With Country Code..! </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="">
                                                <button className='btn btn-success text-white' type='button' onClick={() => navigate("/loginPage")}>
                                                    Back
                                                </button>
                                            </div>
                                            <div className="">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary text-white"
                                                    disabled={!initialPhone.mobileNo || isLoading || (otpSent && timeLeft > 0)}
                                                >
                                                    {isLoading ? (
                                                        <small><Spinner animation="grow" size="sm" /> OTP SENDING...</small>
                                                    ) : (
                                                        otpSent && timeLeft > 0 ?
                                                            `Resend OTP (${formatTime(timeLeft)})` :
                                                            'Send OTP'
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                </form>
                            )}

                            {isOtpUi && (
                                <form onSubmit={handleOtpSubmit}>
                                    <div className="mb-4 d-flex justify-content-between">
                                        {otpDigits.map((digit, index) => (
                                            <div className="position-relative mx-2 otpInp" key={index}>
                                                <CustomInputField
                                                    id={`otp${index}`}
                                                    type="number"
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(index, e.target.value, e)}
                                                    maxLength={1}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center mb-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block"
                                            onClick={handleOtpSubmit}
                                            disabled={!isAllOtpFilled}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="pages-left h-100">
                            <div className="login-content">
                                <a href="#">
                                    <img src={login} className="mb-3 logo-dark" alt="logo" />
                                </a>
                                <p>
                                    PayPanda uses line charts to visualize customer-related
                                    metrics and trends over time.
                                </p>
                            </div>
                            <div className="login-media text-center">
                                <img src={loginimg} alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className={"text-center"} />
        </div>
    );
};

export default ForgotPassword;
