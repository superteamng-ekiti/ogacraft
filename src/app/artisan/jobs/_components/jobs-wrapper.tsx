"use client";
import React, { useMemo, useState } from "react";
import { Clock, MapPin, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobs } from "@/mock/jobs.mock";
import { JobFilter } from "@/components/dashboard/job/job-filter";
import { JobStatusBadge } from "@/components/dashboard/job/job-status-badge";
import { JobStatus } from "@/types/job";

export const JobsWrapper = () => {
  const [filter, setFilter] = useState<JobStatus | "all">("all");

  const filteredJobs = useMemo(() => {
    if (filter === "all") return jobs;

    return jobs.filter((job) => job.status === filter);
  }, [filter]);

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
          {filteredJobs.map((job) => (
            <div
              key={job.title}
              className="w-full border border-border rounded-xl h-[275px] p-6 flex flex-col justify-between bg-white"
            >
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-semibold text-black truncate max-w-[260px]">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Client: {job.client}
                    </p>
                  </div>

                  <JobStatusBadge status={job.status} />
                </div>

                <p className="w-full text-sm text-gray-700 h-[64px]">
                  {job.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <WalletCards size={18} />
                    <h6 className="text-sm font-bold text-black">
                      {job.budget}
                    </h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <h6 className="text-sm font-medium text-gray-700">
                      {job.location}
                    </h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <h6 className="text-sm font-medium text-gray-700">
                      {job.deadline}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Chat</Button>
                <Button>Accept Job</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
