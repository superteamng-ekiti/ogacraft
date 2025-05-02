"use client";

import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
// import { privyAppID } from "@/constants";

interface PrivyProviderProps {
  children: React.ReactNode;
}

export const PrivyAuthProvider = ({ children }: PrivyProviderProps) => {
  return (
    <PrivyProvider
    //   appId={privyAppID ?? ""}
      appId={"cma25gbxh02o3l80mubwubonj"}
      config={{
        appearance: {
          showWalletLoginFirst: false,
          walletChainType: "ethereum-and-solana",
          walletList: ["detected_wallets", "metamask", "phantom"],
        },
        loginMethods: ["google", "email"],
        fundingMethodConfig: {
          moonpay: {
            useSandbox: true,
          },
        },
        embeddedWallets: {
          requireUserPasswordOnCreate: false,
          showWalletUIs: true,
          ethereum: {
            createOnLogin: "off",
          },
          solana: {
            createOnLogin: "users-without-wallets",
          },
        },
        mfa: {
          noPromptOnMfaRequired: false,
        },
        // externalWallets: {
        //   solana: {
        //     connectors: {},
        //   },
        // },
      }}
    >
      {children}
    </PrivyProvider>
  );
};
