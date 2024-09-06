import { Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

const AddCompanyStaff = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "company Staff",
        title_3: "Add Company Staff",
    }
    const itemList = [
        {
            name: "Enabled",
            value: "Enabled",
        },
        {
            name: "Disabled",
            value: "Disabled",
        },
    ];
    const initialValues = {
        joiningDate: '',
        firstName: '',
        MiddleName: '',
        lastName: '',
        mobileNumber: '',
        memberType: '',
        normalBalence: '',
        status: ''

    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.joiningDate) {
            errors.joiningDate = "Joining Date is required";
        }
        if (!values.firstName) {
            errors.firstName = "Fist Name is required";
        }
        if (!values.MiddleName) {
            errors.MiddleName = "Last Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid Mobile Number";
        }
        if (!values.memberType) {
            errors.memberType = "Member Type is required";
        }
        if (!values.normalBalence) {
            errors.normalBalence = "Normal Balance  is required";
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
                                    <h4 className="heading mb-0">ADD COMPANYSTAFF -</h4>
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
                                                            value={values.joiningDate}
                                                            hasError={errors.joiningDate && touched.joiningDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.joiningDate}
                                                            autoFocus={true}
                                                            id="joiningDate"
                                                            name="joiningDate"
                                                            placeholder="Joining Date"
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
                                                            name="firstName"
                                                            placeholder="Fist Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="exampleFormControlInput3" className="form-label">Middle Name<span className="text-danger">*</span></label>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.MiddleName}
                                                            hasError={errors.MiddleName && touched.MiddleName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.MiddleName}
                                                            autoFocus={true}
                                                            id="middleName"
                                                            name="middleName"
                                                            placeholder="Middle Name"
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
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.mobileNumber}
                                                            hasError={errors.mobileNumber && touched.mobileNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNumber}
                                                            autoFocus={true}
                                                            id="mobileNumber"
                                                            name="mobileNumber"
                                                            placeholder="Mobile"
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
                                                            id="memberType"
                                                            name="memberType"
                                                            placeholder="Member Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.normalBalence}
                                                            hasError={errors.normalBalence && touched.normalBalence}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.normalBalence}
                                                            autoFocus={true}
                                                            id="normalBalence"
                                                            name="normalBalence"
                                                            placeholder="Normal Balance"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomDropdown
                                                            itemList={itemList}
                                                            placeholder="Select Service Category *"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                            onChange={changeHandle}
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    <Link to='/company-staff/welcome' className="btn btn-danger light ms-1">Cancel</Link>
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

export default AddCompanyStaff
