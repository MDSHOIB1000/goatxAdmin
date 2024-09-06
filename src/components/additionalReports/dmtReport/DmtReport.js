import React from 'react'
import DmtReportsFillter from './dmtReportsFill/DmtReportsFillter'
import DmtReportsList from './dmtReportList/DmtReportsList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function DmtReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <DmtReportsFillter/>
    <DmtReportsList/>
    </>
  )
}

export default DmtReport