import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomInputField from "../../../../../common/CustomInputField";
const initialValues = {
    bankName: "",
    acountNumber: "",
    ifscCode: "",
    holderName: "",
    branch: "",
}
function AddBankSettings() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "active",
            value: "active",
        },
        {
            name: "InActive",
            value: "InActive",
        },
    ];

    const validate = (values) => {
        let errors = {};
        /* const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
 */
        if (!values.bankName) {
            errors.bankName = "Bank Name is required";
        }

        if (!values.acountNumber) {
            errors.acountNumber = "Account Number is required";
        }

        /* if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        } */

        /* if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        } */

        if (!values.ifscCode) {
            errors.ifscCode = "IFSC code is required";
        }

        if (!values.holderName) {
            errors.holderName = "Holder Name is required";
        }

        if (!values.branch) {
            errors.branch = "Branch  is required";
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

        if (!values.officeAddress) {
            errors.officeAddress = "Office Address is required";
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
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0">ADD BANK SETTINGS</h4>
                                    </div>
                                    <form className="tbl-captionn">
                                        <div className="row">
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Bank Name * "
                                                    value={values.bankName}
                                                    hasError={errors.bankName && touched.bankName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.bankName}
                                                    id="bankName"
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Account Number * "
                                                    value={values.acountNumber}
                                                    hasError={errors.acountNumber && touched.acountNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.acountNumber}
                                                    id="acountNumber"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="IfSC Code *"
                                                    value={values.ifscCode}
                                                    hasError={errors.ifscCode && touched.ifscCode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.ifscCode}
                                                    id="ifscCode"
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Holder Name *"
                                                    value={values.holderName}
                                                    hasError={errors.holderName && touched.holderName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.holderName}
                                                    id="holderName"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Branch * "
                                                    value={values.branch}
                                                    hasError={errors.branch && touched.branch}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.branch}
                                                    id="branch"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <div className="dropdownWrapper">
                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Select Status *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='/bank-settings' className="btn btn-danger light ms-1">Cancel</Link>
                                            <button className="btn btn-primary me-1">Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}
export default AddBankSettings