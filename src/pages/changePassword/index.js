import React from 'react'
// import ChangePassword from '../../components/changePassword/ChangePassword'
import ChangePassword from '../../components/changePassword/ChangePassword'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Change Password",
  }
function ChangePasswordPage() {
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ChangePassword />
        </>
    )
}
export default ChangePasswordPage