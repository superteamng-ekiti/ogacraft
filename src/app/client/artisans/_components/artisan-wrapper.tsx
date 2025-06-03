"use client";
import React, { useEffect, useMemo } from "react";
import ArtisanCard from "./artisan-card";
import CreateJobPost from "./create-job-post";
import { ArtisanFilterMenu } from "./artisan-filter-menu";
import { useGetArtisans } from "@/hooks/services/get-artisans";
import { User } from "@/types/user";
import { useInView } from "react-intersection-observer";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyArtisanScreen } from "./empty-artisan-screen";

const ArtisanWrapper = () => {
  const [filters, setFilters] = React.useState({
    location: null,
    categories: null,
    min_rating: null,
    min_experience: null,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetArtisans(filters);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    const handleFilterChange = (event: CustomEvent) => {
      setFilters(event.detail);
    };

    window.addEventListener(
      "artisanFiltersChanged",
      handleFilterChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "artisanFiltersChanged",
        handleFilterChange as EventListener
      );
    };
  }, []);

  const allArtisans = useMemo(
    () => data?.pages.flatMap((page) => page.artisans) || [],
    [data]
  );

  return (
    <div className="w-full mt-6 mb-16 md:mb-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Artisans</h1>
          <ArtisanFilterMenu />
        </div>

        <CreateJobPost />
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-4 relative">
          {isLoading ? (
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto overflow-y-auto">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[275px] rounded-xl" />
              ))}
            </div>
          ) : null}
          {!isLoading && allArtisans.length > 0 ? (
            <div className="w-full flex flex-col md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto overflow-y-auto">
              {allArtisans.map((artisan: User, index: number) => (
                <ArtisanCard key={index} artisan={artisan} />
              ))}

              {/* Loading indicator */}
              <div ref={ref} className="col-span-3 flex justify-center py-4">
                {isFetchingNextPage && (
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                )}
              </div>
            </div>
          ) : null}

          {!isLoading && allArtisans.length === 0 ? (
            <EmptyArtisanScreen />
          ) : null}
        </div>
      </div>
    </div>
  );
};

// md:ml-[337px]
export default ArtisanWrapper;
