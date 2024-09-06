import { Empty, Pagination } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DistributorDepositViewModel from './DistributorDepositViewModel';

function DistributorDepositList({ onChangeVal }) {
    // Sample data to display in the table
    const tableData = [
        {
            id: 1,
            companyName: 'ABC Corp',
            companyId: 'C001',
            agentName: 'John Doe',
            amount: '$1500',
            pgInfo: 'PayPal',
            paymentDate: '2024-09-01',
            transactionId: 'TXN123456',
            status: 'Success',
            mode: 'Online',
            adminRemark: 'Approved',
        },
        {
            id: 2,
            companyName: 'XYZ Ltd',
            companyId: 'C002',
            agentName: 'Jane Smith',
            amount: '$2500',
            pgInfo: 'Stripe',
            paymentDate: '2024-09-02',
            transactionId: 'TXN789012',
            status: 'Success',
            mode: 'Offline',
            adminRemark: 'Waiting for approval',
        },
        {
            id: 1,
            companyName: 'ABC Corp',
            companyId: 'C001',
            agentName: 'John Doe',
            amount: '$1500',
            pgInfo: 'PayPal',
            paymentDate: '2024-09-01',
            transactionId: 'TXN123456',
            status: 'Success',
            mode: 'Online',
            adminRemark: 'Approved',
        },
        {
            id: 2,
            companyName: 'XYZ Ltd',
            companyId: 'C002',
            agentName: 'Jane Smith',
            amount: '$2500',
            pgInfo: 'Stripe',
            paymentDate: '2024-09-02',
            transactionId: 'TXN789012',
            status: 'Success',
            mode: 'Offline',
            adminRemark: 'Waiting for approval',
        },
        // Add more rows as needed
    ];
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className="ListDistributer exppdf">
            {modalShow && <DistributorDepositViewModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Distributor Deposit Request List                                    </b></h4>
                                    <div>
                                        {/* Add any Export PDF or Excel functionality here */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role='row'>
                                                <th>Sr No.</th>
                                                <th>Company Name</th>
                                                <th>Company ID</th>
                                                <th>Agent Name</th>
                                                <th>Amount</th>
                                                <th>PG Info</th>
                                                <th>Payment Date</th>
                                                <th>Transaction Id</th>
                                                <th>Status</th>
                                                <th>Mode</th>
                                                <th>Admin Remark</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.length > 0 ? (
                                                tableData.map((item, index) => (
                                                    <tr role="row" className="odd" key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.companyName}</td>
                                                        <td>{item.companyId}</td>
                                                        <td>{item.agentName}</td>
                                                        <td>{item.amount}</td>
                                                        <td>{item.pgInfo}</td>
                                                        <td>{item.paymentDate}</td>
                                                        <td>{item.transactionId}</td>
                                                        <td>
                                                            <span className={`badge badge-${item.status === 'Success' ? 'success' : 'warning'} text-light border-0 w-100`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>{item.mode}</td>
                                                        <td>{item.adminRemark}</td>
                                                        <td className='text-center'>
                                                            <Link className='btn btn-warning color2' onClick={() => setModalShow(true)} to={`#`}>VIew</Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={12}>
                                                        <Empty />
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {tableData.length} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                            total={tableData.length}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DistributorDepositList;
