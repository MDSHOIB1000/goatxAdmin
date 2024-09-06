import { Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom'
import CustomInputField from '../../../common/CustomInputField';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

// ADD Retailer Income
const breadCrumbsTitle = {
    id: "1",
    title_1: "User Income",
    title_2: "Retailer  Income",
    title_3: "Add Retailer  Income",
}
function AddRetailerInc() {
    const initialValues = {
        date: '',
        firstName: '',
        middleName: '',
        lastName: '',
        openingBalance: '',
        creditAmount: '',
        debitAmout: '',
        sales: '',
        profit: '',
        charge: '',
        pending: ''
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.date) {
            errors.date = "Date is required";
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

        if (!values.firstName) {
            errors.firstName = "First Name Date is required";
        }

        // if (!values.user) {
        //     errors.user = "User To  is required";
        // }
        if (!values.middleName) {
            errors.middleName = "Middle Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!values.openingBalance) {
            errors.openingBalance = "Opening Blance is required";
        }
        if (!values.creditAmount) {
            errors.creditAmount = "Credit Amount";
        }
        if (!values.debitAmout) {
            errors.debitAmout = "Debit Amount is required";
        }
        if (!values.sales) {
            errors.sales = "Sales is required";
        }
        if (!values.profit) {
            errors.profit = "Profit is required";
        }
        if (!values.charge) {
            errors.charge = "Charge is required";
        }
        if (!values.pending) {
            errors.pending = "Pending is required";
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
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">ADD Retailer Income</h4>
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
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="date"
                                                        value={values.date}
                                                        hasError={errors.date && touched.date}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.date}
                                                        autoFocus={true}
                                                        id="date"
                                                    />

                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.firstName}
                                                        hasError={errors.firstName && touched.firstName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.firstName}
                                                        autoFocus={true}
                                                        id="firstName"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.middleName}
                                                        hasError={errors.middleName && touched.middleName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} s
                                                        errorMsg={errors.middleName}
                                                        autoFocus={true}
                                                        id="middleName"
                                                        placeholder="Middle Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    {/* <label htmlFor="exampleFormControlInput2" className="form-label">Last Name<span className="text-danger">*</span></label> */}
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.lastName}
                                                        hasError={errors.lastName && touched.lastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.lastName}
                                                        autoFocus={true}
                                                        id="lastName"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.lastName}
                                                        hasError={errors.lastName && touched.lastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.lastName}
                                                        autoFocus={true}
                                                        id="lastName"
                                                        placeholder="Opening Balance"
                                                    />

                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.creditAmount}
                                                        hasError={errors.creditAmount && touched.creditAmount}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.creditAmount}
                                                        autoFocus={true}
                                                        id="creditAmount"
                                                        placeholder="Credit Amount"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.debitAmout}
                                                        hasError={errors.debitAmout && touched.debitAmout}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.debitAmout}
                                                        autoFocus={true}
                                                        id="debitAmout"
                                                        placeholder="Debit Amount"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.sales}
                                                        hasError={errors.sales && touched.sales}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.sales}
                                                        autoFocus={true}
                                                        id="sales"
                                                        placeholder="Sales"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.profit}
                                                        hasError={errors.profit && touched.profit}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.profit}
                                                        autoFocus={true}
                                                        id="profit"
                                                        placeholder="Profit"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.charge}
                                                        hasError={errors.charge && touched.charge}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.charge}
                                                        autoFocus={true}
                                                        id="charge"
                                                        placeholder="Charge"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.pending}
                                                        hasError={errors.pending && touched.pending}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.pending}
                                                        autoFocus={true}
                                                        id="pending"
                                                        placeholder="Pending"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <Link to='/user-income/distributor' className="btn btn-danger light ms-1">Cancel</Link>
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

export default AddRetailerInc
