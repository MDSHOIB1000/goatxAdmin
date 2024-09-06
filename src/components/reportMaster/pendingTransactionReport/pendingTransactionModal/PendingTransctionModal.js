import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./PendingTransctionModal.css"

function PendingTransctionModal({ handleClose, show }) {
    return (
        <Modal show={show} onHide={handleClose} className='rounded-0'>
            <Modal.Header closeButton>
                <Modal.Title>Download Data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body">
                    <div className="form-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="name" className='mb-3'>Menu Name</label>
                                    <input type="text" id="download_menu_name disabled b-radius-none" className="form-control" defaultValue="Pending Report" readOnly />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="name" className='my-3'>Your Login Password</label>
                                    <input type="password" id="download_password" className="form-control" placeholder="Login Password" />
                                    <span className="invalid-feedback d-block" id="download_password_errors" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-outline-danger" role="alert" id="download-label" style={{ display: 'none' }}>
                        <strong> Download File :  <a href target="_blank" id="download_link">Click Here</a> </strong>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Verify And Download
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PendingTransctionModal
