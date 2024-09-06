import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AccountReepFill from './accountReportFill/AccountRepFill'
import AccountRepList from './accountReportList/AccountReportList'

function AccountReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <AccountReepFill/>
    <AccountRepList/>
    </>
  )
}

export default AccountReport