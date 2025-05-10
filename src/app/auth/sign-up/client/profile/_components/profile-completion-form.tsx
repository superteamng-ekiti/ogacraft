"use client";

import { z } from "zod";

import { Camera } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useAuth } from "@/hooks/services/auth";
import { useRouter } from "next/navigation";
import { useUser } from "@privy-io/react-auth";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  skill: z.string().min(2).max(50),
  yearsOfExperience: z.string().min(2).max(50),
  gender: z.string(),
});

export const ProfileCompletionForm = () => {
  const { mutate, status } = useAuth();

  const router = useRouter();

  const { user } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user?.google?.name ? user?.google?.name.split(" ")[0] : "",
      lastname: user?.google?.name ? user?.google?.name.split(" ")[1] : "",
      skill: "",
      yearsOfExperience: "",
      location: "",
      gender: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.setValue(
        "firstname",
        user?.google?.name ? user?.google?.name.split(" ")[0] : ""
      );
      form.setValue(
        "lastname",
        user?.google?.name ? user?.google?.name.split(" ")[1] : ""
      );
    }
  }, [form, user]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(
      {
        email: user?.google?.email ?? user?.email?.address ?? "",
        first_name: values.firstname,
        last_name: values.lastname,
        location: values.location,
        gender: values.gender,
        account_type: "client"
      },
      {
        onSuccess: () => {
          router.push(`/auth/sign-up/client/welcome`);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (e: any) => {
          toast.error(e.message);
        },
      }
    );
  }

  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-center">
        <div className=" w-24 h-24 relative rounded-full">
          <Image
            src="/images/profile-placeholder.png"
            width={96}
            height={96}
            alt="profile placeholder"
          />

          <input type="file" accept="image/*" hidden id="profile-image" />
          <label
            htmlFor="profile-image"
            className="cursor-pointer w-8 h-8 absolute bg-white rounded-full bottom-0 right-0 flex items-center justify-center"
          >
            <Camera className="w-4 h-4" />
          </label>
        </div>
      </div>

      <div className="w-full mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m">Male</SelectItem>
                      <SelectItem value="f">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g Ikeja, Lagos, Nigeria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button
                disabled={!form.formState.isValid || status === "pending"}
                size="lg"
                className="w-full"
                type="submit"
              >
                {status === "pending" ? "Loading..." : "Continue"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
