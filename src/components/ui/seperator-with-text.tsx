import React from 'react'
import { Separator } from './separator'

export const SeperatorWithText = () => {
  return (
    <div className='w-full relative py-4'>
        <Separator className="my-4 w-full" />

        <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm bg-white px-2 text-gray-600'>OR</p>
    </div>
  )
}
