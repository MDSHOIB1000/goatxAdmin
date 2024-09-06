import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../common/CustomInputField";
import CustomDropdown from "../../../common/CustomDropdown";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
const initialValues = {
    userName: "",
    requestDate: "",
    paymentDate: "",
    bank: "",
    method: "",
    amount: "",
    utr: "",
    paymentType: "",
};
const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Payment Request View",
    title_3: "Add Payment Request View",
}
function AddPaymentRequestView() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Phone Pay",
            value: "Phone Pay",
        },
        {
            name: "Credit Card",
            value: "cCredit Cardash",
        },
        {
            name: "Debit Card",
            value: "Debit Card",
        },
        {
            name: "Cash",
            value: "Cash",
        },
    ];
    const validate = (values) => {
        let errors = {};
        if (!values.userName) {
            errors.userName = "User Name is required";
        }

        if (!values.requestDate) {
            errors.requestDate = "Request Date is required";
        }

        if (!values.bank) {
            errors.bank = "Bank Name is required";
        }
        if (!values.paymentDate) {
            errors.paymentDate = "Payment Date is required";
        }



        if (!values.method) {
            errors.method = " Method Type is required";
        }

        if (!values.amount) {
            errors.amount = "Amount is required";
        }

        if (!values.utr) {
            errors.utr = "UTR is required";
        }



        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        if (!values.paymentType) {
            errors.paymentType = "Payment Type is required";
        }

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
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
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
                        <>
                            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">ADD PAYMENT REQUEST VIEW</h4>
                                                </div>
                                                <form className="tbl-captionn">
                                                    <div className="row">
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="User Name *"
                                                                value={values.userName}
                                                                hasError={errors.userName && touched.userName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.userName}
                                                                autoFocus={true}
                                                                id="userName"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="Request Date *"
                                                                value={values.requestDate}
                                                                hasError={errors.requestDate && touched.requestDate}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.requestDate}
                                                                autoFocus={true}
                                                                id="requestDate"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Paymet Date *"
                                                                value={values.paymentDate}
                                                                hasError={errors.paymentDate && touched.paymentDate}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.paymentDate}
                                                                autoFocus={true}
                                                                id="paymentDate"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Bank *"
                                                                value={values.bank}
                                                                hasError={errors.bank && touched.bank}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.bank}
                                                                autoFocus={true}
                                                                id="bank"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Method *"
                                                                value={values.method}
                                                                hasError={errors.method && touched.method}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.method}
                                                                autoFocus={true}
                                                                id="method"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="number"
                                                                placeholder="Amount *"
                                                                value={values.amount}
                                                                hasError={errors.amount && touched.amount}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.amount}
                                                                autoFocus={true}
                                                                id="amount"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="UTR *"
                                                                value={values.utr}
                                                                hasError={errors.utr && touched.utr}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.utr}
                                                                autoFocus={true}
                                                                id="utr"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <div className="dropdownWrapper">
                                                                <CustomDropdown
                                                                    itemList={itemList}
                                                                    placeholder="Select Payment Type *"
                                                                    isSingleSelect={false}
                                                                    icon={true}
                                                                    onChange={changeHandle}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Link to='/payment-request-view' className="btn btn-danger light ms-1">Cancel</Link>
                                                        <button className="btn btn-primary me-1">Submit</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </Formik>
        </>
    )
}
export default AddPaymentRequestView