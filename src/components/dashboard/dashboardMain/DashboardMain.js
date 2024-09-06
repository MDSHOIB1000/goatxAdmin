import React from 'react'
import DashboardGraph from './dashBoardGraph/DashboardGraph'
import './DashboardMain.css'
import DashBoardRform from './dashboardRform/DashBoardRform'

function DashboardMain() {
    return (
        <div className='bg-dashboard'>
            <div className='row'>
                <DashboardGraph />
                <DashBoardRform/>
            </div>
        </div >
    )
}

export default DashboardMain
