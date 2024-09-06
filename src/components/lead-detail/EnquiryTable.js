import React from 'react';

const EnquiryTable = () => {
    const enquiries = [
        {
            createdAt: '2024-08-26',
            enquiryNumber: 'ENQ001',
            leadId: 'L001',
            name: 'John Doe',
            mobile: '1234567890',
            interestedProject: 'Project A',
            enquiryMedium: 'Phone',
            enquirySource: 'Website',
            enquiryStatus: 'Pending'
        },
        // Add more enquiries as needed
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="card p-3">
                        <div className="row">

                            <div className="col-12" style={{overflowX: "auto"}}>
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Created At</th>
                                                <th>Enquiry Number</th>
                                                <th>Lead ID</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Interested Course</th>
                                                <th>Enquiry Medium</th>
                                                <th>Enquiry Source</th>
                                                <th>Enquiry Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiries.map((enquiry, index) => (
                                                <tr key={index}>
                                                    <td>{enquiry.createdAt}</td>
                                                    <td>{enquiry.enquiryNumber}</td>
                                                    <td>{enquiry.leadId}</td>
                                                    <td>{enquiry.name}</td>
                                                    <td>{enquiry.mobile}</td>
                                                    <td>{enquiry.interestedProject}</td>
                                                    <td>{enquiry.enquiryMedium}</td>
                                                    <td>{enquiry.enquirySource}</td>
                                                    <td>{enquiry.enquiryStatus}</td>
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

export default EnquiryTable;
