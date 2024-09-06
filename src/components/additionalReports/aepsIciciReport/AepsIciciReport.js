import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AepsIciciReportFill from './aepsIciciReportFill/AepsIciciReportsFill'
import AepsIciciReportList from './apesIciciReportList/AepsIciciReportList'

function AepsIciciReport() {
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={""}/>
    <AepsIciciReportFill/>
    <AepsIciciReportList/>
    </>
  )
}

export default AepsIciciReport