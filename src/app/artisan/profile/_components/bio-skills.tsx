import React from "react";
import Image from "next/image";
import image1 from "../../../../../public/images/profile/image (1).png";
import image2 from "../../../../../public/images/profile/image (2).png";
import image3 from "../../../../../public/images/profile/image (3).png";
import image4 from "../../../../../public/images/profile/image (4).png";
import image5 from "../../../../../public/images/profile/image (5).png";
import { Star } from "lucide-react";

const Bio = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
      {/* Left Column */}
      <div className="md:w-[500px]">
        {/* Bio Card - Exact desktop size preserved */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:w-full">
          <h2 className="text-[20px] font-bold mb-4">Bio</h2>
          <p className="text-gray-700 md:text-base text-sm">
            Hi, I’m Blessing — a certified electrician and solar technician
            based in Lagos, with over 5 years of experience helping homes and
            small businesses stay powered and safe.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Woodworking", "Joinery", "Restoration", "Furniture"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 px-2 py-1 rounded text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Project Card - Desktop layout preserved */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 md:w-full">
          <h2 className="text-[20px] font-bold mb-4">Project</h2>
          <div className="flex gap-1.5 overflow-x-auto md:overflow-visible">
            {[image1, image2, image3, image4, image5].map((img, index) => (
              <div
                key={index}
                className="min-w-[72px] md:w-18 h-18 flex-shrink-0"
              >
                <Image
                  src={img}
                  alt="Project"
                  className="w-full h-full rounded-md object-cover"
                  width={72}
                  height={72}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Client Reviews (Desktop exact size) */}
      <div className="md:w-[500px] bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-[20px] font-bold">Client review</h2>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star size={20} className="text-yellow-500" fill="currentColor" />
              <span>4.8</span>
            </div>
            <div className="text-sm">13 reviews</div>
          </div>
        </div>

        {/* Reviews - Desktop spacing maintained */}
        <div className="space-y-7 mt-6">
          {[1, 2].map((_, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <h3 className="text-[15px] font-medium">Jennifer Wilson</h3>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-600">
                Musa created a stunning dining table for our family. The
                craftsmanship is exceptional, and he was incredibly patient
                throughout the design.
              </p>
              <div className="mt-2 text-right text-sm text-gray-500">
                March 15, 2025
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Desktop exact style */}
        <div
          className="mt-6 border border-[#E8E8E8] rounded-md py-2 text-center 
                        hover:bg-gray-50 transition-colors cursor-pointer"
        >
          View all 13 reviews
        </div>
      </div>
    </div>
  );
};

export default Bio;
