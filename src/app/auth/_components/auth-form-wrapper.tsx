"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

interface AuthFormWrapper extends PropsWithChildren {
  title: string;
  description: string;
  isLogo?: boolean;
  skipLink?: string;
}

export const AuthFormWrapper = ({
  children,
  title,
  description,
  isLogo = true,
  skipLink
}: AuthFormWrapper) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center gap-4 px-2 md:px-12 max-w-xl relative">
      {skipLink && (
        <Button onClick={() => router.push(skipLink)} variant="secondary" className="absolute -top-16 right-6">Skip</Button>
      )}
      {isLogo ? (
        <Image
          src="/images/ogacraft-logo.svg"
          width={64}
          height={64}
          alt="oga craft logo"
          className=" w-16 h-16"
        />
      ) : null}

      <h2 className="text-3xl md:text-4xl text-center text-black font-semibold">{title}</h2>
      <p className="text-center text-sm md:text-base text-gray-600">{description}</p>

      <div className="w-full relative">{children}</div>
    </div>
  );
};
