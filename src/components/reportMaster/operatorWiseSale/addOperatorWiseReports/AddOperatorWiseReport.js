import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

function AddOperatorWiseReport() {

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "Operator Wise Report",
        title_3: "Add operator Wise Report",
    }
    const initialValues = {
        provider: '',
        amount: '',
        userComm: '',
        count: ''
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.provider) {
            errors.provider = "Provider is required";
        }

        if (!values.amount) {
            errors.amount = "Amount is required";
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

        if (!values.userComm) {
            errors.userComm = "UserComm  is required";
        }

        if (!values.count) {
            errors.count = "Count  is required";
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
                                    <h4 className="heading mb-0"><b>OPERATOR WISE REPORT  - </b></h4>
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
                                                    <div className="col-xl-3 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.provider}
                                                            hasError={errors.provider && touched.provider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.provider}
                                                            autoFocus={true}
                                                            id="provider"
                                                            placeholder='Provider'
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.amount}
                                                            hasError={errors.amount && touched.amount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.amount}
                                                            autoFocus={true}
                                                            id="amount"
                                                            placeholder='Amount'
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.userComm}
                                                            hasError={errors.userComm && touched.userComm}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.userComm}
                                                            autoFocus={true}
                                                            id="userComm"
                                                            placeholder='User Comm'
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.count}
                                                            hasError={errors.count && touched.count}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.count}
                                                            autoFocus={true}
                                                            id="count"
                                                            placeholder='Count'
                                                        />
                                                    </div>
                                                    <div className='border-top'>
                                                        <button className="btn btn-primary pd-x-20 rounded-2 mt-4 " type="submit"> Save </button>
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

export default AddOperatorWiseReport
