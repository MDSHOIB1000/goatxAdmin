import React from 'react'
import ManageTabReport from './manageReportsTab/ManageTabReport'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function ManageReports() {
    const breadCrumbsTitle = {
        title_1: "sms/manage-report/message-reports"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className='m-4'>
                <ManageTabReport />
            </div>
        </>
    )
}

export default ManageReports
