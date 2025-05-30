/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useUser } from "@/context/user.context";
import { Job } from "@/types/job";
import { PaginatedJobs } from "@/types/pagination";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetClientJobs = () => {
  const { user } = useUser();

  return useQuery({
    queryKey: ["client-jobs", user?._id],
    queryFn: async () => {
      const response = await api.get<{ response: PaginatedJobs<Job> }>(
        `jobs/client/${user?._id}`
      );

      return response.response;
    },
    enabled: !!user?._id,
  });
};

export const useGetJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await api.get<{ response: any[] }>(`jobs`);

      return response.response;
    },
  });
};
