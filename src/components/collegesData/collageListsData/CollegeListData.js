import { Empty, Pagination, Popconfirm } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { baseUrlImage } from '../../../baseUrl'

function CollegesInfoList({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"> Colleges List  </h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-colleges" role="button" aria-controls="offcanvasExample">+ ADD COLLEGES</Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Colleges Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Established In
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Country / State / City
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Stream
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Course
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Collage Type
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Approved By
                                                </th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Affilated By
                                                </th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Fee
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Logo
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Banner Img
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Location
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Actions </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.length === 0 ? (
                                                <tr>
                                                    <td colSpan="7">
                                                        <Empty className='m-0' image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                                    </td>
                                                </tr>
                                            ) : (
                                                data?.map((item, i) => (
                                                    <tr role="row" className="odd" key={item?._id}>
                                                        <td style={{ verticalAlign: 'top' }}>{(i + 1) + (page * count)}</td>
                                                        <td style={{ verticalAlign: 'top' }}>{item?.name}</td>
                                                        <td style={{ verticalAlign: 'top' }}>{item?.establish}</td>
                                                        <td style={{ verticalAlign: 'top' }}>{item?.country?.name}</td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            {item?.stream_id?.map((item, i) => (
                                                                <p key={i}>{i + 1}. &nbsp;<span>{item?.name}</span></p>
                                                            ))}
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            {item?.courses?.map((item, i) => (
                                                                <p key={i}>{i + 1}. &nbsp;<span>{item?.course_id?.service_name}</span></p>
                                                            ))}
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>{item?.college_type_id?.name}</td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            {item?.approvedBy?.map((item, i) => (
                                                                <p key={i}>{i + 1}. &nbsp;<span>{item?.name}</span></p>
                                                            ))}
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            {item?.affiliate?.map((item, i) => (
                                                                <p key={i}>{i + 1}. &nbsp;<span>{item?.name}</span></p>
                                                            ))}
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>{item?.courses[0].fee}</td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            <div className='image'>
                                                                <img
                                                                    src={`${baseUrlImage}${item?.logo_img}`}
                                                                    alt='Logo'
                                                                    style={{ objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            <div className='image'>
                                                                <img
                                                                    src={`${baseUrlImage}${item?.banner_img}`}
                                                                    alt='Banner'
                                                                    style={{ width: "80%", height: "auto", borderRadius: "8px", objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>{item?.location}</td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            <div className="d-flex">
                                                                <Link to={`/update-college/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete College!"
                                                                    description="Are you sure you want to delete this college?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                        <i className="fa fa-trash" />
                                                                    </Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                ))
                                            )}


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
                                        </div>
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

export default CollegesInfoList
