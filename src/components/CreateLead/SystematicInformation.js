import React, { useState } from 'react';

const SystematicInformation = () => {
    const [formData, setFormData] = useState({
        entityId: '',
        callId: '',
        feedback: '',
        live: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className='row'>
            <div className="form-group col-4">
                <label htmlFor="entityId">Entity ID</label>
                <input
                    type="text"
                    id="entityId"
                    name="entityId"
                    className="form-control"
                    value={formData.entityId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-4">
                <label htmlFor="callId">Call ID</label>
                <input
                    type="text"
                    id="callId"
                    name="callId"
                    className="form-control"
                    value={formData.callId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-4">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                    id="feedback"
                    name="feedback"
                    className="form-control"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group form-check col-4" style={{margin:"0 10px"}}>
                <input
                    type="checkbox"
                    id="live"
                    name="live"
                    className="form-check-input"
                    checked={formData.live}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="live">Live</label>
            </div>
        </form>
    );
};

export default SystematicInformation;
