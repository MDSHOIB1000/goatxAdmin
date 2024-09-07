import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddApi(props) {
    const [supplier, setSupplier] = useState('');
    const [airType, setAirType] = useState('');
    const [searchType, setSearchType] = useState('');
    const [status, setStatus] = useState('');
    const [allowedAirline, setAllowedAirline] = useState('');
    const [excludedAirline, setExcludedAirline] = useState('');
    const [fareType, setFareType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            supplier,
            airType,
            searchType,
            status,
            allowedAirline,
            excludedAirline,
            fareType,
        });
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Status
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className='row'>
                    {/* Suppliers */}
                    <Form.Group className="mb-3 col-6" controlId="formSuppliers">
                        <Form.Label>Status *</Form.Label>
                        <Form.Select
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Air Type */}
                    <Form.Group className="mb-3 col-6" controlId="formAirType">
                        <Form.Label>Flight</Form.Label>
                        <Form.Select
                            value={airType}
                            onChange={(e) => setAirType(e.target.value)}
                            required
                        >
                            <option value="">Select Flight</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Search Type */}
                    <Form.Group className="mb-3 col-6" controlId="formSearchType">
                        <Form.Label>Hotel</Form.Label>
                        <Form.Select
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                            required
                        >
                            <option value="">Select Hotel</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Status */}
                    <Form.Group className="mb-3 col-6" controlId="formStatus">
                        <Form.Label>Bus *</Form.Label>
                        <Form.Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="">Select Bus</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary" type="submit">
                    Submit 
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddApi;
