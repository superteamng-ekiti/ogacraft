import { cn } from "@/lib/utils";
import React from "react";
import { JobStatus } from "@/types/job";

interface JobStatusBadgeProps {
    status: JobStatus
}

export const JobStatusBadge = ({ status } : JobStatusBadgeProps) => {
  return (
    <span className={cn("px-4 py-1 rounded-md font-medium capitalize", 
      (status === "new" || status === "urgent") && "bg-green-50 text-green-700", 
      status === "ongoing" && "bg-orange-50 text-orange-700", 
      status === "completed" && "bg-gray-50 text-gray-700")}>
      {status}
    </span>
  );
};
