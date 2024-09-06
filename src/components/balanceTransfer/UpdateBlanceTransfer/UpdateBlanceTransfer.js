import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../common/CustomInputField";
import { BreadcrumbItem } from "react-bootstrap";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

const initialValues = {
    basicDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
        shopName: "",
        mobileNumber: "",
        memberType: "",
        normalBalance: ""
    },
};
const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Balalnce Transfer",
    title_3: "Update Balalnce Transfer",
    
}
function UpdateBlanceTransfer() {
    const validate = (values) => {
        let errors = {};
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        if (!values.shopName) {
            errors.shopName = "Shop Name is required";
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }
        if (!values.memberType) {
            errors.memberType = "Member Type  is required";
        }
        if (!values.normalBalance) {
            errors.normalBalance = "Normal Balance  is required";
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
                    } = formik;
                    return (
                        <>
                        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
                        <div className="row m-4">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">Update Balance  Transfer</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type={"text"}
                                                            placeholder="Shop Name *"
                                                            value={values.shopName}
                                                            hasError={errors.shopName && touched.shopName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.shopName}
                                                            autoFocus={true}
                                                            id="shopName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type={"text"}
                                                            placeholder="Mobile Number *"
                                                            value={values.mobileNumber}
                                                            hasError={errors.mobileNumber && touched.mobileNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNumber}
                                                            autoFocus={true}
                                                            id="mobileNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type={"text"}
                                                            placeholder="Member Type *"
                                                            value={values.memberType}
                                                            hasError={errors.memberType && touched.memberType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.memberType}
                                                            autoFocus={true}
                                                            id="memberType"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type={"text"}
                                                            placeholder="Normal Balance *"
                                                            value={values.normalBalance}
                                                            hasError={errors.normalBalance && touched.normalBalance}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.normalBalance}
                                                            autoFocus={true}
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
export default UpdateBlanceTransfer