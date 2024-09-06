import React from 'react'
import { CiWallet } from "react-icons/ci";
import { IoWallet, IoWalletOutline } from "react-icons/io5";

import './Wallet.css'
const Wallet = ({ initialValues }) => {
    return <section className="ListDistributer m-4">
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            {/* <div className="tbl-caption bg-primary justify-content-center">
                                <h4 className="heading mb-0 border p-1 rounded"><b>Wallet Details</b></h4>
                            </div> */}
                            <div id="empoloyees-tblwrapper_wrapper" className=" no-footer"><div className="dt-buttons"></div>
                                <div class="container pb-4">
                                    <p class="container-title">Here are the <br />Paypanda Wallet</p>
                                    <div className='row'>
                                        <div className='col-md-12 col-xl-6'>
                                            <div className='card'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='icon border-right'>
                                                        <span id='wallet_icon1'><CiWallet /></span>
                                                    </div>
                                                    <div className='amount px-4'>
                                                        <h2 className='text-center'>{initialValues?.main_wallet}</h2>
                                                        <h3>Main Wallet</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='col-md-12 col-xl-6'>
                                            <div className='card'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='icon border-right'>
                                                        <span id='wallet_icon1'><IoWallet /></span>
                                                    </div>
                                                    <div className='amount px-4'>
                                                        {initialValues?.commision_wallet  ? <h2>{initialValues?.commision_wallet}</h2>: <h6>Balance Not Found</h6>}
                                                        <h2 className='text-center'>{initialValues?.commision_wallet}</h2>
                                                        <h3>Commision Wallet</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className='col-md-12 col-xl-6'>
                                            <div className='card'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='icon border-right'>
                                                        <span id='wallet_icon1'><IoWalletOutline /></span>
                                                    </div>
                                                    <div className='amount px-4'>
                                                        <h2 className='text-center'>{initialValues?.aeps_wallet}</h2>
                                                        <h3>AEPS Wallet</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    </section>
}

export default Wallet
