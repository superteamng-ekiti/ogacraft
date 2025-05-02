import Image from 'next/image'
import React from 'react'

export const ClientName = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image src="/images/client-avatar.png" width={24} height={24} alt="client avatar" />

        <h6 className='text-sm font-semibold text-black'>John Musa</h6>

        <Image src="/icons/verified.svg" width={12} height={12} alt="verified icons" />
    </div>
  )
}
