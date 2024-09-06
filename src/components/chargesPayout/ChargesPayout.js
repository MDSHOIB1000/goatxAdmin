import React from 'react'
import ChargesPayoutLists from './chargesPayoutList/ChargesPayoutLists'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function ChargesPayout() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Commision",
        title_2: "Payout Charges",
      }
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
      <ChargesPayoutLists/>
    </>
  )
}

export default ChargesPayout
