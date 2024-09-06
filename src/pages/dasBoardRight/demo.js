
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import TabSignUp from "../tabSinUp/TabSignUp";
import { CountryList, emailSinup, emailSinupOtp, isEmailExits, isEmailExits2, isVerifiedMobileOtp, registerUser, userType, resendOtpslogin } from "../../../../api/login/Login";
import { getUserDetails } from "../../../../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { MdVerified } from "react-icons/md";
import { onboardingRequest } from "../../../../api/login/Login";
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from "axios";
import { baseUrl } from "../../../../baseUrl";
import { toastErrorMessage,toastSuccessMessage } from "../../../compeleteRegister/ToastShare";
import NewTabSignUp from "../tabSinUp/NewTabSignUp";
function SignUpMerchantForm({ initalValue, handleChange, mobileGenerateOtpMobile, userIDD, mobileVeridedInput, getOtp, mobileOtp, emailVeridedInput, emailgetOtp, nextForm, emailOtp, submitOtpEmail, formResiter, setEmailVeridedInput, setMobileOtp, setMobileVerified, handleCountryCode, countryCode, setEmailOtp, setFormResiter, loader1, showMobileOtp, handleClose2, mobileExit, setMobileExit,veriFiedIconMobile,setVeriFiedIconMobile

 }) {
    // console.log(countryCode);
    // console.log(initalValue.mobileNo.length);

    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const timerRef = useRef(null);



    const [emailExit, setemailExit] = useState('')

    

    const [veriFiedIconEmail, setVeriFiedIconEmail] = useState(false)
    const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);

    const handleClose3 = () => setShowEmailOtp(false);
    const handleShow3 = () => setShowEmailOtp(true);



    const [isChecked, setIsChecked] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setIsChecked(false)
        setShow(false);
        // setMobileVerified(true)
        // setMobileOtp(false)
        // setFormResiter(false)
       
        window.location.reload()

    }
    const handleShow = () => {
        setShow(true);
    }

    const [emailUser, setEmailUser] = useState()
    const [loader2, setloader2] = useState(false)
    const [loader3, setloader3] = useState(false)
    const [loader4, setloader4] = useState(false)
    const [loader5, setloader5] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [country, setCountry] = useState(null)
    // console.log(country);

    const [userId, setUserId] = useState()
    // console.log(userId);
    const [mobileId, setMobile] = useState()
    // console.log(mobileId);


    const [errorValue, setErrorValue] = useState({})


    const [count, setCount] = useState(0)
    const [stateList, setStateList] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [isTimerEnded, setIsTimerEnded] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180);
    const [resendLoading, setResendLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message2, setMessage2] = useState('');
    const [error2, setError2] = useState('');
    const [otpMessage, setOtpMessage] = useState('');
    const [otpError, setOtpError] = useState('');
    const [selectedUserType, setSelectedUserType] = useState("Super Distributor");

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    const [stateOptions, setStateOptions] = useState([]);
    const length = 6;
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const [otp1, setOtp1] = useState(new Array(length).fill(''));
    const inputs = useRef([]);
    const inputs1 = useRef([]);
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);


    // console.log(initalValue.mobileNo.slice(3, 13));
// const user_id=data?.[0]?._id :''

