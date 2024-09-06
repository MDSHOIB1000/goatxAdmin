import React, { useState } from 'react';

function EnquiryList() {
    // State for filters
    const [filters, setFilters] = useState({
        createdTime: '',
        enquiryNumber: '',
        callId: '',
        leadId: '',
        name: '',
        mobileNo: '',
        stream: '',
        course: '',
        enquireMedium: '',
        enquireSource: '',
        enquireStatus: '',
        convertedLeadStatus: '',
        convertedLeadSubStatus: ''
    });

    // Handle filter change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(filters);
    };

    // Dummy data for table
    const data = [
        {
            createdTime: '2024-08-27 14:32:00',
            enquiryNumber: 'ENQ001',
            callId: 'call_12345',
            leadId: '12345',
            name: 'John Doe',
            mobileNo: '+1234567890',
            stream: 'Engineering',
            course: 'Computer Science',
            enquireMedium: 'Email',
            enquireSource: 'Website',
            enquireStatus: 'New',
            convertedLeadStatus: 'Not Converted',
            convertedLeadSubStatus: 'N/A'
        },
        {
            createdTime: '2024-08-27 15:12:30',
            enquiryNumber: 'ENQ002',
            callId: 'call_12346',
            leadId: '12346',
            name: 'Jane Smith',
            mobileNo: '+1234567891',
            stream: 'Medical',
            course: 'Nursing',
            enquireMedium: 'Phone',
            enquireSource: 'Referral',
            enquireStatus: 'In Progress',
            convertedLeadStatus: 'Converted',
            convertedLeadSubStatus: 'Follow-up Scheduled'
        },
        {
            createdTime: '2024-08-27 16:20:45',
            enquiryNumber: 'ENQ003',
            callId: 'call_12347',
            leadId: '12347',
            name: 'Emily Davis',
            mobileNo: '+1234567892',
            stream: 'Business',
            course: 'MBA',
            enquireMedium: 'Social Media',
            enquireSource: 'Advertisement',
            enquireStatus: 'Closed',
            convertedLeadStatus: 'Converted',
            convertedLeadSubStatus: 'Enrolled'
        },
        {
            createdTime: '2024-08-27 17:05:10',
            enquiryNumber: 'ENQ004',
            callId: 'call_12348',
            leadId: '12348',
            name: 'Michael Brown',
            mobileNo: '+1234567893',
            stream: 'Design',
            course: 'Graphic Design',
            enquireMedium: 'Website',
            enquireSource: 'Organic Search',
            enquireStatus: 'New',
            convertedLeadStatus: 'Not Converted',
            convertedLeadSubStatus: 'N/A'
        },
        {
            createdTime: '2024-08-27 18:22:55',
            enquiryNumber: 'ENQ005',
            callId: 'call_12349',
            leadId: '12349',
            name: 'Laura Wilson',
            mobileNo: '+1234567894',
            stream: 'Engineering',
            course: 'Mechanical Engineering',
            enquireMedium: 'Email',
            enquireSource: 'Website',
            enquireStatus: 'In Progress',
            convertedLeadStatus: 'Converted',
            convertedLeadSubStatus: 'Enrolled'
        }
    ];

    // Filter the data based on filters
    const filteredData = data.filter(item =>
        (filters.createdTime ? item.createdTime.includes(filters.createdTime) : true) &&
        (filters.enquiryNumber ? item.enquiryNumber.includes(filters.enquiryNumber) : true) &&
        (filters.callId ? item.callId.includes(filters.callId) : true) &&
        (filters.leadId ? item.leadId.includes(filters.leadId) : true) &&
        (filters.name ? item.name.includes(filters.name) : true) &&
        (filters.mobileNo ? item.mobileNo.includes(filters.mobileNo) : true) &&
        (filters.stream ? item.stream.includes(filters.stream) : true) &&
        (filters.course ? item.course.includes(filters.course) : true) &&
        (filters.enquireMedium ? item.enquireMedium.includes(filters.enquireMedium) : true) &&
        (filters.enquireSource ? item.enquireSource.includes(filters.enquireSource) : true) &&
        (filters.enquireStatus ? item.enquireStatus.includes(filters.enquireStatus) : true) &&
        (filters.convertedLeadStatus ? item.convertedLeadStatus.includes(filters.convertedLeadStatus) : true) &&
        (filters.convertedLeadSubStatus ? item.convertedLeadSubStatus.includes(filters.convertedLeadSubStatus) : true)
    );

    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        {/* Filter Form */}
                        <div className="filter-form mb-4">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Filter Enquiries</h4>
                                </div>
                            </div>
                            <form className='card'>
                                <div className="row">
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="createdTime"
                                            placeholder="Created Time"
                                            value={filters.createdTime}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="enquiryNumber"
                                            placeholder="Enquiry Number"
                                            value={filters.enquiryNumber}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="callId"
                                            placeholder="Call ID"
                                            value={filters.callId}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="leadId"
                                            placeholder="Lead ID"
                                            value={filters.leadId}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={filters.name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="mobileNo"
                                            placeholder="Mobile No"
                                            value={filters.mobileNo}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="stream"
                                            placeholder="Stream"
                                            value={filters.stream}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="course"
                                            placeholder="Course"
                                            value={filters.course}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <input
                                            type="text"
                                            name="enquireMedium"
                                            placeholder="Enquire Medium"
                                            value={filters.enquireMedium}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <input
                                            type="text"
                                            name="enquireSource"
                                            placeholder="Enquire Source"
                                            value={filters.enquireSource}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <input
                                            type="text"
                                            name="enquireStatus"
                                            placeholder="Enquire Status"
                                            value={filters.enquireStatus}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <input
                                            type="text"
                                            name="convertedLeadStatus"
                                            placeholder="Converted Lead Status"
                                            value={filters.convertedLeadStatus}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <input
                                            type="text"
                                            name="convertedLeadSubStatus"
                                            placeholder="Converted Lead Sub Status"
                                            value={filters.convertedLeadSubStatus}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <button className="btn btn-primary" onClick={handleSubmit}>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* End of Filter Form */}
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">List Enquiries</h4>
                            </div>
                            <div style={{ overflowX: "scroll", marginTop: "20px" }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Created Time</th>
                                            <th>Enquiry Number</th>
                                            <th>Call ID</th>
                                            <th>Lead ID</th>
                                            <th>Name</th>
                                            <th>Mobile No</th>
                                            <th>Stream</th>
                                            <th>Course</th>
                                            <th>Enquire Medium</th>
                                            <th>Enquire Source</th>
                                            <th>Enquire Status</th>
                                            <th>Converted Lead Status</th>
                                            <th>Converted Lead Sub Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.createdTime}</td>
                                                <td>{item.enquiryNumber}</td>
                                                <td>{item.callId}</td>
                                                <td>{item.leadId}</td>
                                                <td>{item.name}</td>
                                                <td>{item.mobileNo}</td>
                                                <td>{item.stream}</td>
                                                <td>{item.course}</td>
                                                <td>{item.enquireMedium}</td>
                                                <td>{item.enquireSource}</td>
                                                <td>{item.enquireStatus}</td>
                                                <td>{item.convertedLeadStatus}</td>
                                                <td>{item.convertedLeadSubStatus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Prev
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnquiryList;
