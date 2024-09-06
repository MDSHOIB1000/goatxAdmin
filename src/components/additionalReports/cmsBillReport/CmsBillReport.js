import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import CmsBillReportFill from './cmsBillReportFill/CmsBilReportsFill'
import CmsBillReportList from './cmsBillReportList/CmsBillReportsList'

function CmsBillReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <CmsBillReportFill/>
    <CmsBillReportList/>
    </>

  )
}

export default CmsBillReport