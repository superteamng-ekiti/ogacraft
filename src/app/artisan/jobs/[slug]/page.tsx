import { CustomBreadCrumb } from "@/components/dashboard/custom-breadcrumb";
import React from "react";
import { JobDetails } from "./_components/job-details";
import { ChatWrapper } from "./_components/chat/chat-wrapper";
import { MobileChat } from "./_components/mobile-chat";

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
    title: "Testing",
  },
];

const SingleJobPage = () => {
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

export default SingleJobPage;
