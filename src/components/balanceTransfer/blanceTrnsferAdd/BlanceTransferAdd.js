import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../common/CustomInputField";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

const initialValues = {

    basicDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
        shopName: "",
        mobileNumber: "",
        memberType: "",
        normalBalance: "",
    },
};
const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Balance Tarnsfer",
    title_3: "Add Balance Tarnsfer",
}
function BalanceTransferAdd() {
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }

        if (!values.middleName) {
            errors.middleName = "Middle Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!values.shopName) {
            errors.shopName = "Shop Name  is required";
        }

        /* if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        } */

        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }

        if (!values.memberType) {
            errors.memberType = "Member Type is required";
        }

        if (!values.shopName) {
            errors.shopName = "Shop Name is required";
        }
        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        if (!values.normalBalance) {
            errors.normalBalance = "Normal Balance is required";
        }

        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
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
                                                    <h4 className="heading mb-0">ADD BALANCE TRANSFER</h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="First Name *"
                                                                value={values.firstName}
                                                                hasError={errors.firstName && touched.firstName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.firstName}
                                                                autoFocus={true}
                                                                id="firstName"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Middle Name *"
                                                                value={values.middleName}
                                                                hasError={errors.middleName && touched.middleName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.middleName}
                                                                id="middleName"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Last Name *"
                                                                value={values.lastName}
                                                                hasError={errors.lastName && touched.lastName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.lastName}
                                                                id="lastName"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Shop Name *"
                                                                value={values.shopName}
                                                                hasError={errors.shopName && touched.shopName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.shopName}
                                                                id="shopName"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="number"
                                                                placeholder="Mobile Number *"
                                                                value={values.mobileNumber}
                                                                hasError={errors.mobileNumber && touched.mobileNumber}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.mobileNumber}
                                                                id="mobileNumber"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Member Type *"
                                                                value={values.memberType}
                                                                hasError={errors.memberType && touched.memberType}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.memberType}
                                                                id="memberType"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Normal Balance *"
                                                                value={values.normalBalance}
                                                                hasError={errors.normalBalance && touched.normalBalance}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.normalBalance}
                                                                id="normalBalance"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div>
                                                        <Link to='/balance-trasnfer' className="btn btn-danger light ms-1">Cancel</Link>
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
export default BalanceTransferAdd