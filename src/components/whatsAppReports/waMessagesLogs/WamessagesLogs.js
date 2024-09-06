import React from 'react'
import InboundMessageFilter from '../inboundMessage/inboundMessageFilter/InboundMessageFilter'
import InboundMessageList from '../inboundMessage/inBoundMessageList/InBoundMessageList'



function InboundMessage() {
  return (
    <>
      <InboundMessageFilter />
      <InboundMessageList />
    </>
  )
}

export default InboundMessage
