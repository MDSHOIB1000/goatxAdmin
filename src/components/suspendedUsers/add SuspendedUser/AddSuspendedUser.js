import React from 'react'
import CustomInputField from '../../../common/CustomInputField'
import { Formik } from 'formik';
import CustomDropdown from '../../../common/CustomDropdown';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function AddSuspendedUser() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: "Suspended User",
        title_3: "Add Suspended User",
    }
    const itemList = [
        {
            name: "Success",
            value: "Success",
        },
        {
            name: "Failed",
            value: "Failed",
        },
        {
            name: "Pending",
            value: "Pending",
        },
        {
            name: "Refund",
            value: "Refund",
        },
        {
            name: "Credit",
            value: "Credit",
        },
        {
            name: "Debit",
            value: "Debit",
        },
    ];

    const initialValues = {
        date: '',
        shopName: '',
        mobileNumber: '',
        memberType: '',
        normalBalance: '',
        parent: '',
        package: '',
        kycStatus: '',
        useActivity: ''

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

        if (!values.shopName) {
            errors.shopName = "Shop Name is required";
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

        if (!values.memberType) {
            errors.memberType = "Member Type is required";
        }

        if (!values.normalBalance) {
            errors.normalBalance = "Normal Balance is required";
        }
        if (!values.parent) {
            errors.parent = "Parent  is required";
        }
        if (!values.package) {
            errors.package = "Package  is required";
        }
        if (!values.kycStatus) {
            errors.kycStatus = "KYC Status is required";
        }
        if (!values.useActivity) {
            errors.useActivity = "Use Activity is required";
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
                                <h4 className="heading mb-0"><b>Add Suspended user - </b></h4>
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
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
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
                                                        value={values.shopName}
                                                        hasError={errors.shopName && touched.shopName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.shopName}
                                                        autoFocus={true}
                                                        id="shopName"
                                                        placeholder="Shop Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        placeholder="Mobile"
                                                        value={values.mobileNumber}
                                                        hasError={errors.mobileNumber && touched.mobileNumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobileNumber}
                                                        id="Mobile"
                                                        name="mobileNumber"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.memberType}
                                                        hasError={errors.memberType && touched.memberType}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.memberType}
                                                        autoFocus={true}
                                                        id="Member Type"
                                                        placeholder="Member Type"
                                                        name="memberType"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.normalBalance}
                                                        hasError={errors.normalBalance && touched.normalBalance}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.normalBalance}
                                                        autoFocus={true}
                                                        id="Normal Balance"
                                                        placeholder="Normal Balance"
                                                        name="normalBalance"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.parent}
                                                        hasError={errors.parent && touched.parent}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.parent}
                                                        autoFocus={true}
                                                        id="parent"
                                                        placeholder="Parent"
                                                        name="parent"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.package}
                                                        hasError={errors.package && touched.package}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.package}
                                                        autoFocus={true}
                                                        id="package"
                                                        placeholder="Package"
                                                        name="package"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Select Status "
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />


                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.kycStatus}
                                                        hasError={errors.kycStatus && touched.kycStatus}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.kycStatus}
                                                        autoFocus={true}
                                                        id="kycStatus"
                                                        placeholder="KYC Status"
                                                        name="kycStatus"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.useActivity}
                                                        hasError={errors.useActivity && touched.useActivity}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.useActivity}
                                                        autoFocus={true}
                                                        id="useActivity"
                                                        placeholder="User Activity"
                                                        name="useActivity"
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

export default AddSuspendedUser
