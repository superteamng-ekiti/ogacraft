import { CustomBreadCrumb } from '@/components/dashboard/custom-breadcrumb'
import React from 'react'
import { JobListings } from './_components/job-listings';

const breadcrumbs = [
  {
    title: 'Home',
    link: '/client',
  },
  {
    title: 'Jobs',
  },
];

const Jobs = () => {
  return (
    <div className="w-full container mx-auto px-4 md:px-0 py-6">
      <CustomBreadCrumb breadcrumbs={breadcrumbs} />

      <JobListings />
    </div>
  )
}

export default Jobs