
import { Formik } from 'formik';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
import CustomTextArea from '../../../../common/CustomTextArea';
function SchemeManager({ show2, handleClose2 }) {
    const initialValues = {
        SecurityPin: '',
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
            <Modal show={show2} onHide={handleClose2} className='dilog-box' id="dilog-box">
                <Modal.Header closeButton>
                    <Modal.Title>Scheme Manager</Modal.Title>
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
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select Scheme</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={values.SecurityPin}
                                                hasError={errors.SecurityPin && touched.SecurityPin}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.SecurityPin}
                                                autoFocus={true}
                                                id="SecurityPin"
                                                placeholder="SecurityPin"
                                                name="SecurityPin"
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
export default SchemeManager