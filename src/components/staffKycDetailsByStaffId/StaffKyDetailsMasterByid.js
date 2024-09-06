import React, { useEffect, useState } from 'react';
import { addStaffKycDoc, clodinaryImage, getStaffKycDocStaffId } from '../../api/login/Login';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StaffKycDetailsByid from './staffKycDetailsByid/StaffKycDetailsById';

function StaffKycDetailsMasterByid() {
    const [initialValues, setInitialValues] = useState({
        adhaar_front_card: '',
        adhaar_back_card: '',
        pan_card: '',
        bank_proof: '',
        kyc_video: '',
        is_approved: '',
        latitude: null,
        longitude: null,
    });

    const [imagePreviews, setImagePreviews] = useState({
        adhaar_front_card: '',
        adhaar_back_card: '',
        pan_card: '',
        bank_proof: '',
        kyc_video: '',
    });

    const [error, setError] = useState(null);
    const [initialStatus, setInitialStatus] = useState({
        is_approved: '',
    });

    const params = useParams();
    const navigate = useNavigate();

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? 'Update' : 'Add'} Staff KYC Details Successfully.`, {
            position: 'top-right',
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(`${message} `, {
            position: 'top-right',
        });
    };

    

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setInitialValues((prevState) => ({
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
    }, []);

    useEffect(() => {
        async function fetchGetKYCdocu(id) {
            try {
                const kycResponse = await getStaffKycDocStaffId(id);
                setInitialStatus(kycResponse?.data);
                if (kycResponse?.data?.StaffDoc) {
                    setInitialValues((prevState) => ({ ...prevState, ...kycResponse.data?.StaffDoc }));
                } else {
                    toastErrorMessage('Staff KYC details not found');
                }
            } catch (error) {
                toastErrorMessage('Failed to fetch Staff KYC details');
            }
        }

        if (params.id) {
            fetchGetKYCdocu(params.id);
        }
    }, [params.id]);

    return (
        <>
            <StaffKycDetailsByid
                imagePreviews={imagePreviews}
                initialValues={initialValues}
                error={error}
                initialStatus={initialStatus}
                setInitialStatus={setInitialStatus}
            />
        </>
    );
}

export default StaffKycDetailsMasterByid;
