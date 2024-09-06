import React from 'react'
import DmtKycReportFill from './dmtKycReportFill/DmtKycReportFill'
import DmtKycReportList from './dmtKycRepList/DmtKycReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function DmtKycReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <DmtKycReportFill/>
    <DmtKycReportList/>
    </>

  )
}

export default DmtKycReport