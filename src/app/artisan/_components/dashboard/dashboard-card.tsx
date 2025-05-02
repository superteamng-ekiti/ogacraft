import Image from "next/image";
import React from "react";

interface DashboardCardProps {
  icon: string;
  title: string;
  value: string;
  subValue?: string;
}

export const DashboardCard = ({
  icon,
  title,
  value,
  subValue,
}: DashboardCardProps) => {
  return (
    <div className="w-full h-[148px] md:h-[164px] px-4 md:px-6 py-6 rounded-xl border border-border flex flex-col justify-between gap-4">
      <div className="flex w-full gap-2">
        <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
          <Image src={icon} width={16} height={16} alt={title} />
        </div>
        <h6 className="text-sm md:text-base text-black font-semibold">{title}</h6>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl text-black font-extrabold">{value}</h2>
        {subValue && (
          <p className="text-xs font-medium text-gray-500">{subValue}</p>
        )}
      </div>
    </div>
  );
};
