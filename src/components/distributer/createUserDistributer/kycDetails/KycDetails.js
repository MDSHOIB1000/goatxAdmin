import React, { useState } from 'react'
import { baseUrlImage, baseUrVideos } from '../../../../baseUrl';
import dummyAdhaarFront from "../../../../assets/images/kyc/adhaarFront.png"
import dummyAdhaarBack from "../../../../assets/images/kyc/adhharBack.png"
import gst from "../../../../assets/images/kyc/kycCirtificate.png"
import pancard from "../../../../assets/images/kyc/panCard.png"
import bankProof from "../../../../assets/images/kyc/bankProof.png"
import kycVid from "../../../../assets/images/kyc/kycVideo.png"
import shopinside from "../../../../assets/images/kyc/shop-inside.jpeg"
import shopoutside from "../../../../assets/images/kyc/blankshop1.png"
import "../kycDetails/KycDetails.css"
import KycModals from './kycModals/KycModals';
import { FaEye } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { ModalImgShow } from './ModalImgShow';

function KycDetails({ initialValues, state }) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [cantain, setcantain] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const CLickImgShow = (url, str) => {
        handleShow()
        setcantain({ url: url, str: str })
    }

    const renderDocumentCard = (title, docUrl, dummyImg, docName) => (
        <div className='col-xl-3'>
            <div className="card-body p-0 m-4">
                <div className="table-responsive active-projects style-1 style-11">
                    <div className="tbl-caption justify-content-center">
                        <h4 className="heading mb-0 border p-1 rounded udtfont"><b>{title}</b></h4>
                    </div>
                    <div className="card mt-3" onClick={() => { CLickImgShow(docUrl, title) }}>
                        {docUrl ? (
                            <div className="preferably-square">
                                <picture>
                                    <img src={`${baseUrlImage}${docUrl}`} alt='document' width={100 + "%"} />
                                </picture>
                            </div>
                        ) : (
                            <div className="preferably-square">
                                <picture>
                                    <img src={dummyImg} alt='document' width={100 + "%"} />
                                </picture>
                                <figcaption className='text-center p-2'>
                                    <strong>{title} Not Found</strong>
                                </figcaption>
                            </div>
                        )}
                        <div className="eyeV"><FaEye /></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="ListDistributer m-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1 style-11">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>KYC DETAILS LIST</b></h4>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons"></div>
                                    <div className='row'>
                                        {renderDocumentCard("Aadhar Card Front", initialValues?.docs?.adhaar_front_card, dummyAdhaarFront, 'adhaar_front_card')}
                                        {renderDocumentCard("Aadhar Card Back", initialValues?.docs?.adhaar_back_card, dummyAdhaarBack, 'adhaar_back_card')}
                                        {renderDocumentCard("Pan Card", initialValues?.docs?.pan_card, pancard, 'pan_card')}
                                        {renderDocumentCard("Bank Proof", initialValues?.docs?.bank_proof, bankProof, 'bank_proof')}
                                        {renderDocumentCard("NEET Mark Sheet", initialValues?.docs?.neet_mark_sheet, dummyAdhaarFront, 'neet_mark_sheet')}
                                        {renderDocumentCard("NEET Admit Card", initialValues?.docs?.neet_admit_card, dummyAdhaarFront, 'neet_admit_card')}
                                        {renderDocumentCard("10th Class Marksheet", initialValues?.docs?.tenth_class_marksheet, dummyAdhaarFront, 'tenth_class_marksheet')}
                                        {renderDocumentCard("12th Class Marksheet", initialValues?.docs?.twelfth_class_marksheet, dummyAdhaarFront, 'twelfth_class_marksheet')}
                                        {renderDocumentCard("Transfer Certificate", initialValues?.docs?.transfer_certificate, dummyAdhaarFront, 'transfer_certificate')}
                                        {renderDocumentCard("Migration Certificate", initialValues?.docs?.migration_certificate, dummyAdhaarFront, 'migration_certificate')}
                                        {renderDocumentCard("Character Certificate", initialValues?.docs?.character_certificate, dummyAdhaarFront, 'character_certificate')}
                                        {renderDocumentCard("Domicile Certificate", initialValues?.docs?.domicile_certificate, dummyAdhaarFront, 'domicile_certificate')}
                                        {renderDocumentCard("Income Certificate", initialValues?.docs?.income_certificate, dummyAdhaarFront, 'income_certificate')}
                                        {renderDocumentCard("Gap Year Affidavit", initialValues?.docs?.gap_year_affidavit, dummyAdhaarFront, 'gap_year_affidavit')}
                                        {renderDocumentCard("Original ID", initialValues?.docs?.original_id, dummyAdhaarFront, 'original_id')}
                                        {renderDocumentCard("Bonds", initialValues?.docs?.bonds, dummyAdhaarFront, 'bonds')}
                                        {renderDocumentCard("Passport Size Photos", initialValues?.docs?.passport_size_photos, dummyAdhaarFront, 'passport_size_photos')}
                                        {renderDocumentCard("Post Card Size Photo", initialValues?.docs?.post_card_size_photo, dummyAdhaarFront, 'post_card_size_photo')}
                                        {/* Add more document cards as needed */}
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <KycModals open={open} setOpen={setOpen} kycVideo={state?.kycVideo ? state?.kycVideo : "KYC Videos Not Found"} />

            <Modal show={show} onHide={handleClose} keyboard={false} size='sm' centered className='naomedClass'>
                <ModalImgShow handleClose={handleClose} cantain={cantain} />
            </Modal>
        </section>
    )
}

export default KycDetails;
