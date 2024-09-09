import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddApi(props) {
    const [markupFor, setMarkupFor] = useState('');
    const [displayMarkup, setDisplayMarkup] = useState('In Tax');
    const [markupType, setMarkupType] = useState('Fixed');
    const [value, setValue] = useState('');
    const [maxLimit, setMaxLimit] = useState('');
    const [holidayDestination, setHolidayDestination] = useState('');
    const [holidayTheme, setHolidayTheme] = useState('');
    const [packageName, setPackageName] = useState('');
    const [status, setStatus] = useState('Active');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            markupFor,
            displayMarkup,
            markupType,
            value,
            maxLimit,
            holidayDestination,
            holidayTheme,
            packageName,
            status,
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
                    Add Holiday Discount
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className='row'>
                    {/* Markup For */}
                    <Form.Group className="mb-3 col-6" controlId="formMarkupFor">
                        <Form.Label>Markup For *</Form.Label>
                        <Form.Select
                            value={markupFor}
                            onChange={(e) => setMarkupFor(e.target.value)}
                            required
                        >
                            <option value="">Please Select</option>
                            <option value="Option1">Option 1</option>
                            <option value="Option2">Option 2</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Display Markup */}
                    <Form.Group className="mb-3 col-6" controlId="formDisplayMarkup">
                        <Form.Label>Display Markup *</Form.Label>
                        <Form.Select
                            value={displayMarkup}
                            onChange={(e) => setDisplayMarkup(e.target.value)}
                            required
                        >
                            <option value="In Tax">In Tax</option>
                            <option value="Out of Tax">Out of Tax</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Markup Type */}
                    <Form.Group className="mb-3 col-6" controlId="formMarkupType">
                        <Form.Label>Markup Type *</Form.Label>
                        <Form.Select
                            value={markupType}
                            onChange={(e) => setMarkupType(e.target.value)}
                            required
                        >
                            <option value="Fixed">Fixed</option>
                            <option value="Percentage">Percentage</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Value */}
                    <Form.Group className="mb-3 col-6" controlId="formValue">
                        <Form.Label>Value *</Form.Label>
                        <Form.Control
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Value"
                            required
                        />
                    </Form.Group>

                    {/* Max Limit */}
                    <Form.Group className="mb-3 col-6" controlId="formMaxLimit">
                        <Form.Label>Max Limit *</Form.Label>
                        <Form.Control
                            type="text"
                            value={maxLimit}
                            onChange={(e) => setMaxLimit(e.target.value)}
                            placeholder="Max Limit"
                            required
                        />
                    </Form.Group>

                    {/* Holiday Destination */}
                    <Form.Group className="mb-3 col-6" controlId="formHolidayDestination">
                        <Form.Label>Holiday Destination *</Form.Label>
                        <Form.Control
                            type="text"
                            value={holidayDestination}
                            onChange={(e) => setHolidayDestination(e.target.value)}
                            placeholder="Holiday Destination"
                            required
                        />
                        <Form.Check
                            type="checkbox"
                            label="Any Destination Name"
                            className="mt-2"
                        />
                    </Form.Group>

                    {/* Holiday Theme */}
                    <Form.Group className="mb-3 col-6" controlId="formHolidayTheme">
                        <Form.Label>Holiday Theme *</Form.Label>
                        <Form.Control
                            type="text"
                            value={holidayTheme}
                            onChange={(e) => setHolidayTheme(e.target.value)}
                            placeholder="Holiday Theme"
                            required
                        />
                        <Form.Check
                            type="checkbox"
                            label="Any Holiday Theme"
                            className="mt-2"
                        />
                    </Form.Group>

                    {/* Package Name */}
                    <Form.Group className="mb-3 col-6" controlId="formPackageName">
                        <Form.Label>Package Name *</Form.Label>
                        <Form.Control
                            type="text"
                            value={packageName}
                            onChange={(e) => setPackageName(e.target.value)}
                            placeholder="Package Name"
                            required
                        />
                        <Form.Check
                            type="checkbox"
                            label="Any Holiday Package Name"
                            className="mt-2"
                        />
                    </Form.Group>

                    {/* Status */}
                    <Form.Group className="mb-3 col-6" controlId="formStatus">
                        <Form.Label>Status *</Form.Label>
                        <Form.Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
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
