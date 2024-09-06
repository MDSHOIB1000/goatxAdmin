import { Popconfirm } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function BillingAddressList({data,confirm,cancel,editBillingAddress}) {
   
    return (
        <> {data &&
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">BILLING ADDRESS</h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="/add-service-master" role="button" aria-controls="offcanvasExample">+ SERVICE MASTER</Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                + Invite Employee
                            </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                Name
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Email</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Contact No</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Address Lane (1)</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Address Lane (2)</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Pin Code</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                State</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                City</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Country
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Province</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item) => {
                                            return <tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    {<span>
                                                        {item?.firstname} {item?.lastname}
                                                    </span>}
                                                </td>
                                                <td className="sorting_1"><span>{item?.email}</span></td>
                                                <td className="sorting_1"><span>{item?.mobile_number}</span></td>
                                                <td className="sorting_1"><span>{item?.addressLine1}</span></td>
                                                <td className="sorting_1"><span>{item?.addressLine2}</span></td>
                                                <td className="sorting_1"><span>{item?.pin_code}</span></td>
                                                <td className="sorting_1"><span>{item?.state}</span></td>
                                                <td className="sorting_1"><span>{item?.city}</span></td>

                                                <td className="sorting_1"><span>{item?.country}</span></td>

                                                <td className="sorting_1"><span>{item?.province}</span></td>

                                                <td>
                                                    <span className="badge badge-success text-light  border-0" style={{ backgroundColor: `${item?.status_id === true ? 'blue' : 'red'}`, fontSize: `${item?.status_id === false ? '0.8rem' : ''}` }}>{item?.status_id == true ? 'Active' : 'Inactive'}</span>
                                                </td>
                                                <td>
                                                    <Link to={`#`} onClick={()=>editBillingAddress(item._id)} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                   
                                                    <Popconfirm
                                                        title="Delete Currency !"
                                                        description="Are you sure to delete ?"
                                                        onConfirm={() => confirm(item?._id)}
                                                        onCancel={cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Link to="#" disable className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                    </Popconfirm>
                                                </td>

                                            </tr>
                                        })}


                                    </tbody>
                                </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        }</>
    )
}

export default BillingAddressList