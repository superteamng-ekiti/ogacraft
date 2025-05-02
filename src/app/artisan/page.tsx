import React from 'react'
import { Welcome } from './_components/dashboard/welcome'
import { CompleteProfile } from './_components/dashboard/complete-profile'
import { DashboardCardsWrapper } from './_components/dashboard/dashboard-cards-wrapper'

const ArtisanDashboard = () => {
  return (
    <div className='w-full px-4 md:px-0 container mx-auto py-6 md:py-8'>
        <Welcome />
        <CompleteProfile />

        <DashboardCardsWrapper />
    </div>
  )
}

export default ArtisanDashboard