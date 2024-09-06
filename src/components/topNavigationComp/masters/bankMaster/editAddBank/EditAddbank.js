import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


function EditAddBank() {
    const initialValues = {
        bankName: '',
        ifcCode: '',
        empoloyeeEnail: ''
    };
    const breadCrumbsTitle = {
        id:"1",
        title_1:"Master",
        title_2:"Bank Master",
        path_2:"/bank-master",
        title_3:"Update Bank Master",
        path_3:"/edit-add-bank",
    }




    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.bankName) {
            errors.bankName = "Bank Name  is required";
        }
        if (!values.ifcCode) {
            errors.ifcCode = "IFSC Code Date is required";
        }

        if (!values.empoloyeeEnail) {
            errors.empoloyeeEnail = "Email is required";
        } else if (!regexEmail.test(values.empoloyeeEnail)) {
            errors.empoloyeeEnail = "Invalid Email";
        }

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
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE BANK MASTER</h4>
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
                                                            value={values.bankName}
                                                            hasError={errors.bankName && touched.bankName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bankName}
                                                            autoFocus={true}
                                                            id="bankName"
                                                            name="bankName"
                                                            placeholder="Bank Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.ifcCode}
                                                            hasError={errors.ifcCode && touched.ifcCode}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.ifcCode}
                                                            autoFocus={true}
                                                            id="ifcCode"
                                                            name="ifcCode"
                                                            placeholder="IFSC Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="email"
                                                            value={values.empoloyeeEnail}
                                                            hasError={errors.empoloyeeEnail && touched.empoloyeeEnail}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.empoloyeeEnail}
                                                            autoFocus={true}
                                                            id="empoloyeeEnail"
                                                            name="empoloyeeEnail"
                                                            placeholder="Empoloyee Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/bank-master' className="btn btn-danger light ms-1">Cancel</Link>
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
export default EditAddBank