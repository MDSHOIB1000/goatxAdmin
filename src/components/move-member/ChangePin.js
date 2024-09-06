import React, { useState } from 'react';
import './member.css';
import img from '../../assets/images/logo/airtel.png'
function MoveMemb() {
    const [loading, setLoading] = useState(false);


    return (
        <div className='card '>
            <form className='cusforms'>
                <div class="form-group">
                    <label for="memberCode">Member Code</label>
                    <input type="text" class="form-control" id="memberCode" name="memberCode" placeholder="Enter Member Code" required />
                </div>
                <div class="form-group">
                    <div className="row">
                        <div class="card col-4 m-2">
                            <h6>Member Info</h6>
                            <div className='d-flex'>
                                <img src={img} alt="Dilip Kumawat" />
                                <div>
                                    <h5>Dilip Kumawat (SH124197)</h5>
                                    <p>MO.: 9890054659</p>
                                </div>
                            </div>
                            <div class="state-head">State Head</div>
                        </div>
                        <div class="card col-4 m-2">
                            <h6>Parent Info</h6>
                            <div className='d-flex'>
                                <img src={img} alt="Dilip Kumawat" />
                                <div>
                                    <h5>Dilip Kumawat (SH124197)</h5>
                                    <p>MO.: 9890054659</p>
                                </div>
                            </div>
                            <div class="state-head">State Head</div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="parentMemberCode">New Parent Member Code</label>
                    <input type="text" class="form-control" id="parentMemberCode" name="parentMemberCode" placeholder="Enter New Parent Member Code" required />
                </div>
                <div class="form-group">
                    <div className="row">
                       
                        <div class="card col-4 m-2">
                            <h6>Parent Info</h6>
                            <div className='d-flex'>
                                <img src={img} alt="Dilip Kumawat" />
                                <div>
                                    <h5>Dilip Kumawat (SH124197)</h5>
                                    <p>MO.: 9890054659</p>
                                </div>
                            </div>
                            <div class="state-head">State Head</div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Change Parent Member Code</button>
            </form>
        </div>
    );
}

export default MoveMemb;
