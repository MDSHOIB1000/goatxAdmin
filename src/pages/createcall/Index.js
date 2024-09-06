import { useState } from "react";
import { useParams } from "react-router-dom"

function CreateCall() {
    const params = useParams()
    const [formData, setFormData] = useState({
        callerNumber: "",
        startTime: "",
        callDuration: "",
        callDirection: "",
        assignedTo: "Abdul",
        convertStatus: "",
        providerName: "",
        callerFrom: "",
        callerTo: "",
        recordingFileName: "",
        enquiryID: "",
        hungUpReason: "",
        requestID: "",
        autoDialerID: "",
        simName: "",
        callStatus: "",
        callSource: "",
        extensionUser: "",
        landingNumber: "",
        leadID: "",
        conversationUUID: "",
        leg: "",
        deviceSerialNumber: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return <div className="row m-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0">{params?.id ? "Edit Call" : "Create Call"}</h4>
                        </div>
                        <form className="row g-3 p-3">
                            <div className="col-md-4">
                                <label>Caller Number</label>
                                <div className="input-group">
                                    
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="callerNumber"
                                        value={formData.callerNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Start Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    name="startTime"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Call Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="callDuration"
                                    value={formData.callDuration}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Call Direction</label>
                                <select
                                    className="form-select"
                                    name="callDirection"
                                    value={formData.callDirection}
                                    onChange={handleChange}
                                >
                                    <option value="">Select An Option</option>
                                    <option value="Inbound">Inbound</option>
                                    <option value="Outbound">Outbound</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label>Assigned To</label>
                                  <select
                                    className="form-select"
                                    name="assignedTo"
                                    value={formData.assignedTo}
                                    onChange={handleChange}
                                >
                                    <option value="">Select An Option</option>
                                    {/* Add options as needed */}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label>Convert Status</label>
                                <select
                                    className="form-select"
                                    name="convertStatus"
                                    value={formData.convertStatus}
                                    onChange={handleChange}
                                >
                                    <option value="">Select An Option</option>
                                    {/* Add options as needed */}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label>Provider Name</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="providerName"
                                        value={formData.providerName}
                                        onChange={handleChange}
                                    />
                                  
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Extension User</label>
                                <select
                                    className="form-select"
                                    name="extensionUser"
                                    value={formData.extensionUser}
                                    onChange={handleChange}
                                >
                                    <option value="">Select An Option</option>
                                    {/* Add options as needed */}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label>Caller From</label>
                                <div className="input-group">
                                    
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="callerFrom"
                                        value={formData.callerFrom}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Caller To</label>
                                <div className="input-group">
                                    
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="callerTo"
                                        value={formData.callerTo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Recording File Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="recordingFileName"
                                    value={formData.recordingFileName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Landing Number</label>
                                <div className="input-group">
                                    
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="landingNumber"
                                        value={formData.landingNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Enquiry ID</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="enquiryID"
                                        value={formData.enquiryID}
                                        onChange={handleChange}
                                    />
                                   
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Lead ID</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="leadID"
                                        value={formData.leadID}
                                        onChange={handleChange}
                                    />
                                  
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label>Hung-up Reason</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="hungUpReason"
                                    value={formData.hungUpReason}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Request ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="requestID"
                                    value={formData.requestID}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Auto Dialer ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="autoDialerID"
                                    value={formData.autoDialerID}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>SIM Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="simName"
                                    value={formData.simName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Conversation UUID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="conversationUUID"
                                    value={formData.conversationUUID}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Leg</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="leg"
                                    value={formData.leg}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Device Serial Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="deviceSerialNumber"
                                    value={formData.deviceSerialNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Call Status</label>
                                <select
                                    className="form-select"
                                    name="callStatus"
                                    value={formData.callStatus}
                                    onChange={handleChange}
                                >
                                    <option value="">Select An Option</option>
                                    {/* Add options as needed */}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label>Call Source</label>
                                <select
                                    className="form-select"
                                    name="callSource"
                                    value={formData.callSource}
                                    onChange={handleChange}
                                >
                                    <option value="">Select An Option</option>
                                    {/* Add options as needed */}
                                </select>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CreateCall