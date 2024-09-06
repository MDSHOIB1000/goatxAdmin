import { Formik } from 'formik';
import React, { useState } from 'react'
import CustomInputField from '../../../../../common/CustomInputField';

const CashfreeGateWayForm = () => {
    const initialValues = {
        fromDate: '',
        toDate: '',




    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.fromDate) {
            errors.fromDate = "From Date is required";
        }
        if (!values.toDate) {
            errors.toDate = "To Date is required";
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
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Cashfree GateWay Master </b></h4>
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
                                                            value={values.fromDate}
                                                            hasError={errors.fromDate && touched.fromDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.fromDate}
                                                            autoFocus={true}
                                                            id="fromDate"
                                                            name="fromDate"
                                                            placeholder="From"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="date"
                                                            value={values.toDate}
                                                            hasError={errors.toDate && touched.toDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.toDate}
                                                            autoFocus={true}
                                                            id="toDate"
                                                            name="toDate"
                                                            placeholder="From"
                                                        />
                                                    </div>

                                                    <div className="col-lg-3 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <label className="form-label"></label>
                                                        <br />
                                                        <button className="btn btn-primary pd-x-20 rounded-0 mt-3" type="submit"><i className="fas fa-search"></i> Search</button>
                                                        {/* <button className="btn btn-danger pd-x-20" type="button" data-toggle="modal" data-target="#transaction_download_model" onClick={()=>setModalShow(true)}>
                                                <FaDownload /> Download
                                            </button> */}
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

export default CashfreeGateWayForm
