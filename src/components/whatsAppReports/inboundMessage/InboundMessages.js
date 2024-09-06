import React from 'react'
import WaMessagesFilter from './inboundMessageFilter/InboundMessageFilter'
import WaMessageList from './inBoundMessageList/InBoundMessageList'


function WaMessagesLogs() {
  return (
    <>
      <WaMessagesFilter />
      <WaMessageList />
    </>
  )
}

export default WaMessagesLogs
