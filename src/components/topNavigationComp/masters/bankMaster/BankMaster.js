import React from 'react'
import BankMasterList from './bankMasterList/BankMasterList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

function BankMaster() {
  const breadCrumbsTitle = {
    id:"1",
    title_1:"Master",
    path_1:"/bank-master",
    title_2:"Bank Master",
}
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BankMasterList />
    </>
  )
}
export default BankMaster
