import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddproviderLogo = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">ADD LOGO PROVIDER</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Provider Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Provider Name" />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Select Logo:<span className="text-danger">*</span></label>
                                        <input type="file" className="form-control" />
                                    </div>
                                </div>
                                <div>
                                    <Link to='/provider' className="btn btn-danger light ms-1">Cancel</Link>
                                    <button className="btn btn-primary me-1">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddproviderLogo
