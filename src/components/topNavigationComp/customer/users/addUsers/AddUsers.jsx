import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../../../common/CustomInputField";
import {
    addUsers,
    clodinaryImage,
    getUserId,
    listUserType,
    paginationUserTypeMaster,
    updateUser,
} from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import { baseUrlImage } from "../../../../../baseUrl";

const AddUsers = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState(null);
    const [profileImage, setProfileImage] = useState();
    const [initialValues, setinitialValues] = useState({
        name: "",
        email: "",
        profile: "",
        mobile: "",
        dob: "",
        latitude: "",
        longitude: "",
        // password: "",
        emailVerified: false,
        mobileVerified: false,
        user_type_id: "",
        is_otp: false,
        is_kyc: false,
        adhaar_number: "",
        pan_number: "",
        transaction_mode: "",
    });

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexAdhaar = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;

        if (!values.name) {
            errors.name = "Name  is required";
        }
        if (!values.email) {
            errors.email = "E-mail is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid email Id";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Mobile Number";
        }
        // if (!values.profile) {
        //     errors.profile = "Profile is required";
        // }
        if (!values.dob) {
            errors.dob = "DOB is Required";
        }
        if (!values.longitude) {
            errors.longitude = "Longitude is required";
        }
        if (!values.latitude) {
            errors.latitude = "Latitude is required";
        }
        // if (!values.password) {
        //   errors.password = "Password is required";
        // }

        if (!values.emailVerified) {
            errors.emailVerified = "Email Verified is required";
        }
        if (!values.mobileVerified) {
            errors.mobileVerified = "Mobile Verified is required";
        }

        if (!values.user_type_id) {
            errors.user_type_id = "User Type Id is required";
        }

        if (!values.is_otp) {
            errors.is_otp = "Is Otp is required";
        }
        if (!values.is_kyc) {
            errors.is_kyc = "Is Kyc is required";
        }
        if (!values.pan_number) {
            errors.pan_number = "PAN Number is required";
        } else if (!regexPanNumber.test(values.pan_number)) {
            errors.pan_number = "Invalid PAN Number";
        }
        if (!values.adhaar_number) {
            errors.adhaar_number = "Adhaar Number is required";
        } else if (!regexAdhaar.test(values.adhaar_number)) {
            errors.adhaar_number = "Invalid Adhaar Number";
        }

        if (!values.transaction_mode) {
            errors.transaction_mode = "Transaction Mode is required";
        }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        return errors;
    };

    const UserListCombo = async () => {
        try {
            const res = await listUserType();
            setUserList(res?.data);
        } catch (error) { }
    };

    useEffect(() => {
        UserListCombo();
    }, []);

    const imgs = new FormData();
    const colodinaryImage = async (e) => {
        setProfileImage(e.target.files[0]);
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs);
            // console.log(res?.data?.data?.url);
            setProfileImage(res?.data?.data?.url);
        } catch (error) { }
    };

    const handleChange = (e) => {
        const clone = { ...initialValues };
        clone[e.target.name] = e.target.value;
        validate(clone);
        setinitialValues(clone);
    };
    const params = useParams();
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Users Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        const clone = { ...values, profile: profileImage };
        try {
            if (!params?.id) {
                try {
                    const res = await addUsers(clone);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate("/user");
                        }, [4000]);
                    }
                } catch (error) { }
            } else {
                try {
                    const res = await updateUser(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate("/user");
                        }, [4000]);
                    }
                } catch (error) { }
            }
        } catch (error) {
        }

        // try {
        //   // await addUsers(values);
        //   toastSuccessMessage();
        //   // setTimeout(() => {
        //   //   navigate(`/user`);
        //   // }, 5000);
        // } catch (error) {}
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getUserId(params.id);
                    const currencyData = response.data;
                    setinitialValues(currencyData);
                } else {
                    //  setinitialValues({
                    //    name: "",
                    //    code: "",
                    //    curruncy_id: "",
                    //  });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={""} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} USER ADD
                                    </h4>
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
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            placeholder="Name"
                                                            name="name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        {params?.id ? <div className="d-flex">
                                                            <img
                                                                src={`${baseUrlImage}${values?.profile}`}
                                                                alt="profile"
                                                                width={50}
                                                                height={60}
                                                            />
                                                            <CustomInputField
                                                                type="file"
                                                                // value={values?.profile}
                                                                hasError={errors.profile && touched.profile}
                                                                onChange={colodinaryImage}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.profile}
                                                                autoFocus={true}
                                                                id="profile"
                                                                name="profile"
                                                                placeholder="Profile Image"
                                                            />
                                                        </div> : <div className='d-flex'>
                                                            {profileImage && <img
                                                                src={`${baseUrlImage}${profileImage}`}
                                                                alt="profile"
                                                                width={50}
                                                                height={60}
                                                            />}

                                                            <CustomInputField
                                                                type="file"
                                                                // value={values?.profile}
                                                                hasError={errors.profile && touched.profile}
                                                                onChange={colodinaryImage}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.profile}
                                                                autoFocus={true}
                                                                id="profile"
                                                                name="profile"
                                                                placeholder="Profile Image"
                                                            />
                                                        </div>}

                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="email"
                                                            value={values.email}
                                                            hasError={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            autoFocus={true}
                                                            id="email"
                                                            placeholder="Email"
                                                            name="email"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.mobile}
                                                            hasError={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            autoFocus={true}
                                                            id="mobile"
                                                            placeholder="Mobile"
                                                            name="mobile"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            value={values.dob}
                                                            hasError={errors.dob && touched.dob}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.dob}
                                                            autoFocus={true}
                                                            id="dob"
                                                            placeholder="DOB"
                                                            name="dob"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.latitude}
                                                            hasError={errors.latitude && touched.latitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.latitude}
                                                            autoFocus={true}
                                                            id="latitude"
                                                            placeholder="Latitude"
                                                            name="latitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.longitude}
                                                            hasError={errors.longitude && touched.longitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.longitude}
                                                            autoFocus={true}
                                                            id="longitude"
                                                            placeholder="Longitude"
                                                            name="longitude"
                                                        />
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-3">
                            <CustomInputField
                              type="password"
                              value={values.password}
                              hasError={errors.password && touched.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.password}
                              autoFocus={true}
                              id="password"
                              placeholder="Password"
                              name="password"
                            />
                          </div> */}

                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            name="emailVerified"
                                                            value={values.emailVerified}
                                                            onChange={handleChange}
                                                        >
                                                            <option selected>Select Email Verified</option>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            name="mobileVerified"
                                                            value={values.mobileVerified}
                                                            onChange={handleChange}
                                                        >
                                                            <option selected>Select Mobile Verified</option>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.adhaar_number}
                                                            hasError={
                                                                errors.adhaar_number && touched.adhaar_number
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adhaar_number}
                                                            autoFocus={true}
                                                            id="adhaar_number"
                                                            placeholder="Adhaar Number"
                                                            name="adhaar_number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.pan_number}
                                                            hasError={errors.pan_number && touched.pan_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.pan_number}
                                                            autoFocus={true}
                                                            id="pan_number"
                                                            placeholder="Pan Number"
                                                            name="pan_number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            id="user_type_id"
                                                            name="user_type_id"
                                                            value={values.user_type_id}
                                                            onChange={handleChange}
                                                            hasError={
                                                                errors.user_type_id && touched.user_type_id
                                                            }
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.user_type_id && errors.user_type_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select User Type</option>
                                                            {userList &&
                                                                userList?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.user_type}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            name="is_otp"
                                                            value={values.is_otp}
                                                            onChange={handleChange}
                                                        >
                                                            <option selected>Select Is OTP</option>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            name="is_kyc"
                                                            value={values.is_kyc}
                                                            onChange={handleChange}
                                                        >
                                                            <option selected>Select Is KYC</option>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                name="transaction_mode"
                                                                onChange={handleChange}
                                                            >
                                                                <option selected>transaction_mode</option>
                                                                <option value={"online"}>Online</option>
                                                                <option value={"offline"}>Offline</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="/user"
                                                        className="btn btn-danger light ms-1"
                                                    >
                                                        Cancel
                                                    </Link>
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
    );
};

export default AddUsers;
