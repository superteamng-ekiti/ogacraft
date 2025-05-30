import { Job } from "@/types/job";
import React from "react";
import { JobStatusBadge } from "./job-status-badge";
import { Clock, MapPin, WalletCards } from "lucide-react";
import { formatBudget, stripHtmlAndTruncate } from "@/utils/string";
import { fromUnixTime } from "date-fns";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

interface JobCardProps {
  job: Job;
  type: "client" | "artisan";
}

export const JobCard = ({ job, type }: JobCardProps) => {
  return (
    <div
      key={job.title}
      className="w-full border border-border rounded-xl h-[275px] p-6 flex flex-col justify-between bg-white"
    >
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-semibold text-black truncate max-w-[260px]">
              {job.title}
            </h3>
            {type === "artisan" && (
              <p className="text-sm text-gray-600">Artisan: {job.artisan}</p>
            )}
          </div>

          <JobStatusBadge status={job.status} />
        </div>

        <p className="w-full text-sm text-gray-700 h-[64px] overflow-hidden">
          {stripHtmlAndTruncate(job.description, 120)}
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <WalletCards size={18} />
            <h6 className="text-sm font-bold text-black">
              {formatBudget(job.budget)}
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
              {fromUnixTime(Number(job.deadline)).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h6>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button onClick={() => redirect(`/client/jobs/${job._id}`)} variant="outline">Chat</Button>
        {(job.status === "new" || job.status === "urgent") && <Button>Accept Job</Button>}
      </div>
    </div>
  );
};
