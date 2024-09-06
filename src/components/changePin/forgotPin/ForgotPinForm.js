import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { sendForgotPinOtpVerify, sendVerifyEmailOtp, sendVerifyPhoneOtp } from '../../../api/login/Login';
import { useNavigate } from 'react-router-dom';
import CustomInputField from '../../../common/CustomInputField';

function ForgotPinModal(props) {
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const token = window.localStorage.getItem("userToken")
    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    const handleOtpChange = (index, value, event) => {
        const key = event.key
        const newOtpDigits = [...otpDigits];
        if (value.length > 1) {
            value = value.slice(0, 1);
        }
        newOtpDigits[index] = value;
        setOtpDigits(newOtpDigits);

        if (value && index < 5) {
            document.getElementById(`otp${index + 1}`).focus();
        }

        if (!value && index > 0 && (key === 'Backspace' || key === 'Delete')) {
            document.getElementById(`otp${index - 1}`).focus();
        }
    };

    const handleOtpSubmit = async (event) => {
        event.preventDefault();

        const isAnyBlank = otpDigits.some(digit => digit === "");
        if (isAnyBlank) {
            toast.error("Please fill all OTP fields correctly.");
        } else {
            const otp = otpDigits.join("");
            const otpDatas = { user_id: token, otp };
            try {
                const res = await sendForgotPinOtpVerify(otpDatas);
                toastSuccessMessage(res?.message);
                setTimeout(() => {
                    props.onHide(false);
                    setOtpDigits(["", "", "", "", "", ""]); // Reset the input fields to empty
                }, 500);
            } catch (error) {
                console.error(error);
            }
        }
    };


    const isAllOtpFilled = otpDigits.every(digit => digit !== "");

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modle-dilogee"
        >
            <form onSubmit={handleOtpSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                        <h4 className="text-center">FORGOT PIN</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-body">
                        <div className="row">
                            <div className="col-sm-12 mt-3">
                                <div className="form-group">
                                    <div className='d-flex justify-content-center'>
                                        <label htmlFor="name" className="mb-3">ENTER OTP</label>
                                    </div>
                                    <div className="d-flex justify-content-between">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="button" // Set type to "button" instead of "submit"
                        className="btn btn-primary"
                        onClick={handleOtpSubmit}
                        disabled={!isAllOtpFilled}
                    >
                        Send
                    </button>
                    {/* <Button variant='warning' onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default ForgotPinModal;
