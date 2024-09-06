import React from 'react'
import { Container } from 'react-bootstrap'
import DashboardCard from './dasboardCard/DashboardCard'
import DashboardMain from './dashboardMain/DashboardMain'

function Dashboard() {
  return (
    <main>
      <section>
        <Container>
          <DashboardCard/>
          <DashboardMain/>
        </Container>
      </section>
    </main>
  )
}

export default Dashboard
