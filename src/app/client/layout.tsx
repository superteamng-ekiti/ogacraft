import React, { PropsWithChildren } from "react";
import { Header } from "@/components/header/header";
import { HeaderMenu } from "@/components/header/header-menu";
import { MenuItems } from "@/components/header/header";
import { UserProvider } from "@/context/user.context";
import { AuthCheckProvider } from "@/providers/auth-check-provider";
// import { getAuthenticatedUser } from "@/utils/auth";
// import { redirect } from "next/navigation";
// import { usePrivy } from "@privy-io/react-auth";

export const headerMenuItems: MenuItems[] = [
  {
    name: "Dashboard",
    link: "/client",
  },
  {
    name: "Artisans",
    link: "/client/artisans",
  },
  {
    name: "Jobs",
    link: "/client/jobs",
  },
  {
    name: "Payments",
    link: "/client/payments",
  },
  {
    name: "Reviews",
    link: "/client/reviews",
  },
];

const ClientDashboardLayout = async ({ children }: PropsWithChildren) => {
  return (
    <UserProvider>
      <AuthCheckProvider>
        <div className="w-full h-screen bg-light-gray relative overflow-y-auto overflow-x-hidden">
          <Header headerMenuItems={headerMenuItems} />
          {children}

          <div className="block md:hidden fixed bottom-4 right-0 left-0 px-4 z-10">
            <HeaderMenu menuItems={headerMenuItems} />
          </div>
        </div>
      </AuthCheckProvider>
    </UserProvider>
  );
};

export default ClientDashboardLayout;
