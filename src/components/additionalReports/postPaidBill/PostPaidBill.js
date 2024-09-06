import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import PostPaidBillFil from './postPaidBillFill/PostPaidBillFill'
import PostPaidBillList from './postPaidBillList/PostPaidBillList'

function PostPaidBill() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <PostPaidBillFil />
    <PostPaidBillList/>
    </>

  )
}

export default PostPaidBill