"use client";

import { CustomBreadCrumb } from "@/components/dashboard/custom-breadcrumb";
import { ChatWrapper } from "@/components/dashboard/job/chat/chat-wrapper";
import { JobDetails } from "@/components/dashboard/job/job-details";
import { MobileChat } from "@/components/dashboard/job/mobile-chat";
import React from "react";

const breadcrumbs = [
    {
      title: "Home",
      link: "/artisan",
    },
    {
      title: "Jobs",
      link: "/artisan/jobs",
    },
    {
      title: "Job Detail",
    },
  ];

export const JobDetailWrapper = () => {
  return (
    <div className="w-full container mx-auto px-4 md:px-0 py-8">
      <CustomBreadCrumb breadcrumbs={breadcrumbs} />

      <div className="w-full h-[calc(100vh_-11rem)] mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <JobDetails />

        <div className="w-full h-full hidden md:block">
          <ChatWrapper />
        </div>

        <div className="block md:hidden">
          <MobileChat />
        </div>
      </div>
    </div>
  );
};
