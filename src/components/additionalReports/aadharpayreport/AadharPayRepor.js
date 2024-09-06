import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AadharPayRepFill from './aadharPayRepFill/AadharPayRepFill'
import AadharPayRepList from './aadharRepList/AadharPayRepList'

function AadharPayRepor() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <AadharPayRepFill/>
    <AadharPayRepList/>
    </>
  )
}

export default AadharPayRepor