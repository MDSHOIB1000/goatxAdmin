
import { Formik } from 'formik';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
import CustomTextArea from '../../../../common/CustomTextArea';
function FundTransfer({ show, handleClose }) {
    const initialValues = {
        user_name:"",
        amount: '',
        payment_date: '',
        remark: '',
        bank_name: '',
        bank_ref: '',
        password:"",
    }

    const validate = (values) => {
        let errors = {};
        
        if (!values.payment_date) {
            errors.payment_date = "Payment Date is required";
        }
        if (!values.user_name) {
            errors.user_name = "User Name is required";
        }

        if (!values.bank_name) {
            errors.bank_name = "Bank Name  is required";
        }
        if (!values.amount) {
            errors.amount = "Amount  is required";
        }
        if (!values.bank_ref) {
            errors.bank_ref = "Bank Ref  is required";
        }
        if (!values.login_pasword) {
            errors.login_pasword = "Password  is required";
        }
        if (!values.remark) {
            errors.remark = "Remark  is required";
        }
       
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
            <Modal show={show} onHide={handleClose} className='dilog-box' id="dilog-box">
                <Modal.Header closeButton>
                    <Modal.Title>Update Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                                value={values.user_name}
                                                hasError={errors.user_name && touched.user_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.user_name}
                                                autoFocus={true}
                                                id="user_name"
                                                placeholder="User Name"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="date"
                                                value={values.payment_date}
                                                hasError={errors.payment_date && touched.payment_date}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.payment_date}
                                                autoFocus={true}
                                                id="payment_date"
                                                placeholder="Payment Date"
                                            />
                                        </div>
                                         <div className="col-xl-6 mb-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected disabled>Select Method</option>
                                                <option value={1}>NEFT</option>
                                                <option value={2}>RTGS</option>
                                            </select>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={values.bank_name}
                                                hasError={errors.bank_name && touched.bank_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.bank_name}
                                                autoFocus={true}
                                                id="bank_name"
                                                placeholder="Bank name"
                                                name="bank_name"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="number"
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
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={values.bank_ref}
                                                hasError={errors.bank_ref && touched.bank_ref}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.bank_ref}
                                                autoFocus={true}
                                                id="bank_ref"
                                                placeholder="Bank  Ref"
                                                name="bank_ref"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="password"
                                                value={values.login_pasword}
                                                hasError={errors.login_pasword && touched.login_pasword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.login_pasword}
                                                autoFocus={true}
                                                id="login_pasword"
                                                placeholder="Login Password"
                                                name="login_pasword"
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected disabled>Select Status</option>
                                                <option value={1}>Pending</option>
                                                <option value={2}>Appoved</option>
                                                <option value={2}>Reject</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <CustomTextArea
                                                type="text"
                                                value={values.remark}
                                                hasError={errors.remark && touched.remark}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.remark}
                                                autoFocus={true}
                                                id="remark"
                                                placeholder="Remark"
                                                name="remark"
                                            />
                                        </div>
                                        <div className='border-top'>
                                            <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Update </button>
                                        </div>

                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default FundTransfer