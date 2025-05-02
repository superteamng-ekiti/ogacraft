import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface NotificationItemProps {
  type:
    | "job-request"
    | "sent-message"
    | "accept-job"
    | "fund-wallet"
    | "job-completed";
}

export const NotificationItem = ({ type }: NotificationItemProps) => {
  return (
    <>
      {type === "job-request" && (
        <div className="w-full flex items-start gap-2">
          <Image
            className="flex-shrink-0"
            src="/images/notification/notification-avatar-1.png"
            width={40}
            height={40}
            alt="notification avatar"
          />

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">
              You’ve received a new job request:{" "}
              <span className="text-black font-medium">
                Install Solar Panel – ₦500,000.
              </span>
            </p>

            <p className="text-xs text-gray-500">1m ago</p>

            <div className="flex items-center gap-4">
              <Button variant="outline">View Job</Button>
              <Button>Accept Job</Button>
            </div>
          </div>
        </div>
      )}

      {type === "sent-message" && (
        <div className="w-full flex items-start gap-2">
          <Image
            className="flex-shrink-0"
            src="/images/notification/notification-avatar-2.png"
            width={40}
            height={40}
            alt="notification avatar"
          />

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">
              Musa T. sent you a message regarding{" "}
              <span className="text-black font-medium">
                Install Solar Panel.
              </span>
            </p>

            <p className="text-xs text-gray-500">4m ago</p>

            <div className="flex items-center gap-4">
              <Button variant="outline">Open chat</Button>
            </div>
          </div>
        </div>
      )}

      {type === "accept-job" && (
        <div className="w-full flex items-start gap-2">
          <Image
            className="flex-shrink-0"
            src="/images/placeholder-profile.png"
            width={40}
            height={40}
            alt="notification avatar"
          />

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600">
              You’ve accepted the job. We’ve notified the client — good luck!.
            </p>

            <p className="text-xs text-gray-500">1h ago</p>
          </div>
        </div>
      )}

      {type === "fund-wallet" && (
        <div className="w-full flex items-start gap-2">
          <Image
            className="flex-shrink-0"
            src="/images/placeholder-profile.png"
            width={40}
            height={40}
            alt="notification avatar"
          />

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">
              <span className="text-black font-medium">₦500,000</span>
              has been received for{" "}
              <span className="text-black font-medium">
                Solar Installation. Funds{" "}
              </span>
              are now in your wallet.
            </p>

            <p className="text-xs text-gray-500">1h ago</p>

            <div className="flex items-center gap-4">
              <Button variant="outline">Withdraw Fund</Button>
              <Button>View Wallet</Button>
            </div>
          </div>
        </div>
      )}

      {type === "job-completed" && (
        <div className="w-full flex items-start gap-2">
          <Image
            className="flex-shrink-0"
            src="/images/placeholder-profile.png"
            width={40}
            height={40}
            alt="notification avatar"
          />

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">
              You’ve marked Install Solar Panel as completed. Waiting for client
              confirmation.
            </p>

            <p className="text-xs text-gray-500">4h ago</p>

            <div className="flex items-center gap-4">
              <Button variant="outline">View Status</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
