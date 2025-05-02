"use client";

import { AuthFormWrapper } from "@/app/auth/_components/auth-form-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Welcome = () => {
  const router = useRouter();
  return (
    <AuthFormWrapper
      title="Welcome to Ogacraft"
      description="Let help you get started"
    >
      <Image
        src="/images/welcome-img.png"
        alt="welcome"
        width={501}
        height={338}
        className="w-full h-[338px]"
      />

      <Button
        onClick={() => router.push("/client")}
        className="w-full mt-8"
        size="lg"
      >
        Finish up
      </Button>
    </AuthFormWrapper>
  );
};

export default Welcome;
