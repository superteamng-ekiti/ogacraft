import { DatePickerWithRange } from "@/components/ui/date-range";
import { Separator } from "@/components/ui/separator";
import { Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ReviewItem } from "./review-item";

export const ReviewWrapper = () => {
  return (
    <div className="w-full mt-6 mb-16 md:mb-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold text-black">
          Reviews
        </h3>

        <DatePickerWithRange />
      </div>

      <div className="flex flex-row flex-wrap gap-8 md:gap-4 items-start justify-between mt-8 md:mt-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Total Reviews</h3>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">13</h2>
            <span className="bg-green-100 text-green-600 text-xs inline-flex items-center gap-1 p-1 rounded-sm">
              <span>12%</span>
              <TrendingUp size={12} className=" stroke-green-700" />
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Growth in reviews on this year
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Average Rating</h3>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">4.8</h2>
            <Image
              src="/images/rating.png"
              alt="rating"
              width={80}
              height={16}
            />
          </div>
          <p className="text-sm text-gray-600">Average rating on this year</p>
        </div>

        <div className="hidden md:flex flex-col gap-[1px] items-start">
          <div className="flex items-center gap-2">
            <Star size={12} className="fill-gray-400 stroke-gray-400" />
            <p className="text-base text-gray-700">5</p>
            <span className="h-1 rounded-md bg-green-400 w-48" />
            <p className="text-base text-gray-700">8</p>
          </div>
          <div className="flex items-center gap-2">
            <Star size={12} className="fill-gray-400 stroke-gray-400" />
            <p className="text-base text-gray-700">4</p>
            <span className="h-1 rounded-md bg-purple-400 w-24" />
            <p className="text-base text-gray-700">3</p>
          </div>
          <div className="flex items-center gap-2">
            <Star size={12} className="fill-gray-400 stroke-gray-400" />
            <p className="text-base text-gray-700">3</p>
            <span className="h-1 rounded-md bg-yellow-400 w-12" />
            <p className="text-base text-gray-700">1</p>
          </div>
          <div className="flex items-center gap-2">
            <Star size={12} className="fill-gray-400 stroke-gray-400" />
            <p className="text-base text-gray-700">2</p>
            <span className="h-1 rounded-md bg-sky-400 w-4" />
            <p className="text-base text-gray-700">0</p>
          </div>
          <div className="flex items-center gap-2">
            <Star size={12} className="fill-gray-400 stroke-gray-400" />
            <p className="text-base text-gray-700">1</p>
            <span className="h-1 rounded-md bg-amber-400 w-4" />
            <p className="text-base text-gray-700">0</p>
          </div>
        </div>
      </div>

      <div className="my-8 md:my-4">
        <Separator />
      </div>

      <div className="flex flex-col gap-4">
        <ReviewItem />
        <Separator />
        <ReviewItem />
        <Separator />
        <ReviewItem />
      </div>
    </div>
  );
};
