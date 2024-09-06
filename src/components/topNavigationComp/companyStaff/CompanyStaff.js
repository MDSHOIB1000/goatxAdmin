import React from 'react'
import CompanyStaffForm from './companyStaffForm/CompanyStaffForm'
import CompanyStaffList from './companyStaffList/CompanyStaffList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function CompanyStaff() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Commpany Staff",
    }
    return (
        <section>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CompanyStaffForm />
            <CompanyStaffList />
        </section>
    )
}

export default CompanyStaff
