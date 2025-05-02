import React from "react";
import { JobStatusBadge } from "../../_components/job-status-badge";
import Image from "next/image";
import { ClientDetails } from "./client-details";

export const JobDetails = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-black">
          Install Solar Panel
        </h3>

        <div className="flex items-center gap-4">
          <h4 className="text-2xl font-semibold text-black">₦500,000</h4>
          <JobStatusBadge status="new" />
        </div>
      </div>

      <p className="mt-4 text-base text-gray-700">
        Client requires a full solar energy installation for a 3-bedroom
        residential apartment. The project includes the setup of solar panels,
        an inverter system, and battery backup for nighttime and outage
        coverage. Tasks involve electrical load assessment, panel mounting,
        inverter connection, battery installation, and safety configuration.
        <br /><br />
        The artisan should have hands-on experience with hybrid solar systems and be
        able to recommend appropriate equipment specifications. Prior work on
        similar residential solar projects is preferred.
      </p>

      <div className="flex items-center gap-4 my-4">
        <Image src="/images/job/job-image-1.png" alt="job image" width={97} height={64} />
        <Image src="/images/job/job-image-2.png" alt="job image" width={97} height={64} />
        <Image src="/images/job/job-image-3.png" alt="job image" width={97} height={64} />
        <Image src="/images/job/job-image-4.png" alt="job image" width={97} height={64} />
      </div>

      <ClientDetails />
    </div>
  );
};
