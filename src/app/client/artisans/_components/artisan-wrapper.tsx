'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { artisans } from '@/mock/artisan.mock';
import ArtisanCard from './artisan-card';
import { Search } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import CreateJobPost from './create-job-post';

const locationData = [
  {
    title: 'Near me',
    value: 'near-me',
  },
  {
    title: 'Nationwide',
    value: 'nationwide',
  },
  {
    title: 'Available remotely',
    value: 'available-remotely',
  },
  {
    title: 'Others',
    value: 'others',
  },
];

const artisanLevel = [
  {
    title: 'New',
    value: 'new',
  },
  {
    title: 'Verified',
    value: 'verified',
  },
  {
    title: 'Top Rated',
    value: 'top-rated',
  },
];

const availabilityData = [
  {
    title: 'Online Now',
    value: 'online-now',
  },
  {
    title: 'Available this week',
    value: 'available-this-week',
  },
  {
    title: 'Booked out',
    value: 'booked-out',
  },
];

const experienceLevel = [
  {
    title: '1-3 years',
    value: 4,
  },
  {
    title: '3-5 years',
    value: 6,
  },
  {
    title: '5+ years',
    value: 10,
  },
  {
    title: '10+ years',
    value: 100,
  },
];

const ArtisanWrapper = () => {
  const [query, setQuery] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [artisanValue, setArtisanValue] = useState('');
  const [availability, setAvailability] = useState('');
  const [rating, setRating] = useState(null);
  const [experienceValue, setExperienceValue] = useState<number | undefined>(
    undefined
  );

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
        <div className="flex flex-col md:flex-row gap-4 relative">
          <div className="relative w-full md:w-[321px]">
            <div className="static md:sticky md:top-[0px] h-full flex flex-col gap-4 w-full md:w-[321px] px-2 md:overflow-y-auto">
              <h6 className="font-bold">Filters</h6>

              <div className="flex flex-col gap-2">
                <p className="text-xs">Skill Category</p>
                <div className="border border-border p-2 gap-3 rounded-lg flex items-center">
                  <Search color="#1A1A1A" size={16} />
                  <input className="border-none outline-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xs">Location</p>

                <div className="flex flex-wrap gap-2">
                  {locationData.map((location) => (
                    <Button
                      className="text-sm font-normal"
                      key={location.value}
                      onClick={() => setLocationValue(location.value)}
                      variant="outline"
                    >
                      {location.title}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xs">Customer Review</p>

                <div>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="rating-4">
                        <div className="flex gap-1">
                          {Array.from({ length: 4 }, (_, index) => (
                            <Image
                              src="/icons/star-filled.svg"
                              alt="star"
                              key={index}
                              width={16}
                              height={16}
                            />
                          ))}
                          <Image
                            src="/icons/star.svg"
                            alt="star"
                            width={16}
                            height={16}
                          />{' '}
                          &amp; Up
                        </div>
                      </Label>
                      <RadioGroupItem value="4" id="rating-4" />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="rating-3">
                        <div className="flex gap-1">
                          {Array.from({ length: 3 }, (_, index) => (
                            <Image
                              src="/icons/star-filled.svg"
                              alt="star"
                              key={index}
                              width={16}
                              height={16}
                            />
                          ))}
                          {Array.from({ length: 2 }, (_, index) => (
                            <Image
                              key={index}
                              src="/icons/star.svg"
                              alt="star"
                              width={16}
                              height={16}
                            />
                          ))}
                          &amp; Up
                        </div>
                      </Label>
                      <RadioGroupItem value="3" id="rating-3" />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="rating-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 2 }, (_, index) => (
                            <Image
                              src="/icons/star-filled.svg"
                              alt="star"
                              key={index}
                              width={16}
                              height={16}
                            />
                          ))}
                          {Array.from({ length: 3 }, (_, index) => (
                            <Image
                              key={index}
                              src="/icons/star.svg"
                              alt="star"
                              width={16}
                              height={16}
                            />
                          ))}
                          &amp; Up
                        </div>
                      </Label>
                      <RadioGroupItem value="2" id="rating-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="rating-1">
                        <div className="flex gap-1">
                          <Image
                            src="/icons/star-filled.svg"
                            alt="star"
                            width={16}
                            height={16}
                          />
                          {Array.from({ length: 4 }, (_, index) => (
                            <Image
                              key={index}
                              src="/icons/star.svg"
                              alt="star"
                              width={16}
                              height={16}
                            />
                          ))}
                          &amp; Up
                        </div>
                      </Label>
                      <RadioGroupItem value="1" id="rating-1" />
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xs">Artisan Level</p>

                <div className="flex flex-wrap gap-2">
                  {artisanLevel.map((artisan) => (
                    <Button
                      className="text-sm font-normal"
                      key={artisan.value}
                      onClick={() => setArtisanValue(artisan.value)}
                      variant="outline"
                    >
                      {artisan.title}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs">Availability</p>

                <div className="flex flex-wrap gap-2">
                  {availabilityData.map((availability) => (
                    <Button
                      className="text-sm font-normal"
                      key={availability.value}
                      onClick={() => setAvailability(availability.value)}
                      variant="outline"
                    >
                      {availability.title}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs">Experience Level</p>

                <div className="flex flex-wrap gap-2">
                  {experienceLevel.map((experience) => (
                    <Button
                      className="text-sm font-normal"
                      key={experience.value}
                      onClick={() => setExperienceValue(experience.value)}
                      variant="outline"
                    >
                      {experience.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto overflow-y-auto">
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
