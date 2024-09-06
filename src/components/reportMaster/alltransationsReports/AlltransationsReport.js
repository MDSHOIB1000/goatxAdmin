import React from 'react'
import AllTransactionReportsForm from './allTransactionReportsForm/AllTransactionReportsForm'
import AllTransactionReportList from './allTransactionReportList/AllTransactionReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function AlltransationsReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "All Transactions Report",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllTransactionReportsForm/>
            <AllTransactionReportList/>
        </>
    )
}

export default AlltransationsReport
