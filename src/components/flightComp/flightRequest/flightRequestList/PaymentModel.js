import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaymentModel(props) {
    // Dummy Data for the table
    const paymentData = [
        {
            slNo: 1,
            bookingRefNo: 'FL12345',
            invoiceNo: 'INV001',
            creditNoteNo: 'CN001',
            date: '2024-09-06',
            paymentsType: 'Credit Card / TXN001',
            debit: '$0.00',
            credit: '$500.00',
            balance: '$500.00',
            remark: 'Payment received successfully'
        }
    ];

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Payment Process
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{overflowX: "auto"}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>Sl.No.</th> */}
                            <th>Booking Ref. No.</th>
                            <th>Invoice No.</th>
                            <th>Credit Note No.</th>
                            <th>Date</th>
                            <th>Payments Type / Transaction ID</th>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Balance</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.map((item, index) => (
                            <tr key={index}>
                                {/* <td>{item.slNo}</td> */}
                                <td>{item.bookingRefNo}</td>
                                <td>{item.invoiceNo}</td>
                                <td>{item.creditNoteNo}</td>
                                <td>{item.date}</td>
                                <td>{item.paymentsType}</td>
                                <td>{item.debit}</td>
                                <td>{item.credit}</td>
                                <td>{item.balance}</td>
                                <td>
                                    <Link to={`payment-remark`}>View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PaymentModel;
