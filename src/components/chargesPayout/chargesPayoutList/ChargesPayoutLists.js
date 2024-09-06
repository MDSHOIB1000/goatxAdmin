import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Pagination, Popconfirm, message } from 'antd'
import Loadar from '../../../common/loader/Loader'
function ChargesPayoutLists() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()

    /* const getPaginationApi = async (page) => {
        setLoading(true)
        try {
            const res = await paginationApiMaster(page, count)
            setTotalCount(res?.data?.count)
            setData(res?.data?.bank)
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
    const deletebank = async (id) => {
        setLoading(true)
        try {
            await BankMasterDelete(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getPaginationApi(backList)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        deletebank(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    }; */
    return (
        <>
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Payout Charges List</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-payout-charges" role="button" aria-controls="offcanvasExample">+ add Payout</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Vendor Id
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Min Amount
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Max  Amount</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                Charges
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Charges Type</th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {data && data?.map((item) => {
                                            return <tr role="row" className="odd" key={item?._id}>

                                                <td>
                                                    {item?.bank_name}
                                                </td>
                                                <td>
                                                    {item?.branch_name}
                                                </td>
                                                <td><span>{item?.ifsc_code}</span></td>
                                                <td>{item?.bank_id}</td>
                                                <td>
                                                    {item?.paysprint_bank_id}
                                                </td>
                                                <td>
                                                    {item?.bank_account_number}
                                                </td>


                                                <td>
                                                    <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                                                </td>
                                                <td style={{ width: "200rem" }}>
                                                    <span className='text-wrap' >{item?.remark ? item?.remark : 'No Remark Avilable'}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to={`/update-Payout-charges/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete Payout Charges !"
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
                                        })} */}



                                    </tbody>
                                </table>
                                    < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            // showSizeChanger
                                            // onShowSizeChange={''}

                                            defaultCurrent={1}
                                            onChange={"onChangeVal"}
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

export default ChargesPayoutLists
