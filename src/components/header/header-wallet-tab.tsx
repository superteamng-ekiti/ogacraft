import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";

export const HeaderWalletTab = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-full p-3 rounded-xl border border-border flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/wallet-icon.svg"
            alt="wallet-icon"
            width={24}
            height={24}
          />
          <p className="text-green-600 font-semibold text-base">₦0.00</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="w-96 py-4 px-2">
        <DropdownMenuLabel className="font-semibold text-black">Wallet</DropdownMenuLabel>

        <div className="mt-4 flex flex-col items-center">
          <Image
            src="/icons/wallet-icon.svg"
            alt="wallet-icon"
            width={24}
            height={24}
          />

          <h3 className="text-4xl text-center font-bold py-2">₦0.00</h3>

          <div className="flex items-center gap-4 mt-6">
            <Button variant="outline">View Past Transactions</Button>
            <Button>Withdraw</Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
