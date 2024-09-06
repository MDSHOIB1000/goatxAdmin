import React from 'react'
import SearchReTaransactionFill from './searchReTarnsactionFill/SearchReTarnsactionFill'
import SearchRTransactionList from './searchReTransactionList/SearchReTransactionList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function SearchReachargeTransaction() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <SearchReTaransactionFill/>
    <SearchRTransactionList/>
    </>

  )
}

export default SearchReachargeTransaction