import React, { useState } from 'react'
import { Pagination } from 'antd';
import ExportPdf from '../../common/exportPdf/ExportPdf';
import { ToastContainer, toast } from 'react-toastify';
import { DownloadExcel } from '../../common/downloadExcel/DownLoadExcel';

function AepsCashList({ onChangeVal, aepsData, title, count, page }) {
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
                                        <h4 className="heading mb-0"><b>{title} List</b></h4>
                                        <div className='d-flex'>
                                            <ExportPdf />
                                            <button className='btn btn-success bg-info' onClick={DownloadExcel}>Download Excel</button>
                                        </div>

                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Sr. No
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Date / Time
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Merchant  Name</th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Member code
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Customer Mobile No
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Transaction ID
                                                    </th>


                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Aadhar No  					</th>

                                                    {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Customer name 				</th> */}
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Bank Name				</th>

                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Account Balance
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Status
                                                    </th>




                                                </tr>
                                            </thead>
                                            <tbody>
                                                {aepsData?.data && aepsData.data.length > 0 ? (
                                                    aepsData.data.map((item, i) => (
                                                        <tr role="row" className="odd" style={{ cursor: "pointer" }} key={i}>
                                                            <td>{(i + 1) + count * page}</td>
                                                            <td>{item?.createdAt}</td>
                                                            <td>{item?.user_name}</td>
                                                            <td>{item?.user_member_code}</td>
                                                            <td>{item?.customer_mobile ? item?.customer_mobile : "XXX XXX XXXX"}</td>
                                                            <td>{item?.txn_id}</td>
                                                            <td>{item?.adhaar_no}</td>
                                                            <td>{item?.bank_name}</td>
                                                            <td>{item?.bal_amount}</td>
                                                            <td>
                                                                {item?.status == 1 && 'Success'}
                                                                {item?.status == 2 && 'Pending'}
                                                                {item?.status == 3 && 'Failed'}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr role="row" className="odd">
                                                        <td colSpan="10" style={{ textAlign: "center" }}><strong>No Data Found</strong></td>
                                                    </tr>
                                                )}


                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                                <h4>Total Amount : {aepsData?.totalAmount}</h4>
                            </div>
                        </div>

                    </div>
                </div >
            </section>
        </>
    )
}

export default AepsCashList
