import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CallAddModel(props) {
    const [formValues, setFormValues] = useState({
        callerNumber: '',
        startTime: '',
        callDuration: '',
        assignedTo: '',
        convertStatus: '',
        providerName: '',
        callerFrom: '',
        recordingFileName: '',
        leadId: '',
        requestId: '',
        autoDialerId: '',
        simName: '',
        callDirection: '',
        callStatus: '',
        callSource: '',
        extensionUser: '',
        callerTo: '',
        landingNumber: '',
        conversationUuid: '',
        leg: '',
        deviceSerialNumber: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.callerNumber = formValues.callerNumber ? "" : "Caller Number is required.";
        tempErrors.startTime = formValues.startTime ? "" : "Start Time is required.";
        tempErrors.assignedTo = formValues.assignedTo ? "" : "Assigned To is required.";
        tempErrors.convertStatus = formValues.convertStatus ? "" : "Convert Status is required.";
        tempErrors.providerName = formValues.providerName ? "" : "Provider Name is required.";
        tempErrors.callerFrom = formValues.callerFrom ? "" : "Caller From is required.";
        tempErrors.leadId = formValues.leadId ? "" : "Lead ID is required.";
        tempErrors.simName = formValues.simName ? "" : "SIM Name is required.";
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
                    Quick Create Calls
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="container mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Caller Number</label>
                            <input
                                type="text"
                                name="callerNumber"
                                style={{ width: "100%" }}
                                value={formValues.callerNumber}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.callerNumber && <div className="text-danger">{errors.callerNumber}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Start Time</label>
                            <input
                                type="datetime-local"
                                name="startTime"
                                value={formValues.startTime}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.startTime && <div className="text-danger">{errors.startTime}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Call Duration</label>
                            <input
                                type="time"
                                name="callDuration"
                                value={formValues.callDuration}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Call Direction</label>
                            <select
                                name="callDirection"
                                value={formValues.callDirection}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Inbound">Inbound</option>
                                <option value="Outbound">Outbound</option>
                            </select>
                        </div>
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
                            <label>Call Status</label>
                            <select
                                name="callStatus"
                                value={formValues.callStatus}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Completed">Completed</option>
                                <option value="Failed">Failed</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Convert Status</label>
                            <select
                                name="convertStatus"
                                value={formValues.convertStatus}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Converted">Converted</option>
                                <option value="Not Converted">Not Converted</option>
                            </select>
                            {errors.convertStatus && <div className="text-danger">{errors.convertStatus}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Call Source</label>
                            <select
                                name="callSource"
                                value={formValues.callSource}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Website">Website</option>
                                <option value="App">App</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Provider Name</label>
                            <input
                                type="text"
                                name="providerName"
                                style={{ width: "100%" }}
                                value={formValues.providerName}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.providerName && <div className="text-danger">{errors.providerName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Extension User</label>
                            <select
                                name="extensionUser"
                                value={formValues.extensionUser}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="User1">User1</option>
                                <option value="User2">User2</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Caller From</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="callerFrom"
                                value={formValues.callerFrom}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.callerFrom && <div className="text-danger">{errors.callerFrom}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Caller To</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="callerTo"
                                value={formValues.callerTo}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Recording File Name</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="recordingFileName"
                                value={formValues.recordingFileName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Landing Number</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="landingNumber"
                                value={formValues.landingNumber}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Lead ID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="leadId"
                                value={formValues.leadId}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.leadId && <div className="text-danger">{errors.leadId}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>request_id</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="requestId"
                                value={formValues.requestId}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Auto Dialer ID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="autoDialerId"
                                value={formValues.autoDialerId}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>SIM Name</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="simName"
                                value={formValues.simName}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.simName && <div className="text-danger">{errors.simName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Device Serial Number</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="deviceSerialNumber"
                                value={formValues.deviceSerialNumber}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Conversation UUID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="conversationUuid"
                                value={formValues.conversationUuid}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Leg</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="leg"
                                value={formValues.leg}
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

export default CallAddModel;