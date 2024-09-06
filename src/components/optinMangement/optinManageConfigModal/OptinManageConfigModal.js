import React from 'react'
import { FloatingLabel, Form, Modal } from 'react-bootstrap';

function OptinManageConfigModal({ show, setShow }) {
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=''>
                    <Modal.Title >Configure Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Send template message from one of your pre approved templates or send regular message to users.</p>
                    <p><Form.Check
                        inline
                        label="Pre-approved template message"
                        name="group1"
                        type={"radio"}
                        id={`inline-radio-2`}
                    /></p>
                    <p><Form.Check
                        inline
                        label=" Regular Message"
                        name="group1"
                        type={"radio"}
                        id={`inline-radio-2`}
                    /></p>
                    <FloatingLabel controlId="floatingTextarea2" label="You have opt-out, for opt-in kindly type start sand send us">
                        <Form.Control
                            as="textarea"
                            placeholder="You have opt-out, for opt-in kindly type start sand send us"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OptinManageConfigModal
