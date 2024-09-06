import { Pagination, Popconfirm } from 'antd'
import React from 'react'
import { ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CompanyTypeMasterList({ data, totalCount, confirm, cancel }) {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"> Company Type Master</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/create_company-type-master" role="button" aria-controls="offcanvasExample">+ CREATE COMPANY TYPE</Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                    + Invite Employee
                                </button> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Company Type Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Course
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Stream
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Status</th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Actions </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => {
                                                return <tr role="row" className="odd">
                                                   

                                                    <td>
                                                        {item?.name}
                                                    </td>
                                                    <td>
                                                        {item?.course}
                                                    </td>
                                                    <td>
                                                        {item?.stream}
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.isActive === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.isActive === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'Active' : 'In Active'}</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/update_company-type-master/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete Company Master!"
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default CompanyTypeMasterList
