import React, { useState } from 'react';
import './member.css';
import img from '../../assets/images/logo/airtel.png'
function UpgradeMembers() {
    const [loading, setLoading] = useState(false);


    return (
        <div className='card m-4'>
            <form className='cusforms row'>
                <div className="form-group col-6">
                    <label for="memberCode">Member Code</label>
                    <input type="text" className="form-control" id="memberCode" name="memberCode" placeholder="Enter Member Code" required />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="card col-4 m-2">
                            <h6>Member Info</h6>
                            <div className='d-flex'>
                                <img src={img} alt="Dilip Kumawat" />
                                <div>
                                    <h5>Dilip Kumawat (SH124197)</h5>
                                    <p>MO.: 9890054659</p>
                                </div>
                            </div>
                            <div className="state-head">State Head</div>
                        </div>
                        <div className="card col-4 m-2">
                            <h6>Parent Info</h6>
                            <div className='d-flex'>
                                <img src={img} alt="Dilip Kumawat" />
                                <div>
                                    <h5>Dilip Kumawat (SH124197)</h5>
                                    <p>MO.: 9890054659</p>
                                </div>
                            </div>
                            <div className="state-head">State Head</div>
                        </div>
                    </div>
                </div>
                <div className="form-group  col-7">
                    <label for="parentMemberCode">Select New Member Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected> Select New Member Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group  col-7" style={{ margin: '20px 0' }}>
                    <label for="parentMemberCode">Select New Parent Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected> Select New Parent Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group  col-7">
                    <label for="parentMemberCode">Select New Parent </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected> Select New Parent </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
             
                <div className="form-group  col-8">
                <button type="submit" style={{margin:"10px 0"}} className="btn btn-primary">Submit</button>
                </div>
             
                
            </form>
        </div>
    );
}

export default UpgradeMembers;
