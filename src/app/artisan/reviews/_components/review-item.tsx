import Image from "next/image";
import React from "react";

export const ReviewItem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-24">
      <div className="flex items-center gap-4 flex-shrink-0 w-full md:w-auto">
        <Image
          src="/images/review/review-avatar-1.jpg"
          width={140}
          height={140}
          alt="review avatar"
          className="w-[88px] h-[88px] md:w-[140px] md:h-[140px]"
        />

        <div className="flex flex-col gap-2 md:gap-4">
          <h5 className="text-lg md:text-xl font-semibold">John Musa</h5>
          <p className="text-sm md:text-base text-gray-600">
            Total Spend: <span className="text-black font-semibold">₦500k</span>
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Total Review: <span className="text-black font-semibold">14</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/rating.png" width={80} height={16} alt="rating" />
          <p className="text-sm text-gray-500">24-04-2025</p>
        </div>
        <p className="text-base text-gray-700 max-w-[650px]">
          Grace was super professional and friendly throughout. She explained
          the solar setup clearly and completed the work earlier than expected.
          Everything works perfectly — no more generator stress! I’ll definitely
          call her again.
        </p>
      </div>
    </div>
  );
};
