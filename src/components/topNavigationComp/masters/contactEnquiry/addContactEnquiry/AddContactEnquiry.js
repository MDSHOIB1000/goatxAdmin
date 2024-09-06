import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Formik } from 'formik';
import CustomTextArea from '../../../../../common/CustomTextArea';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { ToastContainer, toast } from 'react-toastify';
import { apiContactEnquiry, contactEnquiryAdd, getcontactEnquiryId } from '../../../../../api/login/Login';

const AddContactEnquiry = () => {

    const params = useParams()
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        mobile_number: '',
        message: '',
        is_active: ''
    });
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Contact Inquery",
        title_3: "Edit Contact Inquery",
    }

    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }

        if (!values.mobile_number) {
            errors.mobile_number = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile_number)) {
            errors.mobile_number = "Invalid Mobile Number";
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        if (!values.is_active) {
            errors.is_active = "Status is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Contact Enquiry Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await contactEnquiryAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/contact-enquiry')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await apiContactEnquiry(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/contact-enquiry')
                        }, [4000])
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getcontactEnquiryId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    // setInitialValues({
                    //     name: "",
                    //     code: "",
                    //     curruncy_id: "",
                    // });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);



    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} Customer Enquiry</h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    enableReinitialize
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
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            name="name"
                                                            placeholder="Name"

                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="email"
                                                            value={values.email}
                                                            hasError={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            autoFocus={true}
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobile_number}
                                                            hasError={errors.mobile_number && touched.mobile_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile_number}
                                                            autoFocus={true}
                                                            id="mobile_number"
                                                            name="mobile_number"
                                                            placeholder="Mobile Number"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            value={values.message}
                                                            hasError={errors.message && touched.message}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.message}
                                                            autoFocus={true}
                                                            id="message"
                                                            name="message"
                                                            placeholder="Message"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" name='is_active' value={values.is_active} onChange={handleChange}>
                                                            <option selected>select State</option>
                                                            <option value={true}>Active</option>
                                                            <option value={false}>De Active</option>
                                                        </select>
                                                    </div>

                                                </div>
                                                <div>
                                                    <Link to='/contact-enquiry' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddContactEnquiry
