"use client";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useEffect } from "react";

export const AuthCheckProvider = ({ children }: PropsWithChildren) => {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/auth/login");
    }
  }, [authenticated, ready, router]);

  return <>{children}</>;
};
