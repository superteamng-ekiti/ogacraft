import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu"; 
import { Bell } from "lucide-react";
import React from "react";
import { NotificationItem } from "./notification-item";

export const HeaderNotificationTab = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-12 h-12 hover:bg-light-gray rounded-xl cursor-pointer flex items-center justify-center">
          <Bell size={18} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" className="w-94 px-4 py-4">
        <DropdownMenuLabel className="w-full flex items-center justify-between">
          <h4 className="text-xl font-bold">Notifications</h4>

          <Button variant="ghost">Mark as read</Button>
        </DropdownMenuLabel>

        <div className="flex mt-4 flex-col gap-3 w-full">
          <NotificationItem type="job-request" />
          <NotificationItem type="sent-message" />
          <NotificationItem type="accept-job" />
          <NotificationItem type="fund-wallet" />
          <NotificationItem type="job-completed" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
