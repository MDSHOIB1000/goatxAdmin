import React, { useState } from 'react';

const SystematicInformation = () => {
    const [formData, setFormData] = useState({
        enquireStatus: '',
        convertedLeadStatus: '',
        convertedLeadSubStatus: '',
        leadID: '',
        callID: '',
        assignedTo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 row">
            <div className="form-group col-4">
                <label htmlFor="enquireStatus">Enquire Status:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="enquireStatus"
                    name="enquireStatus"
                    className="form-control"
                    value={formData.enquireStatus}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="convertedLeadStatus">Converted Lead Status:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="convertedLeadStatus"
                    name="convertedLeadStatus"
                    className="form-control"
                    value={formData.convertedLeadStatus}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Rejected">Rejected</option>
                    <option value="On Hold">On Hold</option>
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="convertedLeadSubStatus">Converted Lead Sub Status:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="convertedLeadSubStatus"
                    name="convertedLeadSubStatus"
                    className="form-control"
                    value={formData.convertedLeadSubStatus}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    <option value="Initial Contact">Initial Contact</option>
                    <option value="Follow-Up">Follow-Up</option>
                    <option value="Negotiation">Negotiation</option>
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="leadID">Lead ID:</label>
                <input
                style={{ boxShadow: "none" }}
                    id="leadID"
                    type="text"
                    name="leadID"
                    className="form-control"
                    value={formData.leadID}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group col-4">
                <label htmlFor="callID">Call ID:</label>
                <input
                style={{ boxShadow: "none" }}
                    id="callID"
                    type="text"
                    name="callID"
                    className="form-control"
                    value={formData.callID}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group col-4">
                <label htmlFor="assignedTo">Assigned To:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="assignedTo"
                    name="assignedTo"
                    className="form-control"
                    value={formData.assignedTo}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    <option value="Manager1">Manager1</option>
                    <option value="Manager2">Manager2</option>
                    <option value="Manager3">Manager3</option>
                </select>
            </div>

            {/* Add more fields or sections if needed */}
        </form>
    );
};

export default SystematicInformation;
