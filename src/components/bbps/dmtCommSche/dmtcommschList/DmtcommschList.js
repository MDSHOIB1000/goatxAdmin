import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletedmtcommschemeagId, getBbpscommscheme, getdmtcommscheme } from '../../../../api/login/Login';
import { Pagination, Popconfirm, message } from 'antd';
import Loadar from '../../../../common/loader/Loader';
import ExportPdf from '../../../../common/exportPdf/ExportPdf';
import DmtreportFil from './DmtreportFil';

function DmtcommschList() {
    const [dmtscheData, setDmtscheData] = useState(null)
    const [loading, setLoading] = useState(false);
    const getdmtSchList = async (num) => {
        setLoading(true)
        try {
            const datas = await getBbpscommscheme({ start_date: null, end_date: null, service_id: null, page: num })
            setDmtscheData(datas)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const deleteCurrency = async (id) => {
        setLoading(true)
        try {
            await deletedmtcommschemeagId(id)
            getdmtSchList()
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getdmtSchList(0)
    }, [])

    const onChangeVal = (e) => {
        getdmtSchList(e - 1)
    };


    const confirm = (id) => {
        deleteCurrency(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        // message.error('Cancle Successfull!');
    };
    return (
        <>
            {loading && <Loadar />}
            <section className="ListDistributer ">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>BBPS COMMISION SCHEME LIST</b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-bbps-commision" role="button" aria-controls="offcanvasExample">+BBPS COMMISION SCHEME</Link>
                                            <ExportPdf />
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                + Invite Employee
                            </button> */}
                                        </div>
                                    </div>
                                    {/* <DmtreportFil/> */}
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                        {dmtscheData &&
                                           <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                            S.No
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Name
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Service
                                                        </th>


                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                            Status</th>

                                                        <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                            Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dmtscheData?.data?.map((item, i) => {
                                                        return <tr role="row" className="odd">
                                                            <td className="sorting_1"><span>{i + 1}</span></td>
                                                            <td>
                                                                {item?.name}
                                                            </td>
                                                            <td>
                                                                {item?.service_id}
                                                            </td>


                                                            <td>
                                                                <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.isActive === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.isActive === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'active' : 'Inactive'}</span>
                                                            </td>
                                                            <td>
                                                                <Link to={`/add-bbps-commision/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete commission scheme !"
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
                                        }
                                     
                                        
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {dmtscheData?.totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                /* showSizeChanger
                                                onShowSizeChange={''} */

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={dmtscheData?.totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}

export default DmtcommschList