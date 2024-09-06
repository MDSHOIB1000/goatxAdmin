import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loadar from "../../../common/loader/Loader";
import Dropdown from 'react-bootstrap/Dropdown';
import FundTransfer from "../createUserDistributer/fundTrnsfer/FundTrnasfer";
import SchemeManager from "../createUserDistributer/schemeManager/SchemeManager";
import IdStocks from "../createUserDistributer/IdsStoks/IdStoks";
import MemberPermission from "../createUserDistributer/memberPermission/MemberPermission";
import LockAmount from "../createUserDistributer/lockAmount/LockAmount";
import ExportPdf from "../../../common/exportPdf/ExportPdf";
import "../distributer.css"
import { ToastContainer, toast } from "react-toastify";
import { Pagination } from "antd";
import BulkAssigedModel from "../BulkAssigedModel";
import { getServiceCategory } from "../../../api/login/Login";
import { FaBroadcastTower } from "react-icons/fa";
import BroadCasterModal from "./broadCasterModal/BroadCasterModal";


function DistributerList({ loading, params, state, handleChange, onChangeVal, approval }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true)
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true)
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const [getItem, setGetItem] = useState()
    const handleShow5 = (item) => {
        setGetItem({ ...item, paramId: params?.id });
        setTimeout(() => {
            setShow5(true)
        }, 1000);
    }
    
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (event, user) => {
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, user]);
        } else {
            setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser._id !== user._id));
        }
    };

    console.log(selectedUsers)




    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            setSelectedUsers(state?.user);
        } else {
            setSelectedUsers([]);
        }
    };



    return (
        <>
            {loading && <Loadar />}
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-end">

                </div>
                <div className="row">
                    <div className="col-xl-12" >
                        <div className="card" >
                            

                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>{params?.name} LIST</b></h4>
                                        <div>
                                            <ExportPdf />
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="selectAll"
                                                                checked={selectAll}
                                                                onChange={handleSelectAll}
                                                            />
                                                        </div>
                                                    </th>
                                                    <th>Create Date</th>
                                                    <th>Reff Code</th>
                                                    <th>Member type</th>
                                                    <th>Name</th>
                                                    <th>Streams</th>
                                                    <th>Courses</th>
                                                    <th>Mobile</th>
                                                    <th>Email</th>
                                                    <th>Main Balance</th>
                                                    <th>KYC Status</th>
                                                    <th>Approval</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {state && state?.user?.map((item, i) => {
                                                    const isChecked = selectedUsers.some(user => user?._id === item?._id);
                                                    return <tr role="row" className="odd" key={item?._id}>
                                                        <td className="sorting_1">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={isChecked}
                                                                    onChange={(e) => handleCheckboxChange(e, item)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="sorting_1">{item?.createdAt}</td>
                                                        {/* <td className="sorting_1"></td>
                                                        <td className="sorting_1"></td> */}
                                                        <td className="sorting_1">{item?.refer_id}</td>
                                                        <td className="sorting_1">{item?.member_type}</td>
                                                        <td>{item?.name}</td>
                                                        <td>---</td>
                                                        <td>---</td>
                                                        {/* <td className="sorting_1">{item?._id}</td> */}
                                                        <td>{item?.mobile}</td>

                                                        <td>{item?.email}</td>
                                                        <td className="sorting_1">{item?.main_wallet}</td>


                                                        <td>
                                                            <span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.is_approved === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_approved === false ? '0.8rem' : ''}` }}>{item?.is_approved == true ? 'Approved' : 'Not Approved'}</span>
                                                        </td>

                                                        <td className="p-0">
                                                            {/* <span className="badge badge-success light border-0" onChange={() => { handleApproval('active') }}>{activeState ? "Inactive" : "Active"}</span> */}
                                                            {/* <span className="badge badge-success light"> */}
                                                            {/* <div className="col-lg-4"> */}
                                                            <select className="form-select py-0 " aria-label="Default select example" value={item?.is_approved} name="is_approved" onChange={(e) => handleChange(e, item?._id)} style={{ width: "150px" }}>
                                                                <option>Status</option>
                                                                <option value={"true"}>Approved</option>
                                                                <option value={"false"}>Not Approved</option>
                                                            </select>
                                                            {/* </div> */}
                                                            {/* </span> */}
                                                        </td>

                                                        <td style={{ position: 'relative' }} className="d-flex align-item-center" >

                                                            {/* <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                    Action
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="/admin/certificate" >BC Authorization Letter</Dropdown.Item>
                                                                    <Dropdown.Item Link="#" >ID Card</Dropdown.Item>
                                                                    <Dropdown.Item href="#" >Certificate</Dropdown.Item>
                                                                    <Dropdown.Item Link="#" onClick={handleShow}>Fund Transfer / Return</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow2}>Scheme</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow3}>Add Id Stock</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={handleShow4}>Permission</Dropdown.Item>
                                                                    <Dropdown.Item href="#" onClick={() => { handleShow5(item) }}>Locked Amount</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/member/profile/view/3">View Profile</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown> */}

                                                            {/*  <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                    Reports
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={`/admin/statement/apes/report/${item?._id}`} target="blank">AEPS</Dropdown.Item>
                                                                    <Dropdown.Item href={`/admin/statement/billpayment/report/${item?._id}`} target="blank">Billpayment</Dropdown.Item>
                                                                    <Dropdown.Item href={`/admin/statement/recharge/report/${item?._id}`} target="blank">Recharge</Dropdown.Item>
                                                                    <Dropdown.Item href={`/admin/statement/moneyTransfer/report/${item?._id}`} target="blank">Money Transfer</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/report/pancard/3">UtiPancard</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/statement/report/2">Account Stat...</Dropdown.Item>
                                                                    <Dropdown.Item href="/admin/statementwallet/report/2">Aeps Stat...</Dropdown.Item>
                                                                    <Dropdown.Item href={`/admin/wallets/report/${item?._id}`}>Wallets Reports</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown> */}

                                                            <Link to={`/admin/detail-lead/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                            <Link to={`/admin/create-user/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            {/* <Popconfirm
                                                            title="Delete Currency !"
                                                            description="Are you sure to delete ?"
                                                            onConfirm={() => confirm(item?.id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" disable className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                        </Popconfirm> */}
                                                        </td>

                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                        <Pagination className="pagination_gutter pagination_primary pagination_sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FundTransfer show={show} handleClose={handleClose} />
                <SchemeManager show={show2} handleClose={handleClose2} />
                <IdStocks show={show3} handleClose={handleClose3} />
                <MemberPermission show={show4} handleClose={handleClose4} />
                <LockAmount show={show5} handleClose={handleClose5} getItem={getItem} />
                
            </section>
        </>
    );
}

export default DistributerList;
