import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletedmtcommagId, getdmtcomm2 } from '../../../../api/login/Login';
import { Pagination, Popconfirm, message } from 'antd';
import Loadar from '../../../../common/loader/Loader';

function DmtCommisionStruclist() {
    const [dmtData, setDmtData] = useState(null)
    const [loading, setLoading] = useState(false);
    const getdmtList = async (num) => {
        setLoading(true)
        try {
            const datas = await getdmtcomm2({ start_date: null, end_date: null, service_id: null, page: num })
            // setDmtData(datas)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const deleteCurrency = async (id) => {
        setLoading(true)
        try {
            await deletedmtcommagId(id)
            getdmtList(0)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getdmtList(0)
    }, [])
    const onChangeVal = (e) => {
        getdmtList(e - 1)
    };


    const confirm = (id) => {
        deleteCurrency(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    return (
        <section className="ListDistributer ">
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>COMMISION Scheme Structure  LIST</b></h4>
                                    {/* <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-dmt-commision-scheme" role="button" aria-controls="offcanvasExample">+  BBPS COMMISION  </Link>
                                    </div> */}
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                  
                                   <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                Scheme  Name
                                                </th>
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                API vender
                                                </th>
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                Entry date
                                                </th>
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                Entry by
                                                </th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Status</th>

                                                <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dmtData?.data.map((item, i) => {
                                                return <tr role="row" className="odd">
                                                    <td className="sorting_1"><span>{i + 1}</span></td>
                                                    <td className="sorting_1"><span>{item?.name}</span></td>

                                                    <td>
                                                        <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.isActive === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.isActive === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'active' : 'Inactive'}</span>
                                                    </td>
                                                    <td>
                                                        <Link to={`/update-dmt-commision-scheme/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete DMT commision !"
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
                                    {/* <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div> */}
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}

                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={dmtData?.totalCount}
                                    />



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section>
    )
}

export default DmtCommisionStruclist