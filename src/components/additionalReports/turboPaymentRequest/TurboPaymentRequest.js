import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import TurboPaymentRequestList from './turbiPaymentRequestList/TurboPaymentRequestList'
import TurboPaymentRequestFill from './turboPaymentRequestFill/TurboPaymentRequestFill'

function TurboPaymentRequest() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <TurboPaymentRequestFill/>
    <TurboPaymentRequestList/>
    </>
  )
}

export default TurboPaymentRequest