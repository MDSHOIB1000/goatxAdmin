import { Pagination } from "antd";
import { Link } from "react-router-dom"
import Loadar from "../../../common/loader/Loader";
import ExportPdf from "../../../common/exportPdf/ExportPdf";

function VirtualWallList({ data, onChangeVal, totalCount, loading }) {
    return (
        <>
            {loading && <Loadar />}
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>All virtual wallet List</b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/wallet/add/virtual-wallet" role="button" aria-controls="offcanvasExample">+  ADD Virtual Wallets </Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                            <ExportPdf />
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                       <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Date
                                                    </th>
                                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Order ID
                                                    </th> */}

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                        Amount</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                        Transaction Type
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Message</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Closing Bal</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Opening Bal</th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Status
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item) => {
                                                    return <tr role="row" className="odd" key={item?._id}>
                                                        <td className="sorting_1"><span>{new Date(item?.createdAt).getDate() + "/" +Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date().getFullYear()}</span></td>
                                                        {/* <td>
                                                            {item?.order_id}
                                                        </td> */}
                                                        <td>{item?.amount}</td>
                                                        <td>{item?.trans_type}</td>
                                                        <td>
                                                            {item?.message}
                                                        </td>
                                                        <td>{item?.c_bal}</td>
                                                        <td>
                                                            {item?.o_bal}
                                                        </td>




                                                        <td>
                                                            <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.approve === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.approve === false ? '0.8rem' : ''}` }}>{item?.approve == true ? 'varified' : 'un varified'}</span>
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

export default VirtualWallList