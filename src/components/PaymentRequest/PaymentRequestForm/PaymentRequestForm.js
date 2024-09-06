import { Link } from "react-router-dom"
import CustomDropdown from "../../../common/CustomDropdown";
import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import CustomTextArea from "../../../common/CustomTextArea";
const initialValues = {
    amount: "",
    bankRefNumber: "",
    email: "",
    mobileNumber: "",
    masterType: "",
    shopName: "",
    lockAmount: "",
    panNumber: "",
    gstNumber: "",
    officeAddress: "",
};
function PaymentRequestForm() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "AXIS Bank",
            value: "AXIS Bank",
        },
        {
            name: "ICICI Bank",
            value: "ICICI Bank",
        },
    ];
    const itemList_2 = [
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
        if (!values.amount) {
            errors.amount = "Amount  is required";
        }

        if (!values.bankRefNumber) {
            errors.bankRefNumber = "Bank Ref Number is required";
        }
        if (!values.paymentDate) {
            errors.paymentDate = "Payment Date is required";
        }
        if (!values.slipUpload) {
            errors.slipUpload = "Slip Upload  is required";
        }
        if (!values.lockAmount) {
            errors.lockAmount = "Lock Amount is required";
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
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">PAYMENT REQUEST</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Bank Name *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Payment Method *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Payment Date *"
                                                            value={values.paymentDate}
                                                            hasError={errors.paymentDate && touched.paymentDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.paymentDate}
                                                            id="paymentDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Amount *"
                                                            value={values.amount}
                                                            hasError={errors.amount && touched.amount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.amount}
                                                            id="amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Bank Ref Number *"
                                                            value={values.bankRefNumber}
                                                            hasError={errors.bankRefNumber && touched.bankRefNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bankRefNumber}
                                                            id="bankRefNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="file"
                                                            placeholder="Slip Upload *"
                                                            value={values.slipUpload}
                                                            hasError={errors.slipUpload && touched.slipUpload}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.slipUpload}
                                                            id="slipUpload"
                                                        />
                                                    </div>
                                                    
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            placeholder="Remark  (optional)"
                                                            value={values.remark}
                                                            hasError={errors.remark && touched.remark}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.remark}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="remark"
                                                        />
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
                    );
                }}
            </Formik >
        </>
    )
}
export default PaymentRequestForm