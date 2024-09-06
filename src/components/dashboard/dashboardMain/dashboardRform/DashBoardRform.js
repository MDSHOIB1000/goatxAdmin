import React from 'react'

// import css start 
// import "./DashBoardRform.css"
// import css End


function DashBoardRform() {
    return (
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className='p-3'>
                <div className="card overflow-hidden">
                    <div className="card-body pb-3">
                        <form action="https://merchant.paypanda.in/dashboard" method="get">
                            <div className="row">
                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">From: <span className="tx-danger">*</span></label>
                                    <input className="form-control fc-datepicker hasDatepicker" value="2024-01-17" type="date" id="fromdate" name="fromdate" autocomplete="off" />
                                </div>

                                <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                    <label className="form-label">To: <span className="tx-danger">*</span></label>
                                    <input className="form-control fc-datepicker hasDatepicker" value="2024-01-17" type="date" id="todate" name="todate" autocomplete="off" />
                                </div>

                                <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                    <label className="form-label"><b>search</b></label>
                                    <button className="btn btn-main-primary pd-x-20 bg-primary text-light" type="submit">Search</button>
                                </div>
                            </div>
                        </form>

                        <hr />
                        <div className="table-responsive mb-0 projects-stat tx-14">
                            <table className="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Amount</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="project-names">
                                                <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                    S</h6>
                                                <p className="d-inline-block font-weight-semibold mb-0">Success</p>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="badge badge-success" id="dashboard_today_success">0.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success" id="success_percentage">0</div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="project-names">
                                                <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                    F</h6>
                                                <p className="d-inline-block font-weight-semibold mb-0">Failure</p>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="badge badge-danger" id="dashboard_today_failure">0.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger" id="failure_percentage">0</div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="project-names">
                                                <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                    P</h6>
                                                <p className="d-inline-block font-weight-semibold mb-0">Pending</p>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="badge badge-warning" id="dashboard_today_pending">0.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-warning" id="pending_percentage">0</div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <div className="project-names">
                                                <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                    R</h6>
                                                <p className="d-inline-block font-weight-semibold mb-0">Refunded</p>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="badge badge-danger" id="dashboard_today_refunded">0.00</div>
                                        </td>
                                        <td></td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <div className="project-names">
                                                <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                    D</h6>
                                                <p className="d-inline-block font-weight-semibold mb-0">Debit</p>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="badge badge-warning" id="dashboard_today_debit">0.00</div>
                                        </td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="project-names">
                                                <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                    C</h6>
                                                <p className="d-inline-block font-weight-semibold mb-0">Credit</p>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="badge badge-warning" id="dashboard_today_credit">0.00</div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardRform
