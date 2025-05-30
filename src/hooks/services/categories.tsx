"use client";

import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get<{ response: string[] }>(
        `query/categories`
      );

      return response.response;
    },
  });
}
