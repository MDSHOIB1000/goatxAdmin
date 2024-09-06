import React, { useState } from 'react'
import { Pagination } from 'antd';
import ExportPdf from '../../common/exportPdf/ExportPdf';
import { ToastContainer, toast } from 'react-toastify';
import { DownloadExcel } from '../../common/downloadExcel/DownLoadExcel';

function NotificationList({ onChangeVal, aepsData, title }) {
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
                                                    Date
                                                    </th>
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    Send By
                                                    </th>

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Send From			</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Subject					</th>
                                                
                                                    {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                        Customer name 				</th> */}
                                                   <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                   To				</th>

                                                  
                                                 

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {aepsData?.data?.map((item, i) => {
                                                    return <tr role="row" className="odd" style={{ cursor: "pointer" }}>
                                                        <td>{i + 1}</td>
                                                        <td>{item?.createdAt}</td>
                                                        <td>{item?.sendBy}</td>
                                                        <td>{item?.sendFrom}</td>
                                                        <td>{item?.subject}</td>
                                                        <td>{item?.to}</td>
                                                       
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>

                                        
                                    </div>
                                </div>
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
                </div >
            </section>
        </>
    )
}

export default NotificationList
