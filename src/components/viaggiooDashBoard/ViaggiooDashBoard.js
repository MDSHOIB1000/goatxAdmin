

import './viaggiooDashBoard.css'
function ViaggiooDashBoard() {
    return (
        <>
            <div className="ContentArea">
                <div className="dashboard-gaot">
                    <div className='set-list-Dashboard'>
                        <h1>Welcome to Dashboard</h1>
                        <div className="date-filter">
                            <input type="date" placeholder="From Date" />
                            <input type="date" placeholder="To Date" />
                            <button className="search-button">🔍</button>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="card-dash flight">
                            <span className="number">0</span>
                            <span className="label">Flight</span>
                        </div>
                        <div className="card-dash hotel">
                            <span className="number">0</span>
                            <span className="label">Hotel</span>
                        </div>
                        <div className="card-dash bus">
                            <span className="number">0</span>
                            <span className="label">Bus</span>
                        </div>
                        <div className="card-dash visa">
                            <span className="number">0</span>
                            <span className="label">Visa</span>
                        </div>
                    </div>
                    <div className="bookings">
                        <h2>Bookings</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>All Bookings</th>
                                    <th>Upcoming</th>
                                    <th>Completed</th>
                                    <th>Hold</th>
                                    <th>Cancelled</th>
                                    <th>Pending</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Flight</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Hotel</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Bus</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Visa</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="bookings">
                        <h2>Revenue</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>All Bookings</th>
                                    <th>Upcoming</th>
                                    <th>Completed</th>
                                    <th>Hold</th>
                                    <th>Cancelled</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Flight</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="bookings">
                                <h2>Amendments</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>All</th>
                                            <th>Open</th>
                                            <th>Approved</th>
                                            <th>Rejected</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Flight</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>
                                        <tr>
                                            <td>Hotel</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>
                                        <tr>
                                            <td>Bus</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>
                                        <tr>
                                            <td>Visa</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="bookings">
                                <h2>Cancellation</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>All</th>
                                            <th>Open</th>
                                            <th>Rejected</th>
                                            <th>Approved</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Flight</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>
                                        <tr>
                                            <td>Hotel</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>
                                        <tr>
                                            <td>Bus</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>
                                        <tr>
                                            <td>Visa</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="bookings">
                                <h2>Deposit Request</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Company</th>
                                            <th>Ref No</th>
                                            <th>Mode</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Flight</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="bookings">
                                <h2>Registered Staff</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Role</th>
                                            <th>Total</th>
                                            <th>Active</th>
                                            <th>Inactive</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Flight</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>


                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ViaggiooDashBoard