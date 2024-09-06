import React from 'react'

function TopTenCourse() {
    return (
        <div className="container">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Top Ten  Courses </h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="#" role="button" aria-controls="offcanvasExample">+ BANK MASTER</Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                 + Invite Employee
                             </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                {/* Bank Name */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                {/* Branch Name */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                {/* IFSC Code */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                {/* Bank ID */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                {/* Paysprint Bank Id */}
                                            </th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                {/* Account No */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                {/* Status */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                {/* Remark */}
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                {/* Action */}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {data && data?.map((item) => { */}
                                        return <tr role="row" className="odd" key={""}>

                                            <td>
                                                {/* {item?.bank_name} */}
                                            </td>
                                            <td>
                                                {/* {item?.branch_name} */}
                                            </td>
                                            <td>
                                                {/* <span>{item?.ifsc_code}</span> */}
                                            </td>
                                            <td>
                                                {/* {item?.bank_id} */}
                                            </td>
                                            <td>
                                                {/* {item?.paysprint_bank_id} */}
                                            </td>
                                            <td>
                                                {/* {item?.bank_account_number} */}
                                            </td>


                                            <td>
                                                {/* <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span> */}
                                            </td>
                                            <td style={{ width: "200rem" }}>
                                                {/* <span className='text-wrap' >{item?.remark ? item?.remark : 'No Remark Avilable'}</span> */}
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    {/* <Link to={`/update-bank/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <Popconfirm
                                                        title="Delete bank master !"
                                                        description="Are you sure to delete ?"
                                                        onConfirm={() => confirm(item?._id)}
                                                        onCancel={cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                    </Popconfirm> */}
                                                </div>

                                            </td>

                                        </tr>
                                        {/* })} */}



                                    </tbody>
                                </table>
                                    {/* < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
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
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default TopTenCourse
