import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { User } from '@/types/user';
import CreateJobPost from './create-job-post';

const ArtisanCard = ({ artisan }: { artisan: User }) => {
  return (
    <div className="w-full flex-shrink-0 border border-border rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Image src={artisan?.profile_picture || "/icons/artisan.svg"} width={51} height={51} alt="user" />

          <div className="flex w-full justify-between">
            <div>
              <div className="flex gap-1">
                <p className="text-lg font-bold truncate">
                  {artisan.first_name} {artisan.last_name}
                </p>
                {/* {artisan.verified && (
                  <Image
                    src="/icons/verified.svg"
                    alt="verified"
                    width={12}
                    height={12}
                  />
                )} */}
              </div>

              <p className="text-sm">{artisan?.categories?.length ? artisan?.categories[0] : '-'}</p>
            </div>

            <div className='flex flex-col items-end'>
              {/* <ArtisanStatusBadge status={artisan.status} /> */}

              <div className="flex gap-1 justify-end items-center">
                <Image
                  width={10}
                  height={10}
                  src="/icons/star-filled.svg"
                  alt="star-filled"
                />
                <span className="text-xs">{artisan?.averageRating || 0}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="line-clamp-2 overflow-hidden text-ellipsis">
          {artisan?.profile_description || '-'}
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
              {artisan?.location || '-'}
            </p>
          </div>

          {/* <div className="flex gap-2">
            <Image
              src="/icons/diamond.svg"
              width={14}
              height={14}
              alt="location"
            />
            <p className="text-sm">{artisan.level}</p>
          </div> */}
        </div>

        <div className="flex gap-3">
          <div className="flex gap-2">
            <Image src="/icons/jobs.svg" width={14} height={14} alt="jobs" />
            <p className="text-sm">{artisan.projects?.length || 0} Jobs Completed</p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/icons/new-job.svg"
              width={14}
              height={14}
              alt="new-job"
            />
            <p className="text-sm">{artisan.projects?.length || 0} Jobs Ongoing</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <Button variant="outline" className="">
          View Profile details
        </Button>

        <CreateJobPost artisan_id={artisan._id} />
      </div>
    </div>
  );
};

export default ArtisanCard;
