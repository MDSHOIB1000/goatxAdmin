import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import PaymenttWithdrawlFill from './paymetFill/PaymentWithDrawlReport'
import PaymetWithdrawlReportList from './paymentwithdrawlRepList/PaymentWithdrawlReportList'

function PaymentWithdrawlRep() {
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={""} />
      <PaymenttWithdrawlFill />
      <PaymetWithdrawlReportList />
    </>
  )
}

export default PaymentWithdrawlRep