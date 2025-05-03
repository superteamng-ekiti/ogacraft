import React, { PropsWithChildren } from "react";
import { Header } from "@/components/header/header";
import { HeaderMenu } from "@/components/header/header-menu";
import { MenuItems } from "@/components/header/header";

export const headerMenuItems: MenuItems[] = [
  {
    name: 'Dashboard',
    link: '/client',
  },
  {
    name: 'Jobs',
    link: '/client/jobs',
  },
  {
    name: 'Payments',
    link: '/client/payments',
  },
  {
    name: 'Reviews',
    link: '/client/reviews',
  },
];

const ClientDashboardLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className="w-full h-screen bg-light-gray relative overflow-y-auto overflow-x-hidden">
      <Header headerMenuItems={headerMenuItems} />
      {children}

      <div className="block md:hidden fixed bottom-4 right-0 left-0 px-4 z-10">
        <HeaderMenu menuItems={headerMenuItems} />
      </div>
    </div>
  );
};

export default ClientDashboardLayout;
