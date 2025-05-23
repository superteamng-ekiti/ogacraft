"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ProfileDetailContainer } from "./main-profile-details";
import { Bio } from "./bio";
import { Skill } from "./skill";
import { Projects } from "./projects";
import { useUser } from "@/context/user.context";

export const ProfileWrapper = () => {
  const { user } = useUser();
  console.log("user", user);
  return (
    <>
      <div className="relative">
        <Image
          src="/images/profile/profile-banner.jpg"
          alt="profile banner"
          width={1512}
          height={95}
          className="w-full h-16 md:h-auto object-cover"
        />

        <div className="container mx-auto px-4 md:px-0 relative">
          <Image
            src="/images/profile/profile-avatar.png"
            width={124}
            height={124}
            alt="profile-image"
            className="w-[88px] h-[88px] md:w-[124px] md:h-[124px] absolute -top-[16%] left-1/2 md:left-0 md:-top-1/8 md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0"
          />

          <div className="w-full py-4 md:pl-34 pt-16 md:pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">{user?.first_name ?? "-"} {user?.last_name ?? "-"}</h3>
              </div>
              <p className="text-sm text-gray-700">
                {user?.categories.length ? user?.categories[0] + ' |' : ''}{` ${user?.location}`} | 4years experience
              </p>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0">
                  <Image
                    src="/icons/profile/star-full.svg"
                    alt="star full"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/icons/profile/star-full.svg"
                    alt="star full"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/icons/profile/star-full.svg"
                    alt="star full"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/icons/profile/star-full.svg"
                    alt="star full"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/icons/profile/star-half.svg"
                    alt="star half"
                    width={16}
                    height={16}
                  />
                </div>

                <h6 className="text-lg font-semibold">4.8</h6>
                <p className="text-sm text-gray-600">(13 reviews)</p>
              </div>
            </div>

            <Button>Edit Profile</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-0 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2">
          <ProfileDetailContainer>
            <Bio />
            <Skill />
          </ProfileDetailContainer>
          <ProfileDetailContainer>
            <Projects />
          </ProfileDetailContainer>
        </div>

        <ProfileDetailContainer></ProfileDetailContainer>
      </div>
    </>
  );
};
