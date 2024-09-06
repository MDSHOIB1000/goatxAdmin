import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import InsurencDekhoFill from './insurenceDekhoFill/InsurenceDekhoFill'
import InsurenceDekhoList from './insurenceDekhoList/InsurenceDekhoList'

function InsuranceDekhoReports() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <InsurencDekhoFill/>
    <InsurenceDekhoList/>
    </>
  )
}

export default InsuranceDekhoReports