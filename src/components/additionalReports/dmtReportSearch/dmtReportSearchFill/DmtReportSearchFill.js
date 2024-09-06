import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';
import { fillterDmtTxnReport, getDmtTxnReport, usersList } from '../../../../api/login/Login';
import { toast } from 'react-toastify';
import Loadar from '../../../../common/loader/Loader';
import Select from 'react-select';

function DmtReportSearchFill({ submitForm, userData, page, count, token, loading, getDmtTxnData }) {
    const today = new Date();
    const [initialValues, setInitialValues] = useState({
        user: '',
        user_id: token,
        count: count,
        page: page,
        // min_amt: 0,
        // max_amt: 0,
        end_date: ``,
        start_date: ``,
        txn_id: '',
        user_mobile: '',
        account_no: '',
        bank_name: '',
        search: ''
    });

    console.log(initialValues);


    const validate = (values) => {
        let errors = {};

        // Add validation logic here
        if (!values.start_date) {
            errors.start_date = "Start Date is required";
        }
        if (!values.end_date) {
            errors.end_date = "End Date is required";
        }
        if (!values.min_amt) {
            errors.min_amt = "Min Amt is required";
        }
        if (!values.max_amt) {
            errors.max_amt = "Max Amt is required";
        }
        if (!values.txn_id) {
            errors.txn_id = "Txn Id is required";
        }
        if (!values.user_mobile) {
            errors.user_mobile = "User Mobile is required";
        }
        if (!values.account_no) {
            errors.account_no = "Account No is required";
        }
        if (!values.bank_name) {
            errors.bank_name = "Bank Name is required";
        }

        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success('DMT Txn Search Successfully.', {
            position: "top-center",
        });
    };

    const userOptions = userData ? userData.map(user => ({ value: user._id, label: user.name })) : [];

    const resetButton = (resetForm) => {
        resetForm();
        setInitialValues({
            user: '',
            user_id: token,
            count: count,
            page: 0,
            // min_amt: 0,
            // max_amt: 0,
            end_date: '',
            start_date: '',
            txn_id: '',
            user_mobile: '',
            account_no: '',
            bank_name: '',
            search: ''
        });
        submitForm(initialValues); // Fetch data with default parameters after resetting the form
    };

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter</b></h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    // validate={validate}
                                    onSubmit={submitForm}
                                    className="tbl-captionn"
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            resetForm,
                                            errors,
                                            touched,
                                            handleBlur,
                                            isValid,
                                            dirty,
                                            setFieldValue
                                        } = formik;
                                        return (
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Start Date"
                                                            value={values.start_date}
                                                            hasError={errors.start_date && touched.start_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_date}
                                                            autoFocus={true}
                                                            id="start_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date"
                                                            value={values.end_date}
                                                            hasError={errors.end_date && touched.end_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_date}
                                                            autoFocus={true}
                                                            id="end_date"
                                                        />
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Min Amount"
                                                            value={values.min_amt}
                                                            hasError={errors.min_amt && touched.min_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.min_amt}
                                                            autoFocus={true}
                                                            id="min_amt"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Max Amount"
                                                            value={values.max_amt}
                                                            hasError={errors.max_amt && touched.max_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.max_amt}
                                                            autoFocus={true}
                                                            id="max_amt"
                                                        />
                                                    </div> */}
                                                    <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Search"
                                                            value={values.search}
                                                            hasError={errors.search && touched.search}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.search}
                                                            autoFocus={true}
                                                            id="search"
                                                        />
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="User Mobile"
                                                            value={values.user_mobile}
                                                            hasError={errors.user_mobile && touched.user_mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.user_mobile}
                                                            autoFocus={true}
                                                            id="user_mobile"
                                                        />
                                                    </div> */}
                                                    {/* <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Account No"
                                                            value={values.account_no}
                                                            hasError={errors.account_no && touched.account_no}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.account_no}
                                                            autoFocus={true}
                                                            id="account_no"
                                                        />
                                                    </div> */}
                                                    {/* <div className="col-xl-4 mb-4">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Bank Name"
                                                            value={values.bank_name}
                                                            hasError={errors.bank_name && touched.bank_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank_name}
                                                            autoFocus={true}
                                                            id="bank_name"
                                                        />
                                                    </div> */}
                                                    {/* <div className="col-xl-4 mb-4">
                                                        <Select
                                                            options={userOptions}
                                                            placeholder="Select User"
                                                            name="user"
                                                            value={userOptions.find(option => option.value === values.user)}
                                                            onChange={option => setFieldValue("user", option.value)}
                                                            onBlur={handleBlur}
                                                            isClearable
                                                        />
                                                    </div> */}
                                                    <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button className="btn btn-primary pd-x-20" type="submit">
                                                            <i className="fas fa-search"></i> Search
                                                        </button>
                                                        <button className="btn btn-primary pd-x-20" type="button" onClick={() => resetButton(resetForm)}>
                                                            <i className="fas fa-refresh"></i> Reset
                                                        </button>
                                                        {/* <button className="btn btn-danger pd-x-20 " type="button" data-toggle="modal" data-target="#transaction_download_model"><i className="fas fa-export"></i> Export</button> */}
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
    );
}

export default DmtReportSearchFill;
