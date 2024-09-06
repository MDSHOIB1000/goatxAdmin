import React from 'react'
import TicketList from './ticketList/TicketList'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function TicketMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Ticket Master",
        title_2: "Ticket List",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TicketList />
        </>
    )
}

export default TicketMaster
