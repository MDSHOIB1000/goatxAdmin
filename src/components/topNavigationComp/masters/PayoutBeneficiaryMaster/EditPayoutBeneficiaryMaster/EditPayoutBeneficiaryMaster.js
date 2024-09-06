import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

function EditPayoutBeneficiaryMaster() {
    const initialValues = {
        userName: '',
        date: '',
        mobileNumber: '',
        accountNumber: '',
        holderName: '',
        IFSCCode: '',
    };
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Payout Beneficiary ",
        title_3: "Update Payout Beneficiary ",
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.userName) {
            errors.userName = "User Name is required";
        }
        if (!values.date) {
            errors.date = "Date is required";
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        }
        if (!values.accountNumber) {
            errors.accountNumber = "Account Number is required";
        }
        if (!values.holderName) {
            errors.holderName = "Holder Name is required";
        }
        if (!values.IFSCCode) {
            errors.IFSCCode = "IFSCCode is required";
        }
        // if (!values.email) {
        //     errors.email = "Email is required";
        // } else if (!regexEmail.test(values.email)) {
        //     errors.email = "Invalid Email";
        // }

        // if (!values.mobileNumber) {
        //     errors.mobileNumber = "Mobile Number is required";
        // } else if (!regexMobileNumber.test(values.mobileNumber)) {
        //     errors.mobileNumber = "Invalid Mobile Number";
        // }

        // if (!values.panNumber) {
        //     errors.panNumber = "PAN Number is required";
        // } else if (!regexPanNumber.test(values.panNumber)) {
        //     errors.panNumber = "Invalid PAN Number";
        // }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }



        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE PAYOUT BENEFICIARY MASTER</h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
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
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.userName}
                                                            hasError={errors.userName && touched.userName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.userName}
                                                            autoFocus={true}
                                                            id="userName"
                                                            name="userName"

                                                            placeholder="User Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

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
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobileNumber}
                                                            hasError={errors.mobileNumber && touched.mobileNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNumber}
                                                            autoFocus={true}
                                                            id="mobileNumber"
                                                            name="mobileNumber"
                                                            placeholder="Mobile Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.accountNumber}
                                                            hasError={errors.accountNumber && touched.accountNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.accountNumber}
                                                            autoFocus={true}
                                                            id="accountNumber"
                                                            name="accountNumber"
                                                            placeholder="Account Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.holderName}
                                                            hasError={errors.holderName && touched.holderName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.holderName}
                                                            autoFocus={true}
                                                            id="holderName"
                                                            name="holderName"
                                                            placeholder="Holder Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.IFSCCode}
                                                            hasError={errors.IFSCCode && touched.IFSCCode}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.IFSCCode}
                                                            autoFocus={true}
                                                            id="IFSCCode"
                                                            name="IFSCCode"
                                                            placeholder="IFSC Code"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/payout-beneficiary-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
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
        </>
    )
}
export default EditPayoutBeneficiaryMaster