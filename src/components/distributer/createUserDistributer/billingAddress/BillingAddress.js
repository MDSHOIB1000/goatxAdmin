import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import { addBillingAddress, deletBillingAddress, getBillingAddress, getBillingAddressDetails, updateBillingAddress } from '../../../../api/login/Login';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {message } from 'antd';
import BillingAddressForm from './bilingAddressForm/BillingAddressForm';
import BillingAddressList from './billingAddressList/BillingAddressList';

function BillingAddress() {
    const params = useParams()
    const [data, setData] = useState()
    const [selecAddressId, setSelecAddressId] = useState(null)
    const [loading, setLoading] = useState()
    const [initialValues, setInitialValues] = useState(
        {
            country: "",
            state: "",
            city: "",
            pin_code: "",
            addressLine1: "",
            addressLine2: "",
            province: "",
            mobile_number: "",
            email: "",
            firstname: "",
            lastname: "",
            company: "",
            status_id: false,
            type: "Billing",
            user_id: params.id,

        })

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexmobile_numberNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const rezexzip = /^[0-9]+$/;

        if (!values.firstname) {
            errors.firstname = "First Name is required";
        }
        if (!values.lastname) {
            errors.lastname = "Last Name is required";
        }
        if (!values.country) {
            errors.country = "Country is required";
        }

        if (!values.state) {
            errors.state = "Company Website is required";
        }
        if (!values.city) {
            errors.city = "Support Number is required";
        }

        if (!values.email) {
            errors.email = "Company Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.mobile_number) {
            errors.mobile_number = "Contact No is required";
        } else if (!regexmobile_numberNumber.test(values.mobile_number)) {
            errors.mobile_number = "Invalid Contact No";
        }



        if (!values.province) {
            errors.province = "province is required";
        }

        if (!values.addressLine1) {
            errors.addressLine1 = "Sender SMS is required";
        }

        if (!values.addressLine2) {
            errors.addressLine2 = "Maintanence Message is required";
        }

        if (!values.pin_code) {
            errors.pin_code = "PIN code  is required";
        } else if (!rezexzip.test(values.pin_code)) {
            errors.pin_code = "Invalid PIN code Number";
        }


        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }


        if (!values.company) {
            errors.company = "Comapny Name is required";
        }

        return errors;
    };

    function editBillingAddress(id) {
        fetchUserType(id);
    }

    const getBillingData = async (id) => {
        try {
            if (id) {
                const response = await getBillingAddress(id)
                setData(response?.data)
            } else {

            }

        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        getBillingData(params.id)
    }, [params.id])


    const toastSuccessMessage = () => {
        toast.success(`${selecAddressId ? "Update" : "Add"} Billing Address
        Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!selecAddressId) {
                try {
                    await addBillingAddress(values);
                    toastSuccessMessage();
                    getBillingData(params.id)
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    await updateBillingAddress(selecAddressId, values);
                    getBillingData(params.id)
                    toastSuccessMessage();
                    /* setTimeout(() => {
                        navigate('/role-master')
                    }, 5000); */
                } catch (error) {

                }

            }

        } catch (error) {
            alert.error("Error:", error);
        }

    }
   
    const fetchUserType = async (id) => {
        setSelecAddressId(id)
        try {
            if (id) {
                const response = await getBillingAddressDetails(id);
                const roleData = response.data;
                setInitialValues(roleData);

            } else {
                setInitialValues({
                    country: "",
                    state: "",
                    city: "",
                    pin_code: "",
                    addressLine1: "",
                    addressLine2: "",
                    province: "",
                    mobile_number: "",
                    email: "",
                    firstname: "",
                    lastname: "",
                    company: "",
                    status_id: false,
                    type: "Billing",
                    user_id: params.id,
                });
            }
        } catch (error) {
            console.error("Error fetching User type:", error);
        }
    };

    const deleteBillingAddress = async (id) => {
        setLoading(true)
        try {
            await deletBillingAddress(id)
            getBillingData(params.id)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    const confirm = (id) => {
        deleteBillingAddress(id)
        message.success('Delete Successfull!');
    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };
    return (
        <>
            <BillingAddressForm submitForm={submitForm} initialValues={initialValues} validate={validate} selecAddressId={selecAddressId} />
            <BillingAddressList data={data} confirm={confirm} cancel={cancel} editBillingAddress={editBillingAddress} />
        </>
    )
}

export default BillingAddress
