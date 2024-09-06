import React from 'react'
import WaClickerReportsList from './waClickerReportsList/WaClickerReportsList'
import WaClickerReportsFilter from './waClickerReportsFilter/WaClickerReportsFilter'



function WaClickerReports() {
  return (
    <>
      <WaClickerReportsFilter />
      <WaClickerReportsList />
    </>
  )
}

export default WaClickerReports
