import { Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import CustomDropdown from '../../../../../common/CustomDropdown';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';

const AddCashFreeGateway = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Cashfree Gateway Master ",
        title_3: "Add Cashfree Gateway Master ",
    }

    const itemList = [
        {
            name: "Active",
            value: "Active",
        },
        {
            name: "Inactive",
            value: "Inactive",
        },
    ];
    const initialValues = {
        appId: '',
        secreteKey: '',
        baseUrl: '',
        status: '',
        minAmount: '',
        maxAmount: '',


    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.appId) {
            errors.appId = "App Id is required";
        }
        if (!values.secreteKey) {
            errors.secreteKey = "Secrete Key is required";
        }
        if (!values.baseUrl) {
            errors.baseUrl = "Base Url is required";
        }
        if (!values.minAmount) {
            errors.minAmount = "Min-Amount is required";
        }
        if (!values.maxAmount) {
            errors.maxAmount = "Max-Amount is required";
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
                                    <h4 className="heading mb-0">ADD CASHFREE GATEWAY -</h4>
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
                                                    {/* <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Joining Date <span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" />
                                    </div> */}
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.appId}
                                                            hasError={errors.appId && touched.appId}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.appId}
                                                            autoFocus={true}
                                                            id="appId"
                                                            name="appId"
                                                            placeholder="App Id"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.secreteKey}
                                                            hasError={errors.secreteKey && touched.secreteKey}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.secreteKey}
                                                            autoFocus={true}
                                                            id="secreteKey"
                                                            name="secreteKey"
                                                            placeholder="Secrete Key"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.baseUrl}
                                                            hasError={errors.baseUrl && touched.baseUrl}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.baseUrl}
                                                            autoFocus={true}
                                                            id="baseUrl"
                                                            name="baseUrl"
                                                            placeholder="Base Url"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomDropdown
                                                            itemList={itemList}
                                                            placeholder="Select Status *"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                            onChange={changeHandle}
                                                        />
                                                        {/* <textarea className="form-control" defaultValue={"Reason"} /> */}
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.minAmount}
                                                            hasError={errors.minAmount && touched.minAmount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.minAmount}
                                                            autoFocus={true}
                                                            id="minAmount"
                                                            name="minAmount"
                                                            placeholder="Min-Amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.maxAmount}
                                                            hasError={errors.maxAmount && touched.maxAmount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.maxAmount}
                                                            autoFocus={true}
                                                            id="maxAmount"
                                                            name="maxAmount"
                                                            placeholder="Max-Amount"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/cashfree-gateway-master' className="btn btn-danger light ms-1">Cancel</Link>
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

export default AddCashFreeGateway
