import { cn } from "@/lib/utils";
import { JobStatus } from "@/types/job";
import React, { Dispatch, SetStateAction } from "react";

interface JobFilterProps {
  filter: JobStatus | "all";
  setFilter: Dispatch<SetStateAction<JobStatus | "all">>;
}

const filters = ["all", "open", "ongoing", "completed"];

export const JobFilter = ({
  filter: selectedFilter,
  setFilter,
}: JobFilterProps) => {
  return (
    <div className="w-full md:w-auto flex items-center justify-between gap-3 bg-dark-gray p-2 rounded-md">
      {filters.map((filter) => (
        <div
          onClick={() => setFilter(filter as JobStatus | "all")}
          key={filter}
          className={cn(
            "text-base p-2 px-4 rounded-sm capitalize cursor-pointer",
            selectedFilter === filter && "bg-black text-white"
          )}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};
