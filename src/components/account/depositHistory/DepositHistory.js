import { Pagination } from "antd"
import { Link } from "react-router-dom"


function DepositHistory() {
    return (
        <>
            <div className="PageHeading">
                <h1>Deposit History</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Select key to search by </label>
                                    <select class="form-select" name="type">
                                        <option selected>Select Type</option>
                                        <option value="all">Status</option>
                                        <option value="debit">Transaction Id</option>
                                        <option value="debit">Amount</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Value</label>
                                    <input type="text" name="start_date" id="account_no" className="form-control" placeholder="Enter Value" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">From Date</label>
                                    {/* <input type="date" name="end_date" id="account_no" className="form-control" value={filterInitial.end_date} onChange={handleChange} /> */}
                                    <input type="date" name="end_date" id="account_no" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">To Date</label>
                                    {/* <input type="date" name="end_date" id="account_no" className="form-control" value={filterInitial.end_date} onChange={handleChange} /> */}
                                    <input type="date" name="end_date" id="account_no" className="form-control" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary mr-3">
                                        Search

                                    </button>
                                    <button type="button" className="btn btn-warning">Reset</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            <div className="d-flex  justify-content-between align-items-center">
                                {/* <div className="dataTables_length mb-3" id="myTable_length">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success cusxel"
                                        table="table-to-xlsx"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Download Excel sheet" />
                                </div> */}
                                {/* <div className="form-group col-md-2">
                                    <label >
                                        Search:
                                    </label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="text" style={{ cursor: 'pointer' }} />
                                </div> */}
                            </div>
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">
                                            S.No
                                        </th>
                                        <th className="sorting">
                                            Amount</th>

                                        <th className="sorting">
                                            Payment Date
                                        </th>
                                        <th className="sorting">
                                            Transaction Id
                                        </th>
                                        <th className="sorting" >Status</th>
                                        <th className="sorting" >Payment Mode</th>
                                        <th className="sorting" >Admin Remark</th>

                                        <th className="sorting" >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd">
                                        <td style={{ textAlign: 'center' }}>1</td>
                                        <td style={{ textAlign: 'center' }}>5000</td>
                                        <td style={{ textAlign: 'center' }}>27 Jul 2024 / 7:35 PM</td>
                                        <td style={{ textAlign: 'center' }}>fddfgtreterv45fdfdfgre</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <p className="success-css">Approved</p>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>UPIPayments</td>
                                        <td style={{ textAlign: 'center' }}>Admin Remark</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Link to="/details-deposit-history">View Details</Link>
                                        </td>



                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {'0'}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                            // showSizeChanger
                            // onShowSizeChange={''}

                            defaultCurrent={1}
                        // onChange={onChangeVal}
                        // total={totalCount}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
export default DepositHistory