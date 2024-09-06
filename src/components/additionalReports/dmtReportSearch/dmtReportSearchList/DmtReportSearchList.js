import React, { useState } from 'react';
import { Pagination } from 'antd';
import * as XLSX from 'xlsx';
import Loadar from '../../../../common/loader/Loader';
import { CiSaveDown1 } from 'react-icons/ci';
import { Button, Modal, Card  } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import './DmtReportSearch.css';

function DmtReportSearchList({ onChangeVal, dmtTtxn, loading, dmtExcelTtxn }) {
  const curdmtTtxn = dmtTtxn?.dmtTransaction;
  const curdmtexcelTtxn = dmtExcelTtxn?.dmtTransaction;

  console.log("curdmtTtxn:", curdmtTtxn);
  console.log("curdmtexcelTtxn:", curdmtexcelTtxn);

  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const exportToExcel = () => {
    if (curdmtexcelTtxn && curdmtexcelTtxn.length > 0) {
      const worksheet = XLSX.utils.json_to_sheet(curdmtexcelTtxn);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "DMT Transactions");
      XLSX.writeFile(workbook, "dmt_transactions.xlsx");
    } else {
      console.error("curdmtexcelTtxn is empty or not defined");
    }
  };

  const handleShowModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  return (
    <section className="ListDistributer exppdf">
      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0"><b> DMT Transaction Reports </b></h4>
                  <div>
                    {curdmtTtxn?.length > 0 && (
                      <Button onClick={exportToExcel} variant="success">
                        Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                      </Button>
                    )}
                  </div>
                </div>
                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                  <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                    <thead>
                      <tr role="row">
                        <th>Transaction Date</th>
                        <th>User Name</th>
                        <th>Bank Name</th>
                        <th>Opening Balance</th>
                        <th>Amount</th>
                        <th>Charge</th>
                        <th>Commission</th>
                        <th>TDS</th>
                        <th>Closing Balance</th>
                        <th>Key Status</th>
                        <th>Actions</th> {/* New column for actions */}
                      </tr>
                    </thead>
                    {loading && <Loadar />}
                    <tbody>
                                                                {curdmtTtxn?.map((item, i) => {
                                                                  return <tr role="row" className="odd" key={i}>
                                                                      <td> {item?.createdAt}</td>
                                                                      <td> {item?.username}</td>
                                                                      <td> {item?.bank_name}</td>
                                                                      <td> {item?.o_bal}</td>
                                                                      <td> {item?.amount}</td>
                                                                      <td> {item?.charge}</td>
                                                                      <td> {item?.commission}</td>
                                                                      <td> {item?.tds}</td>
                                                                      <td> {item?.c_bal}</td>
                                                                      <td>
                                                                          {item?.tx_status == 0 && <Button variant="success">Success</Button>}
                                                                          {item?.tx_status == 1 && <Button variant="danger">Failed </Button>}
                                                                          {item?.tx_status == 2 && <Button variant="secondary">Initiated</Button>}
                                                                          {item?.tx_status == 3 && <Button variant="warning">Pending</Button>}
                                                                          {item?.tx_status == 4 && <Button variant="info">Refunded</Button>}
                                                                          {item?.tx_status == 5 && <Button variant="primary">Hold</Button>}
                                                                      </td>
                                                                      <td>
                            <Button variant="outline-primary" onClick={() => handleShowModal(item)}>
                              <FaEye />
                            </Button>
                          </td>
                                                                  </tr>
                                                              })}
                    </tbody>
                  </table>
                  <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                    Total {dmtTtxn?.total} entries
                  </div>
                  <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                    <Pagination
                      defaultCurrent={1}
                      onChange={onChangeVal}
                      total={dmtTtxn?.total}
                    />
                  </div>
                </div>
                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                  <h4> Total Amount : {dmtTtxn?.totalAmount} </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ?
      {/* Modal for displaying transaction details */}
      <Modal show={showModal} onHide={handleCloseModal} centered className="dmt-modal">
        <Modal.Header closeButton className="dmt-modal-header">
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="dmt-modal-body">
          {selectedTransaction && (
            <div className="dmt-transaction-details">
              <Card className="dmt-card mb-2">
                <Card.Header className="dmt-card-header dmt-bg-primary">User Information</Card.Header>
                <Card.Body className="dmt-card-body">
                  <p><strong>Username:</strong> {selectedTransaction?.username}</p>
                  <p><strong>Mobile:</strong> {selectedTransaction?.mobile}</p>
                  <p><strong>Date:</strong> {selectedTransaction?.createdAt}</p>
                </Card.Body>
              </Card>

              <Card className="dmt-card mb-2">
                <Card.Header className="dmt-card-header dmt-bg-success">Customer Information</Card.Header>
                <Card.Body className="dmt-card-body">
                  <p><strong>Name:</strong> {selectedTransaction?.customer_name}</p>
                  <p><strong>Mobile:</strong> {selectedTransaction?.customer_mobile}</p>
                </Card.Body>
              </Card>

              <Card className="dmt-card mb-2">
                <Card.Header className="dmt-card-header dmt-bg-warning">Beneficiary Information</Card.Header>
                <Card.Body className="dmt-card-body">
                  <p><strong>Name:</strong> {selectedTransaction?.beneficiary_name}</p>
                  <p><strong>Bank:</strong> {selectedTransaction?.bank_name}</p>
                  <p><strong>Account:</strong> {selectedTransaction?.account_number}</p>
                  <p><strong>IFSC:</strong> {selectedTransaction?.ifsc_code}</p>
                </Card.Body>
              </Card>

              <Card className="dmt-card mb-2">
                <Card.Header className="dmt-card-header dmt-bg-info">Transaction Information</Card.Header>
                <Card.Body className="dmt-card-body">
                  <p><strong>ID:</strong> {selectedTransaction?.txn_id}</p>
                  <p><strong>UTR:</strong> {selectedTransaction?.utr}</p>
                  <p><strong>Amount:</strong> ₹{selectedTransaction?.amount}</p>
                  <p><strong>Charge:</strong> ₹{selectedTransaction?.charge}</p>
                  <p><strong>Commission:</strong> ₹{selectedTransaction?.commission}</p>
                  <p><strong>TDS:</strong> ₹{selectedTransaction?.tds}</p>
                  <p><strong>Status:</strong> 
                    <span className={`dmt-badge dmt-bg-${
                      selectedTransaction?.tx_status == 0 ? 'success' :
                      selectedTransaction?.tx_status == 1 ? 'danger' :
                      selectedTransaction?.tx_status == 2 ? 'secondary' :
                      selectedTransaction?.tx_status == 3 ? 'warning' :
                      selectedTransaction?.tx_status == 4 ? 'info' :
                      selectedTransaction?.tx_status == 5 ? 'primary' : 'dark'
                    }`}>
                      {selectedTransaction?.tx_status == 0 ? 'Success' :
                       selectedTransaction?.tx_status == 1 ? 'Failed' :
                       selectedTransaction?.tx_status == 2 ? 'Initiated' :
                       selectedTransaction?.tx_status == 3 ? 'Pending' :
                       selectedTransaction?.tx_status == 4 ? 'Refunded' :
                       selectedTransaction?.tx_status == 5 ? 'Hold' : 'Unknown'}
                    </span>
                  </p>
                </Card.Body>
              </Card>
              <Card className="dmt-card mb-2">
                <Card.Header className="dmt-card-header dmt-bg-primary">Partner Information</Card.Header>
                <Card.Body className="dmt-card-body">
                  <p><strong>Super Distributor Name:</strong> {selectedTransaction?.master_dist_name}</p>
                  <p><strong>Super Distributor Id:</strong> {selectedTransaction?.master_dist_id}</p>
                  <p><strong>Super Distributor Commission:</strong> {selectedTransaction?.master_dist_commission}</p>
                  <p><strong> Distributor Name:</strong> {selectedTransaction?.distributor_name}</p>
                  <p><strong> Distributor Id:</strong> {selectedTransaction?.distributor_id}</p>
                  <p><strong>Distributor Commission:</strong> {selectedTransaction?.distributor_commission}</p>
                </Card.Body>
              </Card>

              <Card className="dmt-card">
                <Card.Header className="dmt-card-header dmt-bg-secondary">Balance</Card.Header>
                <Card.Body className="dmt-card-body">
                  <p><strong>Opening:</strong> ₹{selectedTransaction?.o_bal}</p>
                  <p><strong>Closing:</strong> ₹{selectedTransaction?.c_bal}</p>
                </Card.Body>
              </Card>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default DmtReportSearchList;
