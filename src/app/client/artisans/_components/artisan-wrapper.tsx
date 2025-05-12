'use client';
import React from 'react';
import { artisans } from '@/mock/artisan.mock';
import ArtisanCard from './artisan-card';
import CreateJobPost from './create-job-post';
import ArtisanSidebar from './artisan-sidebar';


const ArtisanWrapper = () => {
  return (
    <div className="w-full mt-6 mb-16 md:mb-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold text-black">
          Artisans
        </h3>

        {/* <Button className="w-[208px]">Post a Job</Button> */}
        <CreateJobPost />
      </div>

      <div className="w-full h-[calc(100vh_-_21.5rem)] md:h-[calc(100vh_-_16rem)] mt-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-4 relative">
          <ArtisanSidebar />
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto overflow-y-auto">
            {artisans.map((artisan, index) => (
              <ArtisanCard key={index} artisan={artisan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// md:ml-[337px]
export default ArtisanWrapper;
