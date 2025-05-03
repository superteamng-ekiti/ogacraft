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
    <div className="flex justify-center gap-5 mt-5">
      {/* Bio */}
      <div className="gap-5">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
          <h2 className="text-[20px] font-bold mb-4">Bio</h2>
          <p className="text-gray-700">
            Hi, I’m Blessing — a certified electrician and solar technician
            based in Lagos, with over 5 years of experience helping homes and
            small businesses stay powered and safe.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
                Woodworking
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
                Joinery
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
                Restoration
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
                Furniture
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mt-6">
          <h2 className="text-[20px] font-bold mb-4">Project</h2>
          <div className="flex gap-1.5">
            <Image
              src={image1}
              alt="Profile"
              width={6}
              height={6}
              className="w-18 h-18 rounded-md"
            />
            <Image
              src={image2}
              alt="Profile"
              width={6}
              height={6}
              className="w-18 h-18 rounded-md object-cover"
            />
            <Image
              src={image3}
              alt="Profile"
              width={6}
              height={6}
              className="w-18 h-18 rounded-md"
            />
            <Image
              src={image4}
              alt="Profile"
              width={6}
              height={6}
              className="w-18 h-18 rounded-md"
            />
            <Image
              src={image5}
              alt="Profile"
              width={6}
              height={6}
              className="w-18 h-18 rounded-md"
            />
          </div>
        </div>
      </div>
      {/* Client review */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md ">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-bold mb-4">Client review</h2>
          <div>
            <div className="flex gap-1">
              {[...Array(1)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500"
                  fill="currentColor"
                />
              ))}
              <div>4.8</div>
            </div>
            <div>13 review</div>
          </div>
        </div>
        {/* review 2 */}
        <div className="mt-7">
          <div className="flex justify-between">
            <h2 className="text-[15px] font-medium mb-4">Jennifer Wilson</h2>
            <div>
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
          </div>
          <div>
            Musa created a stunning dining table for our family. The
            craftsmanship is exceptional, and he was incredibly patient
            throughout the design.
          </div>
          <div className="flex justify-end">March 15, 2025</div>
        </div>
        {/* review 3 */}
        <div className="mt-7">
          <div className="flex justify-between">
            <h2 className="text-[15px] font-medium mb-4">Jennifer Wilson</h2>
            <div>
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
          </div>
          <div>
            Musa created a stunning dining table for our family. The
            craftsmanship is exceptional, and he was incredibly patient
            throughout the design.
          </div>
          <div className="flex justify-end">March 15, 2025</div>
        </div>
        {/* more views */}
        <div className="flex justify-center border border-[#E8E8E8] mt-5">
          View all 13 reviews
        </div>
      </div>
    </div>
  );
};

export default Bio;
