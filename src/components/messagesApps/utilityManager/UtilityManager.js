import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import UtilityManagerTab from './utilityManagerTab/UtilityManagerTab'

function UtilityManager() {
    const breadCrumbsTitle = {
        title_1: "Utility Manager"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <div className='m-4'>
                <UtilityManagerTab />
            </div>
        </>
    )
}

export default UtilityManager
