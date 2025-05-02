import React from "react";
import { ClientName } from "./client-name";
import { ClientRating } from "./client-rating";
import { Clock, MapPin, SquarePercent, WalletCards } from "lucide-react";

export const ClientDetails = () => {
  return (
    <div className="w-full px-6 py-5 bg-white border border-border rounded-xl mt-12">
      <div className="flex items-center justify-between">
        <ClientName />
        <ClientRating />
      </div>

      <p className="w-full text-lg text-gray-700 pt-2">
        The artisan should have hands-on experience with hybrid solar systems
        and be able to recommend appropriate equipment specifications.
      </p>

      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <div className="flex items-center gap-1">
            <WalletCards size={16} />
            <p className="text-xs text-gray-700">₦500k Spent</p>
        </div>
        <div className="flex items-center gap-1">
            <SquarePercent size={16} />
            <p className="text-xs text-gray-700">100% Completion rate</p>
        </div>
        <div className="flex items-center gap-1">
            <MapPin size={16} />
            <p className="text-xs text-gray-700">Ikeja, Lagos</p>
        </div>
        <div className="flex items-center gap-1">
            <Clock size={16} />
            <p className="text-xs text-gray-700">Urgent</p>
        </div>
      </div>
    </div>
  );
};
