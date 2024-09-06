
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
function IdStocks({ show3, handleClose3 }) {
    return (
        <>
            <Modal show={show3} onHide={handleClose3} className='dilog-box' id="dilog-box">
                <Modal.Header closeButton>
                    <Modal.Title>Scheme Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        {/* <div className="tbl-caption">
                                            <h4 className="heading mb-0">BANK MASTER</h4>
                                            <div>
                                                <Link className="btn btn-primary btn-sm" to="/add-bank" role="button" aria-controls="offcanvasExample">+ BANK MASTER</Link>
                                                <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button>
                                            </div>
                                        </div> */}
                                        <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Stock Type
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                        Value</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                        Mpin
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr role="row" className="odd">
                                                    <td>Master Id</td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            // value={values.SecurityPin}
                                                            // hasError={errors.SecurityPin && touched.SecurityPin}
                                                            // onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            // errorMsg={errors.SecurityPin}
                                                            // autoFocus={true}
                                                            id="SecurityPin"
                                                            placeholder="Value"
                                                            name="SecurityPin"
                                                        />

                                                    </td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            // value={values.SecurityPin}
                                                            // hasError={errors.SecurityPin && touched.SecurityPin}
                                                            // onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            // errorMsg={errors.SecurityPin}
                                                            // autoFocus={true}
                                                            id="SecurityPin"
                                                            placeholder="Mpin"
                                                            name="Mpin"
                                                        />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-primary" type="button" style={{ width: '100%' }}> Submit </button>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td>Distributor Id</td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            // value={values.SecurityPin}
                                                            // hasError={errors.SecurityPin && touched.SecurityPin}
                                                            // onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            // errorMsg={errors.SecurityPin}
                                                            // autoFocus={true}
                                                            id="SecurityPin"
                                                            placeholder="Value"
                                                            name="SecurityPin"
                                                        />

                                                    </td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            // value={values.SecurityPin}
                                                            // hasError={errors.SecurityPin && touched.SecurityPin}
                                                            // onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            // errorMsg={errors.SecurityPin}
                                                            // autoFocus={true}
                                                            id="SecurityPin"
                                                            placeholder="Mpin"
                                                            name="Mpin"
                                                        />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-primary" type="button" style={{ width: '100%' }}> Submit </button>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td>Retailer Id</td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            // value={values.SecurityPin}
                                                            // hasError={errors.SecurityPin && touched.SecurityPin}
                                                            // onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            // errorMsg={errors.SecurityPin}
                                                            // autoFocus={true}
                                                            id="SecurityPin"
                                                            placeholder="Value"
                                                            name="SecurityPin"
                                                        />

                                                    </td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            // value={values.SecurityPin}
                                                            // hasError={errors.SecurityPin && touched.SecurityPin}
                                                            // onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            // errorMsg={errors.SecurityPin}
                                                            // autoFocus={true}
                                                            id="SecurityPin"
                                                            placeholder="Mpin"
                                                            name="Mpin"
                                                        />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-primary" type="button" style={{ width: '100%' }}> Submit </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default IdStocks