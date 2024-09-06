import React, { useState } from 'react'
import { LuUpload } from "react-icons/lu";
// import dummyAdhaarFront from "../../../../assets/images/kyc/adhaarFront.png"
// import dummyAdhaarBack from "../../../../assets/images/kyc/adhharBack.png"
// import gst from "../../../../assets/images/kyc/kycCirtificate.png"
// import pancard from "../../../../assets/images/kyc/panCard.png"
// import bankProof from "../../../../assets/images/kyc/bankProof.png"
// import kycVid from "../../../../assets/images/kyc/kycVideo.png"
// import shopinside from "../../../../assets/images/kyc/shop-inside.jpeg"
// import shopoutside from "../../../../assets/images/kyc/blankshop1.png"
// import kycVideo from "../../../../assets/images/kyc/kycvideos.mp4"
import "./staffKycDetailsByid.css"
import { FaEye } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { baseUrlImage } from '../../../baseUrl';
import { Alert } from 'antd';
import approved from "../../../assets/icons/approved.jpg"
import pending from "../../../assets/icons/pending.webp"
import notApproved from "../../../assets/icons/not-approved.jpg"
import { toast, ToastContainer } from 'react-toastify';
import StaffModalImgShowByid from './staffModalImgShowByid/StaffModalImgShowByid';
import StaffKycVModalDetailByid from './staffKycModalDetailsByid/StaffKycModalDetailByid';
import { updateStatusStaffKycDocStaffId } from '../../../api/login/Login';
import { useParams } from 'react-router-dom';

function StaffKycDetailsByid({ imagePreviews, submitForm, setFieldValue, initialValues, error, initialStatus, setInitialStatus }) {

    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cantain, setcantain] = useState({})
    const params = useParams()

    const [selectedValue, setSelectedValue] = useState('');

    const CLickImgShow = (url, str) => {
        handleShow()
        setcantain({ url: url, str: str })
    }
    const toastSuccessMessage = (message) => {
        toast.success(`${params.id ? `${message}.` : message}`, {
            position: "top-right",
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(`${message} `, {
            position: "top-right",
        });
    };
    const handleChangeStatus = async (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        setInitialStatus({ is_approved: value });
        const KycStatus = { is_approved: value };
        console.log(KycStatus);
        try {
            const statusRes = await updateStatusStaffKycDocStaffId(params.id, KycStatus);
            if (error) {
                toastErrorMessage(statusRes.message)
            } else {
                toastSuccessMessage(statusRes.message)
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    return (
        <>
            <section className="ListDistributer m-4">
                <ToastContainer className="text-center" />
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 style-11">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>STAFF KYC DETAILS</b></h4>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"></div>
                                        <form onSubmit={submitForm}>
                                            <div className='row'>
                                                {["adhaar_front_card", "adhaar_back_card", "pan_card", "bank_proof", "kyc_video"].map((field, idx) => (
                                                    <div className='col-xl-3' key={idx}>
                                                        <div className="card-body p-0 m-4">
                                                            <div className="table-responsive active-projects style-1 style-11">
                                                                <div className="tbl-caption justify-content-center">
                                                                    <h4 className="heading mb-0 border p-1 rounded udtfont"><b>{field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</b></h4>
                                                                </div>
                                                                <div className="card mt-3" style={{}} onClick={() => { CLickImgShow(initialValues?.[field]) }}>
                                                                    {initialValues?.[field] ? (
                                                                        <div className="preferably-square">
                                                                            <picture>
                                                                                {field !== "kyc_video" ? (
                                                                                    <img src={imagePreviews[field] || `${baseUrlImage}${initialValues?.[field]}`} width="100%" />
                                                                                ) : (
                                                                                    <video width="100%" controls>
                                                                                        <source src={imagePreviews[field] || `${baseUrlImage}${initialValues?.[field]}`} type="video/mp4" />
                                                                                        Your browser does not support the video tag.
                                                                                    </video>
                                                                                )}
                                                                            </picture>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="preferably-square">
                                                                            <div className='text-center text-uppercase'><small>Doc Not Uploaded</small></div>
                                                                            <figcaption className='text-center p-2'><strong>{`${field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Not Found`}</strong></figcaption>
                                                                        </div>
                                                                    )}
                                                                    <div className="eyeV"><FaEye /></div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="upload-btn-wrapper">
                                                                <button id="uloadbtn" type='button'><small className='me-2'><LuUpload /></small>{`Upload ${field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}</button>
                                                                <input type="file" className='w-100' name={field} onChange={(e) => handleColodinaryImage(e, field, setFieldValue)} accept={field === "kyc_video" ? "video/mp4,video/x-m4v,video/*" : "image/*"} />
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className='col-xl-3' >
                                                    <div className="card-body p-0 m-4">
                                                        <div className="table-responsive active-projects style-1 style-11">
                                                            <div className='approvedCard mt-2'>
                                                                {
                                                                    initialStatus?.is_approved === "Pending" ? (
                                                                        <img src={pending} alt='Pending' />
                                                                    ) : initialStatus?.is_approved === "Approved" ? (
                                                                        <img src={approved} alt='Approved' />
                                                                    ) : initialStatus?.is_approved === "NotApproved" ? (
                                                                        <img src={notApproved} alt='Not Approved' />
                                                                    ) : (
                                                                        "KYC IS NOT AVAILABLE"
                                                                    )
                                                                }

                                                            </div>
                                                            <div className='d-flex justify-content-center'>
                                                                <div className="col-xl-12">
                                                                    <select
                                                                        className="form-select statusSelect tbl-caption text-white"
                                                                        aria-label="Default select example"
                                                                        onChange={handleChangeStatus}
                                                                        value={initialStatus?.is_approved}
                                                                        name="is_approved"
                                                                    >
                                                                        <option disabled>Select Status</option>
                                                                        <option value={"Pending"} className='bg-warning'>Pending</option>
                                                                        <option value={"Approved"} className='bg-success'>Approved</option>
                                                                        <option value={"NotApproved"} className='bg-danger'>Not Approved</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </form>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        </div>
                                        {error ? (<div className='alert'>
                                            <Alert message="Warning" type="warning" description={error?.message.toUpperCase()} />
                                        </div>) : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <StaffKycVModalDetailByid open={open} setOpen={setOpen}
                    // kycVideo={kycVideo} 
                    kycVideo={initialValues?.kyc_video}
                />

                <Modal
                    show={show}
                    onHide={handleClose}
                    keyboard={false}
                    size='sm'
                    centered
                    className='naomedClass'
                >
                    <StaffModalImgShowByid handleClose={handleClose} cantain={cantain} />
                </Modal>

            </section>

        </>
    )
}

export default StaffKycDetailsByid
