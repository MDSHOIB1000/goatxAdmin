import { Formik } from "formik";
import { Link } from "react-router-dom";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomInputField from "../../../../../common/CustomInputField";

const initialValues = {
    brandName: '',
    smsKey: '',
    whatsAppNumber: '',
    whatsAppApiToken: '',
    alertAmount: '',
}
function TopSiteSetting() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Enable",
            value: "Enable",
        },
        {
            name: "Disable",
            value: "Disable",
        },
        
    ];

    const validate = (values) => {
        let errors = {};
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        
        if (!values.brandName) {
            errors.brandName = "Brand Name is required";
        }

        if (!values.smsKey) {
            errors.smsKey = "SMS Key is required";
        }


        if (!values.whatsAppNumber) {
            errors.whatsAppNumber = "Whats App Number is required";
        } else if (!regexMobileNumber.test(values.whatsAppNumber)) {
            errors.whatsAppNumber = "Invalid Mobile Number";
        }

        if (!values.whatsAppApiToken) {
            errors.whatsAppApiToken = "WhatsApp Api Token is required";
        }

        if (!values.alertAmount) {
            errors.alertAmount = "Alert Amount is required";
        }

        if (!values.lockAmount) {
            errors.lockAmount = "Lock Amount is required";
        }

       

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
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption">
                                                <h4 className="heading mb-0">SITE SETTINGS</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Brand Name(for sms)  *"
                                                            value={values.brandName}
                                                            hasError={errors.brandName && touched.brandName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.brandName}
                                                            autoFocus={true}
                                                            id="brandName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="-----Select SMS---- *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Sms Key *"
                                                            value={values.smsKey}
                                                            hasError={errors.smsKey && touched.smsKey}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smsKey}
                                                            autoFocus={true}
                                                            id="smsKey"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Whatsapp Number *"
                                                            value={values.whatsAppNumber}
                                                            hasError={errors.whatsAppNumber && touched.whatsAppNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.whatsAppNumber}
                                                            autoFocus={true}
                                                            id="whatsAppNumber"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="---WhatsApp---"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Whatsapp Api Token *"
                                                            value={values.whatsAppApiToken}
                                                            hasError={errors.whatsAppApiToken && touched.whatsAppApiToken}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.whatsAppApiToken}
                                                            autoFocus={true}
                                                            id="whatsAppApiToken"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Alert Amount *"
                                                            value={values.alertAmount}
                                                            hasError={errors.alertAmount && touched.alertAmount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.alertAmount}
                                                            autoFocus={true}
                                                            id="alertAmount"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="E-mail"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
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
            </Formik>
        </>
    )
}
export default TopSiteSetting