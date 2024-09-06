import React from 'react'
import PerformanceReoportForm from './performanceReportForm/PerformanceReoportForm'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import PerformanceReportList from './PerformanceReportsList/PerformanceReportList'

function PerformanceReports() {
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <PerformanceReoportForm />
            <PerformanceReportList/>
        </>
    )
}

export default PerformanceReports
