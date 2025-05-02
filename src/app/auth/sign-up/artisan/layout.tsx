import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { AuthSidebar } from '../_components/auth-sidebar';

const ArtisanLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full h-screen bg-white p-4 flex flex-col md:flex-row gap-4'>
        {/* auth side menu */}
        <div className='w-full max-w-[483px] shrink-0 hidden md:flex flex-col gap-12 border border-border rounded-xl bg-light-gray py-10 px-6'>
            <Image src="/images/ogacraft-logo.svg" width={48} height={48} alt="oga craft logo" className=' w-12 h-12' />

            <AuthSidebar />
        </div>

        <div className='w-full h-full pt-28 flex flex-col items-center'>
            {children}
        </div>
    </div>
  )
}

export default ArtisanLayout;