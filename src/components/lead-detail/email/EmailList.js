import React from 'react';

const EmailList = () => {
    const emails = [
        {
            toEmail: 'john.doe@example.com',
            status: 'Sent',
            assignedTo: 'Jane Smith',
            createdTime: '2023-08-25 10:15 AM',
            subject: 'Project Update',
            accessCount: 5,
            modifiedTime: '2023-08-26 02:30 PM',
            modifiedBy: 'Jane Smith',
            createdBy: 'John Doe',
            fromEmail: 'sales@example.com',
            readTime: '2023-08-26 03:00 PM',
        },
        // Add more email records as needed
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-12" style={{ overflowX: "auto" }}>
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>To Email</th>
                                                <th>Status</th>
                                                <th>Assigned To</th>
                                                <th>Created Time</th>
                                                <th>Subject</th>
                                                <th>Access Count</th>
                                                <th>Modified Time</th>
                                                <th>Modified By</th>
                                                <th>Created By</th>
                                                <th>From Email</th>
                                                <th>Read Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {emails.map((email, index) => (
                                                <tr key={index}>
                                                    <td>{email.toEmail}</td>
                                                    <td>{email.status}</td>
                                                    <td>{email.assignedTo}</td>
                                                    <td>{email.createdTime}</td>
                                                    <td>{email.subject}</td>
                                                    <td>{email.accessCount}</td>
                                                    <td>{email.modifiedTime}</td>
                                                    <td>{email.modifiedBy}</td>
                                                    <td>{email.createdBy}</td>
                                                    <td>{email.fromEmail}</td>
                                                    <td>{email.readTime}</td>
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

export default EmailList;