const user_idcus = data?.[0]?._id || '65f3fb87a6a2a92f979b47eb';
    const [resiter, setResister] = useState({
        // email: '',
        mobile: mobileId,
        user_type_id: user_idcus,
        
        name: '',
        password: '',
        refer_id: ''
    })
    console.log("register",resiter);




    const validation = (values) => {
        const error = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!isNameValid(values.name)) {
            error.name = "Name is Required!"
        }

        // if (!values.email) {
        //     error.email = "Email is required";
        // } else if (!regexEmail.test(values.email)) {
        //     error.email = "Invalid Email";
        // }
        if (!values.password) {
            error.password = "Password is Required!"

        }
        if (!values.refer_id) {
            error.refer_id = "Refer Id Required!"

        }
        if (!selectedState) {
            error.state = "State is Required!";
        }
        return error

    }



    // console.log(otp);

    let str = ''
    for (let index = 0; index < otp.length; index++) {
        const element = otp[index];
        str = str + element
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            getOtp();
        }
    };
    const handleKeyPress2 = (event) => {
        if (event.key === 'Enter') {
            SubmitEmail();
        }
    };
    console.log(str);



    const otpChandleChange = (index, value) => {
        const newOtp = [...otp];
        if (value.length == 2) {
            return
        }
        newOtp[index] = value;
        setOtp(newOtp);


        if (value && inputs.current[index + 1]) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {

        if (e.key === 'Backspace' && !otp[index] && inputs.current[index - 1]) {
            inputs.current[index - 1].focus();
        }
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter' && otp.every(value => value.length === 1)) {
            submitOtp();
        }
    };

    // const otpChandleChange = (e) => {
    //     const clone = { ...otp }
    //     const vlaue = e.target.value
    //     const name = e.target.name
    //     clone[name] = vlaue
    //     setOtp(clone)
    // }

    const handleResiter = (e) => {
        const clone = { ...resiter }
        let value = e.target.value
        const name = e.target.name
    
        if (name === 'name') {
            // Only allow letters and spaces for the name field
            value = value.replace(/[^a-zA-Z\s]/g, '')
        }
    
        clone[name] = value
        setResister(clone)
    
    }

    const handleResiter2 = (e) => {
        const clone = { ...resiter, user_type_id: e }
        const selectedUser = data.find(item => item._id === e);
        if (selectedUser) {
          setSelectedUserType(selectedUser.user_type);
        }

    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };

    const toastSuccessMessage1 = (message) => {
        toast.error(`${message}`, {
            position: "top-center",
        });
    };

    const userTypeget = async () => {
        try {
            const res = await userType()
            setData(res?.data)
        } catch (error) {
        }
    }

    // useEffect(() => {
    //     let timer;
    //     if (showMobileOtp || showEmailOtp) {
    //       timer = setInterval(() => {
    //         setTimeLeft((prevTime) => {
    //           if (prevTime <= 1) {
    //             clearInterval(timer);
    //             setIsTimerEnded(true);
    //             return 0;
    //           }
    //           return prevTime - 1;
    //         });
    //       }, 1000);
    //     }
    //     return () => clearInterval(timer);
    //   }, [showMobileOtp, showEmailOtp]);

    const resetOtpState = () => {
        setTimeLeft(180);
        setIsTimerEnded(false);
        setOtpMessage('');
        setOtpError('');
        setOtp(new Array(length).fill(''));
        setOtp1(new Array(length).fill(''));
    };

    const tabChange = (i, id) => {
        setUserId(id)
        const clone = { ...resiter, user_type_id: id }
        // console.log(clone);
        setResister(clone)
        setCount(i)
        const selectedUser = data.find(item => item._id === id);
        if (selectedUser) {
          setSelectedUserType(selectedUser.user_type);
        }
      };
    // useEffect(() => {
    //     setUserId(data?.[0]?._id)
    // }, [data])


    // const getOtp = () => {
    //     mobileGenerateOtpMobile()
    //     setMobileVerified(false)
    //     setMobileOtp(true)
    // }
    const handlemobileotpclose = () => {
        handleClose2()

        setTimeLeft(180);
        setIsTimerEnded(false);
        setMessage2('');
        setError2('');
        setOtp(new Array(length).fill(''));

    }
    const submitOtp = async () => {
        // debugger
        setloader2(true)
        try {
            const res = await isVerifiedMobileOtp({ otp: str, user_id: userIDD })
            // console.log(res?.data?.data.user);
            setMobile(res?.data?.data?.user);
            if (res?.data?.statusCode == '200') {
                getUserDetails(res?.data?.user)
                toastSuccessMessage(res.data.data.message)
                // debugger
                setTimeout(() => {

                    setEmailVeridedInput(true)
                    setMobileOtp(false)
                    setMobileVerified(false)
                }, 2000)
                handlemobileotpclose()
                setVeriFiedIconMobile(true)
                setMobileExit('')
            }
            setloader2(false)

            if (res?.data?.error == true) {
                toastSuccessMessage1(res?.data?.message)
            }
            // console.log(res);
        } catch (error) {
            setloader2(false)
        }
    }

    const handleSubmit = async (event) => {
        setloader5(true)
        const cloen = { ...resiter, mobile: mobileId, email: emailUser, state: selectedState }
        console.log("cloen", cloen)

        event.preventDefault()
        setErrorValue(validation(cloen))

        try {
            const res = await registerUser(cloen)
            if (res?.statusCode == '200') {

                toastSuccessMessage("User created Successfully")
               
                setTimeout(() => {
                    navigate('/login-area')
                }, 2000)
            }
            if (res?.statusCode == 402) {
                toastSuccessMessage1(res?.message)
                
            }
            setloader5(false)
        } catch (error) {
            setloader5(true)
            // console.log(error);
            // toastSuccessMessage(res?.data?.message)
        }

    }

    const [emailInitial, setEmailInitial] = useState({
        deviceId: '',
        emailId: ''
    })

    // const handleEmail = (e) => {
    //     const cloneEmail = { ...emailInitial }
    //     const value = e.target.value
    //     const name = e.target.name
    //     cloneEmail[name] = value
    //     setEmailInitial(cloneEmail)

    //     if (value.trim() === '') {
    //         setemailExit('')
    //         setVeriFiedIconEmail(false)
    //         setErrorMessageEmail('') // Clear the error message when input is empty
    //     } else {
    //         // Clear the "Valid email field is required" message when user starts typing
    //         setErrorMessageEmail('')
    //     }

    //     // You might want to add basic email validation here
    //     // and only call isEmailExitt if the email looks valid
    //     if (isValidEmail(value)) {
    //         isEmailExitt(value)
    //     }
    // }

