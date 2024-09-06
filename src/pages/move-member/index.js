import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import MoveMemb from '../../components/move-member/ChangePin'

function MoveMember() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Settings",
        title_2: "Move Member",
      }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <MoveMemb />
        </>
    )
}

export default MoveMember