import { FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import { DeleteBeneficiaryData, getBeneficiaryData, paginationPayoutbeneficiaryMaster } from "../../../../../api/login/Login";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";
import Loadar from "../../../../../common/loader/Loader";

function PayoutBeneficiaryMasterList() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()

    const getPaginationApi = async (page) => {
        setLoading(true)
        try {
            const res = await paginationPayoutbeneficiaryMaster(page, count)
            // console.log(res?.data?.area);
            setTotalCount(res?.data?.count)
            setData(res?.data?.payout)
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

    const deleteuserTypeList = async (id) => {
        setLoading(true)
        try {
            await DeleteBeneficiaryData(id)
            getPaginationApi(page)
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
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">PAYOUT BENEFICIARY MASTER</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-payout-beneficiary-master" role="button" aria-controls="offcanvasExample">+ PAYOUT BENEFICIARY MASTER</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                User Name
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Date
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Mobile Number</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Account Number</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Holder Name</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                IFSC Code</th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item, i) => {
                                            return <tr role="row" className="odd">
                                                <td className="sorting_1"><span>{item?.name}</span></td>
                                                <td>
                                                    {item?.date}
                                                </td>
                                                <td><span>{item?.mobile}</span></td>
                                                <td>
                                                    <span>{item?.account_number}</span>
                                                </td>
                                                <td><span>{item?.holder_name}</span></td>

                                                <td><span>{item?.ifsc_code}</span></td>
                                                <td>
                                                    <span className="badge badge-success light border-0">{item?.is_active?.toString()}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to={`/update-payout-beneficiary-master/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
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
        </>
    )
}
export default PayoutBeneficiaryMasterList