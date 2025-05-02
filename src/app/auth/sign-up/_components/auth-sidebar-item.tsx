"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface AuthSidebarItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  last?: boolean;
}

export const AuthSidebarItem = ({
  icon,
  title,
  description,
  link,
  last,
}: AuthSidebarItemProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return pathname === link;
  }, [pathname, link]);

  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col gap-0 justify-center">
        <div className={cn("w-10 h-10 rounded-md border border-border flex items-center justify-center", isActive ? "text-black" : "text-gray-500")}>
            {icon}
        </div>

        {!last && (
          <div className="flex justify-center">
            <span className="w-[1px] h-12 bg-border" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0">
        <h3
          className={cn(
            "text-md font-semibold text-gray-800",
            isActive ? "text-black" : "text-gray-500"
          )}
        >
          {title}
        </h3>
        <p className={cn("text-sm", isActive ? "text-gray-500" : "text-gray-400")}>{description}</p>
      </div>
    </div>
  );
};
