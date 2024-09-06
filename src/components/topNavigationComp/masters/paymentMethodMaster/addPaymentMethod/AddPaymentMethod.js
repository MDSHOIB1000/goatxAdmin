import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getpaymentMasterId, paymentMasterUpdate, paymentMethodAdd } from "../../../../../api/login/Login";

function AddPaymentMethod() {

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Payment Method",
        title_3: "Add Payment Method",
    }

    const [initialValues, setInitialValues] = useState({
        type: "",
        is_active: true,
    });
    const params = useParams();
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.type) {
            errors.type = "Method Type is required";
        }
        if (!values.is_active) {
            errors.is_active = "Method Type Status is required";
        }



        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Bank Master Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await paymentMethodAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/payment-method')
                        }, [4000])
                    }
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await paymentMasterUpdate(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                    }
                } catch (error) {
                    alert(error.message)
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
                    const response = await getpaymentMasterId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        type: "",
                        is_active: "",
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
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} PAYMENT METHOD
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
                                                            value={values.type}
                                                            hasError={errors.type && touched.type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.type}
                                                            autoFocus={true}
                                                            id="type"
                                                            name="type"
                                                            placeholder="Method Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select class="form-select" aria-label="Default select example" defaultValue={values.is_active} name="is_active" onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            <option value={true}>Active</option>
                                                            <option value={false}>DeActive</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/payment-method' className="btn btn-danger light ms-1">Cancel</Link>
                                                            <button
                                                                className="btn btn-primary me-1"
                                                                type="submit"
                                                                disabled={!isValid || !dirty}
                                                            >
                                                                {params?.id ? "Update" : "Add"}
                                                            </button>
                                                        </div>
                                                    </div>
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
export default AddPaymentMethod