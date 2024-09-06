import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import LedegerReportModal from '../LedgerReportModal/LedegerReportModal';
function LedgerReportForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({
        fromdate: '2024-01-18',
        todate: '2024-01-18',
        userId: '0', // Assuming "All User" is the default
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or other actions here
        console.log(formData);
    };

    return (
        <div className="row my-4">
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="get" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                        From: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                        value={formData.fromdate}
                                        type="text"
                                        id="fromdate"
                                        name="fromdate"
                                        autoComplete="off"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">
                                        To: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control fc-datepicker hasDatepicker"
                                        value={formData.todate}
                                        type="text"
                                        id="todate"
                                        name="todate"
                                        autoComplete="off"
                                        onChange={handleInputChange}
                                    />
                                </div>


                                <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                    <label className="form-label">
                                        Download & Search: <span className="tx-danger">*</span>
                                    </label>
                                    <br />
                                    <button className="btn btn-primary pd-x-20 me-3" type="submit">
                                        <FaSearch /> Search
                                    </button>
                                    <button className="btn btn-danger pd-x-20" type="button" data-toggle="modal" data-target="#transaction_download_model" onClick={handleShow}>
                                        <FaDownload /> Download
                                    </button>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <LedegerReportModal handleClose={handleClose} show={show} />
        </div>
    )
}

export default LedgerReportForm
