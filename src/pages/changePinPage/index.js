import React from 'react'
import ChangePin from '../../components/changePin/ChangePin'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function ChangePinPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Settings",
        title_2: "Change PIN",
      }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <ChangePin />
        </>
    )
}

export default ChangePinPage