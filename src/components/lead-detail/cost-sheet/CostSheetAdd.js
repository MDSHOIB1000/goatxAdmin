import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CostSheetAdd(props) {
    const [formValues, setFormValues] = useState({
        assignedTo: '',
        lead: '',
        projectName: '',
        unitNo: '',
        flatType: '',
        blockNo: '',
        floor: '',
        ratePerSqFt: '',
        superBuildUpArea: '',
        udsArea: '',
        carpetArea: '',
        guidelineValue: '',
        basicPrice: '',
        constructionCost: '',
        landCost: '',
        totalAmount: '',
        additionalCharges: '',
        grandTotal: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.assignedTo = formValues.assignedTo ? "" : "Assigned To is required.";
        tempErrors.lead = formValues.lead ? "" : "Lead is required.";
        tempErrors.projectName = formValues.projectName ? "" : "Project Name is required.";
        tempErrors.unitNo = formValues.unitNo ? "" : "Unit No is required.";
        tempErrors.ratePerSqFt = formValues.ratePerSqFt ? "" : "Rate Per Sq.Ft is required.";
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
                    Quick Create Cost Sheet
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
                            <label>Lead</label>
                            <input
                                type="text"
                                name="lead"
                                style={{ width: "100%" }}
                                value={formValues.lead}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.lead && <div className="text-danger">{errors.lead}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Course   Name</label>
                            <input
                                type="text"
                                name="projectName"
                                style={{ width: "100%" }}
                                value={formValues.projectName}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.projectName && <div className="text-danger">{errors.projectName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Unit No</label>
                            <input
                                type="text"
                                name="unitNo"
                                style={{ width: "100%" }}
                                value={formValues.unitNo}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.unitNo && <div className="text-danger">{errors.unitNo}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Flat Type</label>
                            <input
                                type="text"
                                name="flatType"
                                style={{ width: "100%" }}
                                value={formValues.flatType}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Block No</label>
                            <input
                                type="text"
                                name="blockNo"
                                style={{ width: "100%" }}
                                value={formValues.blockNo}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Floor</label>
                            <input
                                type="text"
                                name="floor"
                                style={{ width: "100%" }}
                                value={formValues.floor}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Rate Per Sq.Ft</label>
                            <input
                                type="text"
                                name="ratePerSqFt"
                                style={{ width: "100%" }}
                                value={formValues.ratePerSqFt}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.ratePerSqFt && <div className="text-danger">{errors.ratePerSqFt}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Super Build Up Area</label>
                            <input
                                type="text"
                                name="superBuildUpArea"
                                style={{ width: "100%" }}
                                value={formValues.superBuildUpArea}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>UDS Area</label>
                            <input
                                type="text"
                                name="udsArea"
                                style={{ width: "100%" }}
                                value={formValues.udsArea}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Carpet Area</label>
                            <input
                                type="text"
                                name="carpetArea"
                                style={{ width: "100%" }}
                                value={formValues.carpetArea}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Guideline Value</label>
                            <input
                                type="text"
                                name="guidelineValue"
                                style={{ width: "100%" }}
                                value={formValues.guidelineValue}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Basic Price</label>
                            <input
                                type="text"
                                name="basicPrice"
                                style={{ width: "100%" }}
                                value={formValues.basicPrice}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Construction Cost</label>
                            <input
                                type="text"
                                name="constructionCost"
                                style={{ width: "100%" }}
                                value={formValues.constructionCost}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Land Cost</label>
                            <input
                                type="text"
                                name="landCost"
                                style={{ width: "100%" }}
                                value={formValues.landCost}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Total Amount</label>
                            <input
                                type="text"
                                name="totalAmount"
                                style={{ width: "100%" }}
                                value={formValues.totalAmount}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Additional Charges</label>
                            <input
                                type="text"
                                name="additionalCharges"
                                style={{ width: "100%" }}
                                value={formValues.additionalCharges}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Grand Total</label>
                            <input
                                type="text"
                                name="grandTotal"
                                style={{ width: "100%" }}
                                value={formValues.grandTotal}
                                onChange={handleChange}
                                className="form-control"
                            />
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

export default CostSheetAdd;