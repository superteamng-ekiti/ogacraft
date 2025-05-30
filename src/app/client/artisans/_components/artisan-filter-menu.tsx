"use client";
import { useState } from "react";
import { useQueryParams } from "@/hooks/services/useQueryParams";
import { Search, Filter } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

// Filter data from artisan-sidebar
const locationData = [
  {
    title: "Near me",
    value: "near-me",
  },
  {
    title: "Nationwide",
    value: "nationwide",
  },
  {
    title: "Available remotely",
    value: "available-remotely",
  },
  {
    title: "Others",
    value: "others",
  },
];

const artisanLevel = [
  {
    title: "New",
    value: "new",
  },
  {
    title: "Verified",
    value: "verified",
  },
  {
    title: "Top Rated",
    value: "top-rated",
  },
];

const availabilityData = [
  {
    title: "Online Now",
    value: "online-now",
  },
  {
    title: "Available this week",
    value: "available-this-week",
  },
  {
    title: "Booked out",
    value: "booked-out",
  },
];

const experienceLevel = [
  {
    title: "1-3 years",
    value: 4,
  },
  {
    title: "3-5 years",
    value: 6,
  },
  {
    title: "5+ years",
    value: 10,
  },
  {
    title: "10+ years",
    value: 12,
  },
];

interface TempFilters {
  query: string;
  location: string | null;
  rating: string;
  artisanLevel: string | null;
  availability: string | null;
  experience: string | null;
}

