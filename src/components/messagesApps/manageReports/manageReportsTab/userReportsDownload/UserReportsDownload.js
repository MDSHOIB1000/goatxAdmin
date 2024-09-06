import React from 'react'
import UserReportsFilter from './userReportsFilter/UserReportsFilter'
import UserReportsList from './userReportsList/UserReportsList'

function UserReportsDownload({ count, page, submitForm,templates }) {
    return (
        <>
            <UserReportsFilter count={count} page={page} submitForm={submitForm} />
            <UserReportsList templates={templates} />
        </>
    )
}

export default UserReportsDownload
