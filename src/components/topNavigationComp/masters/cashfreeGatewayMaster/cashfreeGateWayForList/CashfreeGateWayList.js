import React from 'react'
import { Link } from 'react-router-dom'

function CashfreeGateWayList() {
  return (
    <section className="ListDistributer ">
    <div className="row m-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0"><b>CASHFREE GATEWAY MASTER
- </b></h4>
                            <div>
                                <Link className="btn btn-primary btn-sm" to="/add-cashfree-gateway-master" role="button" aria-controls="offcanvasExample">+ ADD  CASHFREE GATEWAY  </Link>
                                {/* <button type="button" className="btn btn-secondary btn-sm" >
                            + Invite Employee
                        </button> */}
                            </div>
                        </div>
                        <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                            {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                           <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                            User ID
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            App ID
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                            Secrete Key</th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            Base Url
                                        </th>
                                        
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Min-Amount</th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Max Amount</th>
                                        <th className="sorting " tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd">
                                        <td className="sorting_1"><span>1348</span></td>
                                        <td>
                                            <span>452378ddg46ef4674fh532</span>
                                        </td>
                                        <td>
                                        <span>452378ddgettyyyr5673g47dg446ef4674fh532</span>
                                        </td>
                                        <td>
                                            <span>https://www.google.com/search?q=app+id</span>
                                        </td>
                                        <td>
                                        <span class="badge badge-success light border-0">Inactive</span>
                                        </td>
                                        <td>
                                            45,673
                                        </td>
                                        <td>
                                            7,65,345
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <Link class="btn btn-primary shadow btn-xs sharp me-1" to="/cashfree-gateway-master"><i class="fa fa-pencil"></i> </Link>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div >

</section>
  )
}

export default CashfreeGateWayList
