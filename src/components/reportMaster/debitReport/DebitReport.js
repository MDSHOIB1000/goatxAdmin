import React from 'react'
import DebitReportForm from './debitReportForm/debitReportForm'
import DebitReportList from './debitReportList/DebitReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function DebitReport() {
  
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Reports",
    title_2: "Debit Report",
}
return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <DebitReportForm />
      <DebitReportList />
    </>
  )
}

export default DebitReport
