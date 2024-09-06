import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";

function EmailSeting() {
  const navigate = useNavigate();

  const [emailEngine, setEmailEngine] = useState("sendEmail");
  const [initialValues, setInitialValues] = useState({
    api: "",
    id: "",
  });
  const params = useParams();

  const validate = (values) => {
    let errors = {};
    return errors;
  };

  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} New Api Successfully.`, {
      position: "top-center",
    });
  };

  const curencyidget = async () => {
    try {
      // const data = await getCountryAdd()
      // setCombo(data?.data)
    } catch (error) {
      alert(error.message);
    }
  };

  const submitForm = async (values) => {
    console.log(values);

    try {
      if (!params?.id) {
        try {
          /* const res = await ApiTransactionAdd(values);
             if (res?.statusCode == "200") {
             toastSuccessMessage();
             setTimeout(() => {
               navigate('/api-master')
             }, [4000])
           } */
        } catch (error) { }
      } else {
        try {
          // const res = await apiMasterUpdate(params.id, values);
          // if (res?.statusCode == "200") {
          //   toastSuccessMessage();
          // }
        } catch (error) { }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    curencyidget();
  }, []);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        if (params?.id) {
          // const response = await getapiMasterId(params.id);
          // const currencyData = response.data;
          // setInitialValues(currencyData);
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

  const handleEmailEngineChange = (event) => {
    setEmailEngine(event.target.value);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
        enableReinitialize
        className="tbl-captionn"
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
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                      <div className="tbl-caption tbl-caption-2">
                        <h4 className="heading mb-0">Email Settings</h4>
                      </div>
                      <form className="tbl-captionn" onSubmit={handleSubmit}>
                        <div className="row justify-content-center">
                          <div className="col-xl-8 mb-3 ">
                            <label className="m-2">
                              <b>Email Engine</b>
                            </label>
                            <div className="col-xl-8 my-2">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  handleEmailEngineChange(e);
                                  handleChange(e);
                                }}
                                value={emailEngine}
                                name="emailEngine"
                              >
                                <option value="sendEmail">Send Mail</option>
                                <option value="smtp">SMTP</option>
                              </select>
                            </div>

                            {emailEngine === "smtp" && (
                              <>
                                <div className="col-xl-8 mb-3">
                                  <CustomInputField
                                    type="text"
                                    value={values?.smtpUsername}
                                    hasError={errors.smtpUsername && touched.smtpUsername}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorMsg={errors.smtpUsername}
                                    id="smtpUsername"
                                    name="smtpUsername"
                                    placeholder="SMTP Username"
                                  />
                                </div>

                                <div className="col-xl-8 mb-3">
                                  <CustomInputField
                                    type="password"
                                    value={values?.smtpPassword}
                                    hasError={errors.smtpPassword && touched.smtpPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorMsg={errors.smtpPassword}
                                    id="smtpPassword"
                                    name="smtpPassword"
                                    placeholder="SMTP Password"
                                  />
                                </div>

                                <div className="col-xl-8 mb-3">
                                  <CustomInputField
                                    type="text"
                                    value={values?.smtpServer}
                                    hasError={errors.smtpServer && touched.smtpServer}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorMsg={errors.smtpServer}
                                    id="smtpServer"
                                    name="smtpServer"
                                    placeholder="SMTP Server"
                                  />
                                </div>

                                <div className="col-xl-8 mb-3">
                                  <CustomInputField
                                    type="text"
                                    value={values?.smtpPort}
                                    hasError={errors.smtpPort && touched.smtpPort}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorMsg={errors.smtpPort}
                                    id="smtpPort"
                                    name="smtpPort"
                                    placeholder="SMTP Port"
                                  />
                                </div>

                                <label className="m-2">
                                  <b>SMTP Security</b>
                                </label>
                                <div className="col-xl-8 my-2">
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={handleChange}
                                    value={values?.smtpSecurity}
                                    name="smtpSecurity"
                                  >
                                    <option value="off">OFF</option>
                                    <option value="ssl">SSL</option>
                                    <option value="tsl">TSL</option>
                                  </select>
                                </div>

                                <label className="m-2">
                                  <b>SMTP Auth</b>
                                </label>
                                <div className="col-xl-8 my-2">
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={handleChange}
                                    value={values?.smtpAuth}
                                    name="smtpAuth"
                                  >
                                    <option value="off">OFF</option>
                                    <option value="on">ON</option>
                                  </select>
                                </div>
                              </>

                            )}
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="btn btn-danger light ms-1"
                          >
                            Cancel
                          </Link>
                          <button
                            className="btn btn-primary me-1"
                            type="submit"
                            disabled={!isValid || !dirty}
                          >
                            {params?.id ? "send" : "Save"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>

      <ToastContainer />
    </>
  );
}

export default EmailSeting;
