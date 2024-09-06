
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function LeadInformations() {
    const [formData, setFormData] = useState({
        nameTitle: 'Mr.',
        name: '',
        assignedTo: '',
        mobilePhone: '',
        alternativePhone: '',
        email: '',
        secondaryMail: '',
        leadSource: '',
        leadMedium: '',
        leadStatus: '',
        leadSubStatus: '',
        followUpOn: '',
        reEngagement: '',
        address: '',
        cpName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Row>
                            <Col md={3}>
                                <Form.Select 
                                    name="nameTitle" 
                                    value={formData.nameTitle} 
                                    onChange={handleChange}
                                >
                                    <option>Mr.</option>
                                    <option>Ms.</option>
                                    <option>Mrs.</option>
                                </Form.Select>
                            </Col>
                            <Col md={9}>
                                <Form.Control 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Assigned To</Form.Label>
                       
                          <Form.Select 
                            name="assignedTo" 
                            value={formData.assignedTo} 
                            onChange={handleChange} 
                        >
                            <option>Select An Option</option>
                            <option>assignedTo 1</option>
                            <option>assignedTo 2</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Row>
                            <Col md={3}>
                                <Form.Control 
                                    as="select"
                                    value="+91"
                                    // disabled
                                >
                                    <option value="+91">+91</option>
                                </Form.Control>
                            </Col>
                            <Col md={9}>
                                <Form.Control 
                                    type="text" 
                                    name="mobilePhone" 
                                    value={formData.mobilePhone} 
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Alternative Phone</Form.Label>
                        <Row>
                            <Col md={3}>
                                <Form.Control 
                                    as="select"
                                    value="+91"
                                    // disabled
                                >
                                    <option value="+91">+91</option>
                                </Form.Control>
                            </Col>
                            <Col md={9}>
                                <Form.Control 
                                    type="text" 
                                    name="alternativePhone" 
                                    value={formData.alternativePhone} 
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Secondary Mail</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="secondaryMail" 
                            value={formData.secondaryMail} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Source</Form.Label>
                        <Form.Select 
                            name="leadSource" 
                            value={formData.leadSource} 
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            <option>Source 1</option>
                            <option>Source 2</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Medium</Form.Label>
                        <Form.Select 
                            name="leadMedium" 
                            value={formData.leadMedium} 
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            <option>Medium 1</option>
                            <option>Medium 2</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Status</Form.Label>
                        <Form.Select 
                            name="leadStatus" 
                            value={formData.leadStatus} 
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            <option>Status 1</option>
                            <option>Status 2</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Sub Status</Form.Label>
                        <Form.Select 
                            name="leadSubStatus" 
                            value={formData.leadSubStatus} 
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            <option>Sub Status 1</option>
                            <option>Sub Status 2</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Follow Up On</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="followUpOn" 
                            value={formData.followUpOn} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Re-Engagement</Form.Label>
                        <Form.Select 
                            name="reEngagement" 
                            value={formData.reEngagement} 
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            <option>Re-Engagement 1</option>
                            <option>Re-Engagement 2</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>CP Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="cpName" 
                            value={formData.cpName} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Col>
            </Row>

        </Form>
    );
}

export default LeadInformations;
