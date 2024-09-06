import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addAgentOnboarding, getAgentOnboardingEdit, updateAgentOnboarding, usersList } from "../../../../../api/login/Login";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomTextArea from "../../../../../common/CustomTextArea";
import { ToastBody } from "react-bootstrap";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Agent Onboarding ",
    title_3: "Add  Agent Onboarding ",
}

function AddAgentOnbording() {

    const [initialValues, setInitialValues] = useState({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        aadhar_number: null,
        pan_number: "",
        company: "",
        pin_code: 560001,
        address: "",
        bank_account_number: "",
        ifsc: "",
        user_id: "",
        status_id: null,
        meta_title: "",
        meta_description: "",
        meta_keyword: "",
    });
    const params = useParams()
    const [userId, setUserId] = useState()
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexAdhaar = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/
        const ifscRegex = /^[A-Za-z]{4}\d{7}$/;
        const AccountRegex = /^[0-9]{6,}$/;

        if (!values.first_name) {
            errors.first_name = "First Name is required";
        }
        if (!values.last_name) {
            errors.last_name = "Last Name is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta Keyword is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta title is required";
        }
        if (!values.address) {
            errors.address = "Address is required";
        }
        if (!values.company) {
            errors.company = "company is required";
        }
        if (!values.mobile_number) {
            errors.mobile_number = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile_number)) {
            errors.mobile_number = "Invalid Mobile Number";
        }
        if (!values.ifsc) {
            errors.ifsc = "IFSC  is required";
        } else if (!ifscRegex.test(values.ifsc)) {
            errors.ifsc = "Invalid IFSC Number";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.bank_account_number) {
            errors.bank_account_number = "Bank Account Number is required";
        } else if (!AccountRegex.test(values.bank_account_number)) {
            errors.bank_account_number = "Invalid Bank Account Number";
        }

        if (!values.aadhar_number) {
            errors.aadhar_number = "Aadhar Number is required";
        } else if (!regexAdhaar.test(values.aadhar_number)) {
            errors.aadhar_number = "Invalid Aadhar Number";
        }
        if (!values.pan_number) {
            errors.pan_number = "PAN Number is required";
        } else if (!regexPanNumber.test(values.pan_number)) {
            errors.pan_number = "Invalid PAN Number";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"}  Agent Onboarding 
        Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await addAgentOnboarding(values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/agent-onboarding-list')
                    }, 5000);
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    await updateAgentOnboarding(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/agent-onboarding-list')
                    }, 5000);
                } catch (error) {

                }

            }

        } catch (error) {
            alert.error("Error:", error);
        }

    }
    const getUserList = async () => {
        const data = await usersList()
        setUserId(data?.data)
    }
    useEffect(() => {
        getUserList()
    }, [])

    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getAgentOnboardingEdit(params.id);
                    const roleData = response.data;
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                        first_name: "",
                        last_name: "",
                        mobile_number: "",
                        email: "",
                        aadhar_number: "",
                        pan_number: "",
                        company: "",
                        pin_code: 560001,
                        address: "",
                        bank_account_number: "",
                        ifsc: "",
                        user_id: "",
                        status_id: null,
                        meta_title: "",
                        meta_description: "",
                        meta_keyword: "",
                    });
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [params?.id]);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ToastContainer />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Agent Onboarding</h4>
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
                                                            value={values?.first_name}
                                                            hasError={errors?.first_name && touched.first_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors?.first_name}
                                                            autoFocus={true}
                                                            id="first_name"
                                                            name="first_name"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.last_name}
                                                            hasError={errors.last_name && touched.last_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.last_name}
                                                            autoFocus={true}
                                                            id="last_name"
                                                            name="last_name"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.mobile_number}
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

                                                        <CustomInputField
                                                            type="email"
                                                            value={values?.email}
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
                                                            type="text"
                                                            value={values?.ifsc}
                                                            hasError={errors.ifsc && touched.ifsc}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.ifsc}
                                                            autoFocus={true}
                                                            id="ifsc"
                                                            name="ifsc"
                                                            placeholder="Ifsc"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.bank_account_number}
                                                            hasError={errors.bank_account_number && touched.bank_account_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank_account_number}
                                                            autoFocus={true}
                                                            id="bank_account_number"
                                                            name="bank_account_number"
                                                            placeholder="Bank Account Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.company}
                                                            hasError={errors.company && touched.company}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.company}
                                                            autoFocus={true}
                                                            id="company"
                                                            name="company"
                                                            placeholder="Company Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.aadhar_number}
                                                            hasError={errors.aadhar_number && touched.aadhar_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.aadhar_number}
                                                            autoFocus={true}
                                                            id="aadhar_number"
                                                            name="aadhar_number"
                                                            placeholder="Aadhar Number (Space Must After 4 digit)"
                                                        />
                                                    </div>
                                                    {userId &&
                                                        <div className="col-xl-6 mb-3">
                                                            <select className="form-select" aria-label="Default select example" id="user_id" name="user_id"
                                                                defaultValue={values?.user_id}
                                                                onChange={handleChange}
                                                            >
                                                                {userId?.map((item,i) => {
                                                                    return <>
                                                                        <option value={item?._id}>{item?.name}</option>
                                                                    </>
                                                                })}
                                                            </select>

                                                        </div>
                                                    }
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.pan_number}
                                                            hasError={errors?.pan_number && touched.pan_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors?.pan_number}
                                                            autoFocus={true}
                                                            id="pan_number"
                                                            name="pan_number"
                                                            placeholder="Pan Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            placeholder="Address *"
                                                            value={values?.address}
                                                            hasError={errors.address && touched.address}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.address}
                                                            autoFocus={true}
                                                            id="address"
                                                            name="address"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            placeholder="Meta Description *"
                                                            value={values?.meta_description}
                                                            hasError={errors.meta_description && touched.meta_description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_description}
                                                            autoFocus={true}
                                                            id="meta_description"
                                                            name="meta_description"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.meta_title}
                                                            hasError={errors.meta_title && touched.meta_title}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_title}
                                                            autoFocus={true}
                                                            id="meta_title"
                                                            name="meta_title"
                                                            placeholder="Meta Tittle"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.meta_keyword}
                                                            hasError={errors.meta_keyword && touched.meta_keyword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_keyword}
                                                            autoFocus={true}
                                                            id="meta_keyword"
                                                            name="meta_keyword"
                                                            placeholder="Meta Keyword"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="status_id" name="status_id"
                                                            defaultValue={values?.status_id}
                                                            onChange={handleChange}
                                                        >
                                                            <option selected disabled> select Mode</option>
                                                            <option value={true}> Yes</option>
                                                            <option value={false}> No</option>
                                                        </select>

                                                    </div>


                                                </div>
                                                <div>
                                                    <Link to='/agent-onboarding-list' className="btn btn-danger light ms-1">Cancel</Link>
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
            </div>
        </>
    )
}
export default AddAgentOnbording