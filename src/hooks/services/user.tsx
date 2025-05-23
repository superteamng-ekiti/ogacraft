/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { User } from "@/types/user";
import { api } from "@/utils/api";
import { usePrivy, useUser } from "@privy-io/react-auth";
import { useMutation, useQuery } from "@tanstack/react-query";

// get user by email
export function useGetUserByEmail(enabled?: boolean, email?: string) {
  const { user: privyUser } = useUser();
  const { ready, authenticated } = usePrivy();

  return useQuery({
    queryKey: ["user", email ?? privyUser?.email?.address],
    queryFn: async () => {
      const response = await api.get<{ response: User }>(
        `auth/fetch/${email?.toLowerCase() ?? privyUser?.email?.address}`
      );

      return response.response;
    },
    enabled:
      !!(email ?? privyUser?.email?.address) &&
      ready &&
      authenticated &&
      enabled,
  });
}

// update user profile details
export function useUpdateUser() {
  return useMutation({
    mutationFn: (args: { email: string; queryParam: string }) =>
      api.put<any>(`auth/update-profile?${args.queryParam}`, {
        email: args.email,
      }),
  });
}
