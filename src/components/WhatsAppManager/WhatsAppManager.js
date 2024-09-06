// WhatsAppManager.js
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './WhataapCss.css';
import TemplatesTable from './TemplatesTable.js';
import { Outlet } from 'react-router-dom';

function WhatsAppManager() {
    return (
        <div className="whatsapp-manager card-body">
            <Sidebar />
            <Outlet>
            </Outlet>
           
        </div>
    );
}

export default WhatsAppManager;
