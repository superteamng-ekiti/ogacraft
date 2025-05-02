import React from 'react'
import { JobBreadCrumb } from './_components/job-breadcrumb'
import { JobsWrapper } from './_components/jobs-wrapper'

const Jobs = () => {
  return (
    <div className='container px-4 md:px-0 mx-auto py-8 flex flex-col gap-4'>
        <JobBreadCrumb />
        <JobsWrapper />
    </div>
  )
}

export default Jobs