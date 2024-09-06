import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../common/CustomInputField";
import { currencyAdd, currencyUpdate, getCurrency } from "../../api/login/Login";

function CurrencyForm() {
  const [initialValues, setInitialValues] = useState({
    currency_name: "",
    currency_code: "",
    currency_symbol: "",
  });
  const navigate = useNavigate()
  const params = useParams();
  const validate = (values) => {
    let errors = {};
    if (!values.currency_name) {
      errors.currency_name = "Currency Name is required";
    }
    if (!values.currency_code) {
      errors.currency_code = "Currency Code is required";
    }
    if (!values.currency_symbol) {
      errors.currency_symbol = "Currency Symbol is required";
    }
    return errors;
  };

  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} Currency Successfully.`, {
      position: "top-center",
    });
  };

  const submitForm = async (values) => {

    try {
      if (!params?.id) {
        try {
          await currencyAdd(values);
          toastSuccessMessage();
          navigate(`/currency`)

        } catch (error) {
          alert(error.message)

        }

      } else {
        try {
          await currencyUpdate(params.id, values);
          navigate(`/currency`)
          toastSuccessMessage();
        } catch (error) {

        }

      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        if (params?.id) {
          const response = await getCurrency(params.id);
          const currencyData = response.data;
          setInitialValues(currencyData);
        } else {
          setInitialValues({
            currency_name: "",
            currency_code: "",
            currency_symbol: "",
          });
        }
      } catch (error) {
        console.error("Error fetching currency:", error);
      }
    };

    fetchCurrency();
  }, [params?.id]);

  return (
    <>
      <div className="row mx-3">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0">
                    {params?.id ? "UPDATE" : "ADD"} CURRENCY
                  </h4>
                </div>
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
                              autoFocus={true}
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
                              autoFocus={true}
                              id="currency_code"
                              name="currency_code"
                              placeholder="Currency Code"
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
                              autoFocus={true}
                              id="currency_symbol"
                              name="currency_symbol"
                              placeholder="Currency Symbol"
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
                            {params?.id ? "Update" : "Add"}
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
export default CurrencyForm;
