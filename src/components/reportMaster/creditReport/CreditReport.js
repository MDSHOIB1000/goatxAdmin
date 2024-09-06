import React from 'react'
import CreditReportForm from './creditReportForm/CreditReportForm'
import CreditReportList from './creditReportList/CreditReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function CreditReport() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Reports",
    title_2: "Credit Report",
}
  return (
    <section>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <CreditReportForm/>
        <CreditReportList/>
      
    </section>
  )
}

export default CreditReport
