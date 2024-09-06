import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomTextArea from "../../../../common/CustomTextArea";

const CompanySettings = () => {
    const initialValues = {
        CompanySettings: {
            companyName: "",
            companyEmail: "",
            companyWebsite: "",
            supportNo: "",
            whattsappNo: "",
            news: "",
            smsSender: "",
            maintanenceMessage: "",
            pincode: "",
            pancardNumber: "",
            gstNumber: "",
            companyAddress_1: "",
            companyAddress_2: "",
            authorisedName: "",
            designation: "",
        }
    }
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Abc",
            value: "Abc",
        },
        {
            name: "Abcd",
            value: "Abcd",
        },
        {
            name: "Abce",
            value: "Abce",
        },
        {
            name: "Abcf",
            value: "Abcf",
        },
    ];

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.companyName) {
            errors.companyName = "Company Name is required";
        }

        if (!values.companyWebsite) {
            errors.companyWebsite = "Company Website is required";
        }
        if (!values.supportNo) {
            errors.supportNo = "Support Number is required";
        }

        if (!values.companyEmail) {
            errors.companyEmail = "Company Email is required";
        } else if (!regexEmail.test(values.companyEmail)) {
            errors.email = "Invalid Email";
        }

        if (!values.whattsappNo) {
            errors.whattsappNo = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.whattsappNo)) {
            errors.whattsappNo = "Invalid Mobile Number";
        }

        if (!values.news) {
            errors.news = "News is required";
        }

        if (!values.smsSender) {
            errors.smsSender = "Sender SMS is required";
        }

        if (!values.maintanenceMessage) {
            errors.maintanenceMessage = "Maintanence Message is required";
        }

        if (!values.pincode) {
        } else if (!regexPanNumber.test(values.pincode)) {
            errors.pincode = "Invalid PAN Number";
        }
        if (!values.pancardNumber) {
            errors.pancardNumber = "PAN Number is required";
        } else if (!regexPanNumber.test(values.pancardNumber)) {
            errors.pancardNumber = "Invalid PAN Number";
        }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        if (!values.companyAddress_1) {
            errors.companyAddress_1 = "Company Address is required";
        }
        if (!values.authorisedName) {
            errors.authorisedName = "Authorised Name is required";
        }
        if (!values.designation) {
            errors.designation = "Degignation is required";
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
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Company Settings - </b></h4>
                                </div>
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
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Company Name *"
                                                            value={values.companyName}
                                                            hasError={errors.companyName && touched.companyName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.companyName}
                                                            autoFocus={true}
                                                            id="companyName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="mail"
                                                            placeholder="Company E-mail *"
                                                            value={values.companyEmail}
                                                            hasError={errors.companyEmail && touched.companyEmail}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.companyEmail}
                                                            autoFocus={true}
                                                            id="companyEmail"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Company Website *"
                                                            value={values.companyWebsite}
                                                            hasError={errors.companyWebsite && touched.companyWebsite}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.companyWebsite}
                                                            autoFocus={true}
                                                            id="companyWebsite"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Support Nubmer *"
                                                            value={values.supportNo}
                                                            hasError={errors.supportNo && touched.supportNo}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.supportNo}
                                                            autoFocus={true}
                                                            id="supportNo"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="WhatsApp No *"
                                                            value={values.whattsappNo}
                                                            hasError={errors.whattsappNo && touched.whattsappNo}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.whattsappNo}
                                                            autoFocus={true}
                                                            id="whattsappNo"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="News *"
                                                            value={values.news}
                                                            hasError={errors.news && touched.news}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.news}
                                                            autoFocus={true}
                                                            id="news"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Sms Sender *"
                                                            value={values.smsSender}
                                                            hasError={errors.smsSender && touched.smsSender}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smsSender}
                                                            autoFocus={true}
                                                            id="smsSender"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Same Amount Recharge  *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Server *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Maintainance Message "
                                                            value={values.maintanenceMessage}
                                                            hasError={errors.maintanenceMessage && touched.maintanenceMessage}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.maintanenceMessage}
                                                            id="maintanenceMessage"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select Sate *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Pin Code * "
                                                            value={values.pincode}
                                                            hasError={errors.pincode && touched.pincode}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.pincode}
                                                            id="pincode"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Pancard  Number * "
                                                            value={values.pancardNumber}
                                                            hasError={errors.pancardNumber && touched.pancardNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.pancardNumber}
                                                            id="pancardNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Gst Number  (Optional)"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Login Type *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            placeholder="Company Address *"
                                                            value={values.companyAddress_1}
                                                            hasError={errors.companyAddress_1 && touched.companyAddress_1}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.companyAddress_1}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="companyAddress_1"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            placeholder="Company Address	 (2) (Optional) "
                                                            value={values.companyAddress_2}
                                                            hasError={errors.companyAddress_2 && touched.companyAddress_2}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.companyAddress_2}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="companyAddress_2"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="color"
                                                            placeholder="Header Color Start	"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="color"
                                                            placeholder="Header Color End	*"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Facebook Link (Optional)	"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Instagram Link	(Optional)"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Twitter Link (Optional)"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="YouTube Link	(Optional)"
                                                            value={values.gstNumber}
                                                            hasError={errors.gstNumber && touched.gstNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gstNumber}
                                                            id="gstNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Table Format *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Transaction Pin *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="UPI  Payout Route *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Authoriesed Name *	"
                                                            value={values.authorisedName}
                                                            hasError={errors.authorisedName && touched.authorisedName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.authorisedName}
                                                            id="authorisedName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Designation	*"
                                                            value={values.designation}
                                                            hasError={errors.designation && touched.designation}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.designation}
                                                            id="designation"
                                                        />
                                                    </div>

                                                    <div className=''>
                                                        <button className="btn btn-danger pd-x-20 rounded-2 mt-4 " type="submit"> Update Details </button>
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
            </div>

        </>
    )
}

export default CompanySettings
