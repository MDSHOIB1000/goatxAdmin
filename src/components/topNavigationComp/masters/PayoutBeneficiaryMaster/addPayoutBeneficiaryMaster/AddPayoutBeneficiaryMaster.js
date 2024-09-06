import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { addBeneficiaryData, getBeneficiaryDataEdit, updateBeneficiaryData } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import Loadar from "../../../../../common/loader/Loader";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Payout Beneficiary ",
    title_3: "Add Payout Beneficiary ",
}
function AddPayoutBeneficiaryMaster() {

    const [initialValues, setInitialValues] = useState({
        name: "",
        mobile: "",
        account_number: "",
        holder_name: "",
        ifsc_code: "",
        id: "1",
        is_active: false
    });

    const params = useParams()
    const navigate = useNavigate()


    const validate = (values) => {
        let errors = {};
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexaccount_number = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
        const regexIFSCcde = /^[A-Za-z]{4}\d{7}$/;
        if (!values.name) {
            errors.name = "User Name is required";
        }
        /* if (!values.date) {
            errors.date = "Date is required";
        } */
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Mobile Number";
        }
        if (!values.account_number) {
            errors.account_number = "Account Number is required";
        } else if (!regexaccount_number.test(values.account_number)) {
            errors.account_number = "Invalid Account Number";
        }
        if (!values.ifsc_code) {
            errors.ifsc_code = "Ifsc Code is required";
        } else if (!regexIFSCcde.test(values.ifsc_code)) {
            errors.ifsc_code = "Invalid IFSC code";
        }
        if (!values.holder_name) {
            errors.holder_name = "Holder Name is required";
        }

        return errors;
    };
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Payout Beneficiary Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await addBeneficiaryData(values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/payout-beneficiary-master')
                    }, 5000);
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    await updateBeneficiaryData(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/payout-beneficiary-master')
                    }, 5000);
                } catch (error) {
                    alert.error("Error:", error);
                }

            }

        } catch (error) {
            alert.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getBeneficiaryDataEdit(params.id);
                    const roleData = response.data;
                    console.log(roleData);
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                        name: "",
                        mobile: "",
                        account_number: "",
                        holder_name: "",
                        ifsc_code: "",
                        is_active: false
                    });
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
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
                                    <h4 className="heading mb-0">ADD PAYOUT BENEFICIARY MASTER</h4>
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
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            name="name"
                                                            placeholder="User Name"
                                                        />
                                                    </div>
                                                    {<div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="date"
                                                            value={values.date}
                                                            hasError={errors.date && touched.date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.date}
                                                            autoFocus={true}
                                                            id="date"
                                                            name="date"
                                                            placeholder="Date"
                                                        />
                                                    </div>}
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobile}
                                                            hasError={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            autoFocus={true}
                                                            id="mobile"
                                                            name="mobile"
                                                            placeholder="Mobile Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.account_number}
                                                            hasError={errors.account_number && touched.account_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.account_number}
                                                            autoFocus={true}
                                                            id="account_number"
                                                            name="account_number"
                                                            placeholder="Account Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.holder_name}
                                                            hasError={errors.holder_name && touched.holder_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.holder_name}
                                                            autoFocus={true}
                                                            id="holder_name"
                                                            name="holder_name"
                                                            placeholder="Holder Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.ifsc_code}
                                                            hasError={errors.ifsc_code && touched.ifsc_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.ifsc_code}
                                                            autoFocus={true}
                                                            id="ifsc_code"
                                                            name="ifsc_code"
                                                            placeholder="IFSC Code"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/payout-beneficiary-master' className="btn btn-danger light ms-1">Cancel</Link>
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
            </div>
            <ToastContainer />
        </>
    )
}
export default AddPayoutBeneficiaryMaster