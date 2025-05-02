import React from "react";
import { DashboardCard } from "./dashboard-card";

export const DashboardCardsWrapper = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4 mt-6">
      <div className=" col-span-2 md:col-span-1">
        <DashboardCard
          icon="/icons/wallet-white.svg"
          title="Total Earnings"
          value="0"
          subValue="+0 this week"
        />
      </div>
      <DashboardCard
        icon="/icons/job-white.svg"
        title="Jobs Completed"
        value="0"
        subValue="0 new job this week"
      />
      <DashboardCard icon="/icons/star-white.svg" title="Rating" value="N/A" />
    </div>
  );
};
