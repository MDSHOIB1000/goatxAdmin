import React from 'react'
import Boardcast from '../../components/broadcast/Boardcast'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function BoardcastPage() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Broadcast",
}
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <Boardcast />
    </>
  )
}

export default BoardcastPage
