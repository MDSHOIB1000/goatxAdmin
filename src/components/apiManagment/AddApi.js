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
                    Manage API Results
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className='row'>
                    {/* Suppliers */}
                    <Form.Group className="mb-3 col-6" controlId="formSuppliers">
                        <Form.Label>Suppliers *</Form.Label>
                        <Form.Select
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                            required
                        >
                            <option value="">Select Supplier</option>
                            <option value="Supplier 1">Supplier 1</option>
                            <option value="Supplier 2">Supplier 2</option>
                            <option value="Supplier 3">Supplier 3</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Air Type */}
                    <Form.Group className="mb-3 col-6" controlId="formAirType">
                        <Form.Label>Air Type *</Form.Label>
                        <Form.Select
                            value={airType}
                            onChange={(e) => setAirType(e.target.value)}
                            required
                        >
                            <option value="">Select Air Type</option>
                            <option value="Domestic">Domestic</option>
                            <option value="International">International</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Search Type */}
                    <Form.Group className="mb-3 col-6" controlId="formSearchType">
                        <Form.Label>Search Type *</Form.Label>
                        <Form.Select
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                            required
                        >
                            <option value="">Select Search Type</option>
                            <option value="One-way">One-way</option>
                            <option value="Round Trip">Round Trip</option>
                            <option value="Multi-city">Multi-city</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Status */}
                    <Form.Group className="mb-3 col-6" controlId="formStatus">
                        <Form.Label>Status *</Form.Label>
                        <Form.Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Allowed Airline */}
                    <Form.Group className="mb-3 col-6" controlId="formAllowedAirline">
                        <Form.Label>Allowed Airline</Form.Label>
                        <input className='form-control' />
                    </Form.Group>

                    {/* Excluded Airline */}
                    <Form.Group className="mb-3 col-6" controlId="formExcludedAirline">
                        <Form.Label>Excluded Airline</Form.Label>
                        <input className='form-control' />
                    </Form.Group>

                    {/* Fare Type */}
                    <Form.Group className="mb-3 col-6" controlId="formFareType">
                        <Form.Label>Fare Type</Form.Label>
                        <Form.Select
                            value={fareType}
                            onChange={(e) => setFareType(e.target.value)}
                        >
                            <option value="">Select Fare Type</option>
                            <option value="Refundable">Refundable</option>
                            <option value="Non-Refundable">Non-Refundable</option>
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
