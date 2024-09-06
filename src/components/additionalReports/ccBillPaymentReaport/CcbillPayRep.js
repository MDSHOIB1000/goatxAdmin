import React from 'react'
import CcbilPayFill from './ccBillPayFill/CcbillPayFill'
import CcBillPaymentList from './ccbillPaymentList/CcBillPaymentList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function CcbillPayRep() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <CcbilPayFill/>
    <CcBillPaymentList/>
    </>
  )
}

export default CcbillPayRep