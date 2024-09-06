import React from 'react'

function MyBookingCalenderListComp() {
  return (
    <>
    {/* {loading && <Loader />} */}
    <div className="PageHeading">
        <h1>Hotel Booking Calender</h1>
    </div>
    <div className="ContentArea">
        <div className="card">

            <div className="card-header"><span>Filter</span></div>
            <div className="card-body">
                <form action="" method="post" name="frmReport" id="frmReport">
                    <input type="hidden" id="hidID" name="hidID" />
                    <div className="form-row" style={{ alignItems: 'end' }}>

                       


                        <div className="form-group col-md-4">
                            <label htmlFor="txtUserId">From Date</label>
                            <input type="date" name="start_date" id="account_no" className="form-control" />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="txtUserId">To Date</label>
                            <input type="date" name="start_date" id="account_no" className="form-control" />
                        </div>

                       

                        <div className="form-group col-md-2">
                            <label>&nbsp;</label>
                            <button type="button" className="btn btn-primary mr-3" >
                                Search

                            </button>
                            <button type="button" className="btn btn-warning">Reset</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
        {/* <div className="card mt-4" style={{ overflow: 'auto' }}>
            <div className="card-body">
                <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                    <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                    <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                        <thead>
                            <tr role="row">
                                <th className="sorting">
                                    S.No
                                </th>
                                <th className="sorting">Hotel City</th>
                                <th className="sorting">Hotel Type</th>
                                <th className="sorting">
                                Contact Person Name
                                </th>
                                <th className="sorting" >Contact Email</th>
                                <th className="sorting" >Contact No</th>
                                <th className="sorting" >No Of Room</th>
                                <th className="sorting" >Check In Date</th>
                                <th className="sorting" >Check Out Date</th>
                                <th className="sorting" >Admin Remark</th>
                                <th className="sorting" >Status</th>
                                <th className="sorting">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td valign="top" className="dataTables_empty">1</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                                <td valign="top" className="dataTables_empty">----</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="dataTables_info_page">
            <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                Total 00 entries
            </div>
            <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                <Pagination
                    defaultCurrent={1}
                    onChange={onChangeVal}
                    total={totalCount}
                />
            </div>
        </div> */}
    </div>
</>
  )
}

export default MyBookingCalenderListComp