import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { paginationstaffMaster, staffDelete, staffList } from "../../../api/login/Login";
import { Pagination, Popconfirm, message } from "antd";
import Loadar from "../../../common/loader/Loader";


function StaffList() {
    const [curencyData, setCurrencyData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()

    const getPaginationApi = async (page) => {
        setLoading(true)
        try {
            const res = await paginationstaffMaster(page, count)
            // console.log(res?.data?.area);
            setTotalCount(res?.data?.count)
            setCurrencyData(res?.data?.staff)
        } catch (error) {

        }
        setLoading(false)
    }

    const onChangeVal = (e) => {
        getPaginationApi(e - 1)
        // setPage(e - 1)
    };

    useEffect(() => {
        getPaginationApi(page)
    }, [])

    const deleteCurrency = async (id) => {
        setLoading(true)
        try {
            await staffDelete(id)
            getPaginationApi(page)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }




    const confirm = (id) => {
        deleteCurrency(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    return (
        <>
            {loading && <Loadar />}
            <section className="ListDistributer m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>STAFF LIST</b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-satff" role="button" aria-controls="offcanvasExample">+  Staff</Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Email
                                                </th>
                                                {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                    Profile</th> */}
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                    Mobile
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Date Of Birth</th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Latitude</th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Longitude</th>

                                                {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                    Status</th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    KYC Status</th> */}

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Action
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {curencyData && curencyData?.map((item) => {
                                                return <tr role="row" className="odd" key={item?._id}>
                                                    <td className="sorting_1"><span>{item?.name}</span></td>
                                                    <td className="sorting_1"><span>{item?.email}</span></td>
                                                    <td>
                                                        {item?.mobile}
                                                    </td>
                                                    <td>
                                                        {item?.dob}
                                                    </td>
                                                    <td>
                                                        {item?.latitude}
                                                    </td>
                                                    <td>
                                                        {item?.longitude}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/update-satff/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
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
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
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
export default StaffList