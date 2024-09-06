import React from 'react'
import WaBlockFilter from './waBlockListfilter/WaBlockFilter'
import WaBlockListNumber from './waBlockListNumber/WaBlockListNumber'

function WaBlockNumber() {
  const templates = [
    {
        _id: "1A1212D",
        phoneNumber: '+91 8851746286 ',
        createdAt: 'Aug 16, 2024'
    },
];
  return (
    <div className='container-fluid'>
      <WaBlockFilter />
      <WaBlockListNumber templates={templates} />
    </div>
  )
}

export default WaBlockNumber
