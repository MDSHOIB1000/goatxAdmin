import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BillPaymentHistoryFill from './billPaymentHistoryFill/BillPaymentHistoryFill'
import BillPaymentHistoryList from './BillPaymentHistoryList/BillPaymentHistoryList'

function BillPaymentHistory() {
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <BillPaymentHistoryFill />
            <BillPaymentHistoryList />
        </>
    )
}

export default BillPaymentHistory