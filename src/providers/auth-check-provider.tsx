"use client";
import { useUser } from "@/context/user.context";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useEffect } from "react";

export const AuthCheckProvider = ({ children }: PropsWithChildren) => {
  const { ready, authenticated } = usePrivy();

  const { isLoading } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/auth/login");
    }
  }, [authenticated, ready, router]);

  if(!ready || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Image src="/assets/ogacraft.svg" alt="ogacraft-logo" width={48} height={48} className="animate-pulse" />
      </div>
    )
  }

  return <>{children}</>;
};
