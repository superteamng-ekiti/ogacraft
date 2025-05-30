"use client";

import { JobCard } from "@/components/dashboard/job/job-card";
import { JobFilter } from "@/components/dashboard/job/job-filter";
import { useGetClientJobs } from "@/hooks/services/job";
import { JobStatus } from "@/types/job";
import React, { useMemo, useState } from "react";

export const JobListings = () => {
  const { data: paginatedJobs } = useGetClientJobs();

  const [filter, setFilter] = useState<JobStatus | "all">("all");

  const filteredJobs = useMemo(() => {
    if (filter === "all") return paginatedJobs?.jobs;

    return paginatedJobs?.jobs?.filter((job) => job.status === filter);
  }, [filter, paginatedJobs?.jobs]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between">
        <h2 className="text-xl md:text-3xl text-black font-semibold">
          Job Management
        </h2>

        <JobFilter filter={filter} setFilter={setFilter} />
      </div>

      <div className="w-full h-[calc(100vh_-_21.5rem)] md:h-[calc(100vh_-_16rem)] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[275px]">
          {filteredJobs?.map((job) => (
            <JobCard key={job._id} job={job} type="client" />
          ))}
        </div>
      </div>
    </div>
  );
};
