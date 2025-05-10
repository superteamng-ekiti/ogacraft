"use client";

import { User } from "@/types/user";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useGetUserByEmail(email: string) {
    return useQuery({
      queryKey: ['user', email],
      queryFn: async () => {
        const response = await api.get<{ response: User }>(`auth/fetch/${email.toLowerCase()}`);

        return response.response;
      },
      enabled: !!email
    });
  }