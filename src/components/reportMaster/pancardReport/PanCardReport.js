import React, { useState } from 'react'
// import react icon start
import { FaSearch } from "react-icons/fa";
import PancardLoginModal from './pancardloginModal/PancardLoginModal';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa6';
import PancardReportForm from './pancardReportForm/PancardReportForm';
import PancardReportList from './pancardReportList/PancardReportList';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

// import react icon end

function PanCardReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Reports",
        title_2: "Pan Card Reports",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PancardReportForm />
            <PancardReportList />

        </>
    )
}

export default PanCardReport
