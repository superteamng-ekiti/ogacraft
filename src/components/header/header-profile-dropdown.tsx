"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useLogout } from '@privy-io/react-auth';
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user.context";
import { Skeleton } from "../ui/skeleton";

export const HeaderProfileDrodown = () => {
  const router = useRouter();

  const { isLoading, user} = useUser();

  const { logout } = useLogout({
    onSuccess: () => {
      router.push("/auth/login");
    },
  });

  const handleLogout = async () => {
    await logout();
  };

  console.log("user", user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-full p-2 flex items-center gap-2 border border-border rounded-xl cursor-pointer">
          {isLoading ? (
            <Skeleton className="w-[32px] h-[32px] rounded-xl" />
          ) : (
            <Image
              src="/images/placeholder-profile.png"
              width={32}
              height={32}
              alt="profile placeholder"
            />
          )}
          <ChevronDown size={14} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" className="w-56">
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            src="/images/placeholder-profile.png"
            width={56}
            height={56}
            alt="profile placeholder"
          />
          <p className="text-center text-xl mt-2 font-semibold">{user?.first_name + " " + user?.last_name}</p>
          <p className="text-center text-sm text-gray-500">{user?.email}</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="py-2 cursor-pointer" asChild>
            <Link href={`/${user?.account_type}/profile`} className="w-full inline-flex gap-2 items-center">
              <User2 />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout} className="py-2 cursor-pointer" asChild>
            <span  className="w-full inline-flex gap-2 items-center">
              <LogOut />
              Logout
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
