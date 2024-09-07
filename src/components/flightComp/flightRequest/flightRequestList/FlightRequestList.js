import { Empty, Pagination } from 'antd';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaymentModel from './PaymentModel';

function FlightRequestList({ onChangeVal }) {
    // Dummy Data
    const dummyData = [
        {
            refNo: 'FL12345',
            companyName: 'Company A',
            airline: 'Airline A',
            journeyType: 'One-Way',
            sector: 'NYC to LAX',
            leadPassengerName: 'John Doe',
            pnr: 'PNR001',
            supplier: 'Supplier A',
            fare: '$500',
            payStatus: 'Paid',
            bookStatus: 'Confirmed',
            type: 'Corporate',
            bookingSource: 'Online',
            assignUser: 'User A',
            created: '2024-09-01',
        },
        {
            refNo: 'FL12346',
            companyName: 'Company B',
            airline: 'Airline B',
            journeyType: 'Round Trip',
            sector: 'LAX to SFO',
            leadPassengerName: 'Jane Smith',
            pnr: 'PNR002',
            supplier: 'Supplier B',
            fare: '$300',
            payStatus: 'Pending',
            bookStatus: 'Pending',
            type: 'Personal',
            bookingSource: 'Agent',
            assignUser: 'User B',
            created: '2024-09-02',
        },
        {
            refNo: 'FL12347',
            companyName: 'Company C',
            airline: 'Airline C',
            journeyType: 'Multi-City',
            sector: 'LON to PAR',
            leadPassengerName: 'David Clark',
            pnr: 'PNR003',
            supplier: 'Supplier C',
            fare: '$700',
            payStatus: 'Paid',
            bookStatus: 'Confirmed',
            type: 'Corporate',
            bookingSource: 'Online',
            assignUser: 'User C',
            created: '2024-09-03',
        },

    ];
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className="ListDistributer exppdf">
            {modalShow && <PaymentModel show={modalShow}
                onHide={() => setModalShow(false)}
            />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Flight Booking TXN List</b></h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/create-flight-booking" role="button" aria-controls="offcanvasExample">+ Create Flight TXN</Link>
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid">
                                        <thead>
                                            <tr role='row'>
                                                <th>Ref. No.</th>
                                                <th>Company Name</th>
                                                <th>Airline</th>
                                                <th>Journey Type</th>
                                                <th>Sector</th>
                                                <th>Lead Passenger Name</th>
                                                <th>PNR</th>
                                                <th>Supplier</th>
                                                <th>Fare</th>
                                                <th>Pay Status</th>
                                                <th>Book Status</th>
                                                <th>Type</th>
                                                <th>Booking Source</th>
                                                <th>Assign User</th>
                                                <th>Created</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dummyData.map((item, i) => (
                                                <tr role="row" key={i} style={{ cursor: "pointer" }}>
                                                    <td>
                                                        <Link onClick={() => setModalShow(true)} to={`#`}>
                                                            {item.refNo}
                                                        </Link>
                                                    </td>
                                                    <td>{item.companyName}</td>
                                                    <td>{item.airline}</td>
                                                    <td>{item.journeyType}</td>
                                                    <td>{item.sector}</td>
                                                    <td>{item.leadPassengerName}</td>
                                                    <td>{item.pnr}</td>
                                                    <td>{item.supplier}</td>
                                                    <td>{item.fare}</td>
                                                    <td>{item.payStatus}</td>
                                                    <td>{item.bookStatus}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.bookingSource}</td>
                                                    <td>{item.assignUser}</td>
                                                    <td>{item.created}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {dummyData.length} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={dummyData.length}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FlightRequestList;