const handleEmail = (e) => {
    const value = e.target.value
    const name = e.target.name
    
    // Update emailInitial state
    const cloneEmail = { ...emailInitial }
    cloneEmail[name] = value
    setEmailInitial(cloneEmail)

    // Update emailUser state
    setEmailUser(value)

    if (value.trim() === '') {
        setemailExit('')
        setVeriFiedIconEmail(false)
        setErrorMessageEmail('') // Clear the error message when input is empty
    } else {
        // Clear the "Valid email field is required" message when user starts typing
        setErrorMessageEmail('')
    }

    // You might want to add basic email validation here
    // and only call isEmailExitt if the email looks valid
    if (isValidEmail(value)) {
        isEmailExitt(value)
    }
}



    // Helper function to validate email format
    const isValidEmail = (email) => {
        // More comprehensive email validation regex
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(email);
    }

    const [debouncedValue, setDebouncedValue] = useState(emailInitial.emailId);









    const [errorMessageEmail, setErrorMessageEmail] = useState()



    const isEmailExitt = async (value) => {
        try {
            const res = await isEmailExits2(value)
            if (res?.data?.isExist == true) {
                // alert('Email Does Not Exit')
                setemailExit('Email ID Already Exists')

            } if (res?.data?.isExist == false) {
                setemailExit('');
                ;
                SubmitEmail()

            }
        } catch (error) {

        }
    }
    const isNameValid = (name) => {
        return name.trim().length > 0;
    }



    const SubmitEmail = async () => {
        setloader3(true)
        try {
            const res = await emailSinup(emailInitial)

            if (res?.data?.error == false) {
                // handleShow3()
                window.localStorage.setItem('emailToken', res?.data?.data.user)
                // toastSuccessMessage(res?.data?.message)  \\ code hide to hide emilotp open and success message
                setEmailVeridedInput(false)
                setEmailOtp(true)
            }

            if (res?.data?.error == true) {
                setErrorMessageEmail(res?.data?.message)
            }
            setloader3(false)
        } catch (error) {
            setloader3(false)
        }
    }


    const length1 = 6

    // console.log(otp);

    let str1 = ''
    for (let index = 0; index < otp1.length; index++) {
        const element = otp1[index];
        str1 = str1 + element
    }

    console.log(str1);


    const otpChandleChange1 = (index, value) => {
        const newOtp = [...otp1];
        if (value.length == 2) {
            return
        }
        newOtp[index] = value;
        setOtp1(newOtp);


        if (value && inputs1.current[index + 1]) {
            inputs1.current[index + 1].focus();
        }
    };

    const handleKeyDown1 = (index, e) => {

        if (e.key === 'Backspace' && !otp1[index] && inputs1.current[index - 1]) {
            inputs1.current[index - 1].focus();
        }
    };

    const handleEnterPressEmail = (e) => {
        if (e.key === 'Enter' && otp1.every(value => value.length === 1)) {
            submitEmailOtp();
        }
    };


    const submitEmailOtp = async () => {
        setloader4(true)
        const otpEmailData = { otp: str1, user_id: window.localStorage.getItem('emailToken') }
        try {
            const res = await emailSinupOtp(otpEmailData)
            setEmailUser(res?.data?.data.user)
            // console.log(res?.data?.data.user);
            if (res.data.error == false) {
                toastSuccessMessage(res?.data?.message)
                setVeriFiedIconEmail(true)
                setemailExit('')
                setFormResiter(true)
                setShowEmailOtp(false)
                setEmailVeridedInput(false)
                setEmailOtp(false)
            }
            if (res.data.error == true) {
                toastSuccessMessage1(res?.data?.message)
            }
            setloader4(false)
        } catch (error) {
            setloader4(false)
        }

    }

    // const emailgetOtp = () => {
    //     // setEmailVeridedInput(false)
    //     setEmailOtp(true)
    //     setEmailVeridedInput(false)
    // }

    // const submitOtpEmail = () => {
    //     setFormResiter(true)
    //     setEmailVeridedInput(false)
    //     setEmailOtp(false)
    // }

    // const nextForm = () => {
    //     setFormResiter(true)
    //     setEmailVeridedInput(false)
    // }
    const inputRef = useRef(null);

    const handlePaste = (event) => {
        event.preventDefault();
    };

    const handleMouseDown = (event) => {
        if (document.activeElement === inputRef.current) {
            event.preventDefault();
        }
    };

    const handleSelect = (event) => {
        const input = inputRef.current;
        if (input) {
            const start = input.selectionStart;
            const end = input.selectionEnd;

            if (start < 3) {
                event.preventDefault();
                if (end > 3) {
                    input.setSelectionRange(3, end);
                } else {
                    input.setSelectionRange(3, 3);
                }
            }
        }
    };

    const handleFocus = (event) => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(3, inputRef.current.value.length);
        }
    };
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        handleShow();
    };





    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };



    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);



    const sendOnboardingRequest = async () => {
        let currentLocation = { ...location };
    
        // If location is not set, try to get it one more time
        if (!currentLocation.latitude || !currentLocation.longitude) {
            await new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        currentLocation = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        };
                        setLocation(currentLocation);
                        resolve();
                    },
                    () => {
                        console.warn("Unable to get location.");
                        resolve();
                    },
                    { timeout: 5000, maximumAge: 0 }
                );
            });
        }
    
        const onboardingData = {
            name: resiter.name,
            email: emailInitial.emailId,
            mobileNo: initalValue.mobileNo,
            state: selectedState
        };
    
        
        if (currentLocation.latitude && currentLocation.longitude) {
            onboardingData.latitude = currentLocation.latitude;
            onboardingData.longitude = currentLocation.longitude;
        }
    
        try {
            const response = await onboardingRequest(onboardingData);
            console.log('Onboarding request sent:', response);
            
        } catch (error) {
            console.error('Error sending onboarding request:', error);
           
        }
    };

    const disabledButtonStyle = {
        cursor: "none",
        backgroundColor: "#d3d3d3",
    };

    const handleResendOTP = async (type) => {
        setResendLoading(true);
        setOtpError('');
        setOtpMessage('');

        try {
            let response;
            // if (type === 'mobile') {
            response = await resendOtpslogin({ user_id: userIDD });
            // } else {
            //     // Assuming you have a similar function for email OTP resend
            //     response = await resendEmailOtp({user_id: window.localStorage.getItem('emailToken')});
            // }

            if (response.status === 200) {
                setOtpMessage('OTP has been resent successfully.');
                resetOtpState();
            } else {
                setOtpError('Failed to resend OTP.');
            }
        } catch (error) {
            setOtpError('Failed to resend OTP.');
        } finally {
            setResendLoading(false);
        }
    };
    const otpHandleChange = (index, value, setOtpFunction, inputsRef) => {
        if (value.length > 1) return;
        const newOtp = [...(setOtpFunction === setOtp ? otp : otp1)];
        newOtp[index] = value;
        setOtpFunction(newOtp);

        if (value && inputsRef.current[index + 1]) {
            inputsRef.current[index + 1].focus();
        }
    };
    const handleOtpSubmit = async (type) => {
        setResendLoading(true);
        setOtpError('');
        setOtpMessage('');

        try {
            let response;
            if (type === 'mobile') {
                response = await isVerifiedMobileOtp({ otp: otp.join(''), user_id: userIDD });
            } else {
                response = await emailSinupOtp({ otp: otp1.join(''), user_id: window.localStorage.getItem('emailToken') });
            }

            if (response.data.error === false) {
                setOtpMessage(response.data.message);
                if (type === 'mobile') {
                    setMobile(response.data.data.user);
                    setEmailVeridedInput(true);
                    setMobileOtp(false);
                    setMobileVerified(false);
                    setVeriFiedIconMobile(true);
                    setMobileExit('');
                } else {
                    setEmailUser(response.data.data.user);
                    setVeriFiedIconEmail(true);
                    setemailExit('');
                    setFormResiter(true);
                    setShowEmailOtp(false);
                    setEmailVeridedInput(false);
                    setEmailOtp(false);
                }
                handleCloseOtpModal(type);
            } else {
                setOtpError(response.data.message);
            }
        } catch (error) {
            setOtpError('Failed to verify OTP.');
        } finally {
            setResendLoading(false);
        }
    };

    const handleCloseOtpModal = (type) => {
        if (type === 'mobile') {
            handleClose2();
        } else {
            setShowEmailOtp(false);
        }
        resetOtpState();
    };
    useEffect(() => {
        // Fetch initial data
        const fetchInitialData = async () => {
            try {
                const [countryRes, userTypeRes] = await Promise.all([
                    CountryList(),
                    userType()
                ]);
                setCountry(countryRes?.data);
                setData(userTypeRes?.data);
                setUserId(userTypeRes?.data?.[0]?._id);
            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        };

        // Fetch states
        const fetchStates = async () => {
            try {
                // https://api.paypandabnk.com/api/state/country/101
                const response = await axios.get(`${baseUrl}state/country/101`);
                if (response.data.error === false) {
                    const states = response.data.data.map(state => ({
                        value: state._id,
                        name: state.name
                    }));
                    setStateOptions(states);
                } else {
                    console.error('Error fetching states:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        const getGeolocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                        console.log("location", location);
                    },
                    (error) => {
                        setError(error.message);
                        console.error("Geolocation error:", error.message);
                    }
                );
            } else {
                toastErrorMessage('Geolocation is not supported by this browser.');
                console.error('Geolocation is not supported by this browser.');
            }
        };
    
        fetchInitialData();
        fetchStates();
        getGeolocation();
    }, []);




    useEffect(() => {
        setResister(prev => ({ ...prev, password: initalValue.mobileNo.slice(3, 13) }));
    }, [initalValue.mobileNo]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(emailInitial.emailId);
        }, 2000);

        return () => clearTimeout(handler);
    }, [emailInitial.emailId]);

    useEffect(() => {
        if (debouncedValue) {
            isEmailExitt(debouncedValue);
        }
    }, [debouncedValue]);

    useEffect(() => {
        if (isChecked) {
            sendOnboardingRequest();
        }
    }, [isChecked]);

    useEffect(() => {
        const areFieldsFilled = resiter.name && selectedState && initalValue.mobileNo.length === 13 && emailInitial.emailId;
        setIsCheckboxDisabled(!areFieldsFilled);
    }, [resiter.name, selectedState, initalValue.mobileNo, emailInitial.emailId]);

    useEffect(() => {
        setOtp(new Array(length).fill(''));
    }, [showMobileOtp]);

    useEffect(() => {
        setOtp1(new Array(length).fill(''));
    }, [showEmailOtp]);
 console.log("selectedUserType",selectedUserType)

    return (
        <>

            <div className="mt-3">
                {/* {mobileVeridedInput && } */}
                {/* <>
                    {mobileVeridedInput ? <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                                <span className="input-group-text input-group-text-2" id="basic-addon1" >
                                    <select class="form-select" aria-label="Default select example" value={countryCode} onChange={handleCountryCode}>
                                        <option selected disabled>Select Country</option>
                                        {country && country?.map((item) => {
                                            return <option value={'+' + item?.phone_code}>{item?.name}</option>
                                        })}
                                    </select>
                                </span>
                                <input type="text" className="form-control" placeholder="Enter Mobile Number" ref={inputRef}
                                    onMouseDown={handleMouseDown}
                                    onSelect={handleSelect} onPaste={handlePaste} name="mobileNo" onKeyDown={handleKeyPress} value={initalValue.mobileNo} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                
                                <button type="button" disabled={initalValue.mobileNo.length == 13 ? false : true} className="form-control btn btn-login" onClick={getOtp}>
                                    Get OTP
                                    {loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    }
                                </button>
                            </div>
                        </div>
                    </div> : <></>
                    }
                </> */}

                <Modal show={showMobileOtp} onHide={() => handleCloseOtpModal('mobile')} centered className="email-optp-modle" style={{
            zIndex: 1050,
           
          }} >
                    <Modal.Body style={{
    backgroundColor: '#ffffff',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  }}>
                        <div className="set-head">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="headinf-otp">
                                        <h2>Mobile OTP Verification</h2>
                                        <p className="set-lage">Enter 6 Digit Number Verification Code On Your Mobile Number!</p>
                                    </div>
                                    {isTimerEnded ? (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button type="button" className="btn btn-resend-otp" onClick={() => handleResendOTP('mobile')} disabled={resendLoading}>
                                                {resendLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Resend OTP'}
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="verification-timer">Verification Code {formatTime(timeLeft)} <span className="resend-otp" onClick={() => handleResendOTP('mobile')}>Resend OTP</span></div>
                                            <div className="otp-inputs">
                                                {otp.map((value, index) => (
                                                    <input
                                                        key={index}
                                                        type="number"
                                                        maxLength="1"
                                                        value={value}
                                                        onChange={(e) => otpHandleChange(index, e.target.value, setOtp, inputs)}
                                                        onKeyDown={(e) => handleKeyDown(index, e, inputs)}
                                                        ref={(input) => (inputs.current[index] = input)}
                                                        className="otp-input"
                                                    />
                                                ))}
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-submit-otp"
                                                    onClick={() => handleOtpSubmit('mobile')}
                                                    disabled={resendLoading || otp.some(digit => digit === '')}
                                                >
                                                    {resendLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Submit OTP'}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                    {otpMessage && <div className="alert alert-success mt-3">{otpMessage}</div>}
                                    {otpError && <div className="alert alert-danger mt-3">{otpError}</div>}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={showEmailOtp}
                    onHide={() => handleCloseOtpModal('email')} centered className="email-optp-modle" style={{
                        zIndex: 1050,
                       
                      }} >
                    <Modal.Body style={{
    backgroundColor: '#ffffff',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  }}>
                        <div className="set-head">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="headinf-otp">
                                        <h2>Email OTP Verification</h2>
                                        <p className="set-lage">Enter 6 Digit Number Verification Code On Your Email ID!</p>
                                    </div>
                                    {isTimerEnded ? (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button type="button" className="btn btn-resend-otp" onClick={() => handleResendOTP('email')} disabled={resendLoading}>
                                                {resendLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Resend OTP'}
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="verification-timer">Verification Code {formatTime(timeLeft)} <span className="resend-otp" onClick={() => handleResendOTP('email')}>Resend OTP</span></div>
                                            <div className="otp-inputs">
                                                {otp1.map((value, index) => (
                                                    <input
                                                        key={index}
                                                        type="number"
                                                        maxLength="1"
                                                        value={value}
                                                        onChange={(e) => otpHandleChange(index, e.target.value, setOtp1, inputs1)}
                                                        onKeyDown={(e) => handleKeyDown(index, e, inputs1)}
                                                        ref={(input) => (inputs1.current[index] = input)}
                                                        className="otp-input"
                                                    />
                                                ))}
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-submit-otp"
                                                    onClick={() => handleOtpSubmit('email')}
                                                    disabled={resendLoading || otp1.some(digit => digit === '')}
                                                >
                                                    {resendLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Submit OTP'}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                    {otpMessage && <div className="alert alert-success mt-3">{otpMessage}</div>}
                                    {otpError && <div className="alert alert-danger mt-3">{otpError}</div>}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>


                {/* <>

                    {mobileOtp ? <> <div className="col-lg-12">
                        <div className="input-group input-group-2 mb-3">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="number"
                                    maxLength="1"
                                    value={value}
                                    onChange={(e) => otpChandleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(input) => (inputs.current[index] = input)}
                                    style={{ width: '14%' }}
                                />
                            ))}
                        
                        </div>
                    </div>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                               
                                <button type="button" className="form-control btn btn-login" disabled={str.length !== 6} onClick={submitOtp}>
                                    Submit OTP
                                    {loader2 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    }
                                </button>
                            </div>
                        </div> </> : <></>}
                </> */}



                {/* {emailVeridedInput ? <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><MdEmail /></span>
                            <input type="email" className="form-control" placeholder="Enter Email" name="emailId" onKeyDown={handleKeyPress2} value={emailInitial.emailId} onChange={handleEmail} />
                        </div>
                        <p style={{ color: 'red' }}>{errorMessageEmail}</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            
                            <button type="button" className="form-control btn btn-login me-1" onClick={SubmitEmail}>
                                {loader3 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                                Get OTP
                            </button>

                        </div>
                    </div>
                </div> : <>
                </>} */}



                {/* {emailOtp ? <> <div className="col-lg-12">
                    <div className="input-group input-group-2 mb-3">
                        {otp1.map((value, index) => (
                            <input
                                key={index}
                                type="number"
                                maxLength="1"
                                value={value}
                                onChange={(e) => otpChandleChange1(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown1(index, e)}
                                ref={(input) => (inputs1.current[index] = input)}
                                style={{ width: '14%' }}
                            />
                        ))}
                        
                    </div>
                </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            
                            <button type="button" className="form-control btn btn-login" onClick={submitEmailOtp}>
                                {loader4 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                                Submit OTP
                            </button>
                        </div>
                    </div> </> : <></>} */}




                {/* {formResiter ? <NewTabSignUp data={data} count={count} tabChange={tabChange} resiter={resiter} handleResiter2={handleResiter2} />
                 : <></>} */}
                {formResiter ? <form >
                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="">Name <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><FaRegUser /></span>
                                <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={resiter.name} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.name}
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 form-group uk-scrollspy-inview uk-animation-slide-bottom">
                            <label htmlFor="state">State <span style={{ color: 'red' }}>*</span></label>

                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><FaMapMarkerAlt /></span>

                                <input type="hidden" name="state" id="basic-addon1" />

                                <select
                                    id="myState"
                                    name="state_id"
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    className="form-select form-control"
                                >
                                    <option value="" disabled>Select State </option>

                                    {stateOptions
                                        .filter(state => state.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                        .map(state => (
                                            <option key={state.value} value={state.value}>{state.name}</option>
                                        ))}
                                </select>
                            </div>
                            <span className="text-danger">{errorValue.state}</span>
                        </div>



                        <div className="col-12">
                        {/* <label htmlFor="">Mobile <span style={{ color: 'red' }}>*</span></label> */}
                            <div className="input-group mb-3 input-group-set-mob">
                                <span className="input-group-text" id="basic-addon1"><FaMobileScreenButton /></span>
                                <div className="input-group-text p-0 country-select-wrapper">
                                    <select className="form-select form-select-sm border-0 country-select" aria-label="Country select" value={countryCode} onChange={handleCountryCode}>
                                        <option selected disabled>Country</option>
                                        {country && country?.map((item, i) => (
                                            <option key={item.id} value={'+' + item?.phone_code} selected={item?.name === 'India'}>
                                                {item?.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                    ref={inputRef}
                                    onMouseDown={handleMouseDown}
                                    onSelect={handleSelect}
                                    onPaste={handlePaste}
                                    name="mobileNo"
                                    onKeyDown={handleKeyPress}
                                    value={initalValue.mobileNo}
                                    onChange={handleChange}



                                />
                                {veriFiedIconMobile && (
                                    <div className="setVerufied">
                                        <MdVerified />
                                    </div>
                                )}
                            </div>
                            {mobileExit && <p className="text-danger">{mobileExit}</p>}
                        </div>


                        <div className="col-lg-12">
                        {/* <label htmlFor="">Email <span style={{ color: 'red' }}>*</span></label> */}
                            <div className="input-group mb-3 input-group-set-mob">
                                <span className="input-group-text" id="basic-addon1"><MdEmail /></span>
                                <input type="email" className="form-control" placeholder="Enter Email" name="emailId" onKeyDown={handleKeyPress2} value={emailInitial.emailId} onChange={handleEmail} autocomplete="new-email"   />
                                {veriFiedIconEmail && <div className="setVerufied">
                                    <MdVerified />
                                </div>}
                            </div>
                            <p style={{ color: 'red' }}>{errorMessageEmail}</p>
                            {emailExit && <p style={{ color: 'red' }}>{emailExit}</p>}

                        </div>



                        <div className="col-lg-6   mb-3">
                            <label htmlFor="">Password <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>

                                <input type="text" className="form-control" placeholder="Enter Your Password" name="password" disabled value={resiter.password} onChange={handleResiter} />
                            </div>
                            <p style={{ color: "red", marginBottom: '2px' }}>
                                {errorValue.name}
                            </p>
                        </div>

                        <NewTabSignUp data={data} count={count} tabChange={tabChange} resiter={resiter} handleResiter2={handleResiter2} />
                        {selectedUserType !== "Super Distributor" && (
  <div className="col-lg-6 mb-3">
    <label htmlFor="refer_id">
      Refer ID <span style={{ color: 'red' }}>*</span>
    </label>
    <div className="input-group mb-1">
      <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Refer ID"
        name="refer_id"
        value={resiter.refer_id}
        onChange={handleResiter}
      />
    </div>
    <p style={{ color: "red", marginBottom: '2px' }}>{errorValue.refer_id}</p>
  </div>
)}



                        <div className="col-lg-6 mb-3">
                         <label htmlFor="refer_id">
      Without Refer ID 
    </label> 
                            <div className="form-check form-check-form" style={{ paddingLeft: '2rem' }}>
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={isChecked}
                                    onChange={handleCheckboxChange} disabled={isCheckboxDisabled} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Without Refer ID
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="button"
                                 disabled={
                                    !isNameValid(resiter.name) ||
                                    !resiter.name ||
                                    !resiter.password ||
                                    (!resiter.refer_id && selectedUserType !== "Super Distributor" && !isChecked) ||
                                    !isValidEmail(emailInitial.emailId) ||
                                    initalValue.mobileNo.length !== 13
                                  }
                                  className={`btn ${
                                    !isNameValid(resiter.name) ||
                                    !resiter.name ||
                                    !resiter.password ||
                                    (!resiter.refer_id && selectedUserType !== "Super Distributor" && !isChecked) ||
                                    !isValidEmail(emailInitial.emailId) ||
                                    initalValue.mobileNo.length !== 13
                                      ? 'disableebuttoncls'
                                      : 'btn-login'
                                  }`}
                                onClick={handleSubmit}  >
                                {loader5 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                }
                                REGISTER
                            </button>
                        </div>
                    </div>
                </form> : <></>}


                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered style={{
                        zIndex: 1050,
                       
                      }} >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'green' }}>Thank You !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{
    backgroundColor: '#ffffff',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  }} >
                        <div className="para-comor">

                            <p>Thank you for your interest in PayPanda payment solutions. Our enterprise team will contact you shortly.</p>
                            <p>If you have any further questions, feel free to contact us at <a href="mailto:support@paypanda.in" target="blank">support@paypanda.in</a> or call us toll-free at <a href="tel:+9118008890178" target="blank">18008890178</a> .</p>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                </Modal>


            </div>
        </>
    )
}
export default SignUpMerchantForm