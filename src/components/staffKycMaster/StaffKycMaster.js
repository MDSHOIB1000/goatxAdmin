import React, { useEffect, useState } from 'react'
import StaffKycDetails from './staffKycDetails/StaffKycDetails';
import { addStaffKycDoc, clodinaryImage, getStaffKycDoc } from '../../api/login/Login';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



function StaffKycMasterByid() {
    const [initialValues, setInitialValues] = useState({
        adhaar_front_card: "",
        adhaar_back_card: "",
        pan_card: "",
        bank_proof: "",
        kyc_video: "",
        is_approved: "",
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
    const [fields, setFieldValue] = useState()
    const [error, setError] = useState(null);
    const [aproval, setAproval] = useState("pending");

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

    const toastErrorMessage = (message) => {
        toast.error(`${message} `, {
            position: "top-right",
        });
    };

    const handleColodinaryImage = async (e, fieldName, setFieldValue) => {
        const imgs = new FormData();
        imgs.append("image", e.target.files[0]);

        // Update preview
        const reader = new FileReader();
        const file = e.target.files[0];

        if (file instanceof Blob) {
            reader.onloadend = () => {
                setImagePreviews(prevState => ({
                    ...prevState,
                    [fieldName]: reader.result,
                }));
            };

            reader.readAsDataURL(file);
        } else {
            console.error("Parameter is not of type Blob");
        }


        try {
            const res = await clodinaryImage(imgs);
            // Assuming the response contains the image URL
            setInitialValues(prevState => ({
                ...prevState,
                [fieldName]: res.data.data.url,
            }));
        } catch (error) {
            toastErrorMessage("Docs not uploaded");
        }
    };

    async function fetchGetKYCdocu() {
        try {
            const kycResponse = await getStaffKycDoc();
            setAproval(kycResponse?.data);
            if (kycResponse?.data?.StaffDoc) {
                setInitialValues(prevState => ({ ...prevState, ...kycResponse.data.StaffDoc }));
            } else {
                console.error("No staff data found in response:", kycResponse);
            }
        } catch (error) {
            console.error("Error fetching KYC documents:", error);
        }
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setInitialValues(prevState => ({
                        ...prevState,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }));
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not available.');
        }

        fetchGetKYCdocu();
    }, [params.id]);

    const submitForm = async (e) => {
        e.preventDefault();
        const docsObj = {
            ...initialValues,
            adhaar_back_card: initialValues.adhaar_back_card,
            adhaar_front_card: initialValues.adhaar_front_card,
            pan_card: initialValues.pan_card,
            bank_proof: initialValues.bank_proof,
            kyc_video: initialValues.kyc_video
        };
        console.log(docsObj);
        try {
            const res = await addStaffKycDoc(docsObj);
            if (res?.statusCode === "200") {
                toastSuccessMessage();
                setError(false)

                // navigate('/path-to-redirect');
            } else {
                setError(res)
            }
        } catch (error) {
            toastErrorMessage();
            console.error("Error:", error);
        }
    };

    return (
        <>
            <StaffKycDetails
                imagePreviews={imagePreviews}
                submitForm={submitForm}
                handleColodinaryImage={handleColodinaryImage}
                setFieldValue={setFieldValue} fields={fields}
                initialValues={initialValues}
                error={error}
                aproval={aproval}
            />
        </>
    )
}

export default StaffKycMasterByid
