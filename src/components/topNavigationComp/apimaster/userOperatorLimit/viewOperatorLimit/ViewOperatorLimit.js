import { Link } from "react-router-dom"
import CustomDropdown from "../../../../../common/CustomDropdown"

function ViewOperatorLimit() {
    const itemList = [
        { name: "provider Name1", value: "provider Name1" },
        { name: "provider Name2", value: "provider Name2" },
        { name: "provider Name3", value: "provider Name3" },
    ];
    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-3">
                                    <h4 className="heading mb-0">View Operator Limit</h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="/add-service-master" role="button" aria-controls="offcanvasExample">+ SERVICE MASTER</Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper empoloyees-tblwrapper_wrapper-2" className="dataTables_wrapper no-footer  empoloyees-tblwrapper_wrapper-2"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                User Name
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Provider
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Services</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Limit Type</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Daily Value</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Limit</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Provider Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Limit Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd">
                                            <td className="sorting_1"><span>Direct Retailer</span></td>
                                            <td>
                                                Airtel
                                            </td>
                                            <td><span>Mobile</span></td>

                                            {/* <td>
                                                Activation
                                            </td>
                                            <td><span>0</span></td> */}
                                            <td style={{ width: '600px' }}>
                                                <div className="dropdownWrapper">
                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="--Select Limit Type -- "
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                0
                                            </td>
                                            <td><span>0</span></td>


                                            <td style={{ width: '860px' }}>
                                                <div className="dropdownWrapper">
                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="--Select Provider Status -- "
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                            </td>
                                            <td style={{ width: '860px' }}  >
                                            <div className="dropdownWrapper">
                                            <CustomDropdown
                                                itemList={itemList}
                                                placeholder="--Select Limit Status -- "
                                                isSingleSelect={false}
                                                icon={true}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to="#" className="btn btn-primary shadow btn-xs sharp me-1" style={{ width: '4.625rem' }}>Update</Link>

                                                </div>

                                            </td>

                                        </tr>

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
export default ViewOperatorLimit