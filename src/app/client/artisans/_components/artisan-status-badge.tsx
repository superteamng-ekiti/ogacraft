import { cn } from "@/lib/utils";
import React from "react";

interface ArtisanStatusBadgeProps {
    status: "available" | "unavailable"
}

export const ArtisanStatusBadge = ({ status } : ArtisanStatusBadgeProps) => {
  return (
    <span className={cn("px-4 py-1 rounded-md font-medium capitalize", status === "available" && "bg-green-50 text-green-700" )}>
      {status}
    </span>
  );
};
