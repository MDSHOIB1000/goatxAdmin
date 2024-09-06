import { Pagination } from "antd"
import { Link } from "react-router-dom"


function AccountLadger() {
    return (
        <>
            <div className="PageHeading">
                <h1>Agent Account Logs</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <div className="form-row" style={{ alignItems: 'end' }}>
                            <div className="form-group col-md-4">
                                <div className="set-heading-com">Company Name : <span style={{ color: 'blue', float: 'right' }}>Karan Sharma</span></div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="set-heading-com">Agent Name : <span style={{ color: 'blue', float: 'right' }}>Mr Karan Sharma</span></div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="set-heading-com">Agent Email : <span style={{ color: 'blue', float: 'right' }}>karan.sharma@viaggioo.com</span></div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="set-heading-com">Agent Mobile No : <span style={{ color: 'blue', float: 'right' }}>9810582289</span></div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="set-heading-com">Available Balance : <span style={{ color: 'blue', float: 'right' }}>2000000</span></div>
                            </div>
                        </div>
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-4">
                                    <label htmlFor="txtUserId">Select key to search by</label>
                                    <select class="form-select" name="type">
                                        <option selected>Select Type</option>
                                        <option value="all">Credit</option>
                                        <option value="debit">Debit</option>
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
                                            Date</th>

                                        <th className="sorting">
                                            Accounts Ref No.
                                        </th>
                                        <th className="sorting">
                                            Particulars
                                        </th>
                                        <th className="sorting" >Debit</th>
                                        <th className="sorting" >Credit</th>
                                        <th className="sorting" >Running Balance</th>

                                        {/* <th className="sorting" >Approve</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd">
                                        <td colSpan={7} style={{ textAlign: 'center' }}>No Data Found</td>



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
export default AccountLadger