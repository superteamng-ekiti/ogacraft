"use client";

import { useUser } from "@/context/user.context";
import React from "react";

export const Bio = () => {
  const { user } = useUser();

  console.log("user", user);

  if (!user?.profile_description) return null;

  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="text-xl font-semibold">Bio</h3>

      {user?.profile_description ? (
        <p className="text-sm text-gray-600">
          {/* Hi, I’m Blessing — a certified electrician and solar technician based in
          Lagos, with over 5 years of experience helping homes and small
          businesses stay powered and safe */}
          {user?.profile_description}
        </p>
      ) : null}
    </div>
  );
};
