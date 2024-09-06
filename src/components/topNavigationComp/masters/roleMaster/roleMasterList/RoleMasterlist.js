import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs"
import { DeleteRole, getListRole } from "../../../../../api/login/Login"
import { useEffect, useState } from "react"
import { Pagination, Popconfirm, message } from "antd"
import Loadar from "../../../../../common/loader/Loader"
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Role Master",
    path_2: "/role-master"
}
function RoleMasterList() {

    const [data, setData] = useState()
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    const [loading, setLoading] = useState(false);
    const getListUserType = async (num) => {
        setLoading(true)
        try {
            const data = await getListRole(num, count)
            setData(data)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getListUserType(page)
    }, [])

    const deleteuserTypeList = async (id) => {
        setLoading(true)
        try {
            await DeleteRole(id)
            getListUserType(page)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    const confirm = (id) => {
        deleteuserTypeList(id)
        message.success('Delete Successfull!');
    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };
    const onChangeVal = (e) => {
        setPage(e-1)
        getListUserType(e - 1)
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                {loading && <Loadar />}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">ROLE MASTER</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-role-master" role="button" aria-controls="offcanvasExample">+ ROLE MASTER</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                S.NO
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Role Name
                                            </th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.data?.map((item, i) => {
                                            return <tr role="row" className="odd" key={i}>
                                                <td className="sorting_1"><span>{(i + 1) + count * page}</span></td>
                                                <td>
                                                    {item?.name}
                                                </td>

                                                <td>
                                                    <div className="d-flex">

                                                        <Link to={`/update-role-master/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete Role !"
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
                                        Total {data?.totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            /* showSizeChanger
                                            onShowSizeChange={''} */

                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                            total={data?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default RoleMasterList