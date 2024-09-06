import React from 'react';

const CostSheetTable = () => {
    const leads = [
        {
            lead: 'L001',
            projectName: 'Sunshine Apartments',
            unitNo: 'U101',
            blockNo: 'B1',
            floor: '1st Floor',
        },
        // Add more lead records as needed
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
                                                <th>Lead</th>
                                                <th>Course  Name</th>
                                                <th>Stream</th>
                                                <th>Location</th>
                                                <th>Floor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {leads.map((lead, index) => (
                                                <tr key={index}>
                                                    <td>{lead.lead}</td>
                                                    <td>{lead.projectName}</td>
                                                    <td>{lead.unitNo}</td>
                                                    <td>{lead.blockNo}</td>
                                                    <td>{lead.floor}</td>
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

export default CostSheetTable;
