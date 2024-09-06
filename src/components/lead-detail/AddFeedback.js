import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddFeedback(props) {
    const [formValues, setFormValues] = useState({
        assignedTo: '',
        name: '',
        phoneNumber: '',
        satisfiedByPricing: '',
        providedCompleteInformation: '',
        bestPartOfVisit: '',
        overallSatisfaction: '',
        leadId: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.assignedTo = formValues.assignedTo ? "" : "Assigned To is required.";
        tempErrors.name = formValues.name ? "" : "Name is required.";
        tempErrors.phoneNumber = formValues.phoneNumber ? "" : "Phone Number is required.";
        tempErrors.satisfiedByPricing = formValues.satisfiedByPricing ? "" : "This field is required.";
        tempErrors.providedCompleteInformation = formValues.providedCompleteInformation ? "" : "This field is required.";
        tempErrors.bestPartOfVisit = formValues.bestPartOfVisit ? "" : "This field is required.";
        tempErrors.overallSatisfaction = formValues.overallSatisfaction ? "" : "Overall Satisfaction is required.";
        tempErrors.leadId = formValues.leadId ? "" : "Lead ID is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formValues);
            // Submit form logic here
        }
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
                    Quick Create Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="container mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Assigned To</label>
                            <select
                                name="assignedTo"
                                value={formValues.assignedTo}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Abdul">Abdul</option>
                                <option value="Someone Else">Someone Else</option>
                            </select>
                            {errors.assignedTo && <div className="text-danger">{errors.assignedTo}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                style={{ width: "100%" }}
                                value={formValues.name}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                style={{ width: "100%" }}
                                value={formValues.phoneNumber}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Satisfied by Pricing</label>
                            <select
                                name="satisfiedByPricing"
                                value={formValues.satisfiedByPricing}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errors.satisfiedByPricing && <div className="text-danger">{errors.satisfiedByPricing}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Has the representative provided the complete information?</label>
                            <select
                                name="providedCompleteInformation"
                                value={formValues.providedCompleteInformation}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errors.providedCompleteInformation && <div className="text-danger">{errors.providedCompleteInformation}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Best Part of Visit</label>
                            <input
                                type="text"
                                name="bestPartOfVisit"
                                style={{ width: "100%" }}
                                value={formValues.bestPartOfVisit}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.bestPartOfVisit && <div className="text-danger">{errors.bestPartOfVisit}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Overall Satisfaction</label>
                            <select
                                name="overallSatisfaction"
                                value={formValues.overallSatisfaction}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Very Satisfied">Very Satisfied</option>
                                <option value="Satisfied">Satisfied</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Dissatisfied">Dissatisfied</option>
                                <option value="Very Dissatisfied">Very Dissatisfied</option>
                            </select>
                            {errors.overallSatisfaction && <div className="text-danger">{errors.overallSatisfaction}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Lead ID</label>
                            <input
                                type="text"
                                name="leadId"
                                style={{ width: "100%" }}
                                value={formValues.leadId}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.leadId && <div className="text-danger">{errors.leadId}</div>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddFeedback;
