import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import { getlanguage, languageAdd, languageUpdate } from "../../../api/login/Login";


function FormLanguage() {
    const [initialValues, setInitialValues] = useState({
        name: "",
        code: "",
    });
    const params = useParams();
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Country Name is required";
        }
        if (!values.code) {
            errors.code = "Country Code is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await languageAdd(values);
                } catch (error) {

                }

            } else {
                try {
                    await languageUpdate(params.id, values);
                } catch (error) {

                }

            }
            toastSuccessMessage();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getlanguage(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        code: "",

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
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} LANGUAGE
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
                                                            value={values.name}
                                                            hasError={
                                                                errors.name && touched.name
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.name && errors.name
                                                            }
                                                            autoFocus={true}
                                                            id="name"
                                                            name="name"
                                                            placeholder="Language name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.code}
                                                            hasError={
                                                                errors.code && touched.code
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.code && errors.code
                                                            }
                                                            autoFocus={true}
                                                            id="code"
                                                            name="code"
                                                            placeholder="Language Code"
                                                        />
                                                    </div>

                                                    {/* <div className="col-xl-6 mb-3">
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
                                                    </div> */}
                                                </div>
                                                <div>
                                                    <Link
                                                        to="/language"
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
    )
}
export default FormLanguage