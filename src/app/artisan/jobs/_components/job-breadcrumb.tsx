import { CustomBreadCrumb } from "@/components/dashboard/custom-breadcrumb";
import React from "react";

export const JobBreadCrumb = () => {
  return (
    <CustomBreadCrumb
      breadcrumbs={[
        {
          title: "Home",
          link: "/artisan",
        },
        {
          title: "Jobs",
        },
      ]}
    />
  );
};
