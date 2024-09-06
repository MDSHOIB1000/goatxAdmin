
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
import { Button } from 'react-bootstrap';
function MemberPermission({ show4, handleClose4 }) {
    return (
        <>
            <Modal show={show4} onHide={handleClose4} className='dilog-box2' id="dilog-box">
                <Modal.Header closeButton>
                    <Modal.Title>Member Permission</Modal.Title>
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
                                                        Section Category
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                        Permissions
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Select All
                                                            </label>
                                                        </div>
                                                    </th>

                                                </tr>
                                            </thead>
                                            {/* <tbody>

                                                <tr role="row" className="odd">
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="Resource" />
                                                            <label className="form-check-label" htmlFor="Resource">
                                                                Resource
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="Profile" />
                                                                    <label className="form-check-label" htmlFor="Profile">
                                                                        Change Company Profile
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="Commission" />
                                                                    <label className="form-check-label" htmlFor="Commission">
                                                                        View Commission
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </td>
                                                    
                                                </tr>

                                            </tbody> */}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Admin Activity">Admin Activity</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        ''
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Resource">Resource</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class=" col-lg-6 ">
                                                            {/* <div className="form-check"> */}
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Profile">
                                                                Change Company Profile
                                                            </label>
                                                            {/* </div> */}
                                                        </div>
                                                        <div class=" col-lg-6">

                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                View Commission
                                                            </label>


                                                        </div>
                                                        <div class="col-lg-6 ">

                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Pin Check Disabled
                                                            </label>


                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Setup Tools">Setup Tools</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Api Manager
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Bank Account Setup
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Operator Manager
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Member">Member</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Manage Master Distributor
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Manage Distributor
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Manage Retailer
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Create Master Distributor
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Create Distributor
                                                            </label>
                                                        </div>

                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Create Retailer
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Manage Retailer Lite
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Create Retailer Lite
                                                            </label>
                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Member Setting
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Member Profile Edit
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Member Password Reset
                                                            </label>
                                                        </div>

                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Member Stock Manager
                                                            </label>
                                                        </div>
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Member Permission Change
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Member Report
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6 ">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label className="form-check-label" htmlFor="Commission">
                                                                Billpayment Report
                                                            </label>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="58">Recharge Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="59">Money Transfer Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="60">Utipancard Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="61">Utiid Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="62">Main Wallet Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="66">Aeps Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="71">Aeps Wallet Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="80">Member Aeps Agent List</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Wallet Fund">Wallet Fund</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="21">Fund Transfer Action</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="22">Fund Return Action</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="23">Wallet Load Request</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Wallet Fund Report">Wallet Fund Report</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="28">Wallet Payments Report</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Aeps Fund">Aeps Fund</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="67">Aeps Settlement Request</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="82">MicroAtm Settlement Request</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Aeps Fund Report">Aeps Fund Report</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="68">Aeps Settlement Request</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="69">Aeps Settlement Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="87">Matm Settlement Request</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="88">Matm Settlement Report</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Agents List">Agents List</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="31">Uti Agent List</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="74">Aeps Agent List</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="93">Fing Agent List</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Portal Services">Portal Services</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="37">Recharge Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="38">Billpayment Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="39">Uti Pancard Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="40">I-Money</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="41">I-Aeps Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="75">K-Aeps Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="81">Micro Atm</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="84">Icici Aeps</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="92">Insurance</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="95">Rapi Pay Dmt</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="96">Gold Loan Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="98">Upi Service</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="99">Pays Dmt</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="User Setting">User Setting</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="25">Account Statement View</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="26">Profile Edit</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="27">Password Manager</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="70">Aeps Wallet Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="83">MicroAtm Wallet Statement</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Transactions">Transactions</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="29">Recharge Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="30">Bill Payment Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="32">Uti Pancard Report</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="33">Money Transfer Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="65">Aeps Statement</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="85">Matm Statement</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Transactions Status">Transactions Status</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="50">Recharge Status</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="51">Bill Payment Status</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="52">Uti Pancard Status</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="78">Money Statement Status</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="79">Aeps Statement Status</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="94">Matm Statement Status</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Transactions Editing">Transactions Editing</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="42">Uti Vle id Report Editing</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="43">Uti Pancard Report Editing</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="44">Billpay Report Editing</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="45">Recharge Report Editing</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="46">Money Transfer Report Editing</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="76">Aeps id Statement Editing</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="77">Aeps Statement Editing</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="md-checkbox mymd">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="Payout Status">Payout Status</label>
                                                        </div>
                                                    </td>

                                                    <td class="row">
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="86">Aeps Payout Status</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="Commission" />
                                                            <label for="89">Matm Payout Status</label>
                                                        </div>
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
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose4}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose4}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MemberPermission