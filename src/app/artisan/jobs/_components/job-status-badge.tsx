import { cn } from "@/lib/utils";
import React from "react";

interface JobStatusBadgeProps {
    status: "new" | "urgent" | "ongoing" | "completed"
}

export const JobStatusBadge = ({ status } : JobStatusBadgeProps) => {
  return (
    <span className={cn("px-4 py-1 rounded-md font-medium capitalize", status === "new" && "bg-green-50 text-green-700", status === "urgent" && "bg-orange-50 text-orange-700", status === "ongoing" && "bg-gray-50 text-gray-700", status === "completed" && "bg-blue-50 text-blue-700")}>
      {status}
    </span>
  );
};
