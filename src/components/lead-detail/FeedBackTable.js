import React from 'react';

const FeedBackTable = () => {
    const calls = [
        {
            createdTime: '2024-08-26 10:00 AM',
            seqId: 'SEQ001', // Added Seq ID
            assignedTo: 'Agent A',
            name: 'John Doe', // Added Name
            phoneNumber: '1234567890', // Changed Caller Number to Phone Number
            overallSatisfaction: 'Very Satisfied', // Added Overall Satisfaction
        },
        // Add more call records as needed
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-12" style={{overflowX: "auto"}}>
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Assigned To</th>
                                                <th>Seq ID</th>
                                                <th>Created Time</th>
                                                <th>Name</th>
                                                <th>Phone Number</th>
                                                <th>Overall Satisfaction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {calls.map((call, index) => (
                                                <tr key={index}>
                                                    <td>{call.assignedTo}</td>
                                                    <td>{call.seqId}</td>
                                                    <td>{call.createdTime}</td>
                                                    <td>{call.name}</td>
                                                    <td>{call.phoneNumber}</td>
                                                    <td>{call.overallSatisfaction}</td>
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

export default FeedBackTable;
