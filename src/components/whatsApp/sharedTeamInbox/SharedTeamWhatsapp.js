
import './sharedTeamWhatsapp.css'
function SharedTeamWhatsapp({ name, message }) {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-lg-3 col-md-4 col-12 bg-light p-3">
                    <div className="search-box mb-3">
                        <select className="form-select mb-2">
                            <option>Select Contact</option>
                            {/* More options can go here */}
                        </select>
                        <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                    <div className="active-chats">
                        <h2 className="h5">Active Chats</h2>
                        <ul className="list-group chat-list">
                            <li className="list-group-item chat-item d-flex align-items-center">
                                <div className='tagName bg-primary text-white p-2 rounded-circle text-center'>
                                    M
                                </div>
                                <div className='right-show ms-3'>
                                    <div className='contetnt-set'>
                                        <h5 className="h6 m-0">{name}</h5>
                                        <p className="text-muted m-0">{message}</p>
                                    </div>
                                    <div className='dateset text-muted'>
                                        Aug 19, 2024
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item chat-item d-flex align-items-center">
                                <div className='tagName bg-primary text-white p-2 rounded-circle text-center'>
                                    J
                                </div>
                                <div className='right-show ms-3'>
                                    <div className='contetnt-set'>
                                        <h5 className="h6 m-0">Junaid</h5>
                                        <p className="text-muted m-0">hy</p>
                                    </div>
                                    <div className='dateset text-muted'>
                                        Aug 19, 2024
                                    </div>
                                </div>
                            </li>
                            {/* Repeat for other chat items */}
                        </ul>
                    </div>
                </div>
    
                {/* Chat Area */}
                <div className="col-lg-6 col-md-8 col-12 p-3">
                    <div className="chat-header d-flex justify-content-between align-items-center mb-3">
                        <div className="chat-contact">
                            <span className="chat-name h5">Ashraf</span>
                            <br />
                            <span className="chat-info text-muted">Ashraf.m@gmail.com</span>
                        </div>
                    </div>
                    <div className="chat-messages mb-3">
                        <div className="message received mb-2">
                            <p className="bg-light p-2 rounded">Have Experienced</p>
                            <span className="message-time text-muted small">8/11/24, 9:26 PM</span>
                        </div>
                        <div className="message sent text-end mb-2">
                            <p className="bg-primary text-white p-2 rounded d-inline-block">Awesome! Please provide your details...</p>
                            <br />
                            <span className="message-time text-muted small">8/11/24, 9:26 PM</span>
                        </div>
                    </div>
                    <div className="chat-input d-flex">
                        <input type="text" className="form-control me-2" placeholder="Enter Message..." />
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>
    
                {/* Right Sidebar */}
                <div className="col-lg-3 d-none d-lg-block bg-light p-3">
                    <div className="contact-info mb-3">
                        <h3 className="h5">Aqueel</h3>
                        <p className="text-muted">918800852106</p>
                    </div>
                    <div className="contact-options">
                        <div className="option mb-2">Campaigns</div>
                        <div className="option mb-2">Attributes</div>
                        <div className="option mb-2">Tags</div>
                        <div className="option mb-2">Customer Journey</div>
                        <button className="btn btn-danger w-100">Block Incoming Messages</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    
    )
}
export default SharedTeamWhatsapp