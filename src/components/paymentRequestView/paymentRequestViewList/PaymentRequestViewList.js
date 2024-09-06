import { Pagination } from "antd"
import { Link } from "react-router-dom"
import ExportPdf from "../../../common/exportPdf/ExportPdf";
import Loadar from "../../../common/loader/Loader";
import PaymentUpdate from "./paymentUpdate/PaymentUpdate";
import { useState } from "react";

function PaymentRequestViewList({ state, onChangeVal, loading, fetchUserType }) {
    const data = state?.requestList
    const [show, setShow] = useState(false);
    const [showLog, setshowLog] = useState(false)
    const [values, setValues] = useState()
    const handleShow = (val) => {
        setValues(val)
        setshowLog(false)
        setTimeout(() => {
            setShow(true)
        }, 1000);
    };
    const handleClose = () => setShow(false);
    return (
        <>

            <div className="row m-4 exppdf">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">PAYMENT REQUEST VIEW </h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="/add-payment-request-view" role="button" aria-controls="offcanvasExample">+ PAYMENT REQUEST VIEW</Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                        <ExportPdf />
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                ID
                                            </th> */}
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                User Name
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                User Type</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Member Code </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Request Date</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Request Time</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Payment Date</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Bank</th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Method</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Amount</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Receipt</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Bank Ref No  </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Status</th>
                                            {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading && <Loadar />}
                                        {data?.map((item, i) => {
                                            return <tr role="row" className="odd" key={i}>
                                                {/* <td className="sorting_1"><span>1</span></td> */}
                                                <td>
                                                    {item?.username}
                                                </td>
                                                <td>
                                                    {item?.user_type}
                                                </td>
                                                <td>
                                                    {item?.member_code}
                                                </td>
                                                <td>
                                                    <span>{new Date(item?.createdAt).getDate() + "-" + Number(new Date(item?.createdAt).getMonth() + 1) + "-" + new Date().getFullYear()}</span>
                                                </td>
                                                <td>

                                                    <span>{new Date(item?.createdAt).getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}</span>
                                                </td>
                                                <td className="sorting_1"><span>{new Date(item?.paymentDate).getDate() + "-" + Number(new Date(item?.createdAt).getMonth() + 1) + "-" + new Date().getFullYear()}</span></td>
                                                <td>
                                                    {item?.bank}
                                                </td>


                                                <td><span className="text-uppercase">{item?.method}</span></td>
                                                <td className="sorting_1"><span>{item?.amount}</span></td>

                                                <td>
                                                    <img style={{ width: "100px", height: "100px" }} src={`https://api.paypandabnk.com/api/cloudinary/${item?.receipt_img}`} />
                                                </td>
                                                <td><span>{item?.bankRef}</span></td>


                                                <td className="" style={{ cursor: "pointer" }}>
                                                    <span className="badge badge-success light border-0" onClick={() => { handleShow(item) }}>{item?.status}</span>
                                                    {/* <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.status === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'active' : 'Inactive'}</span> */}
                                                </td>
                                                {/* <td>
                                                <div className="d-flex">
                                                    <Link to="/update-payment-request-view" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                </div>

                                            </td> */}
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {state?.totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            // showSizeChanger
                                            // onShowSizeChange={''}

                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                            total={state?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <PaymentUpdate show={show} handleClose={handleClose} values={values} setshowLog={setshowLog} showLog={showLog} fetchUserType={fetchUserType} />
        </>
    )
}
export default PaymentRequestViewList