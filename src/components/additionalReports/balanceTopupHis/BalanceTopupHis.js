import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BalanceTopupHisFill from './balanceTopUpHisFill/BalanceTopupHisFill'
import BalanceTopupHisList from './balanceTopupHisList/BalanceTopupHisList'

function BalanceTopupHis() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <BalanceTopupHisFill/>
    <BalanceTopupHisList/>
    </>

  )
}

export default BalanceTopupHis