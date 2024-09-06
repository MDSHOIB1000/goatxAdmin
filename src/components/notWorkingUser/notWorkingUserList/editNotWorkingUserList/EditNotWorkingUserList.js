import { Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"

function EditNotWorkingList({ name, ...props }) {
    return (
        <>
            <Offcanvas show={props.show} onHide={props.handleClose} {...props} className='modle-diloge'>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="form-body">
                        <div className="row">
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Last Name</label>
                                    <input type="text" id="last_name" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Mobile Number</label>
                                    <input type="text" id="mobile" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Email Address</label>
                                    <input type="text" id="email" className="form-control" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Lock Amount</label>
                                    <input type="text" id="lock_amount" className="form-control" placeholder="Lock Amount" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Shop Name</label>
                                    <input type="text" id="shop_name" className="form-control" placeholder="Shop Name" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Address</label>
                                    <input type="text" id="address" className="form-control" placeholder="Address" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">City</label>
                                    <input type="text" id="city" className="form-control" placeholder="City" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">State Name</label>
                                    <input type="text" id="state_name" className="form-control" placeholder="State Name" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">District Name</label>
                                    <input type="text" id="district_name" className="form-control" placeholder="District Name" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Pincode</label>
                                    <input type="text" id="pin_code" className="form-control" placeholder="Pin Code" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Office Address</label>
                                    <input type="text" id="office_address" className="form-control" placeholder="Office Address" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Pan Number</label>
                                    <input type="text" id="pan_number" className="form-control" placeholder="Pan Number" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">GST Number</label>
                                    <input type="text" id="gst_number" className="form-control" placeholder="GST Number" />
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Pancard</label>
                                    <select className="form-control" id="pancard" >
                                        <option value={1}>Active</option>
                                        <option value={0}>De Active</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Normal Balance</label>
                                    <input type="text" id="user_balance" className="form-control" placeholder="Normal Balance" />
                                </div>
                            </div>
                            <div className="col-sm-12 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name">Remark</label>
                                    <textarea className="form-control" id="reason" rows={4} defaultValue={""} />
                                </div>
                            </div>
                        </div>
                    </div>

                </Offcanvas.Body>

                <div className="modal-footer-1">
                    <button type="button" className="btn btn-secondary mr-3" >Close</button>
                    <Link to="#" className="btn btn-success" id="update_anchor_url px-3"><i className="fas fa-edit" /> Edit</Link>
                    <Link to="#" className="btn btn-danger" id="kyc_anchor_url"><i className="far fa-file" /> Kyc</Link>
                </div>

            </Offcanvas>
        </>
    )
}
export default EditNotWorkingList