import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import React from 'react'

export const CompleteProfile = () => {
  return (
    <div className='w-full px-6 py-6 bg-green-600 rounded-xl mt-4 flex flex-col md:flex-row items-end justify-between gap-8'>
        <div className='w-full flex flex-col gap-2'>
            <h4 className='text-xl font-semibold text-white'>You&apos;re 60% ready to get hired</h4>

            <Progress value={33} />
        </div>

        <Button size="lg" className='flex-shrink-0'>Complete Your Profile</Button>
    </div>
  )
}
