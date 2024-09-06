import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import { countryList, getCountryAdd, getstateMaster, stateMasterAdd, stateMasterUpdate } from "../../../api/login/Login";
function FormStateMaster() {
    const [conbo, setCombo] = useState(null)
    const [initialValues, setInitialValues] = useState({
        name: "",
        code: "",
        country_id: ''
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = " Name is required";
        }
        if (!values.code) {
            errors.code = "Code is required";
        }
        if (!values.country_id) {
            errors.country_id = "Select Country is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} State Master Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            const data = await countryList()
            setCombo(data?.data)

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {

        try {
            if (!params?.id) {
                try {
                    const res = await stateMasterAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/state-master')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await stateMasterUpdate(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/state-master')
                        }, [4000])
                    }
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
                    const response = await getstateMaster(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        code: "",
                        country_id: "",
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
                                        {params?.id ? "UPDATE" : "ADD"} STATE MASTER
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
                                                            placeholder="Name"
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
                                                            placeholder="Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="country_id" name="country_id" value={values.country_id} onChange={handleChange}
                                                            hasError={
                                                                errors.country_id && touched.country_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.country_id && errors.country_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Country</option>
                                                            {conbo &&
                                                                conbo?.map((item) => {
                                                                    console.log(item);
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="/state-master"
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
export default FormStateMaster