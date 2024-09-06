import React from "react";
import './invoice.css';
import html2pdf from 'html2pdf.js';

function ViewInvoice() {

    const generatePDF = () => {
        const element = document.getElementById('invoice'); // Target the invoice container
        const options = {
            margin: 0.5,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="">
                        <div className="card-body p-0">
                            <div className="invoice-container" id="invoice">
                                <h1>Tax Invoice</h1>
                                

                                <div className="invoiceHeader">
                                    <div className="company-details">
                                        <strong>Name:</strong> Viaggio World Pvt Ltd<br />
                                        Address: C 264 IInd Floor Vivek Vihar, New Delhi, India 110001<br />
                                        Phone: +91-011-41514999<br />
                                        Email: support@abaris.com<br />
                                        PAN Number: AAJCY3293J<br />
                                        GST Number: 07AAJCY3293J1ZU<br />
                                    </div>
                                    <div className="company-details">
                                        <strong>Name:</strong> TSP India<br />
                                        Address: 618, Creative Heights, Block GH 1 Pocket 1, Rohini, Delhi, 110042<br />
                                        Phone: 9313989335<br />
                                        Email: junpei47@gmail.com<br />
                                        PAN Number: AETPJ3844Q<br />
                                        GST Number: 07AETPJ3844Q1ZE<br />
                                    </div>
                                </div>
                                <button className="btn btn-primary mt-4" onClick={generatePDF}>
                                    Download PDF
                                </button>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Invoice Number</th>
                                            <th>Invoice Date</th>
                                            <th>Booking Reference Number</th>
                                            <th>Booking Date</th>
                                            <th>Trip Type</th>
                                            <th>Airline PNR</th>
                                            <th>GDS PNR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>FW24250000446</td>
                                            <td>06 Sep 2024</td>
                                            <td>VFL666</td>
                                            <td>06 Sep 2024</td>
                                            <td>OneWay</td>
                                            <td>NESLAW</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Ticket No</th>
                                            <th>Sectors</th>
                                            <th>Passenger Name</th>
                                            <th>Type</th>
                                            <th>Fare</th>
                                            <th>Tax</th>
                                            <th>YQ</th>
                                            <th>OT</th>
                                            <th>Service</th>
                                            <th>Meal</th>
                                            <th>Baggage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0985905836952</td>
                                            <td>DEL-VIE</td>
                                            <td>Mr Lhundup Konchok</td>
                                            <td>Adult</td>
                                            <td>19270</td>
                                            <td>2955</td>
                                            <td>8398</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="payment-details">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Base Fare:</td>
                                                <td>₹ 19270</td>
                                            </tr>
                                            <tr>
                                                <td>Taxes:</td>
                                                <td>₹ 11353</td>
                                            </tr>
                                            <tr>
                                                <td>Service Charges:</td>
                                                <td>₹ 0</td>
                                            </tr>
                                            <tr>
                                                <td>Meal Charges:</td>
                                                <td>₹ 0</td>
                                            </tr>
                                            <tr>
                                                <td>Baggage Charges:</td>
                                                <td>₹ 0</td>
                                            </tr>
                                            <tr>
                                                <td>Comm Earned (-):</td>
                                                <td>₹ 96</td>
                                            </tr>
                                            <tr>
                                                <td>GST (+):</td>
                                                <td>₹ 0</td>
                                            </tr>
                                            <tr>
                                                <td>TDS (+):</td>
                                                <td>₹ 4.8</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Total Amount:</strong></td>
                                                <td><strong>₹ 30531.8</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="gst-details">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Service Description</th>
                                                <th>Taxable Value</th>
                                                <th>CGST @ 9%</th>
                                                <th>SGST @ 9%</th>
                                                <th>IGST @ 0%</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Service Charges</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="important-info">
                                    <p>1. All Cases & Disputes are subject to Delhi Jurisdiction.</p>
                                    <p>2. Refunds & Cancellations are subject to Airlines approval.</p>
                                    <p>3. CHEQUE: Must be drawn in favor of Viaggio World Pvt Ltd.</p>
                                    <p>4. LATE PAYMENT: Interest @ 24% per annum will be charged on all outstanding bills after the due date.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ViewInvoice;
