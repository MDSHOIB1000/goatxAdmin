import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function AcountViewModel(props) {
  const paymentDetails = {
    companyName: 'IT EMPORIUMS',
    companyId: 'VD5',
    refId: '3',
    amount: '200',
    chequeDraftUtrNumber: '',
    pgTransactionId: '',
    pgOrderId: '',
    paymentDate: '05 Jul 2024 / 9:49 PM',
    bank: '',
    bankBranch: '',
    distributorId: '5',
    paymentMode: 'upi',
    bankTransactionId: '',
    agentStaffName: 'Aditya Gupta',
    status: 'approved',
    companyBankName: '',
    fileName: '',
    companyBranchName: '',
    companyAccountHolderName: '',
    companyAccountNo: '',
    companyIfscCode: '',
    remark: 'utr-418747800336',
    companySwiftCode: '',
    adminRemark: 'Received',
    created: '05 Jul 2024 / 9:49 PM',
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered>
          <tbody>
            <tr>
              <td>Company Name</td>
              <td>{paymentDetails.companyName}</td>
            </tr>
            <tr>
              <td>Company Id</td>
              <td>{paymentDetails.companyId}</td>
            </tr>
            <tr>
              <td>Ref Id</td>
              <td>{paymentDetails.refId}</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>{paymentDetails.amount}</td>
            </tr>
            <tr>
              <td>Cheque Draft Utr Number</td>
              <td>{paymentDetails.chequeDraftUtrNumber}</td>
            </tr>
            <tr>
              <td>Pg Transaction Id</td>
              <td>{paymentDetails.pgTransactionId}</td>
            </tr>
            <tr>
              <td>Pg Order Id</td>
              <td>{paymentDetails.pgOrderId}</td>
            </tr>
            <tr>
              <td>Payment Date</td>
              <td>{paymentDetails.paymentDate}</td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>{paymentDetails.bank}</td>
            </tr>
            <tr>
              <td>Bank Branch</td>
              <td>{paymentDetails.bankBranch}</td>
            </tr>
            <tr>
              <td>Distributor Id</td>
              <td>{paymentDetails.distributorId}</td>
            </tr>
            <tr>
              <td>Payment Mode</td>
              <td>{paymentDetails.paymentMode}</td>
            </tr>
            <tr>
              <td>Bank Transaction Id</td>
              <td>{paymentDetails.bankTransactionId}</td>
            </tr>
            <tr>
              <td>Agent Staff Name</td>
              <td>{paymentDetails.agentStaffName}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{paymentDetails.status}</td>
            </tr>
            <tr>
              <td>Company Bank Name</td>
              <td>{paymentDetails.companyBankName}</td>
            </tr>
            <tr>
              <td>File Name</td>
              <td>{paymentDetails.fileName}</td>
            </tr>
            <tr>
              <td>Company Branch Name</td>
              <td>{paymentDetails.companyBranchName}</td>
            </tr>
            <tr>
              <td>Company Account Holder Name</td>
              <td>{paymentDetails.companyAccountHolderName}</td>
            </tr>
            <tr>
              <td>Company Account No</td>
              <td>{paymentDetails.companyAccountNo}</td>
            </tr>
            <tr>
              <td>Company Ifsc Code</td>
              <td>{paymentDetails.companyIfscCode}</td>
            </tr>
            <tr>
              <td>Remark</td>
              <td>{paymentDetails.remark}</td>
            </tr>
            <tr>
              <td>Company Swift Code</td>
              <td>{paymentDetails.companySwiftCode}</td>
            </tr>
            <tr>
              <td>Admin Remark</td>
              <td>{paymentDetails.adminRemark}</td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{paymentDetails.created}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AcountViewModel;
