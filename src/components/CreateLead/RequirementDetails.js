import React, { useState } from 'react';

const RequirementDetails = () => {
  const [formData, setFormData] = useState({
    course: '',
    streamType: '',
    budget: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="form-group col-4">
        <label htmlFor="course">Course</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Course</option>
          <option value="course1">Course 1</option>
          <option value="course2">Course 2</option>
          <option value="course3">Course 3</option>
        </select>
      </div>

      <div className="form-group col-4">
        <label htmlFor="streamType">Stream Type</label>
        <select
          id="streamType"
          name="streamType"
          value={formData.streamType}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Stream Type</option>
          <option value="stream1">Stream 1</option>
          <option value="stream2">Stream 2</option>
          <option value="stream3">Stream 3</option>
        </select>
      </div>

      <div className="form-group col-4">
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Budget"
        />
      </div>

      <div className="form-group col-4">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Location"
        />
      </div>

    </form>
  );
};

export default RequirementDetails;
