import { CustomBreadCrumb } from '@/components/dashboard/custom-breadcrumb';
import React from 'react'
import { ReviewWrapper } from './_components/review-wrapper';

const breadcrumbs = [
    {
        title: "Home",
        link: "/artisan"
    },
    {
        title: "Ratings and Reviews"
    }
]

const Reviews = () => {
  return (
    <div className='w-full container mx-auto px-4 md:px-0 py-6'>
        <CustomBreadCrumb breadcrumbs={breadcrumbs} />

        <ReviewWrapper />
    </div>
  )
}

export default Reviews;