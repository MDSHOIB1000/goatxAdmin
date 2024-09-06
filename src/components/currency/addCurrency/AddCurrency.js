import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import { currencyAdd } from "../../../api/login/Login";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function AddCurrency() {
  const [isSubmit, setIsSubmit] = useState(false);
  const initialValues = {
    currency_name: "",
    currency_code: "",
    currency_symbol: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.currency_name) {
      errors.currency_name = "Currency Name  is required";
    }
    if (!values.currency_code) {
      errors.currency_code = "Currency Code is required";
    }
    if (!values.currency_symbol) {
      errors.currency_symbol = "Currency Symbol Code is required";
    }
    return errors;
  };

  const toastSuccessMessage = () => {
    toast.success("Add Currency Successfully.", {
      position: "top-center",
    });
  };

  const submitForm = async (values, { setSubmitting }) => {
    setIsSubmit(true);
    try {
      setSubmitting(true);
      let result = await currencyAdd(values);
      console.log(result);

      if (result?.statusCode == "200") {
        toastSuccessMessage();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0">ADD CURRENCY</h4>
                </div>
                <Formik
                  initialValues={initialValues}
                  validate={validate}
                  onSubmit={submitForm}
                  enableReinitialize
                  validateOnMount={false}
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
                              type="text"
                              value={values.currency_name}
                              hasError={
                                errors.currency_name && touched.currency_name
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={
                                touched.currency_name && errors.currency_name
                              }
                              id="currency_name"
                              name="currency_name"
                              placeholder="Currency Name"
                            />
                          </div>
                          <div className="col-xl-6 mb-3">
                            <CustomInputField
                              type="text"
                              value={values.currency_code}
                              hasError={
                                errors.currency_code && touched.currency_code
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={
                                touched.currency_code && errors.currency_code
                              }
                              id="currency_code"
                              name="currency_code"
                              placeholder=" Currency Code"
                            />
                          </div>
                          <div className="col-xl-6 mb-3">
                            <CustomInputField
                              type="text"
                              value={values.currency_symbol}
                              hasError={
                                errors.currency_symbol &&
                                touched.currency_symbol
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={
                                touched.currency_symbol &&
                                errors.currency_symbol
                              }
                              id="currency_symbol"
                              name="currency_symbol"
                              placeholder=" Currency Symbol"
                            />
                          </div>
                        </div>
                        <div>
                          <Link
                            to="/currency"
                            className="btn btn-danger light ms-1"
                          >
                            Cancel
                          </Link>
                          <button
                            className="btn btn-primary me-1"
                            type="submit"
                            disabled={!isValid || !dirty}
                          >
                            Submit
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
        <ToastContainer />
      </div>
    </>
  );
}
export default AddCurrency;
