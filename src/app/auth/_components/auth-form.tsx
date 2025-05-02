"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

interface AuthFormProps {
  authType: "login" | "sign_up";
  userType?: "artisan" | "client";
}

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
| {status: 'initial'}
| {status: 'error'; error: Error | null}
| {status: 'sending-code'}
| {status: 'awaiting-code-input'}
| {status: 'submitting-code'}
| {status: 'done'};

const formSchema = z.object({
  email: z.string().email(),
});

export const AuthForm = ({ userType }: AuthFormProps) => {
  const { sendCode, state } = useLoginWithEmail({
    onError: () => {
      toast.error("Failed to send verification code");
    }
  });

  const otpState = state as OtpFlowState;
  
  const router = useRouter();

  React.useEffect(() => {
    if (otpState.status === "awaiting-code-input") {
      router.push(
        userType === "artisan"
          ? "/auth/sign-up/artisan/verify"
          : "/auth/sign-up/client/verify"
      );
    }
  }, [otpState.status, router, userType]);

  const { loading, initOAuth, state: oauthState } = useLoginWithOAuth({
    onComplete: () => {
      if (oauthState.status === "done") {
        router.push(`/auth/sign-up/${userType === "artisan" ? "artisan" : "client"}/profile`);
      }
    }
  });

  // Handle OAuth state changes
  React.useEffect(() => {
    if (oauthState.status === "done") {
      router.push(`/auth/sign-up/${userType === "artisan" ? "artisan" : "client"}/profile`);
    }
  }, [oauthState.status, router, userType]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      sendCode({ email: values.email }).then(() => {
        router.push(
          userType === "artisan"
            ? "/auth/sign-up/artisan/verify"
            : "/auth/sign-up/client/verify" + `?email=${values.email}`
        );
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
            {otpState.status === "sending-code" ? "Logging in..." : "Get Started"}
          </Button>
        </form>
      </Form>

      <SeperatorWithText />

      <Button onClick={handleGoogleAuth} disabled={loading} variant="outline" className="w-full">
        <Image
          src="/icons/google.svg"
          alt="google icon"
          width={16}
          height={16}
        />
        {loading ? 'Logging in...' : 'Sign up with Google'}
      </Button>

      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="text-sm text-gray-700">Already have an account?</span>
        <Link href="/auth/login" className="text-sm font-semibold text-primary">
          Login
        </Link>
      </div>
    </div>
  );
};
