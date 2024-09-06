import login from "../../assets/logo/logo.svg";
// import loginimg from "../../assets/images/logo/degree.png";
import loginimg from "../../assets/logo/flight-booking-software-fb.jpg";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { LoginSubmit, sendNotification } from "../../api/login/Login";
import CustomInputField from "../../common/CustomInputField";
import { SaveUserDeatilsLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../slice/auth";
import { Formik } from "formik";
import CustomPassInputField from "../../common/CustomPassInputField";
import { getToken } from "firebase/messaging";
import { messaging } from "../../firebase/fireBase";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const dispatch = useDispatch();

  const validate = (values) => {
    let errors = {};
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };


  const [tokenNoti, setokenNoti] = useState(null);
  const requestPermission = async () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })

  }

  useEffect(() => {
    requestPermission()
  }, []);



  const submitForm = async (values) => {
    setLoading(true);
    try {
      let result = await sendNotification({ type: 'Browser', token: tokenNoti });

    } catch (error) {

    }
    try {
      let result = await LoginSubmit(values);
      if (result.statusCode === "200") {
        setLoading(false);
        // console.log(result.data.token, "result.data.token");
        SaveUserDeatilsLocalStorage(result.data.token);
        dispatch(setIsLogin({ isLogin: !!result.data.token }));
        navigate("/admin");

      } else {
        // throw new Error(result.data.message);
        alert(result?.message)
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      // alert(error.message);
    }
  };
  return (
    <>
      <div className="authincation h-100 h-100-2">
        <div className="container-fluid">
          <div className="row h-100">

            <div className="col-xl-6 col-lg-6">
              <div className="pages-left h-100" style={{
                backgroundImage: `url(${loginimg})`,
                backgroundSize: 'contain',         
                backgroundPosition: 'center',    
              }}>

                <div className="login-content">
                  <a href="#">
                    <img src={login} className="mb-3 logo-dark" alt />
                  </a>
                  <p>
                    Do you have a dream destination in mind? Let's help you choose the best option!
                  </p>
                </div>
                <div className="login-media text-center rounded overflow-hidden">
                  {/* <img src={loginimg} alt="" /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Sign In</h3>
                  {/* <p>Sign in to your account to start using College Bazzar</p> */}
                  <p>Sign in to your account to start using Abaris CMS with CRM Software
                  </p>

                </div>
                <Formik
                  initialValues={formValues}
                  validate={validate}
                  onSubmit={submitForm}
                  enableReinitialize
                >
                  {(formik) => {
                    const {
                      values,
                      handleSubmit,
                      errors,
                      touched,
                      handleBlur,
                    } = formik;
                    return (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4 cusformsnew">
                          <CustomInputField
                            type="email"
                            placeholder="Enter Email "
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMsg={errors.email}
                            // autoFocus={true}
                            id="email"
                          // autocomplete="email"
                          />
                        </div>
                        <div className="mb-4 position-relative">
                          <CustomPassInputField
                            type="password"
                            placeholder="Enter Password "
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMsg={errors.password}
                            autoFocus={true}
                            id="password"
                          />
                        </div>
                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="mb-4">
                            <div className="form-check custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox1"
                                name="rememberMe"
                                checked={values.rememberMe}
                                onChange={handleCheckboxChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheckBox1"
                              >
                                Remember my preference
                              </label>
                            </div>
                          </div>
                          <div className="mb-4">
                            <Link
                              to="/forgot-password"
                              className="btn-link text-primary"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn btn-dark comm-bg w-100 "
                            disabled={!values.password || !values.email || loading}
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <span style={{ fontSize: "1rem" }}>Sign In</span>
                              &nbsp;
                              &nbsp;
                              {loading && <Spinner animation="border" style={{ height: "1rem", width: "1rem" }} />}
                            </div>
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
      </div>
    </>
  );
}
export default Login;
