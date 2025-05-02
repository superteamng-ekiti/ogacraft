"use client";

import React from "react";
import { MenuItems } from "./header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const HeaderMenuItem = ({ menu }: { menu: MenuItems }) => {
  const pathname = usePathname();
  return (
    <Link
      href={menu.link}
      className={cn("py-1.5 px-3 rounded-md hover:bg-black hover:text-white font-medium", pathname === menu.link ? "bg-black text-white" : "text-black bg-white")}
    >
      {menu.name}
    </Link>
  );
};
