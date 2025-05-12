import React, { useState } from 'react';
import { useQueryParams } from '@/hooks/services/useQueryParams';
import { Search } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
    value: 12,
  },
];

const ArtisanSidebar = () => {
  const { getParam, setParam } = useQueryParams();
  const [rating, setRating] = useState(getParam('rating') || '');
  return (
    <div className="relative w-full md:w-[321px]">
      <div className="static md:sticky md:top-[0px] h-full flex flex-col gap-4 w-full md:w-[240px] px-2 md:overflow-y-auto">
        <h6 className="font-bold">Filters</h6>

        <div className="flex flex-col gap-2">
          <p className="text-xs">Skill Category</p>
          <div className="border border-border p-2 gap-3 rounded-lg flex items-center">
            <div className="w-[30px]">
              <Search color="#1A1A1A" size={16} />
            </div>
            <input
              type="text"
              className="border-none outline-none"
              placeholder="Search for artisans"
              onChange={(e) => setParam('query', e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs">Location</p>

          <div className="flex flex-wrap gap-2">
            {locationData.map((location) => {
              const isSelected = getParam('location') === location.value;
              return (
                <Button
                  className={`text-sm font-normal ${
                    isSelected
                      ? 'bg-primary text-white hover:bg-primary hover:text-white'
                      : 'text-black'
                  }`}
                  key={location.value}
                  onClick={() =>
                    setParam('location', isSelected ? null : location.value)
                  }
                  variant="outline"
                >
                  {location.title}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs">Customer Review</p>

          <div>
            <RadioGroup value={rating} onValueChange={() => {}}>
              {['4', '3', '2', '1'].map((val) => (
                <div key={val} className="flex items-center justify-between">
                  <Label htmlFor={`rating-${val}`}>
                    <div className="flex gap-1">
                      {Array.from({ length: Number(val) }, (_, i) => (
                        <Image
                          key={i}
                          src="/icons/star-filled.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                      ))}
                      {Array.from({ length: 5 - Number(val) }, (_, i) => (
                        <Image
                          key={i}
                          src="/icons/star.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                      ))}
                      & Up
                    </div>
                  </Label>

                  <RadioGroupItem
                    id={`rating-${val}`}
                    value={val}
                    onClick={() => {
                      const newValue = rating === val ? '' : val;
                      setRating(newValue);
                      setParam('rating', newValue || null);
                    }}
                  />
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs">Artisan Level</p>

          <div className="flex flex-wrap gap-2">
            {artisanLevel.map((artisan) => {
              const isSelected = getParam('artisan-level') === artisan.value;
              return (
                <Button
                  className={`text-sm font-normal ${
                    isSelected
                      ? 'bg-primary text-white hover:bg-primary hover:text-white'
                      : 'text-black'
                  }`}
                  key={artisan.value}
                  onClick={() =>
                    setParam('artisan-level', isSelected ? null : artisan.value)
                  }
                  variant="outline"
                >
                  {artisan.title}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs">Availability</p>

          <div className="flex flex-wrap gap-2">
            {availabilityData.map((availability) => {
              const isSelected =
                getParam('availability') === availability.value;
              return (
                <Button
                  className={`text-sm font-normal ${
                    isSelected
                      ? 'bg-primary text-white hover:bg-primary hover:text-white'
                      : 'text-black'
                  }`}
                  key={availability.value}
                  onClick={() =>
                    setParam(
                      'availability',
                      isSelected ? null : availability.value
                    )
                  }
                  variant="outline"
                >
                  {availability.title}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs">Experience Level</p>

          <div className="flex flex-wrap gap-2">
            {experienceLevel.map((experience) => {
              const isSelected =
                getParam('experience-level') === experience.value.toString();
              return (
                <Button
                  className={`text-sm font-normal ${
                    isSelected
                      ? 'bg-primary text-white hover:bg-primary hover:text-white'
                      : 'text-black'
                  }`}
                  key={experience.value}
                  onClick={() =>
                    setParam(
                      'experience-level',
                      isSelected ? null : experience.value.toString()
                    )
                  }
                  variant="outline"
                >
                  {experience.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSidebar;
