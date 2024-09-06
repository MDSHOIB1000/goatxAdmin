import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

function AddpanCardReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "Pancard Report",
        title_3: "Add Pancard    Report",
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
        userName: '',
        provider: '',
        txind: '',
        amount: '',
        profit: '',
        blance: '',
        staus: '',
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

        if (!values.userName) {
            errors.userName = "User Name is required";
        }

        if (!values.userId) {
            errors.userId = "User Id  is required";
        }
        if (!values.provider) {
            errors.provider = "Provider  is required";
        }
        if (!values.number) {
            errors.number = "Number  is required";
        }
        if (!values.txind) {
            errors.txind = "Txind is required";
        }
        if (!values.amount) {
            errors.amount = "Amount is required";
        }
        if (!values.profit) {
            errors.profit = "Profit is required";
        }
        if (!values.blance) {
            errors.blance = "Closing Balance is required";
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
                                    <h4 className="heading mb-0"><b>Pan Card  Report - </b></h4>
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
                                                            value={values.userName}
                                                            hasError={errors.date && touched.userName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.userName}
                                                            autoFocus={true}
                                                            id="userName"
                                                            placeholder="User Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.provider}
                                                            hasError={errors.provider && touched.provider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.provider}
                                                            autoFocus={true}
                                                            id="provider"
                                                            placeholder="Provider"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.number}
                                                            hasError={errors.number && touched.number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.number}
                                                            autoFocus={true}
                                                            id="provider"
                                                            placeholder="Number"
                                                            name="number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.txind}
                                                            hasError={errors.txind && touched.txind}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.txind}
                                                            autoFocus={true}
                                                            id="txind"
                                                            placeholder="Txind"
                                                            name="txind"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.amount}
                                                            hasError={errors.amount && touched.amount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.amount}
                                                            autoFocus={true}
                                                            id="amount"
                                                            placeholder="Amount"
                                                            name="amount"
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
                                                            name="profit"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.blance}
                                                            hasError={errors.blance && touched.blance}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.blance}
                                                            autoFocus={true}
                                                            id="Balance"
                                                            placeholder="Balance"
                                                            name="blance"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomDropdown
                                                            itemList={itemList}
                                                            placeholder="Select All Status *"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                            onChange={changeHandle}
                                                        />
                                                    </div>
                                                    <div className='border-top'>
                                                        <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Save </button>
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

export default AddpanCardReport
