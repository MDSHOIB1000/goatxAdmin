import React from 'react'
import CreateCampingAside from './createCampingAside/CreateCampingAside'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function CreateCampingMessages() {
    const breadCrumbsTitle = {
        title_1: "Create Camping Messaging"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <div className='m-4'>
                <CreateCampingAside />
            </div>
        </>
    )
}

export default CreateCampingMessages
