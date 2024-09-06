import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { useNavigate, useParams } from 'react-router-dom';
import { addStaffKycDoc, clodinaryImage } from '../../../api/login/Login';
import { toast } from 'react-toastify';
import CustomInputField from '../../../common/CustomInputField';
import { Formik } from 'formik';
import notApproved from "../../../assets/icons/cropped_image.png";
import { baseUrlImage } from '../../../baseUrl';

function StaffKycForm() {
    const [initialValues, setInitialValues] = useState({
        adhaar_front_card: "",
        adhaar_back_card: "",
        pan_card: "",
        bank_proof: "",
        kyc_video: "",
        latitude: null,
        longitude: null,
    });

    const [imagePreviews, setImagePreviews] = useState({
        adhaar_front_card: "",
        adhaar_back_card: "",
        pan_card: "",
        bank_proof: "",
        kyc_video: "",
    });
    const [error, setError] = useState(null);

    const params = useParams();
    const navigate = useNavigate();
    const breadCrumbsTitle = {
        id: "1",
        title_2: `${params?.id ? "UPDATE" : "ADD"} Staff KYC Details`,
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Staff KYC Details Successfully.`, {
            position: "top-right",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Staff KYC Details Successfully.`, {
            position: "top-right",
        });
    };

    const colodinaryImage = async (e, fieldName, setFieldValue) => {
        const imgs = new FormData();
        imgs.append("image", e.target.files[0]);

        // Update preview
        const reader = new FileReader(1);
        reader.onloadend = () => {
            setImagePreviews(prevState => ({
                ...prevState,
                [fieldName]: reader.result,
            }));
        };
        reader.readAsDataURL(e.target.files[0]);

        try {
            const res = await clodinaryImage(imgs);
            setFieldValue(fieldName, res?.data?.url);
            // Assuming the response contains the image URL
            console.log(res.data);
            setInitialValues(prevState => ({
                ...prevState,
                [fieldName]: res.data.data.url,
            }));
        } catch (error) {
            alert("Profile not uploaded");
        }
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setInitialValues({
                        ...initialValues,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not available.');
        }
    }, []);

    const submitForm = async (field) => {
        console.log(initialValues);

        const docsObj = {
            ...field,
            adhaar_back_card: field.adhaar_back_card,
            adhaar_front_card: field.adhaar_front_card,
            pan_card: field.pan_card,
            bank_proof: field.bank_proof,
            kyc_video: field.kyc_video
        };
        console.log(docsObj);
        try {
            const res = await addStaffKycDoc(docsObj);
            if (res?.statusCode === "200") {
                toastSuccessMessage();
                navigate('/path-to-redirect'); // Add the path to redirect after successful submission
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Staff KYC Details
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        handleBlur,
                                        setFieldValue,
                                        isValid,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                {["adhaar_front_card", "adhaar_back_card", "pan_card", "bank_proof", "kyc_video"].map((field, idx) => (
                                                    <div className="col-xl-6 mb-3" key={idx}>
                                                        <div className='row align-items-center'>
                                                            <div className='col-xl-9'>
                                                                <CustomInputField
                                                                    type="file"
                                                                    onChange={(e) => colodinaryImage(e, field, setFieldValue)}
                                                                    onBlur={handleBlur}
                                                                    id={field}
                                                                    name={field}
                                                                    placeholder={field.replace('_', ' ').toUpperCase()}
                                                                />
                                                            </div>
                                                            <div className='col-xl-3'>
                                                                <div className='profilepic'>
                                                                    {imagePreviews[field] ? <picture>
                                                                        <img
                                                                            src={imagePreviews[field] || `${baseUrlImage}${values[field]}`}
                                                                            alt="KYC Picture"
                                                                        />
                                                                    </picture> : <picture>
                                                                        <img
                                                                            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                                                                            alt="KYC Picture"
                                                                        />
                                                                    </picture>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="col-xl-6 mb-3">
                                                    <div className='row align-items-center'>
                                                        <div className='col-xl-9'>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values?.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                id="name"
                                                                name="name"
                                                                placeholder="KYC Status"
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                        <div className='col-xl-3'>
                                                            <div className='profilepic'>
                                                                <picture>
                                                                    <img src="https://img.freepik.com/premium-vector/approved-seal-stamp-logo-approved-vector-icon_526569-775.jpg" alt="approved" />
                                                                </picture>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
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
        </>
    );
}

export default StaffKycForm;
