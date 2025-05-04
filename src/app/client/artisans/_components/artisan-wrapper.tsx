import { Button } from '@/components/ui/button';
import React from 'react';
import { artisans } from '@/mock/artisan.mock';
import Image from 'next/image';
import { ArtisanStatusBadge } from './artisan-status-badge';

const ArtisanWrapper = () => {
  return (
    <div className="w-full mt-6 mb-16 md:mb-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold text-black">
          Artisans
        </h3>

        <Button className="w-[208px]">Post a Job</Button>
      </div>

      <div className="w-full h-[calc(100vh_-_21.5rem)] md:h-[calc(100vh_-_16rem)] overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="static md:fixed h-[100dvh] w-full md:w-[321px]"></div>

          <div className="ml-[calc(100vh_ - _321px)] grid grid-cols-1 md:grid-cols-2 gap-4">
            {artisans.map((artisan, index) => (
              <div
                key={index}
                className="w-full border border-border rounded-xl p-6 h-[275px] flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <Image
                      src="/icons/artisan.svg"
                      width={51}
                      height={51}
                      alt="user"
                    />

                    <div className="flex w-full justify-between">
                      <div>
                        <div className="flex gap-1">
                          <p className="text-lg font-bold">
                            {artisan.first_name} {artisan.last_name} {'  '}{' '}
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

                  <p>{artisan.bio}</p>

                  
                </div>

                <div className="flex gap-3.5">
                  <Button variant="outline">View Profile details</Button>

                  <Button>Send Job request</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanWrapper;
