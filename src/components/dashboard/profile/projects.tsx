import Image from "next/image";
import React from "react";

const mockProjects = [
  "/images/profile/mock-profile-1.png",
  "/images/profile/mock-profile-2.png",
  "/images/profile/mock-profile-3.png",
  "/images/profile/mock-profile-4.png",
  "/images/profile/mock-profile-5.png",
];

export const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="flex flex-wrap gap-4">
        {mockProjects.map((image) => (
          <Image
            key={image}
            src={image}
            alt="project"
            width={72}
            height={72}
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
};
