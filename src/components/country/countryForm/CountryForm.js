import { useParams } from "react-router";
import { countryAdd, countryUpdate, getCountryAdd, getcountry } from "../../../api/login/Login";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import axios from "axios";


function CountryForm() {
    const [conbo, setCombo] = useState(null)
    const [initialValues, setInitialValues] = useState({
        name: "",
        code: "",
        curruncy_id: ''
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
        if (!values.curruncy_id) {
            errors.curruncy_id = "Select Country is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            const data = await getCountryAdd()
            setCombo(data?.data)
            console.log(data);
            

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {

        try {
            if (!params?.id) {
                try {
                    const res = await countryAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                    }
                } catch (error) {

                }

            } else {
                try {
                    await countryUpdate(params.id, values);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getcountry(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        code: "",
                        curruncy_id: "",
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
                                        {params?.id ? "UPDATE" : "ADD"} COUNTRY
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
                                                            placeholder="Country name"
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
                                                            placeholder="Country Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="curruncy_id" value={values.curruncy_id} onChange={handleChange}
                                                            hasError={
                                                                errors.curruncy_id && touched.curruncy_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.curruncy_id && errors.curruncy_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Currency</option>
                                                            {conbo &&
                                                                conbo?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.currency_symbol}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="/country"
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
export default CountryForm