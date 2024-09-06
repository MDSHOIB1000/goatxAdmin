import { message, Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom"
import Loadar from "../../../common/loader/Loader"
import { complaneListDelete } from "../../../api/login/Login"


function ListComplane({ onChangeVal, dmtTtxn, loading, dmtExcelTtxn, getDmtTxnData, total }) {
    const curdmtTtxn = dmtTtxn
    const curdmtexcelTtxn = dmtExcelTtxn?.dmtTransaction


    const deleteMainModule = async (id) => {
        try {
            const res = await complaneListDelete(id)
            getDmtTxnData()
        } catch (error) {

        }
    }


    const confirm = (id) => {
        deleteMainModule(id)
        message.success('Delete Successfull!');
    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b> List Complaint </b></h4>
                                        <div>
                                            {/* <Link className="btn btn-primary btn-sm" to="/add-summary-report" role="button" aria-controls="offcanvasExample">+  ADD SUMMARY REPORTS </Link> */}
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                            {/* <ExportPdf />
                                            {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                            </CSVLink>) : ""} */}

                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Date
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        First Name
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Last Name	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Ticket no	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Status	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action	</th>
                                                </tr>
                                            </thead>
                                            {loading && <Loadar />}
                                            <tbody>
                                                {curdmtTtxn?.map((item, i) => {
                                                    return <tr role="row" className="odd" key={i}>
                                                        <td> {item?.createdAt}</td>
                                                        <td> {item?.firstname}</td>
                                                        <td> {item?.lastname}</td>
                                                        <td> {item?.ticket_no}</td>
                                                        <td> {item?.status}</td>
                                                        <td>
                                                            <div className="d-flex">

                                                                <Link to={`/update-Complaint/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete  STATUS !"
                                                                    description="Are you sure to delete ?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {total} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={dmtTtxn?.total}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        <h4> Total Amount : {dmtTtxn?.totalAmount} </h4>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}
export default ListComplane