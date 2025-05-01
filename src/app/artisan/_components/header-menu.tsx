import React from "react";
import { MenuItems } from "./header";
import { HeaderMenuItem } from "./header-menu-item";

export const HeaderMenu = ({ menuItems }: { menuItems: MenuItems[] }) => {
  return (
    <nav className="border border-b p-2 flex items-center gap-3 rounded-xl">
      {menuItems.map((menu) => (
        <HeaderMenuItem menu={menu} key={menu.name} />
      ))}
    </nav>
  );
};
