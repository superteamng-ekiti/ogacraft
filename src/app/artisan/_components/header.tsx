import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HeaderMenu } from './header-menu'
import { HeaderNotificationTab } from './header-notification-tab';
import { HeaderWalletTab } from './header-wallet-tab';
import { HeaderProfileDrodown } from './header-profile-dropdown';

export interface MenuItems {
    name: string;
    link: string;
}

export const headerMenuItems: MenuItems[] = [
    {
        name: "Dashboard",
        link: "/artisan"
    },
    {
        name: "Jobs",
        link: "/artisan/jobs"
    },
    {
        name: "Payments",
        link: "/artisan/payments"
    },
    {
        name: "Reviews",
        link: "/artisan/reviews"
    }
]

export const Header = () => {
  return (
    <div className='w-full py-3 bg-white border-b border-b-border sticky top-0 z-10'>
        <div className='container px-4 md:px-0 mx-auto flex items-center justify-between'>
            <Link href="/">
                <Image src="/images/ogacraft-logo.svg" alt="ogacraft logo" width={27} height={32} />
            </Link>

            <div className='hidden md:block'>
                <HeaderMenu menuItems={headerMenuItems} />
            </div>

            <div className='flex items-center gap-4'>
                <HeaderNotificationTab />
                <HeaderWalletTab />
                <HeaderProfileDrodown />
            </div>
        </div>
    </div>
  )
}
