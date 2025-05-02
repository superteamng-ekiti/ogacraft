import Image from 'next/image'
import React from 'react'

export const HeaderWalletTab = () => {
  return (
    <div className='h-full p-3 rounded-xl border border-border flex items-center gap-2'>
        <Image src="/icons/wallet-icon.svg" alt="wallet-icon" width={24} height={24} />
        <p className='text-green-600 font-semibold text-base'>₦0.00</p>
    </div>
  )
}
