"use client";

import { User } from "@/types/user";
import { api } from "@/utils/api";
import { usePrivy, useUser } from "@privy-io/react-auth";
import { useQuery } from "@tanstack/react-query";

export function useGetUserByEmail(enabled?: boolean, email?: string) {
  const { user: privyUser } = useUser();
  const { ready, authenticated } = usePrivy();

    return useQuery({
      queryKey: ['user', email ?? privyUser?.email?.address],
      queryFn: async () => {
        const response = await api.get<{ response: User }>(`auth/fetch/${email?.toLowerCase() ?? privyUser?.email?.address}`);

        return response.response;
      },
      enabled: !!(email ?? privyUser?.email?.address) && ready && authenticated && enabled
    });
  }