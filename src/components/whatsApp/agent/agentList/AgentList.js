
import { useEffect, useState } from "react";

import { Pagination } from "antd";

// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import 'react-fancybox/lib/fancybox.css'
import { ToastContainer, toast } from "react-toastify";
// import { paymentRequestMemberHistoryUpdate, paymentRequestToUseradmin, paymentRequestToUseradminAll } from "../../../../../api/login/Login";
import { Link } from "react-router-dom";
import Loadar from "../../../../common/loader/Loader";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
function AgentList() {
    const breadCrumbsTitle = {
        title_1:"Agent List"
    }
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)

    const [modalShow, setModalShow] = useState(false);



    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        min_amt: 0,
        max_amt: 0,
        end_date: '',
        start_date: '',
        status: '',
        sortType: '',
        sortKey: ''
    })

    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await paymentRequestToUseradmin(clone)
            // setTotalCount(res?.data?.data?.totalCount)
            // setData(res?.data?.data?.requestList)
            // allDataPaymentRequest()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        // const sorted = [...data].sort((a, b) => {
        //     if (sortDirection === 'asc') {
        //         return a[key] > b[key] ? 1 : -1;
        //     } else {
        //         return a[key] < b[key] ? 1 : -1;
        //     }
        // });
        // console.log(sorted);
        // setData(sorted);

        // const clone = { ...filterInitial, sortType: assending, sortKey: key }

        if (sortDirection == 'asc') {
            setDecending(1)
        } else {
            setDecending(-1)
        }
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: page, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await paymentRequestToUseradmin(clone)
            // console.log(res?.data?.data?.requestList);
            // setTotalCount(res?.data?.data?.totalCount)
            // setData(res?.data?.data?.requestList)
            // getTransitionReport()
        } catch (error) {

        }
        setLoading(false)
    };

    const allDataPaymentRequest = async () => {
        const clone = { ...filterInitial, count: count, page: page, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await paymentRequestToUseradminAll(clone)
            // setAllData(res?.data?.data?.requestList);
        } catch (error) {

        }
    }

    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };


    const [updateInitialMemberHistory, setUpdateInitialMemberHistory] = useState({
        Payment: '',
        status: '',
        pin: '',
        user_id: ''
    })


    const handleChangeUpdate = (e) => {
        const clone = { ...updateInitialMemberHistory }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setUpdateInitialMemberHistory(clone)
    }

    const [idPayment, setPayment] = useState()


    const updateGetId = (item) => {
        setPayment(item?._id);

        setUpdateInitialMemberHistory(item)
        if (item.status == 'Approved') {
            toastSuccessMessage('Already Approved')
        } else {
            setModalShow(true)
        }


    }


    const updateData = async () => {

        const clone = { ...updateInitialMemberHistory, Payment: idPayment, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await paymentRequestMemberHistoryUpdate(clone)
            // if (res?.data?.statusCode == 200) {
            //     toastSuccessMessage(res?.data?.message)
            //     setTimeout(() => {
            //         setModalShow(false)
            //         setLoading(true)
            //         getTransitionReport()
            //     }, 2000)
            //     setLoading(false)
            // }
        } catch (error) {

        }
    }


    useEffect(() => {
        getTransitionReport()
        allDataPaymentRequest()
    }, [])
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            {loading && <Loadar />}
            
            <div className="ContentArea m-4">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport" className="cusforms">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="start_date">Start Date</label>
                                    <input type="date" name="start_date" id="start_date" className="form-control" value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="end_date">End Date</label>
                                    <input type="date" name="end_date" id="end_date" className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="agent_name">Agent Name</label>
                                    <input type="text" name="agent_name" id="agent_name" className="form-control" placeholder="Enter Agent Name" onChange={handleChange} />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <input type="number" name="phone_number" id="phone_number" className="form-control" placeholder="Enter Phone Number" onChange={handleChange} />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email" onChange={handleChange} />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="status">Status</label>
                                    <input type="text" name="status" id="status" className="form-control" placeholder="Enter Status" onChange={handleChange} />
                                </div>
                                <div className="form-group col-12 col-md-2 mb-3">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary w-100" onClick={getTransitionReport}>Search</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
                <div className="card mt-4" style={{ overflowX: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            <div className="row mb-3">
                                <div className="col-12 col-md-6 d-flex justify-content-start align-items-center mb-2 mb-md-0">
                                    <div className="dataTables_length" id="myTable_length">
                                        {/* Add your Excel download button here if needed */}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
                                    <div className="form-group">
                                        <Link to="/create-agent" className="btn btn-primary">
                                            Create Agent
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" onClick={() => sortByColumn('createdAt')}>
                                                Date
                                            </th>
                                            <th className="sorting" onClick={() => sortByColumn('createdAt')}>
                                                Agent Name
                                            </th>
                                            <th className="sorting" aria-label="Agent Id: activate to sort column ascending">
                                                Agent Id
                                            </th>
                                            <th className="sorting" aria-label="Email: activate to sort column ascending">
                                                Email
                                            </th>
                                            <th className="sorting" aria-label="Number: activate to sort column ascending">
                                                Number
                                            </th>
                                            <th className="sorting" aria-label="Status: activate to sort column ascending">
                                                Status
                                            </th>
                                            <th className="sorting" aria-label="Action: activate to sort column ascending">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item) => (
                                            <tr className="odd" key={item?._id}>
                                                <td valign="top">
                                                    {new Date(item?.createdAt).getDate() + "/" + (new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + ", " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}
                                                </td>
                                                <td valign="top">{item?.amount}</td>
                                                <td valign="top">{item?.remark}</td>
                                                <td valign="top">
                                                    {item?.status === 'Pending' && <button className="btn btn-warning" onClick={() => updateGetId(item)}>{item?.status}</button>}
                                                    {item?.status === 'Approved' && <button className="btn btn-success" onClick={() => updateGetId(item)}>{item?.status}</button>}
                                                    {item?.status === 'Rejected' && <button className="btn btn-danger" onClick={() => updateGetId(item)}>{item?.status}</button>}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="dataTables_info_page">
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total {totalCount}  entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={page}
                                        // showQuickJumper

                                        // defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                {/* <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="message">Record Not Found.</div>
                </div> */}
                {/* <StatusChangeRequestHistory
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    updateInitialMemberHistory={updateInitialMemberHistory}
                    handleChangeUpdate={handleChangeUpdate}
                    updateData={updateData}
                /> */}
                <ToastContainer />
            </div>
        </>
    )
}
export default AgentList