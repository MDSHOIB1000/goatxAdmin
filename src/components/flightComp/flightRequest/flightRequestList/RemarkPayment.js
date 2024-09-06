import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function RemarkPayment() {
    const [remark, setRemark] = useState("");

    const handleRemarkChange = (e) => {
        setRemark(e.target.value);
    };

    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="p-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th><h4>Remark</h4></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{textAlign: "left"}}>
                                                <div className="row">
                                                    {/* Booking Info Section */}
                                                    <div className="col-md-6">
                                                        <p><b>Booking Info :</b></p>
                                                        <p>
                                                            Ticket Created: LHUNDUP KONCHOK |
                                                            DEL-VIE / JourneyTypeOneWay
                                                            <br />
                                                            TICKET NO: | Travel Date: 14-09-2024
                                                        </p>
                                                    </div>

                                                    {/* Transaction Type Section */}
                                                    <div className="col-md-6">
                                                        <p><b>Transaction Type :</b> Debit</p>
                                                        <p><b>Update By :</b> ABdul Quadir</p>
                                                    </div>
                                                </div>

                                                {/* Remark Section */}
                                                <div className="row mt-3">
                                                    <div className="col-md-12">
                                                        <p><b>Remark:</b> Ticket Created Through Portal</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Remark Input */}
                                <div className="form-group">
                                    <label htmlFor="remark">Remark*</label>
                                    <textarea
                                        className="form-control"
                                        id="remark"
                                        rows="3"
                                        value={remark}
                                        onChange={handleRemarkChange}
                                    ></textarea>
                                </div>

                                {/* Invoice and Submit Section */}
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <p><b>Invoice No :</b> FW242500000446</p>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <Link to="viewInvoice" className="text-primary">
                                            <i className="fa fa-eye"></i> View Invoice
                                        </Link>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center mt-4">
                                    <Button variant="warning" className="px-4">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RemarkPayment;
