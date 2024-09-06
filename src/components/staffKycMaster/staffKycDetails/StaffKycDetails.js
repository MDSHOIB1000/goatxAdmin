import React, { useState } from 'react'
import { LuUpload } from "react-icons/lu";
import { FaEye } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { baseUrlImage } from '../../../baseUrl';
import StaffModalImgShow from './staffModalImgShow/StaffModalImgShow';
import { Alert } from 'antd';
import approved from "../../../assets/icons/approved.jpg"
import pending from "../../../assets/icons/pending.webp"
import notApproved from "../../../assets/icons/not-approved.jpg"
import StaffKycVModalDetail from './staffKycModalDetails/StaffKycModalDetail';
import { ToastContainer } from 'react-toastify';
import "./staffKycDetails.css"


function StaffKycDetails({ imagePreviews, submitForm, setFieldValue, handleColodinaryImage, initialValues, error, aproval }) {
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cantain, setcantain] = useState({})

    const CLickImgShow = (url, str) => {
        handleShow()
        setcantain({ url: url, str: str })
    }
    console.log(initialValues);
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
                                                                                    <img src={imagePreviews?.[field] || `${baseUrlImage}${initialValues?.[field]}`} width="100%" />
                                                                                ) : (
                                                                                    <video width="100%" controls>
                                                                                        <source src={imagePreviews?.[field] || `${baseUrlImage}${initialValues?.[field]}`} type="video/mp4" />
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
                                                            <div className={`upload-btn-wrapper ${aproval?.is_approved === "Approved" ? 'd-none' : 'd-block'}`}>
                                                                <button id="uloadbtn" type='button'><small className='me-2'><LuUpload /></small>{`Upload ${field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}</button>
                                                                <input type="file" className='w-100' name={field} onChange={(e) => handleColodinaryImage(e, field, setFieldValue)} accept={field === "kyc_video" ? "video/mp4,video/x-m4v,video/*" : "image/*"} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className='col-xl-3' >
                                                    <div className="card-body p-0 m-4">
                                                        <div className="table-responsive active-projects style-1 style-11">
                                                            <div className="tbl-caption justify-content-center">
                                                                <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Status</b></h4>
                                                            </div>
                                                            <div className='approvedCardv'>
                                                                {
                                                                    aproval?.is_approved === "Pending" ? (
                                                                        <img src={pending} alt='' />
                                                                    ) : (
                                                                        aproval?.is_approved === "Approved" ? (
                                                                            <img src={approved} alt='' />
                                                                        ) : (
                                                                            aproval?.is_approved === "NotApproved" ? (
                                                                                <img src={notApproved} alt='' />
                                                                            ) : (
                                                                                "KYC IS NOT AVILABLE"
                                                                            )
                                                                        )
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    className="btn btn-primary btn-lg me-1"
                                                    type="Submit"
                                                    disabled={aproval?.is_approved === "Approved"}
                                                >
                                                    submit
                                                </button>
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
                <StaffKycVModalDetail open={open} setOpen={setOpen}
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
                    <StaffModalImgShow handleClose={handleClose} cantain={cantain} />
                </Modal>

            </section>

        </>
    )
}

export default StaffKycDetails
