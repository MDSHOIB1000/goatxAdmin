import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { Link, useParams } from "react-router-dom";
import { getCurrency } from "../../../api/login/Login";

function UpdateCurrency() {
    const [isSubmit, setIsSubmit] = useState(false)
    const initialValues = {
        currency_name: '',
        currency_code: '',
        currency_symbol: ''
    }
    const [getData, setgetData] = useState(initialValues)
    console.log(getData.currency_name);

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        if (!values.currency_name) {
            errors.currency_name = "Currency Name  is required";
        }
        if (!values.currency_code) {
            errors.currency_code = "Currency Code is required";
        }
        if (!values.currency_symbol) {
            errors.currency_symbol = "Currency Symbol Code is required";
        }

        // const objlenght = Object.keys(errors).length
        // if (objlenght == 0) {
        //     submitForm()
        // }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success("Add Currency Successfully.", {
            position: "top-center"
        })
    };

    const params = useParams()

    const getCurrencyId = async () => {
        const getByIdCurrency = await getCurrency(params?.id)
        const initialDataget = getByIdCurrency.data
        console.log(initialDataget);
        // const initialDataget2 = { ...initialDataget, ...initialValues, currency_name: initialDataget.currency_name }
        setgetData(initialDataget);
    }

    useEffect(() => {
        getCurrencyId()
    }, [])

    const submitForm = async (values) => {
        setIsSubmit(true)
        // try {
        //     let result = await currencyAdd(values);
        //     console.log(result);
        //     if (result?.statusCode == '200') {
        //         toastSuccessMessage()
        //     }
        // } catch (error) {

        // }
        console.log(values);
    };
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE CURRENCY</h4>
                                </div>
                                <Formik
                                    initialValues={getData}
                                    validate={isSubmit && validate}
                                    onSubmit={submitForm}
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
                                                            hasError={errors.currency_name && touched.currency_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.currency_name}
                                                            autoFocus={true}
                                                            id="currency_name"
                                                            name="currency_name"
                                                            placeholder="Currency Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.currency_code}
                                                            hasError={errors.currency_code && touched.currency_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.currency_code}
                                                            autoFocus={true}
                                                            id="currency_code"
                                                            name="currency_code"
                                                            placeholder=" Currency Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="type"
                                                            value={values.currency_symbol}
                                                            hasError={errors.currency_symbol && touched.currency_symbol}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.currency_symbol}
                                                            autoFocus={true}
                                                            id="currency_symbol"
                                                            name="currency_symbol"
                                                            placeholder=" Currency Symbol"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/currency' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1" type="submit" >Submit</button>
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
export default UpdateCurrency