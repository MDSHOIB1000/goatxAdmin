import React, { useState } from 'react';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { Card, Form } from 'react-bootstrap';
import OptinManageConfigModal from './optinManageConfigModal/OptinManageConfigModal';

function OptinManageMent() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className=''>
                <div className='container-fluid'>
                    <Card className='p-4' style={{ height: 'min-content' }}>
                        <div className='row align-items-center mb-3'>
                            <div className='col-xl-6'>
                                <div className='bg-info p-3 rounded'>
                                    <h3>Opt-In / Opt-Out Management</h3>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                                <div className='bg-info px-3 py-1 rounded'>
                                    <div className="form-group">
                                        <label>From ID<span>*</span></label>
                                        <select className="form-control">
                                            <option value="">White Bing +91 8851746286</option>
                                            {/* Add more options here */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-xl-6'>
                                <h4>Opt-out Keywords</h4>
                                <p><small>The user will have to type exactly one of these messages on which they should be automatically opted-out</small></p>
                                <p><small>⚠️ Type, press enter to add keyword</small></p>
                                <div className="form-group">
                                    <label>Enter Key Words</label>
                                    <input type="text" className="form-control" placeholder="Enter Key Words" />
                                </div>
                            </div>

                            <div className='col-xl-6'>
                                <div className='d-flex justify-content-between'>
                                    <h4>Opt-out Response</h4>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Check this switch"
                                    />
                                    <button className='btn btn-outline-success' onClick={()=>setShow(!show)}>
                                        <i className="fa-solid fa-pencil"></i> Configure
                                    </button>
                                </div>
                                <p><small>Setup a response message for opt-out user keywords</small></p>
                                <Card className='p-3'>
                                    You have opted out. To opt-in, kindly type "start" and send it to us.
                                </Card>
                            </div>

                            <div className='col-xl-12 mt-3'>
                                <div className='text-end'>
                                    <button className='btn btn-success'>Save Settings</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='container-fluid'>
                    <Card className='p-4' style={{ height: 'min-content' }}>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h4>Opt-out Keywords</h4>
                                <p><small>The user will have to type exactly one of these messages
                                    on which they should be automatically opted-in</small></p>
                                <p><small>⚠️ Type, press enter to add keyword</small></p>
                                <div className="form-group">
                                    <label>Enter Key Words</label>
                                    <input type="text" className="form-control" placeholder="Enter Key Words" />
                                </div>
                            </div>

                            <div className='col-xl-6'>
                                <div className='d-flex justify-content-between'>
                                    <h4>Opt-out Response</h4>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Check this switch"
                                    />
                                    <button className='btn btn-outline-success'>
                                        <i className="fa-solid fa-pencil"></i> Configure
                                    </button>
                                </div>
                                <p><small>Setup a response message for opt-out user keywords</small></p>
                                <Card className='p-3'>

                                </Card>
                            </div>

                            <div className='col-xl-12 mt-3'>
                                <div className='text-end'>
                                    <button className='btn btn-success'>Save Settings</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <OptinManageConfigModal show={show} setShow={setShow} />
        </>
    );
}

export default OptinManageMent;
