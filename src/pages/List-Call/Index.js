import React, { useState } from 'react';

function CallList() {
    // State for filters
    const [filters, setFilters] = useState({
        leadId: '',
        callerNumber: '',
        callStatus: '',
        assignedTo: '',
        callerTo: '',
        callDirection: '',
        hungUpReason: '',
        requestId: ''
    });

    // Handle filter change
    const handleChange = (e) => {
        const { name, value } = e.target;

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(filters);
    };
    // Dummy data for table
    const data = [
        {
            createdTime: '2024-08-27 14:32:00',
            leadId: '12345',
            callerNumber: '+1234567890',
            callerTo: '+0987654321',
            callDuration: '00:05:23',
            callDirection: 'Outbound',
            callStatus: 'Completed',
            assignedTo: 'John Doe',
            hungUpReason: 'Caller Hung Up',
            recordingFileName: 'call_12345.mp3',
            requestId: 'req_67890',
            conversationUUID: 'uuid_abcdef123456'
        },
        {
            createdTime: '2024-08-27 15:12:30',
            leadId: '12346',
            callerNumber: '+1234567891',
            callerTo: '+0987654322',
            callDuration: '00:04:15',
            callDirection: 'Inbound',
            callStatus: 'Missed',
            assignedTo: 'Jane Smith',
            hungUpReason: 'No Answer',
            recordingFileName: 'call_12346.mp3',
            requestId: 'req_67891',
            conversationUUID: 'uuid_abcdef123457'
        },
        {
            createdTime: '2024-08-27 16:20:45',
            leadId: '12347',
            callerNumber: '+1234567892',
            callerTo: '+0987654323',
            callDuration: '00:06:50',
            callDirection: 'Outbound',
            callStatus: 'Completed',
            assignedTo: 'Emily Davis',
            hungUpReason: 'Caller Hung Up',
            recordingFileName: 'call_12347.mp3',
            requestId: 'req_67892',
            conversationUUID: 'uuid_abcdef123458'
        },
        {
            createdTime: '2024-08-27 17:05:10',
            leadId: '12348',
            callerNumber: '+1234567893',
            callerTo: '+0987654324',
            callDuration: '00:03:40',
            callDirection: 'Outbound',
            callStatus: 'Dropped',
            assignedTo: 'Michael Brown',
            hungUpReason: 'Network Issue',
            recordingFileName: 'call_12348.mp3',
            requestId: 'req_67893',
            conversationUUID: 'uuid_abcdef123459'
        },
        {
            createdTime: '2024-08-27 18:22:55',
            leadId: '12349',
            callerNumber: '+1234567894',
            callerTo: '+0987654325',
            callDuration: '00:07:10',
            callDirection: 'Inbound',
            callStatus: 'Completed',
            assignedTo: 'Laura Wilson',
            hungUpReason: 'Caller Hung Up',
            recordingFileName: 'call_12349.mp3',
            requestId: 'req_67894',
            conversationUUID: 'uuid_abcdef123460'
        }
    ];


    // Filter the data based on filters
    const filteredData = data.filter(item =>
        (filters.leadId ? item.leadId.includes(filters.leadId) : true) &&
        (filters.callerNumber ? item.callerNumber.includes(filters.callerNumber) : true) &&
        (filters.callStatus ? item.callStatus.includes(filters.callStatus) : true) &&
        (filters.assignedTo ? item.assignedTo.includes(filters.assignedTo) : true) &&
        (filters.callerTo ? item.callerTo.includes(filters.callerTo) : true) &&
        (filters.callDirection ? item.callDirection.includes(filters.callDirection) : true) &&
        (filters.hungUpReason ? item.hungUpReason.includes(filters.hungUpReason) : true) &&
        (filters.requestId ? item.requestId.includes(filters.requestId) : true)
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
                                    <h4 className="heading mb-0">Filter Calls</h4>
                                </div>
                            </div>
                            <form className='card'>
                                <div className="row">
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
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="callerNumber"
                                            placeholder="Caller Number"
                                            value={filters.callerNumber}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            name="callStatus"
                                            value={filters.callStatus}
                                            onChange={handleChange}
                                            className="form-control"
                                        >
                                            <option value="">Call Status</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Missed">Missed</option>
                                            <option value="Dropped">Dropped</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="assignedTo"
                                            placeholder="Assigned To"
                                            value={filters.assignedTo}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="callerTo"
                                            placeholder="Caller To"
                                            value={filters.callerTo}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            name="callDirection"
                                            value={filters.callDirection}
                                            onChange={handleChange}
                                            className="form-control"
                                        >
                                            <option value="">Call Direction</option>
                                            <option value="Outbound">Outbound</option>
                                            <option value="Inbound">Inbound</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="hungUpReason"
                                            placeholder="Hung-up Reason"
                                            value={filters.hungUpReason}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            name="requestId"
                                            placeholder="Request ID"
                                            value={filters.requestId}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3" style={{ margin: "10px 0" }}>
                                        <button className="btn btn-primary" onClick={handleSubmit}>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* End of Filter Form */}
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">List Calls</h4>
                            </div>
                            <div style={{ overflowX: "scroll", marginTop: "20px" }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Created Time</th>
                                            <th>Lead ID</th>
                                            <th>Caller Number</th>
                                            <th>Caller To</th>
                                            <th>Call Duration</th>
                                            <th>Call Direction</th>
                                            <th>Call Status</th>
                                            <th>Assigned To</th>
                                            <th>Hung-up Reason</th>
                                            <th>Recording File Name</th>
                                            <th>Request ID</th>
                                            <th>Conversation UUID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.createdTime}</td>
                                                <td>{item.leadId}</td>
                                                <td>{item.callerNumber}</td>
                                                <td>{item.callerTo}</td>
                                                <td>{item.callDuration}</td>
                                                <td>{item.callDirection}</td>
                                                <td>{item.callStatus}</td>
                                                <td>{item.assignedTo}</td>
                                                <td>{item.hungUpReason}</td>
                                                <td>{item.recordingFileName}</td>
                                                <td>{item.requestId}</td>
                                                <td>{item.conversationUUID}</td>
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

export default CallList;
