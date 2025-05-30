"use client";

import { PaginatedArtisans } from "@/types/pagination";
import { User } from "@/types/user";
import { api } from "@/utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";

interface ArtisanFilters {
  location?: string | null;
  categories?: string | null;
  min_rating?: string | null;
  min_experience?: string | null;
}

export function useGetArtisans(filters: ArtisanFilters = {}) {
  return useInfiniteQuery({
    queryKey: ["artisans", filters],
    queryFn: async ({ pageParam = 1 }) => {
      const searchParams = new URLSearchParams({
        page: pageParam.toString(),
        limit: "9",
        ...(filters.location && { location: filters.location }),
        ...(filters.categories && { categories: filters.categories }),
        ...(filters.min_rating && { min_rating: filters.min_rating }),
        ...(filters.min_experience && { min_experience: filters.min_experience }),
      });

      const response = await api.get<{ response: PaginatedArtisans<User> }>(
        `query/artisans?${searchParams.toString()}`
      );
      return response.response;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.page >= lastPage.pagination.pages) return undefined;
      return lastPage.pagination.page + 1;
    },
    initialPageParam: 1,
  });
}
