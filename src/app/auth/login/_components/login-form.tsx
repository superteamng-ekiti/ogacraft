"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SeperatorWithText } from "@/components/ui/seperator-with-text";
import Image from "next/image";
import Link from "next/link";
import { useLoginWithEmail, useLoginWithOAuth } from "@privy-io/react-auth";
import { toast } from "sonner";

type OtpFlowState =
  | { status: "initial" }
  | { status: "error"; error: Error | null }
  | { status: "sending-code" }
  | { status: "awaiting-code-input" }
  | { status: "submitting-code" }
  | { status: "done" };

const formSchema = z.object({
  email: z.string().email(),
});

export const LoginForm = () => {
  const { sendCode, state } = useLoginWithEmail({
    onError: () => {
      toast.error("Failed to send verification code");
    },
  });

  const otpState = state as OtpFlowState;

  const router = useRouter();

  React.useEffect(() => {
    if (otpState.status === "awaiting-code-input") {
      router.push("/auth/sign-up/client/verify");
    }
  }, [otpState.status, router]);

  const { loading, initOAuth } = useLoginWithOAuth({
    onComplete: ({ isNewUser }) => {
      if (isNewUser) {
        return router.push("/auth/sign-up/client/profile");
      }
      router.push(`/client`);
    },
  });

  // Handle OAuth state changes
  //   React.useEffect(() => {
  //     if (oauthState.status === "done") {
  //       router.push(`/client`);
  //     }
  //   }, [oauthState.status, router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      sendCode({ email: values.email }).then(() => {
        router.push("/auth/sign-up/client/verify" + `?email=${values.email}`);
      });
    } catch {
      toast("Something went wrong");
    }
  }

  async function handleGoogleAuth() {
    try {
      await initOAuth({ provider: "google" });
    } catch {
      toast.error("Failed to authenticate with Google");
    }
  }

  return (
    <div className="w-full mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="e.g example@test.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            disabled={!form.formState.isValid}
            type="submit"
          >
            {otpState.status === "sending-code" ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>

      <SeperatorWithText />

      <Button
        onClick={handleGoogleAuth}
        disabled={loading}
        variant="outline"
        className="w-full"
      >
        <Image
          src="/icons/google.svg"
          alt="google icon"
          width={16}
          height={16}
        />
        {loading ? "Logging in..." : "Continue with Google"}
      </Button>

      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="text-sm text-gray-700">Not having an account?</span>
        <Link href="/auth/login" className="text-sm font-semibold text-primary">
          Sign up
        </Link>
      </div>
    </div>
  );
};
