import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import PaymentGatewayReportFill from './paymentGatewayReportsFill/PaymentGatewayReportsFill'
import PaymentGatwayReportList from './paymentGatewayReportList/PaymentGatewayReportList'

function PaymetGatewayReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <PaymentGatewayReportFill/>
    <PaymentGatwayReportList/>
    </>
  )
}

export default PaymetGatewayReport