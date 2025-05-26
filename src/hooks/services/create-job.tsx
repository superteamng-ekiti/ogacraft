/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useCreateJob() {
  return useMutation({
    mutationFn: (args: {
      title: string;
      client?: string;
      description: string;
      categories: string;
      images?: string[];
      location: string;
      deadline: number;
      budget: string;
    }) => api.post<any>(`jobs`, args),
  });
}
