import React, { PropsWithChildren } from "react";
import { Header, headerMenuItems } from "./_components/header";
import { HeaderMenu } from "./_components/header-menu";

const ArtisanDashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-screen bg-light-gray relative overflow-y-auto overflow-x-hidden">
      <Header />
      {children}

      <div className="block md:hidden fixed bottom-4 right-0 left-0 px-4 z-10">
        <HeaderMenu menuItems={headerMenuItems} />
      </div>
    </div>
  );
};

export default ArtisanDashboardLayout;
