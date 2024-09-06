import React from 'react'
import ChargeSettings from '../../components/topNavigationComp/settings/chargeSettings/ChargeSettings'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
const breadCrumbsTitle = {
  id: "1",
  title_1: "Settings",
  title_2: "Charges Settings",
}
function ChargesSettingsPage() {
  
  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ChargeSettings/>
    </div>
  )
}

export default ChargesSettingsPage
