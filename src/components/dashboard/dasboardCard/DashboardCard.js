import React from 'react'
import { Link } from 'react-router-dom'
// import react icon start
import { BsFillWalletFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { FaUserAltSlash } from "react-icons/fa";
// import react icon end
// import css start
import "./DashboardCard.css"
// import css end
function DashboardCard() {
    return (
        <div className='my-4'>
            <div className='row  row-sm' >
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="card border-0 card-bg-1">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Distributed Balance</h6>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h2 className='text-primary'><BsFillWalletFill /></h2>
                                    <h2 className="text-right m-0 ">
                                        <span id="normal_distributed_balance">0.00</span>
                                    </h2>
                                </div>
                                <p className="mb-0">Normal Balance<span className="float-right"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="card border-0 card-bg-2">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Distributed Balance</h6>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h2 className='text-primary'><BsFillWalletFill /></h2>
                                    <h2 className="text-right m-0 ">
                                        <span id="normal_distributed_balance">0.00</span>
                                    </h2>
                                </div>
                                <p className="mb-0">Aeps Balance<span className="float-right"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="card border-0 card-bg-1">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Members</h6>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h2 className='text-primary'><FaUserTie /></h2>
                                    <h2 className="text-right m-0 ">
                                        <span id="normal_distributed_balance">0</span>
                                    </h2>
                                </div>
                                <p className="mb-0">Total Members<span className="float-right"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="card border-0 card-bg-2">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Members</h6>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h2 className='text-primary'><FaUserAltSlash /></h2>
                                    <span className="text-end ">
                                            <span id="normal_distributed_balance"><b>0</b></span>
                                        <div><Link to={''} className="mb-0 text-decoration-none text-dark"><span className="float-right">Click Here</span></Link></div>
                                    </span>
                                </div>
                                <p className="mb-0">Suspended Members<span className="float-right"></span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard
