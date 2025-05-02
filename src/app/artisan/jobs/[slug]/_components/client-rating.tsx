import Image from 'next/image'
import React from 'react'

export const ClientRating = () => {
  return (
    <div className='flex items-center gap-2'>
        <h6 className='text-sm font-medium text-gray-600'>4.7</h6>
        <Image src="/images/rating.png" alt="rating" width={80} height={16} />
    </div>
  )
}
