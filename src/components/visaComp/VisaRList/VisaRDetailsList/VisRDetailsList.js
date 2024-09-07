import { Empty, Pagination } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function VisaRDetailsList({ selectAll, handleSelectAll, handleCheckboxChange, apesData, selectedUsers }) {

    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>VISA LIST
                                    </b></h4>
                                    <div>
                                        {/* <ExportPdf /> */}
                                        {/* {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                        </CSVLink>) : ""} */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>

                                            <tr role='row'>
                                                <th>
                                                    <p className="m-0"><small style={{ fontSize: "0.8em" }}>Select All</small></p>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="selectAll"
                                                            checked={"selectAll"}
                                                            // onChange={handleSelectAll}
                                                        />
                                                    </div></th>
                                                <th> Visa Country</th>
                                                <th>Visa Title		</th>
                                                <th >Status			</th>
                                                <th >Created Date	</th>
                                                <th >Modified Date			</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {apesData?.map((template, index) => {
                                                const isChecked = selectedUsers.some(user => user?._id === template?._id);
                                                return (
                                                    <tr key={template._id}>
                                                        <td>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={isChecked}
                                                                    onChange={(e) => handleCheckboxChange(e, template)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>{template.phoneNumber}</td>
                                                        <td>{template.createdAt}</td>

                                                        <td className="text-start">
                                                            <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                                            <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}

                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            checked={""}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    Saudi Arabia
                                                </td>
                                                <td>
                                                    Tourist Visa 14 Days
                                                </td>
                                                <td>
                                                    <span className='badge badge-primary text-light border-0'>Active</span>
                                                </td>
                                                <td>
                                                    26 Jul 2024 / 2:28 PM
                                                </td>
                                                <td>
                                                30 Jul 2024 / 12:19 PM
                                                </td>
                                                <td>
                                               <button className='btn btn-primary px-2 py-1 '><i class="fa-solid fa-pen"></i></button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {""} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        /* showSizeChanger
                                        onShowSizeChange={''} */

                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={aepsData?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section>

    )
}

export default VisaRDetailsList