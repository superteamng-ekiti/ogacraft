import React from "react";
import Image from "next/image";
import banner from "../../../../public/images/profile/banner.png";
import image from "../../../../public/images/profile/image.png";
import Container from "../../../../public/images/profile/Container.png";
import pajamas from "../../../../public/images/profile/pajamas_partner-verified.png";
import { Star, StarHalf } from "lucide-react";
import Bio from "./_components/bio-skills";

const ProfilePage = () => {
  return (
    <>
      <div className="w-full">
        {/* Banner Image */}
        <div className="w-full h-25 relative">
          <div className="w-full h-20 ">
            <Image src={banner} alt="Banner" fill className="object-cover" />
          </div>
          {/* Profile Picture */}
          <div className="flex absolute left-70 bottom-[-100px]">
            <Image
              src={image}
              alt="Profile"
              width={40}
              height={40}
              className="w-40 h-40 rounded-3xl  object-cover"
            />
          </div>
        </div>
        <div className="ml-110 mt-3">
          <div className="flex">
            <div className="flex items-center justify-center gap-4">
              <h1 className="ml-2 text-2xl font-bold">Grace Mathew</h1>
              <Image
                src={pajamas}
                alt="Profile"
                width={10}
                height={10}
                className="w-4 h-4 rounded-full"
              />
              <div className="flex items-center justify-center bg-[#FEF3C7] p-1.5 rounded-2xl">
                <Image
                  src={Container}
                  alt="Profile"
                  width={6}
                  height={6}
                  className="w-4 h-4 rounded-full"
                />
                <div className="font-medium text-[#92400E]">Top Rated</div>
              </div>
            </div>
          </div>
          <div className="flex gap-[280px]">
            <div>
              <div className="ml-2">
                Electrician | Ikeja, Lagos, Nigeria | 4years experience
              </div>
              <div className="ml-2 mt-2 flex">
                <div className="flex items-center space-x-1">
                  {/* 4 full stars */}
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500"
                      fill="currentColor"
                    />
                  ))}

                  {/* 1 half star */}
                  <StarHalf
                    size={20}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                </div>
                <div>4.8 (13 reviews)</div>
              </div>
            </div>
            <div className="bg-[#FFA300] flex items-center font-medium rounded-2xl p-5 h-5">
              Edit Profile
            </div>
          </div>
        </div>
        {/* Cards */}
      </div>
      <div className="ml-0">
        <Bio />
      </div>
    </>
  );
};

export default ProfilePage;
