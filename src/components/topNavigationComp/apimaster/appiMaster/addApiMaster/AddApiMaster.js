import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomTextArea from "../../../../../common/CustomTextArea";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ApiTransactionAdd, apiMasterAdd, apiMasterUpdate, getapiMasterId } from "../../../../../api/login/Login";

function AddApiMaster() {
    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];


    const navigate = useNavigate()

    const [conbo, setCombo] = useState(null)
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: '',

    });
    const params = useParams();
    const validate = (values) => {
        let errors = {};
        if (!values.api) {
            errors.api = "Api Name is required";
        }
        if (!values.id) {
            errors.id = "Id is required and must be unique";
        }

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
            alert(error.message)
        }
    }

    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    const res = await ApiTransactionAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/api-master')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {

                    const res = await apiMasterUpdate(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/api-master')
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
                    const response = await getapiMasterId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
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
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"} NEW API
                                                </h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Api Name *"
                                                            value={values.api}
                                                            hasError={errors.api_name && touched.api}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.api}
                                                            autoFocus={true}
                                                            id="api"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Api key *"
                                                            value={values.id}
                                                            hasError={errors.id && touched.id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.id}
                                                            autoFocus={true}
                                                            id="id"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/api-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
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
    )
}
export default AddApiMaster