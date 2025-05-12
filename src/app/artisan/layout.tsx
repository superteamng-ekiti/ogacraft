import React, { PropsWithChildren } from "react";
import { Header, MenuItems } from "@/components/header/header";
import { HeaderMenu } from "@/components/header/header-menu";
import { UserProvider } from "@/context/user.context";
import { AuthCheckProvider } from "@/providers/auth-check-provider";

export const headerMenuItems: MenuItems[] = [
  {
    name: 'Dashboard',
    link: '/artisan',
  },
  {
    name: 'Jobs',
    link: '/artisan/jobs',
  },
  {
    name: 'Payments',
    link: '/artisan/payments',
  },
  {
    name: 'Reviews',
    link: '/artisan/reviews',
  },
];

const ArtisanDashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <AuthCheckProvider>
      <UserProvider>
        <div className="w-full h-screen bg-light-gray relative overflow-y-auto overflow-x-hidden">
          <Header headerMenuItems={headerMenuItems} />
          {children}

          <div className="block md:hidden fixed bottom-4 right-0 left-0 px-4 z-10">
            <HeaderMenu menuItems={headerMenuItems} />
          </div>
        </div>
      </UserProvider>
    </AuthCheckProvider>
  );
};

export default ArtisanDashboardLayout;
