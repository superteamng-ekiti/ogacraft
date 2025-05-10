/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export function useAuth() {
  return useMutation(
    {
      mutationFn: (args: Partial<{
        email: string;
        first_name: string;
        last_name: string;
        gender: string;
        location: string;
        account_type: "artisan" | "client";
        categories: string;
        years_of_experience: string;
      }>) =>
        api.post<any>("auth", args),
    }
  );
}
