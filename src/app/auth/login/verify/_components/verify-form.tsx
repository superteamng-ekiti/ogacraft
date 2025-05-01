"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { AuthFormWrapper } from "@/app/auth/_components/auth-form-wrapper";
import React from "react";
import { useLoginWithEmail } from "@privy-io/react-auth";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const VerifyForm = () => {

  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get('email')

  const { loginWithCode } = useLoginWithEmail({
    onComplete({ isNewUser }) {
      if (isNewUser) {
        router.push("/auth/sign-up/client/profile")
      } else {
        router.push("/client")
      }
    },
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await loginWithCode({
        code: data.pin
      })
    } catch {
      toast("Something went wrong")
    }
  }

  return (
    <AuthFormWrapper
      title="Verify your email address"
      description={`We sent an OTP to ${email}. Check your Spam folder if OTP is not in primary mailbox.`}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 mt-4"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size="lg" className="w-full" type="submit">Verify</Button>
        </form>
      </Form>
    </AuthFormWrapper>
  );
};
