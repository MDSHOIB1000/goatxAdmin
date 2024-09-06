import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ComplaintForm({ setShow, show }) {

    const handleClose = () => setShow(false);
    return (
        <div className=''>
            <>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Complaints Information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div className='border-1'>
                                    <div className="aiz-main-content">
                                        <div className="px-15px px-lg-25px">
                                            <div className="card-body">
                                                <div className="card">
                                                    <section className="form-section">
                                                        <div className='card-body'>
                                                            <h6><strong>Informations</strong></h6>
                                                            <div className="row">
                                                                {/* <form action=""> */}
                                                                <div className="col-lg-3">
                                                                    <div>
                                                                        <label htmlFor='mob--1'><b>Mobile No</b></label>
                                                                    </div>
                                                                    <div>
                                                                        <input type="number" className="form-control" id="mob--1" aria-describedby="assetModelNo" placeholder='Enter your Phone No' />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div><label htmlFor='f-name'><b>First Name</b></label></div>
                                                                    <div>
                                                                        <input type="text" className="form-control" id="f-name" aria-describedby="assetModelNo" placeholder="Enter Your First Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div><label htmlFor='l-name'><b>Last Name</b></label></div>
                                                                    <div>
                                                                        <input type="text" className="form-control" id="l-name" aria-describedby="assetModelNo" placeholder="Enter Your Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div>
                                                                        <label htmlFor='bs-id'><b>Complaint No</b></label>
                                                                    </div>
                                                                    <div>
                                                                        <input type="text" className="form-control" id="bs-id" aria-describedby="assetModelNo" placeholder="comp-12378" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div>
                                                                        <div>
                                                                            <label htmlFor='defaultCategory'><b>Status*</b>
                                                                            </label>
                                                                        </div>
                                                                        <div>
                                                                            <select id='defaultCategory' className="form-select" aria-label="Default select example">
                                                                                <option selected>Pending</option>
                                                                                <option value={1}>Progress</option>
                                                                                <option value={1}>Done</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div>
                                                                        <div><label htmlFor='reply'><b>Repaly</b></label></div>
                                                                        <div>
                                                                            <input type="text" className="form-control" id="replys" aria-describedby="assetModelNo" placeholder="Reply" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div>
                                                                        <div>
                                                                            <label htmlFor='defaultCustomer'><b>Building</b>
                                                                            </label>
                                                                        </div>
                                                                        <div>
                                                                            <select id='defaultCustomer' className="form-select" aria-label="Default select example">
                                                                                <option selected>East Building</option>
                                                                                <option value={1}>West Building</option>
                                                                                <option value={1}>North Building</option>
                                                                                <option value={1}>South Building</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div><label htmlFor='assetStatus'><b>Block</b></label></div>
                                                                    <div>
                                                                        <select id='assetStatus' className="form-select" aria-label="Default select example">
                                                                            <option selected>Itkhori</option>
                                                                            <option value={1}>Chatra</option>
                                                                        </select>
                                                                    </div>

                                                                </div>

                                                                <div className="col-lg-3 mt-3">
                                                                    <div><label htmlFor=''>
                                                                        <b>Office  Room</b>
                                                                    </label></div>
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Abaris Sof Tech Pvt.ltd</option>
                                                                        <option value={1}>Capital Tech Pvt.ltd</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div><label htmlFor=''>
                                                                        <b>Ward</b>
                                                                    </label></div>
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>B2</option>
                                                                        <option value={1}>D4</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-lg-3 mt-3">
                                                                    <div><label htmlFor=''>
                                                                        <b>Complaint Type</b>
                                                                    </label></div>
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>major</option>
                                                                        <option value={1}>small</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div><label htmlFor=''>
                                                                        <b>Complaint Nature</b>
                                                                    </label></div>
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>major</option>
                                                                        <option value={1}>small</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-3 mt-3">
                                                                    <div><label htmlFor='reply'><b>Assigned Employee</b></label></div>
                                                                    <div>
                                                                        <input type="text" className="form-control" id="replys" aria-describedby="assetModelNo" placeholder="Assingned Employee" />
                                                                    </div>
                                                                </div>


                                                                {/* </form> */}
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        </div>
    )
}

export default ComplaintForm
