"use client";

import React, { useState, useEffect } from "react";
import { STATE_TO_LGA } from "./location-data";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

type LocationSelectorProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

const LocationSelector = <T extends FieldValues>({
  control,
  name,
  label = "Location",
  placeholder = "Enter your address",
  required = false,
  disabled = false,
  className = "",
}: LocationSelectorProps<T>) => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [availableLGAs, setAvailableLGAs] = useState<string[]>([]);

  // Get all states from the data
  const states = Object.keys(STATE_TO_LGA).sort();

  // Update LGAs when state changes
  useEffect(() => {
    if (selectedState && selectedState in STATE_TO_LGA) {
      // Type assertion to tell TypeScript this is a valid key
      const state = selectedState as keyof typeof STATE_TO_LGA;
      setAvailableLGAs([...STATE_TO_LGA[state]].sort());
      setSelectedLGA(""); // Reset LGA when state changes
    } else {
      setAvailableLGAs([]);
    }
  }, [selectedState]);

  // Update the combined location value whenever any component changes
  const updateLocationValue = (formChange: (value: string) => void) => {
    const parts = [];

    if (address) parts.push(address);
    if (selectedLGA) parts.push(selectedLGA);
    if (selectedState) parts.push(selectedState);
    if (selectedState) parts.push("Nigeria");

    const locationString = parts.join(", ");
    formChange(locationString);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="space-y-2">
            {label && (
              <FormLabel>
                {label}
                {required && <span className="text-destructive">*</span>}
              </FormLabel>
            )}

            <div className="w-full flex flex-col gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* State Selection */}
                <div className="w-full">
                  <FormLabel className="text-sm font-normal">State</FormLabel>
                  <Select
                    disabled={disabled}
                    onValueChange={(value) => {
                      setSelectedState(value);
                      updateLocationValue(field.onChange);
                    }}
                    value={selectedState}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* LGA Selection */}
                <div className="w-full">
                  <FormLabel className="text-sm font-normal">
                    Local Government
                  </FormLabel>
                  <Select
                    disabled={disabled || !selectedState}
                    onValueChange={(value) => {
                      setSelectedLGA(value);
                      updateLocationValue(field.onChange);
                    }}
                    value={selectedLGA}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={
                            selectedState ? "Select LGA" : "Select State first"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {availableLGAs.map((lga) => (
                        <SelectItem key={lga} value={lga}>
                          {lga}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Address Input */}
              <div className="w-full">
                <FormLabel className="text-sm font-normal">
                  Street Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={placeholder}
                    disabled={disabled}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      updateLocationValue(field.onChange);
                    }}
                    className="bg-transparent"
                  />
                </FormControl>
              </div>

              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default LocationSelector;
