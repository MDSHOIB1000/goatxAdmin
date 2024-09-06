import React from 'react'
import SummaryReportForm from './summaryReportForm/SummaryReportForm'
import SummaryReportList from './summaryReportList/SummaryReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import { Breadcrumb } from 'antd'
const SummaryReports = () => {
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={''}/>
        <SummaryReportForm/>
        <SummaryReportList/>
        </>
    )
}

export default SummaryReports
