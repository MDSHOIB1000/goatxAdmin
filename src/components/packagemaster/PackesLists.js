import React, { useState } from 'react'
// import ExportPdf from '../../../../common/exportPdf/ExportPdf'
import { Pagination } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import ExportPdf from '../../common/exportPdf/ExportPdf';
import { PackegDelete } from '../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import { SiAngularjs } from 'react-icons/si';
import { baseUrlImage } from '../../baseUrl';

function PackesLists({ onChangeVal, aepsData, getDmtTxnData }) {
    const navigate = useNavigate()
    // const ChangeRouts = (id) => {
    //     navigate(`/add-package/${id}`)
    // }


    const toastSuccessMessage = () => {
        toast.success(` Package Delete Successfully.`, {
            position: "top-center",
        });
    };


    const toastErrMessage = (msg) => {
        toast.error(`Package Not Delete ${msg}.`, {
            position: "top-center",
        });
    };
    const deletePackege = async (id) => {
        try {
            const res = await PackegDelete(id)
            if (res.statusCode == 200) {
                toastSuccessMessage();
                getDmtTxnData(0)

            } else {
                toastErrMessage(res.message);
            }
        } catch (error) {

        }
    }
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Package List</b></h4>
                                        <div className='d-flex'>
                                            <ExportPdf />
                                            <div>
                                                <Link to="/add-package" class="btn btn-primary">Add Package</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                       <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Sr. No
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Package Name					</th>

                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Services
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        MRP
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Sale Rate
                                                    </th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Tax			 </th>

                                                    {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Amount					</th> */}


                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Type	</th>


                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Duration		</th>
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Unit			</th>
                                                    {/* <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Reason				</th> */}
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Icon image				</th>
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Status				</th>
                                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action				</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {aepsData?.data?.map((item, i) => {

                                                    return <tr role="row" className="odd" style={{ cursor: "pointer" }}>
                                                        <td>{i + 1}</td>
                                                        {/* <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                                        <td>{item?.package_name}</td>
                                                        <td>{item?.services?.map((item) => <div>{item} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.mrp ? item?.mrp : 0} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.sale_rate ? item?.sale_rate: 0} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.tax ? item?.tax : 0 } ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.tax_type ? item?.tax_type : 0} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.duration ? item?.duration : 0} ,</div>)}</td>
                                                        <td>{item?.prices?.map((item) => <div>{item?.duration_type ? item?.duration_type : 0} ,</div>)}</td>
                                                        <td><img style={{ width: "100px" }} src={`${baseUrlImage}${item?.icon_img}`} /></td>
                                                        <td>
                                                        <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.isActive === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.isActive === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'Active' : 'In active'}</span>
                                                        </td>

                                                        <td className='text-center'>
                                                            <Link className='btn btn-warning color2' to={`/add-package/${item._id}`}><i className="fa fa-pencil" /></Link>
                                                            <button type="button" className="btn btn-danger" onClick={() => deletePackege(item._id)}><i className="fa fa-trash" /></button>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {aepsData?.totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                /* showSizeChanger
                                                onShowSizeChange={''} */

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={aepsData?.totalCount}
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

export default PackesLists
