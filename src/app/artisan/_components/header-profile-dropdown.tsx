import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const HeaderProfileDrodown = () => {
  return (
    <div className='h-full p-2 flex items-center gap-2 border border-border rounded-xl cursor-pointer'>
      <Image src="/images/placeholder-profile.png" width={32} height={32} alt="profile placeholder" />
      <ChevronDown size={14} />
    </div>
  )
}
