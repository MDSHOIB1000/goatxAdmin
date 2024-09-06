import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Popconfirm, message } from "antd"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import { deletePriorityId, getPriority} from "../../../../api/login/Login"
import Loadar from "../../../../common/loader/Loader"
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Type Reasons list",
}
function TypeReasonList() {
    const token = window.localStorage.getItem("userToken")

    const [data, setData] = useState()

    const [loading, setLoading] = useState(false);
    const getListUserType = async () => {
        setLoading(true)
        try {
            const data = await getPriority()
            setData(data?.data)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getListUserType()
    }, [])

    const deleteuserTypeList = async (id) => {
        setLoading(true)
        try {
            await deletePriorityId(id,token)
            getListUserType()
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
                                    <h4 className="heading mb-0"> Reason Type List</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-reason-type" role="button" aria-controls="offcanvasExample">+ ADD Type Reason</Link>
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                S.NO
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Type
                                            </th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item,i)=>{
                                            
                                            return <tr role="row" className="odd">
                                            <td className="sorting_1"><span>{i+1}</span></td>
                                            <td>
                                            {item?.priority}
                                            </td>
                                            <td>
                                            <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.status === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === false ? '0.8rem' : ''}` }}>{item?.status == true ? 'Active' : 'In Active'}</span>
                                            </td>

                                            <td>
                                                <div className="d-flex">
                                                    
                                                    <Link to={`/update-type-reason/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <Popconfirm
                                                            title="Delete Currency !"
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
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default TypeReasonList