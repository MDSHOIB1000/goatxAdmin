import React, { useState } from 'react';

const EnquireDetail = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNo: '',
        email: '',
        propertyType: '',
        budget: '',
        interestedProject: '',
        enquireSource: '',
        enquireMedium: '',
        manager: '',
        alternateNumber: '',
        alternateEmail: '',
        location: '',
        address: '',
        additionalInfo: '',
        streamType: '',
        course: ''
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
                <label htmlFor="name">Name:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="mobileNo">Mobile No:</label>
                <input
                    style={{ boxShadow: "none" }}
                    id="mobileNo"
                    type="tel"
                    name="mobileNo"
                    className="form-control"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group col-4">
                <label htmlFor="email">Email:</label>
                <input
                    style={{ boxShadow: "none" }}
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group col-4">
                <label htmlFor="streamType">Stream Type:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="streamType"
                    name="streamType"
                    className="form-control"
                    value={formData.streamType}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="course">Course:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="course"
                    name="course"
                    className="form-control"
                    value={formData.course}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    {formData.streamType === 'Science' && (
                        <>
                            <option value="B.Sc">B.Sc</option>
                            <option value="B.Tech">B.Tech</option>
                            {/* Add more options as needed */}
                        </>
                    )}
                    {formData.streamType === 'Commerce' && (
                        <>
                            <option value="B.Com">B.Com</option>
                            <option value="BBA">BBA</option>
                            {/* Add more options as needed */}
                        </>
                    )}
                    {formData.streamType === 'Arts' && (
                        <>
                            <option value="B.A">B.A</option>
                            <option value="BFA">BFA</option>
                            {/* Add more options as needed */}
                        </>
                    )}
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="budget">Budget:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="budget"
                    name="budget"
                    className="form-control"
                    value={formData.budget}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    {/* Add options dynamically if needed */}
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="enquireSource">Enquire Source:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="enquireSource"
                    name="enquireSource"
                    className="form-control"
                    value={formData.enquireSource}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select An Option</option>
                    {/* Add options dynamically if needed */}
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="enquireMedium">Enquire Medium:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="enquireMedium"
                    name="enquireMedium"
                    className="form-control"
                    value={formData.enquireMedium}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select An Option</option>
                    {/* Add options dynamically if needed */}
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="manager">Manager:</label>
                <select
                    style={{ boxShadow: "none" }}
                    id="manager"
                    name="manager"
                    className="form-control"
                    value={formData.manager}
                    onChange={handleChange}
                >
                    <option value="">Select An Option</option>
                    {/* Add options dynamically if needed */}
                </select>
            </div>

            <div className="form-group col-4">
                <label htmlFor="alternateNumber">Alternate Number:</label>
                <input
                    style={{ boxShadow: "none" }}
                    id="alternateNumber"
                    type="tel"
                    name="alternateNumber"
                    className="form-control"
                    value={formData.alternateNumber}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group col-4">
                <label htmlFor="alternateEmail">Alternate Email:</label>
                <input
                    style={{ boxShadow: "none" }}
                    id="alternateEmail"
                    type="email"
                    name="alternateEmail"
                    className="form-control"
                    value={formData.alternateEmail}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group col-4">
                <label htmlFor="location">Location:</label>
                <input
                    style={{ boxShadow: "none" }}
                    id="location"
                    type="text"
                    name="location"
                    className="form-control"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group col-4">
                <label htmlFor="address">Address:</label>
                <input
                    style={{ boxShadow: "none" }}
                    id="address"
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group col-8">
                <label htmlFor="additionalInfo">Additional Information:</label>
                <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    className="form-control"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                />
            </div>

            {/* New Education Fields */}

        </form>
    );
};

export default EnquireDetail;
