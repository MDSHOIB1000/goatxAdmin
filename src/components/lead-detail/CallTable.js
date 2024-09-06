import React from 'react';

const CallTable = () => {
    const calls = [
        {
            createdTime: '2024-08-26 10:00 AM',
            leadId: 'L001',
            callerNumber: '1234567890',
            callerTo: '9876543210',
            callDuration: '5:30',
            callDirection: 'Outbound',
            callStatus: 'Completed',
            assignedTo: 'Agent A',
            hungUpReason: 'Customer Hung Up',
            recordingFileName: 'call_20240826_1000.mp3',
            requestId: 'REQ001',
            conversationUuid: 'UUID001'
        },
        // Add more call records as needed
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className=" p-3">
                        <div className="row">

                            <div className="col-12" style={{overflowX: "auto"}}>
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
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
                                            {calls.map((call, index) => (
                                                <tr key={index}>
                                                    <td>{call.createdTime}</td>
                                                    <td>{call.leadId}</td>
                                                    <td>{call.callerNumber}</td>
                                                    <td>{call.callerTo}</td>
                                                    <td>{call.callDuration}</td>
                                                    <td>{call.callDirection}</td>
                                                    <td>{call.callStatus}</td>
                                                    <td>{call.assignedTo}</td>
                                                    <td>{call.hungUpReason}</td>
                                                    <td>{call.recordingFileName}</td>
                                                    <td>{call.requestId}</td>
                                                    <td>{call.conversationUuid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CallTable;
