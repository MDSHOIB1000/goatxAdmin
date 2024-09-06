import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import CustomInputField from '../../../../common/CustomInputField';
import { Formik } from 'formik';
import CustomDropdown from '../../../../common/CustomDropdown';

const initialValues = {
    date: '',
    firstName: '',
    middleName: '',
    lastName: '',
    provider: '',
    number: '',
    amount: '',
    vendor: '',
}
function AddPendingTransactionReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "All Transactions Report",
        title_3: "Add Transactions Report",
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

        if (!values.date) {
            errors.date = "Date is required";
        }

        // if (!values.email) {
        //     errors.email = "Email is required";
        // } else if (!regexEmail.test(values.email)) {
        //     errors.email = "Invalid Email";
        // }

        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }

        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }

        if (!values.middleName) {
            errors.middleName = "Middle Name  is required";
        }
        if (!values.provider) {
            errors.provider = "Provider  is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name  is required";
        }
        
        if (!values.amount) {
            errors.amount = "Amount is required";
        }
        if (!values.vendor) {
            errors.vendor = "Vendor is required";
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
                                    <h4 className="heading mb-0"><b>Pending Transaction Report - </b></h4>
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
                                            <form className="tbl-captionn" onSubmit={submitForm}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder={"Date *"}
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
                                                            autoFocus={true}
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
                                                            autoFocus={true}
                                                            id="lastName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Number *"
                                                            value={values.mobileNumber}
                                                            hasError={errors.mobileNumber && touched.mobileNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNumber}
                                                            autoFocus={true}
                                                            id="mobileNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Provider Name *"
                                                            value={values.provider}
                                                            hasError={errors.provider && touched.provider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.provider}
                                                            autoFocus={true}
                                                            id="provider"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select Member Type *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
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
                                                            placeholder="Vendor *"
                                                            value={values.vendor}
                                                            hasError={errors.vendor && touched.vendor}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.vendor}
                                                            autoFocus={true}
                                                            id="vendor"
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

export default AddPendingTransactionReport
