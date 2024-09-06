import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { MdPhotoCamera } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import CustomInputField from "../CustomInputField";
import { clodinaryImage, currencyList, getUpdateProfile, languageList, staffUpdateProfile } from "../../api/login/Login";
import { baseUrlImage } from "../../baseUrl";
import { Spinner } from "react-bootstrap";
import { Alert } from "antd";

function Profile() {
    const [combo, setCombo] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [data, setData] = useState(null);
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
    const [onChangeprofileImage, setOnchangeProfile] = useState();
    const [fileError, setFileError] = useState(null);
    const [profileImgDim, setProfileImgDim] = useState(false); // Default to false for profile image dim state
    const [latLong, setLatLng] = useState(false); // Default to false for profile image dim state
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        mobile: '',
        dob: '',
        latitude: '',
        longitude: "",
        currency: '',
        language_id: '',
        profile: ''
    });
    const params = useParams();

    // Validation function for Formik
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Mobile Number";
        }
        if (!values.latitude) {
            errors.latitude = "Latitude is required";
        }
        if (!values.longitude) {
            errors.longitude = "Longitude is required";
        }
        return errors;
    };

    // Function to handle image upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        // Allowed file types for upload
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/svg+xml', 'image/x-icon'];

        if (file && allowedTypes.includes(file.type)) {
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = async () => {
                if (img.width > 400 || img.height > 400) {
                    setProfileImgDim(true);
                    setProfileImage(null); // Clear the profile image state on invalid dimensions
                } else {
                    try {
                        const res = await clodinaryImage(formData);
                        if (res?.data?.statusCode === "200") {
                            const imageUrl = res.data.data.url;
                            console.log(imageUrl);

                            setProfileImage(imageUrl);
                            setOnchangeProfile(imageUrl)
                            localStorage.setItem('profileImage', imageUrl);
                            setProfileImgDim(false); // Reset profile image dim state after successful upload
                            toast.success('Profile image updated successfully.', { position: "top-center" });
                        } else {
                            setProfileImgDim(true);
                            toast.error('Failed to update profile image.', { position: "top-center" });
                        }
                    } catch (error) {
                        console.error("Failed to upload image", error);
                        toast.error(`Failed to upload image: ${error.message}`, { position: "top-center" });
                    }
                }
            };
        } else {
            setFileError("Invalid file type. Allowed file types are: jpg, jpeg, bmp, gif, png, svg, and ico");
            setProfileImage(null); // Clear the profile image state on invalid file type
        }
    };

    // Function to handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        const clone = { ...values, profile: profileImage };
        try {
            const res = await staffUpdateProfile(clone);
            if (res?.statusCode === "200") {
                const updatedProfile = res.data;
                setInitialValues({ ...updatedProfile, profile: updatedProfile.profile });
                setProfileImage(updatedProfile.profile);
                localStorage.setItem('profileImage', updatedProfile.profile); // Persist image URL
                toast.success('Profile updated successfully.', { position: "top-center" });
            }
        } catch (error) {
            console.error("Failed to update profile", error);
            toast.error(`Failed to update profile: ${error.message}`, { position: "top-center" });
        } finally {
            setSubmitting(false);
        }
    };

    // Fetch language and currency data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const languageData = await languageList();
                const currencyData = await currencyList();
                setCombo(languageData?.data || []);
                setCurrency(currencyData?.data || []);
            } catch (error) {
                console.error("Failed to fetch data", error);
                toast.error(`Failed to fetch data: ${error.message}`, { position: "top-center" });
            }
        };
        fetchData();
    }, []);

    // Fetch user profile data on component mount
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const profileData = await getUpdateProfile();
                setData(profileData?.data?.staff);
                setLatLng(profileData?.data)
            } catch (error) {
                console.error("Failed to fetch profile data", error);
                toast.error(`Failed to fetch profile data: ${error.message}`, { position: "top-center" });
            }
        };
        fetchProfileData();
    }, []);

    // Update form values and profile image when profile data changes
    useEffect(() => {
        if (data) {
            const ob = {
                name: data?.name || "",
                email: data?.email || "",
                mobile: data?.mobile || "",
                dob: data?.dob || "",
                latitude: data?.latitude || "",
                longitude: data?.longitude || "",
                language_id: data?.language_id || "",
                profile: data?.profile || ""
            };
            setInitialValues(ob);
            setProfileImage(data?.profile || null);
            localStorage.setItem('profileImage', data?.profile || null); // Persist image URL
        }
    }, [data]);

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        UPDATE PROFILE
                                    </h4>
                                </div>

                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={handleSubmit}
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
                                            isSubmitting,
                                        } = formik;

                                        return (
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="main-img-div" style={{ position: 'relative', textAlign: 'center' }}>
                                                            <div className="profile-container">
                                                                {!profileImage ? (
                                                                    <img id="avatar-image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Picture" />
                                                                ) : (
                                                                    <div className="box-imag mb-4">
                                                                        {profileImage != undefined ? (
                                                                            <img src={`${baseUrlImage}${profileImage}`} className="img-fluid w-100 object-fit-cover " alt="Profile Img not found" />
                                                                        ) : onChangeprofileImage ? (
                                                                            <>
                                                                                <p>
                                                                                    {console.log("2020")}
                                                                                </p>
                                                                                <img src={`${baseUrlImage}${onChangeprofileImage}`} className="img-fluid w-100 object-fit-cover" alt="Profile Img not found" />
                                                                            </>
                                                                        ) : (
                                                                            <span>
                                                                                <Spinner animation="border" className="text-center" /> <small>updating...</small>
                                                                            </span>
                                                                        )}

                                                                    </div>
                                                                )}
                                                                <div className="edit-options">
                                                                    <label htmlFor="file-upload" className="edit-icon">
                                                                        <MdPhotoCamera /> {/* Edit icon */}
                                                                    </label>
                                                                    <input id="file-upload" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            {profileImgDim ? <div className="w-50 m-auto"><Alert message="Image resolution is too high(400 X 400 px)" type="warning" showIcon closable /></div> : ""}
                                                        </div>
                                                    </div>

                                                    {/* Input fields */}
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            error={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            id="name"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="email"
                                                            value={values.email}
                                                            error={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            id="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.mobile}
                                                            error={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            id="mobile"
                                                            placeholder="Mobile Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={latLong?.lat ?? values.latitude}
                                                            error={touched.latitude && !!errors.latitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.latitude}
                                                            id="latitude"
                                                            placeholder="Latitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={latLong?.long ?? values.longitude}
                                                            error={touched.longitude && !!errors.longitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.longitude}
                                                            id="longitude"
                                                            placeholder="Longitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            id="language_id"
                                                            name="language_id"
                                                            value={values.language_id}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select Language</option>
                                                            {combo.map((item) => (
                                                                <option key={item._id} value={item._id}>
                                                                    {item.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Submit Button */}
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Updating...' : 'Update'}
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
    );
}

export default Profile;
