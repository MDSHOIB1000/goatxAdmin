import React from 'react'
import { Button, Form } from 'react-bootstrap'
import BordcastTextEditor from './bordcastTextEditor/BordcastTextEditor'
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import CustomDropdown from '../../common/CustomDropdown';

function Boardcast() {

    const itemList = [
        {
            name: "Disabled",
            value: "Disabled",
        },
        {
            name: "Enabled",
            value: "Enabled",
        },
    ];
    const initialValues = {
        broadcastHeading: '',
        image: '',
        imageStatus: '',
        status: '',



    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.broadcastHeading) {
            errors.broadcastHeading = "Broadcast Heading  is required";
        }
        if (!values.image) {
            errors.image = "Image is required";
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
        <section>
            <div className=''>
                <div className='row m-4'>
                    <div className='col-md-12 col-12'>
                        <div className='card p-4'>
                            <div className='border-bottom'>
                                <h6><strong>Broadcast</strong></h6>
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

                                        <div className='row'>
                                            <div className="col-lg-4 col-md-12 form-group mg-b-0 mt-3">

                                                <CustomInputField
                                                    type="number"
                                                    value={values.broadcastHeading}
                                                    hasError={errors.broadcastHeading && touched.broadcastHeading}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.broadcastHeading}
                                                    autoFocus={true}
                                                    id="broadcastHeading"
                                                    name="broadcastHeading"
                                                    placeholder="Broadcast Heading"
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-12 form-group mg-b-0 mt-3">

                                                <CustomInputField
                                                    type="file"
                                                    value={values.image}
                                                    hasError={errors.image && touched.image}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.image}
                                                    autoFocus={true}
                                                    id="image"
                                                    name="image"
                                                    placeholder="Image"
                                                />
                                            </div>
                                            <div className="col-sm-12 col-lg-4 mt-3">

                                                <div className="form-group">

                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Select Image Status *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                            </div>


                                            <div className='py-5'>
                                                <BordcastTextEditor />
                                            </div>
                                            <div className="col-sm-12 col-lg-6 ">
                                                <div className="form-group">

                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Select Image Status *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                            </div>


                                            <div className='border-bottom p-2'>
                                            </div>
                                            <Button style={{ width: "max-content" }} className='my-2'>Update Details</Button>
                                        </div>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Boardcast
