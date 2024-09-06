import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import UpgradeMembers from '../../components/upgrade-member/UpgradeMember'

function UpgradeMember() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Settings",
        title_2: "Upgrade Member",
      }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <UpgradeMembers />
        </>
    )
}

export default UpgradeMember