import React, { PropsWithChildren } from 'react'

export const ProfileDetailContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full py-8 px-6 bg-white border border-gray-200 rounded-xl flex flex-col gap-6'>
        {children}
    </div>
  )
}
