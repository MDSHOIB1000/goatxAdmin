import { message, Pagination, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import { deleteStaffpermision, getStaffpermision } from '../../../api/login/Login'
import { Button } from 'react-bootstrap'
import Loadar from '../../../common/loader/Loader'

function ListStaffPermision() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Roles & Permisions",
        title_2: "List Staff",
    }
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [count, setCount] = useState(10)
    const [totalCount, setTotalCount] = useState(0)

    const getStaffList = async (pageNum) => {
        try {
            const res = await getStaffpermision(pageNum, count)
            setState(res?.data)
            setPage(pageNum)
            setTotalCount(res?.totalCount)
        } catch (error) {
            alert(error?.message)
        }
    }

    useEffect(() => {
        getStaffList(page)
    }, [])

    const deleteStaff = async (id) => {
        setLoading(true)
        try {
            await deleteStaffpermision(id)
            const newPage = totalCount % count === 1 ? page - 1 : page
            getStaffList(newPage)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        deleteStaff(id)
        message.success('Delete Successful!')
    }

    const cancel = () => {
        message.error('Cancel Successful!')
    }

    const onChangeVal = (pageNum) => {
        getStaffList(pageNum - 1)
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Staff List</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-staff" role="button" aria-controls="offcanvasExample">+ ADD STAFF</Link>
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.No</th>
                                                <th style={{ width: '200px' }}>Name</th>
                                                <th style={{ width: '200px' }}>Email</th>
                                                <th style={{ width: '150px' }}>Phone</th>
                                                <th style={{ width: '100px' }}>Role</th>
                                                <th style={{ width: '100px' }}>Floor</th>
                                                <th style={{ width: '100px' }}>Area</th>
                                                <th style={{ width: '100px' }}>Building</th>
                                                <th style={{ width: '100px' }}>Block</th>
                                                <th style={{ width: '100px' }}>Office</th>
                                                <th style={{ width: '100px' }}>Ward</th>
                                                <th style={{ width: '100px' }}>Department</th>
                                                <th style={{ width: '100px' }}>Designation</th>
                                                <th style={{ width: '150px' }}>KYC Status</th>
                                                <th style={{ width: '150px' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {state?.map((item, i) => (
                                                <tr key={item._id}>
                                                    <td>{(i + 1) + page * count}</td>
                                                    <td>{item?.name}</td>
                                                    <td>{item?.email}</td>
                                                    <td>{item?.mobile}</td>
                                                    <td>{item?.role_name}</td>
                                                    <td>{item?.floor_id}</td>
                                                    <td>{item?.area_id}</td>
                                                    <td>{item?.building_id}</td>
                                                    <td>{item?.block_id}</td>
                                                    <td>{item?.office_id}</td>
                                                    <td>{item?.ward_id}</td>
                                                    <td>{item?.department_id}</td>
                                                    <td>{item?.designation_id}</td>
                                                    <td>
                                                        {item?.is_approved ? (
                                                            <Link to={`/staff-kyc_details/${item?._id}`} className='btn btn-warning'>
                                                                {item.is_approved}
                                                            </Link>
                                                        ) : (
                                                            <Link to={`/staff-kyc_details/${item?._id}`} className='btn btn-warning'>
                                                                Verify Your Kyc
                                                            </Link>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/update-staff/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete Staff !"
                                                                description="Are you sure to delete ?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Button className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Button>
                                                            </Popconfirm>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            //    showSizeChanger
                                            //    onShowSizeChange={''}

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
            </div>
            {loading && <Loadar />}
        </>
    )
}

export default ListStaffPermision
