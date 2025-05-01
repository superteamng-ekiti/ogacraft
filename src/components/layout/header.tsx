import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeaderPopover from './header-popover';

const navigationLinks = [
  {
    name: 'Dashboard',
    route: '/client',
  },
  {
    name: 'Browse',
    route: '/client/browse',
  },
  {
    name: 'Chats',
    route: '/client/chats',
  },
  {
    name: 'Payments',
    route: '/client/payments',
  },
  {
    name: 'Misc',
    route: '/client/misc',
  },
];

export const Header = () => {
  return (
    <div className="bg-white px-[88px] py-[12px] border-b border-border flex items-center justify-between">
      <Image src="/assets/ogacraft.svg" alt="logo" width={27} height={32} />

      <div className="rounded-xl flex gap-3 p-2 border border-border">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.route}
            className="text-primary-foreground p-2 rounded-lg"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center justify-center rounded-xl p-3">
          <Image
            src="/assets/notification.svg"
            width={16}
            height={16}
            alt="notification"
          />
        </div>

        <div className="flex gap-3 items-center border border-border rounded-xl p-2.5">
          <Image src="/assets/wallet.svg" width={20} height={16} alt="wallet" />

          <span className="text-green-100 font-bold text-base">₦0.00</span>
        </div>

        <HeaderPopover />
      </div>
    </div>
  );
};
