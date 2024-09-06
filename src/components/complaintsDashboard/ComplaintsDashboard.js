import React, { useEffect, useRef, useState } from 'react'

import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { ImPlus } from 'react-icons/im';
import { Button } from 'react-bootstrap';
import TopEmpList from './topEmpList/TopEmpList';
import ComplaintForm from './complaintAddForm/ComplaintForm';

import DashboardDetails from './complaintDashboardDetails/DashboardDetails';
import { baseUrl } from '../../baseUrl';
import { dasComplaient } from '../../api/login/Login';



function ComplaintsDashboard() {
    let inputRef = useRef(null)
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [complaintListData, setComplaintListData] = useState(null)
    console.log(complaintListData);
    const [searchcomplaintListData, setSearchComplaintListData] = useState(null)

    const [searchBtnDisabled, setSearchBtnDisabled] = useState(true)

    const getPendingData = async () => {
        try {
            const pendingList_response = await dasComplaient()
            // console.log('pendingList_response.data---', pendingList_response.data)
            setComplaintListData(pendingList_response.data)
        } catch (error) {

        }
    }
    /* const getTopEmployeeListData = async () => {
        const response = await axios.get(`${baseUrl}ccm_dashboard/admin`)
        setComplaintListData(response.data)
    }
    const getOfficeEmployeeListData = async () => {
        const response = await axios.get(`${baseUrl}ccm_dashboard/admin`)
        setComplaintListData(response.data)
    } */

    const params = useParams()
    const onRowClick = (_id) => {
        // getDetails(_id)
        navigate(`/view/complaints-detail/${_id}`)
    }

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${baseUrl}ticket_ccm/search/${inputRef.current.value}`)
            const searchData = response.data
            setSearchComplaintListData(searchData)
        } catch (error) {
            alert('Search by Id')
        }
        setComplaintListData("")
        setSearchBtnDisabled(false)
    }

    /* const getCardApi = async () => {
        const response = await axios.get(``)
        console.log(response);
    } */


    const getDetails = (_id) => {
        /* if (prams.id === _id) {
            navigate( )
        } */
    }

    const accesSearch = () => {
        setSearchBtnDisabled(false)
    }


    /* const changeRoute = (str) => {
        if (str === 'customer-list') {
            navigate('customer-list')
        }
        if (str === 'all_orders') {
            navigate('all_orders')
        }
        if (str === 'categories') {
            navigate('categories')
        }
        if (str === 'products/all') {
            navigate('products/all')
        }
        if (str === 'seller') {
            navigate('seller')
        }
        if (str === 'pick_up_points') {
            navigate('pick_up_points')
        }
        if (
            str === 'add-newasset-category'
        ) {
            navigate('add-newasset-category')
        }
    } */

    const resetData = () => {
        getPendingData()
        /* getOfficeEmployeeListData()
        getTopEmployeeListData() */
        setSearchComplaintListData("")
    }
    useEffect(() => {
        getPendingData()

        // getCardApi()

        /* getOfficeEmployeeListData()
        getTopEmployeeListData() */
    }, [])

    return <>
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">

                <div className="row gutters-10">
                    <div className="col-lg-12">
                        <div className="row gutters-10">

                            <div className="col-md-3 col-sm-6 col-xs-12  ">
                                <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden px-4 d-flex py-4 align-items-center justify-content-between  pr-4  ">
                                    {/*                                     <div className="">
                                        <div className="">
                                             <img src={assetIcon1} alt="k" /> 
                                        </div>
                                    </div> */}
                                    <div className="px-3  ">
                                        <div className="">
                                            <span className="fs-18 fw-bold d-block"> Complaints
                                            </span>
                                            <span className="fs-18 fw-bold d-block"> Registered Today
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h3 fw-700 mb-3">
                                        <strong>
                                            {/* {complaintListData?.registerToday
                                            } */} 0
                                        </strong>
                                    </div>

                                </div>
                            </div>


                            <div className="col-md-3 col-sm-6 col-xs-12  ">
                                <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-3 text-white rounded-lg mb-4 px-4 overflow-hidden d-flex py-4 align-items-center justify-content-between  pr-4">

                                    <div className="px-3  ">
                                        <div className="">
                                            <span className="fs-18 fw-bold d-block"> All</span>
                                            <span className="fs-18 fw-bold d-block"> Complaints </span>
                                        </div>
                                    </div>
                                    <div className="h3 fw-700 mb-3">
                                        <strong>{complaintListData?.totalComplaints}</strong>
                                    </div>

                                </div>
                            </div>


                            <div className="col-md-3 col-sm-6 col-xs-12  ">
                                <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden px-4 d-flex py-4 align-items-center justify-content-between  pr-4">
                                    {/* <div className="">
                                        <div className="">
                                             <img src={assetIcon1} alt="k" /> 
                                        </div>
                                    </div> */}
                                    <div className="px-3  ">
                                        <div className="">
                                            <span className="fs-18 fw-bold d-block">Complaints
                                            </span>
                                            <span className="fs-18 fw-bold d-block">Open
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h3 fw-700 mb-3">
                                        <strong>
                                            {/* {complaintListData?.ticketOpen?.[0].count} */} 0
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12  ">
                                <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden px-4 d-flex py-4 align-items-center justify-content-between  pr-4">
                                    {/* <div className="">
                                        <div className="">
                                             <img src={assetIcon1} alt="k" /> 
                                        </div>
                                    </div> */}
                                    <div className="px-3  ">
                                        <div className="">
                                            <span className="fs-18 fw-bold d-block">Complaints
                                            </span>
                                            <span className="fs-18 fw-bold d-block">Assigned
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h3 fw-700 mb-3">
                                        {/* <strong>{complaintListData?.assignedTicket}</strong> */} 0
                                    </div>
                                </div>
                            </div>
                            {complaintListData?.ComplaintsByStatus?.map((item, i) => {
                                return <div className="col-md-3 col-sm-6 col-xs-12  " key={i}>
                                    <div style={{ width: "100%", cursor: "pointer", backgroundColor: item?.status?.color }} /* onClick={() => changeRoute('all_orders')} */ className=" text-white rounded-lg mb-4 overflow-hidden d-flex py-4 px-4 align-items-center justify-content-between  pr-4">
                                        {/* <div className="">
                                        <div className="">
                                             <img src={assetIcon1} alt="k" /> 
                                        </div>
                                    </div> */}
                                        <div className="px-3  ">
                                            <div className="">
                                                <span className="fs-18 fw-bold d-block">Complaints
                                                </span>
                                                <span className="fs-18 fw-bold d-block">{item?.status?.name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h3 fw-700 mb-3">
                                            <strong>{item?.count}</strong>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

                {
                    show && <ComplaintForm show={show} setShow={setShow} />
                }

                <div className='row  mb-3 justify-content-end'>

                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className='d-flex'>
                            <input type="text" ref={inputRef} className="form-control" id="search" aria-describedby="emailHelp" placeholder='Search by ID' onKeyDown={accesSearch} />
                            <Button disabled={searchBtnDisabled} className='ms-2' variant='success' onClick={handleSearch} >Search</Button>
                            <Button disabled={searchBtnDisabled} className='ms-2' variant='info' onClick={resetData} >reset</Button>
                        </div>
                    </div >

                    <div className='col-lg-4 col-md-6 col-sm-2 text-end'>
                        <Button onClick={() => setShow(true)}> <ImPlus /></Button>
                    </div>
                </div>
                {searchcomplaintListData &&
                    <DashboardDetails searchListData={searchcomplaintListData} getDetails={getDetails} />
                }
                {complaintListData && <div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h5><strong>Top 10 Pending complainant List
                        </strong></h5>
                    </div>
                    <div>
                        <TopEmpList pendingList={complaintListData.TopPendingtickets} getDetails={getDetails} />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h5><strong>Top 10 Office wise complainant List
                        </strong></h5>
                    </div>

                    <div style={{ overflowX: "auto" }}>
                        <table className="table table-3 position-relative  rounded-4">
                            <thead>
                                <tr>
                                    <th class="table-secondary" scope="col">Office No</th>
                                    <th class="table-secondary" scope="col">Building</th>
                                    <th class="table-secondary" scope="col">Ward</th>
                                    <th class="table-secondary" scope="col">Block</th>
                                    <th class="table-secondary" scope="col">Floor</th>
                                    <th class="table-secondary" scope="col">Area</th>
                                    <th class="table-secondary" scope="col"> Number Of complainant </th>
                                    {/* <th class="table-secondary" scope="col">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {complaintListData && complaintListData?.MostComplaintByOffice?.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{item?.office_id}</td>
                                        <td>{item?.building_id}</td>
                                        <td>
                                            <span>{item?.ward_id}</span>
                                        </td>
                                        <td>{item?.block_id}</td>
                                        <td>{item?.floor_id}</td>
                                        <td>{item?.area_id}</td>

                                        {/* <td><span class="badge badge-inline badge-danger" style={{ color: "white", backgroundColor: item?.status === "Solved" ? "blue" : item?.status === 'Pending' ? 'green' : "red" }}>{item?.status}</span></td>
                                        <td>{item?.complaintType_id?.name}</td>
                                        <td>{item?.complaintNature_id?.name}</td>
                                        <td>{item?.assignTo}</td> */}

                                        <td>{item?.length}</td>

                                        {/* <td className='' style={{ cursor: "pointer" }} onClick={() => onRowClick(item?._id)}>
                                            <span>view details</span>
                                        </td> */}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* <TopEmpList pendingList={complaintListData.officeList} getDetails={getDetails} /> */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h5><strong>Top 10 Employee's complainant List</strong></h5>
                    </div>
                    <div>

                        <div style={{ overflowX: "auto" }}>
                            <table className="table table-3 position-relative  rounded-4">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">complainant ID</th>
                                        <th class="table-secondary" scope="col"> Number Of complainant </th>
                                        <th class="table-secondary" scope="col"> Employee Name</th>
                                        <th class="table-secondary" scope="col">Office No</th>
                                        <th class="table-secondary" scope="col">Building</th>
                                        <th class="table-secondary" scope="col">Ward</th>
                                        <th class="table-secondary" scope="col">Block</th>
                                        <th class="table-secondary" scope="col">Floor</th>
                                        <th class="table-secondary" scope="col">Area</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        <th class="table-secondary" scope="col">complainant Type</th>
                                        <th class="table-secondary" scope="col">complainant Nature</th>
                                        <th class="table-secondary" scope="col">Assigned Employee</th>
                                        {/* <th class="table-secondary" scope="col">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {complaintListData && complaintListData?.MostComplaintByStaff?.map((item, i) => {
                                        return <tr key={i}>

                                            <td>{item?._id}</td>
                                            <td>{item?.length}</td>
                                            <td>{item?.firstname + " " + item?.lastname}</td>
                                            <td>{item?.office_id}</td>
                                            <td>{item?.building_id}</td>
                                            <td>{item?.ward_id}</td>
                                            <td>{item?.block_id}</td>
                                            <td>{item?.floor_id}</td>
                                            <td>{item?.area_id}</td>
                                            {/* <td>
                                                <span>{item?.block_id?.name}</span>
                                                {item?.block_id?.name && item?.ward_id?.name && <>
                                                    &nbsp;
                                                    /
                                                    &nbsp;
                                                </>}
                                                <span>{item?.ward_id?.name}</span>
                                            </td> */}
                                            {/* <td><span class="badge badge-inline badge-danger" style={{ color: "white", backgroundColor: item?.status === "Solved" ? "blue" : item?.status === 'Pending' ? 'green' : "red" }}>{item?.status}</span></td> */}
                                            <td>----------</td>
                                            <td>---</td>
                                            <td>----</td>
                                            <td>----</td>
                                            {/* <td className='' style={{ cursor: "pointer" }} onClick={() => onRowClick(item?._id)}>
                                                <span>view details</span>
                                            </td> */}
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* <TopEmpList pendingList={complaintListData.TopEmployeeList} getDetails={getDetails} /> */}
                    </div>
                </div>}


            </div>
        </div >

    </>
}

export default ComplaintsDashboard