export const ArtisanFilterMenu = () => {
  const { getParam, setParam } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState<TempFilters>(() => ({
    query: getParam("query") || "",
    location: getParam("location") || null,
    rating: getParam("rating") || "",
    artisanLevel: getParam("artisan-level") || null,
    availability: getParam("availability") || null,
    experience: getParam("experience") || null,
  }));

  // Count active filters
  const activeFilterCount = Object.values(tempFilters).filter(
    (value) => value !== null && value !== ""
  ).length;

  const handleApplyFilters = () => {
    // Update URL params
    setParam("query", tempFilters.query || null);
    setParam("location", tempFilters.location);
    setParam("rating", tempFilters.rating || null);
    setParam("artisan-level", tempFilters.artisanLevel);
    setParam("availability", tempFilters.availability);
    setParam("experience", tempFilters.experience);

    // Emit filter change event
    const event = new CustomEvent('artisanFiltersChanged', {
      detail: {
        location: tempFilters.location,
        categories: tempFilters.query,
        min_rating: tempFilters.rating,
        min_experience: tempFilters.experience?.toString()
      }
    });
    window.dispatchEvent(event);
    
    setIsOpen(false);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      query: "",
      location: null,
      rating: "",
      artisanLevel: null,
      availability: null,
      experience: null,
    };
    setTempFilters(resetFilters);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={16} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between p-4">
          <DropdownMenuLabel className="p-0">Filters</DropdownMenuLabel>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-destructive hover:text-destructive"
              onClick={handleResetFilters}
            >
              Reset
            </Button>
            <Button size="sm" className="h-8" onClick={handleApplyFilters}>
              Apply
            </Button>
          </div>
        </div>
        <DropdownMenuSeparator />

        {/* Skill Category Search */}
        <div className="px-4 py-2">
          <p className="text-xs mb-1">Skill Category</p>
          <div className="border border-border p-2 gap-3 rounded-lg flex items-center">
            <Search color="#1A1A1A" size={16} />
            <Input
              type="text"
              className="border-none h-7 p-0 focus-visible:ring-0"
              placeholder="Search for artisans"
              value={tempFilters.query}
              onChange={(e) =>
                setTempFilters((prev) => ({ ...prev, query: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Location */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-1.5">
            <div className="flex items-center justify-between w-full">
              <span>Location</span>
              {tempFilters.location && (
                <Badge variant="secondary" className="ml-2">
                  {
                    locationData.find((l) => l.value === tempFilters.location)
                      ?.title
                  }
                </Badge>
              )}
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            {locationData.map((location) => {
              const isSelected = tempFilters.location === location.value;
              return (
                <DropdownMenuItem
                  key={location.value}
                  className={isSelected ? "bg-primary/10" : ""}
                  onSelect={(e) => {
                    e.preventDefault();
                    setTempFilters((prev) => ({
                      ...prev,
                      location: isSelected ? null : location.value,
                    }));
                  }}
                >
                  <span>{location.title}</span>
                  {isSelected && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Customer Review */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-1.5">
            <div className="flex items-center justify-between w-full">
              <span>Customer Review</span>
              {tempFilters.rating && (
                <Badge variant="secondary" className="ml-2">
                  {tempFilters.rating}★ & up
                </Badge>
              )}
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            <div className="px-2 py-1">
              <RadioGroup
                value={tempFilters.rating}
                onValueChange={(value) =>
                  setTempFilters((prev) => ({ ...prev, rating: value }))
                }
              >
                {["4", "3", "2", "1"].map((val) => (
                  <div
                    key={val}
                    className="flex items-center justify-between py-1"
                  >
                    <Label
                      htmlFor={`rating-${val}`}
                      className="flex items-center gap-1 cursor-pointer"
                    >
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
                      <span>& Up</span>
                    </Label>
                    <RadioGroupItem id={`rating-${val}`} value={val} />
                  </div>
                ))}
              </RadioGroup>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Artisan Level */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-1.5">
            <div className="flex items-center justify-between w-full">
              <span>Artisan Level</span>
              {tempFilters.artisanLevel && (
                <Badge variant="secondary" className="ml-2">
                  {
                    artisanLevel.find(
                      (a) => a.value === tempFilters.artisanLevel
                    )?.title
                  }
                </Badge>
              )}
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            {artisanLevel.map((artisan) => {
              const isSelected = tempFilters.artisanLevel === artisan.value;
              return (
                <DropdownMenuItem
                  key={artisan.value}
                  className={isSelected ? "bg-primary/10" : ""}
                  onSelect={(e) => {
                    e.preventDefault();
                    setTempFilters((prev) => ({
                      ...prev,
                      artisanLevel: isSelected ? null : artisan.value,
                    }));
                  }}
                >
                  <span>{artisan.title}</span>
                  {isSelected && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Availability */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-1.5">
            <div className="flex items-center justify-between w-full">
              <span>Availability</span>
              {tempFilters.availability && (
                <Badge variant="secondary" className="ml-2">
                  {
                    availabilityData.find(
                      (a) => a.value === tempFilters.availability
                    )?.title
                  }
                </Badge>
              )}
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            {availabilityData.map((availability) => {
              const isSelected =
                tempFilters.availability === availability.value;
              return (
                <DropdownMenuItem
                  key={availability.value}
                  className={isSelected ? "bg-primary/10" : ""}
                  onSelect={(e) => {
                    e.preventDefault();
                    setTempFilters((prev) => ({
                      ...prev,
                      availability: isSelected ? null : availability.value,
                    }));
                  }}
                >
                  <span>{availability.title}</span>
                  {isSelected && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Experience Level */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-1.5">
            <div className="flex items-center justify-between w-full">
              <span>Experience Level</span>
              {tempFilters.experience && (
                <Badge variant="secondary" className="ml-2">
                  {
                    experienceLevel.find(
                      (e) => e.value.toString() === tempFilters.experience
                    )?.title
                  }
                </Badge>
              )}
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            {experienceLevel.map((experience) => {
              const isSelected =
                tempFilters.experience === experience.value.toString();
              return (
                <DropdownMenuItem
                  key={experience.value}
                  className={isSelected ? "bg-primary/10" : ""}
                  onSelect={(e) => {
                    e.preventDefault();
                    setTempFilters((prev) => ({
                      ...prev,
                      experience: isSelected
                        ? null
                        : experience.value.toString(),
                    }));
                  }}
                >
                  <span>{experience.title}</span>
                  {isSelected && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
