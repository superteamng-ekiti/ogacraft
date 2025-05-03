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
        <div className="w-full h-40 md:h-25 relative">
          <div className="w-full h-32 md:h-40">
            <Image
              src={banner}
              alt="Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Profile Picture - Centered on mobile */}
          <div className="flex absolute left-1/2 -translate-x-1/2 md:left-60 md:translate-x-0 bottom-[-60px] md:bottom-[-100px]">
            <Image
              src={image}
              alt="Profile"
              width={160} // Increased from 40
              height={160} // Increased from 40
              className="w-35 h-35 md:w-40 md:h-40 rounded-4xl object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto md:ml-125 mt-20 md:mt-3 px-4 md:px-0 mx-auto">
          {/* Increased mt for mobile */}
          <div className="flex md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
              Grace Mathew
            </h1>
            <div className="flex items-center gap-2">
              <Image
                src={pajamas}
                alt="Verified"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <div className="flex items-center bg-[#FEF3C7] p-1.5 rounded-2xl">
                <Image
                  src={Container}
                  alt="Top Rated"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <div className="font-medium text-[#92400E] text-sm md:text-base">
                  Top Rated
                </div>
              </div>
            </div>
          </div>
          {/* Info Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[280px] mt-6 md:mt-0 ">
            <div className="text-center md:text-left">
              <div className="text-sm md:text-base mb-2">
                Electrician | Ikeja, Lagos, Nigeria | 4years experience
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-normal gap-2">
                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                  <StarHalf
                    size={20}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                </div>
                <div className="text-sm md:text-base">4.8 (13 reviews)</div>
              </div>
            </div>
            <div className="bg-[#FFA300] flex items-center justify-center font-medium rounded-2xl p-2 md:p-5 text-sm md:text-base h-10 md:h-auto mt-4 md:mt-0">
              Edit Profile
            </div>
          </div>
        </div>
      </div>
      <div className="ml-0 px-4 md:px-0 mt-8 md:mt-0">
        <Bio />
      </div>
    </>
  );
};

export default ProfilePage;
