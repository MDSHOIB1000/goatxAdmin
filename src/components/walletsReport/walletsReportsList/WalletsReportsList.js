import { Pagination } from "antd";
import { Link } from "react-router-dom"
import Loadar from "../../../common/loader/Loader";
import ExportPdf from "../../../common/exportPdf/ExportPdf";
import { CSVLink } from "react-csv";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

function WalletsReportsList({ data, onChangeVal, totalCount, loading }) {

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            {loading && <Loadar />}
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>All Wallets Reports List</b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-wallets/report" role="button" aria-controls="offcanvasExample">+ ADD  Wallets  </Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                            <ExportPdf />
                                            {/* <CSVLink  className="btn btn-succes" data={data}>Export Excel</CSVLink> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                       <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Order ID
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Transaction ID
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                        Amount</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                        Transaction Type
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Message</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Operator ID</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        C Bal</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        O Bal</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Status
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item) => {
                                                    return <tr role="row" className="odd" key={item?._id}>
                                                        <td className="sorting_1"><span>{item?.order_id}</span></td>
                                                        <td>
                                                            {item?.txn_id}
                                                        </td>
                                                        <td>{item?.amount}</td>
                                                        <td>{item?.trans_type}</td>
                                                        <td>
                                                            {item?.message}
                                                        </td>
                                                        <td>
                                                            ---
                                                        </td>
                                                        {item?.c_bal}
                                                        <td>
                                                            {item?.o_bal}
                                                        </td>




                                                        <td>
                                                            <span className="badge badge-success light border-0">{item?.approve.toString()}</span>
                                                        </td>
                                                        <td>

                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                        < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}
export default WalletsReportsList