"use client";

import { useMemo } from "react";
import { useGetCategories } from "@/hooks/services/categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface CategorySelectorProps {
  onValueChange: (value: string) => void;
  defaultValue?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  showLabel?: boolean;
  required?: boolean;
}

export function CategorySelector({
  onValueChange,
  defaultValue = "",
  name,
  label = "Skill Category",
  placeholder = "Select Skill Category",
  className = "",
  showLabel = true,
  required = false,
}: CategorySelectorProps) {
  const { isLoading, data } = useGetCategories();

  const categories = useMemo(() => {
    if (!data) return [];
    return data;
  }, [data]);

  return (
    <div className={className}>
      {showLabel && (
        <FormLabel htmlFor={name}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
      )}
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl className="w-full">
          <SelectTrigger className="w-full">
            <SelectValue className="capitalize" placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {isLoading ? (
            <SelectItem value="loading" disabled>
              Loading categories...
            </SelectItem>
          ) : categories.length === 0 ? (
            <SelectItem value="no-categories" disabled>
              No categories available
            </SelectItem>
          ) : (
            categories.map((category) => (
              <SelectItem className="capitalize" key={category} value={category}>
                {category.replaceAll("_", " ")}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
}

interface FormCategorySelectorProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export function FormCategorySelector<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label = "Skill Category",
  placeholder = "Select Skill Category",
  required = false,
}: FormCategorySelectorProps<TFieldValues, TName>) {
  const { isLoading, data } = useGetCategories();

  const categories = useMemo(() => {
    if (!data) return [];
    return data;
  }, [data]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="w-full">
              <SelectTrigger className="w-full">
                <SelectValue className="capitalize" placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {isLoading ? (
                <SelectItem value="loading" disabled>
                  Loading categories...
                </SelectItem>
              ) : categories.length === 0 ? (
                <SelectItem value="no-categories" disabled>
                  No categories available
                </SelectItem>
              ) : (
                categories.map((category) => (
                  <SelectItem className="capitalize" key={category} value={category}>
                    {category.replaceAll("_", " ")}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
