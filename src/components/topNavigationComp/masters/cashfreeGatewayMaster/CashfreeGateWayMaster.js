import React from 'react'
import CashfreeGateWayForm from './cashfreeGateWayForm/CashfreeGateWayForm'
import CashfreeGateWayList from './cashfreeGateWayForList/CashfreeGateWayList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

function CashfreeGateWayMaster() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Cashfree Gateway Master ",
}

  return (
    <>
    <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <CashfreeGateWayForm/>
      <CashfreeGateWayList/>
    </>
  )
}

export default CashfreeGateWayMaster
