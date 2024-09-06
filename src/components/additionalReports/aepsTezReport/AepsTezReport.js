import React from 'react'
import AepsTezReportFill from './aepsTejReportFill/AepsTezReportFill'
import AepsTezReportList from './aepsTezReportList/AepsTezReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function AepsTezReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <AepsTezReportFill/>
    <AepsTezReportList/>
    </>
  )
}

export default AepsTezReport