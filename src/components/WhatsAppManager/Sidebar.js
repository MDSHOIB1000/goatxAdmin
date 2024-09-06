// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()

    return (
        <div className="sidebar my-4 ">
            <button onClick={() => navigate(`add-wa-templates`)}> <span ><i class="fa-solid fa-list"></i></span> Add Wa Templates</button>
            <button onClick={() => navigate(`optin-management`)}><span className='me-2'><i class="fa-regular fa-square-check"></i></span>Optin Management</button>
            <button onClick={() => navigate(`whatsapp-blocklist`)}><span className='me-2'><i class="fa-solid fa-ban"></i></span> WA Blocklist</button>
            {/* Add image/icon here */}
            <div className=''>
                <picture>
                    <img src='https://superblog.supercdn.cloud/site_cuid_cl9pmahic552151jpq6mko9ans/images/how-to-send-message-on-whatsapp-without-saving-contact-1709914693984-compressed.png' alt='chat' />
                </picture>
            </div>
        </div>
    );
}

export default Sidebar;
