import React from "react";
import { AuthSidebarItem } from "./auth-sidebar-item";
import { UserIcon } from "@/components/icons/user";
import { EmailIcon } from "@/components/icons/email";
import { UsersIcon } from "@/components/icons/users";
import { LaunchIcon } from "@/components/icons/launch";
import Image from "next/image";

export const AuthSidebar = () => {
  return (
    <div className="h-full flex flex-col gap-0 relative">
      <AuthSidebarItem
        icon={<UserIcon />}
        title="Your details"
        description="Provide an email address"
        link="/auth/sign-up/artisan"
      />
      <AuthSidebarItem
        icon={<EmailIcon />}
        title="Verify your email"
        description="Enter your verification code"
        link="/auth/sign-up/artisan/verify"
      />
      <AuthSidebarItem
        icon={<UsersIcon />}
        title="Complete Profile"
        description="Enter other profile details"
        link="/auth/sign-up/artisan/profile"
      />
      <AuthSidebarItem
        icon={<LaunchIcon />}
        last
        title="Welcome to Ogacraft"
        description="Let help you get upto speed"
        link="/auth/sign-up/artisan/welcome"
      />

      <Image
        src="/images/auth-sidebar-pattern.png"
        width={112}
        height={310}
        className="absolute bottom-12 right-0"
        alt="auth sidebar pattern"
      />
    </div>
  );
};
