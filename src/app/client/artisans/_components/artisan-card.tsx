import Image from 'next/image';
import React from 'react';
import { ArtisanStatusBadge } from './artisan-status-badge';
import { Artisan } from '@/mock/artisan.mock';
import { Button } from '@/components/ui/button';

const ArtisanCard = ({ artisan }: { artisan: Artisan }) => {
  return (
    <div className="w-full border border-border rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Image src="/icons/artisan.svg" width={51} height={51} alt="user" />

          <div className="flex w-full justify-between">
            <div>
              <div className="flex gap-1">
                <p className="text-lg font-bold">
                  {artisan.first_name} {artisan.last_name}
                </p>
                {artisan.verified && (
                  <Image
                    src="/icons/verified.svg"
                    alt="verified"
                    width={12}
                    height={12}
                  />
                )}
              </div>

              <p className="text-sm">{artisan.job}</p>
            </div>

            <div>
              <ArtisanStatusBadge status={artisan.status} />

              <div className="flex gap-1 justify-end items-center">
                <Image
                  width={10}
                  height={10}
                  src="/icons/star-filled.svg"
                  alt="star-filled"
                />
                <span className="text-xs">{artisan.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="line-clamp-2 overflow-hidden text-ellipsis">
          {artisan.bio}
        </p>

        <div className="flex gap-3">
          <div className="flex gap-2">
            <Image
              src="/icons/location.svg"
              width={14}
              height={14}
              alt="location"
            />
            <p className="text-sm">
              {artisan.lga}, {artisan.state}
            </p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/icons/diamond.svg"
              width={14}
              height={14}
              alt="location"
            />
            <p className="text-sm">{artisan.level}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex gap-2">
            <Image src="/icons/jobs.svg" width={14} height={14} alt="jobs" />
            <p className="text-sm">{artisan.jobs_completed} Jobs Completed</p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/icons/new-job.svg"
              width={14}
              height={14}
              alt="new-job"
            />
            <p className="text-sm">{artisan.active_job} Jobs Ongoing</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3.5 md:flex-wrap">
        <Button variant="outline" className="w-1/2 md:w-auto">
          View Profile details
        </Button>

        <Button className="w-1/2 md:w-auto">Send Job request</Button>
      </div>
    </div>
  );
};

export default ArtisanCard;
