import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import RechargeReportsFilter from './rechargeReportsFilter/RechargeReportsFilter'
import RechargeReportsList from './rechargeReportsList/RechargeReportsList'

function RechargeReports() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <RechargeReportsFilter/>
    <RechargeReportsList/>
    </>
  )
}

export default RechargeReports