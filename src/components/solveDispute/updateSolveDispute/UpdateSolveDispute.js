import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../common/CustomInputField";
import CustomTextArea from "../../../common/CustomTextArea";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Dispute",
    title_2: "Solve Dispute",
    title_3: "Update Solve Dispute",
}
function UpdateSolveDispute() {
    const initialValues = {
        txnDate: '',
        disputeDate: '',
        user: '',
        provider: '',
        number: '',
        amount: '',
        reason: '',
        message: ''
    }


    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.txnDate) {
            errors.txnDate = "Txn Date is required";
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

        if (!values.disputeDate) {
            errors.disputeDate = "Dispute Date is required";
        }

        if (!values.user) {
            errors.user = "User To  is required";
        }
        if (!values.provider) {
            errors.provider = "Provider is required";
        }
        if (!values.number) {
            errors.number = "Number  is required";
        }
        if (!values.amount) {
            errors.amount = "Amount is required";
        }
        if (!values.reason) {
            errors.reason = "Reason is required";
        }
        if (!values.message) {
            errors.message = "Message is required";
        }


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
                                    <h4 className="heading mb-0">UPDATE SOLVE DISPUTE</h4>
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
                                                            type="date"
                                                            value={values.txnDate}
                                                            hasError={errors.txnDate && touched.txnDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.txnDate}
                                                            autoFocus={true}
                                                            id="txnDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="date"
                                                            value={values.disputeDate}
                                                            hasError={errors.disputeDate && touched.disputeDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.disputeDate}
                                                            autoFocus={true}
                                                            id="txnDate"
                                                            name="disputeDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.user}
                                                            hasError={errors.user && touched.user}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.user}
                                                            autoFocus={true}
                                                            id="user"
                                                            name="user"
                                                            placeholder="User Name"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.provider}
                                                            hasError={errors.provider && touched.provider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.provider}
                                                            autoFocus={true}
                                                            id="provider"
                                                            name="provider"
                                                            placeholder="Provider"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.number}
                                                            hasError={errors.number && touched.number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.number}
                                                            autoFocus={true}
                                                            id="number"
                                                            name="number"
                                                            placeholder="Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.amount}
                                                            hasError={errors.amount && touched.amount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.amount}
                                                            autoFocus={true}
                                                            id="amount"
                                                            name="amount"
                                                            placeholder="Amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomTextArea
                                                            placeholder="Reason *"
                                                            value={values.reason}
                                                            hasError={errors.reason && touched.reason}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.reason}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="reason"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomTextArea
                                                            placeholder="Message *"
                                                            value={values.message}
                                                            hasError={errors.reason && touched.message}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.message}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="reason"
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    <Link to='/solve-dispute' className="btn btn-danger light ms-1">Cancel</Link>
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
export default UpdateSolveDispute