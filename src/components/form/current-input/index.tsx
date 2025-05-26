"use client"

import * as React from "react"
import CurrencyInputField from 'react-currency-input-field'
import { cn } from "@/lib/utils"

interface CurrencyInputProps {
  value: number | undefined
  onChange: (value: number) => void
  currency?: string
  disabled?: boolean
  className?: string
  placeholder?: string
  decimalScale?: number;
}

export function CurrencyInput({
  value,
  onChange,
  currency = "USD",
  disabled = false,
  className,
  placeholder = "0.00",
  decimalScale = 2,
  ...props
}: CurrencyInputProps & Omit<React.ComponentProps<typeof CurrencyInputField>, 'onChange' | 'value'>) {
  // Handle value changes from the library
  const handleValueChange = (value: string | undefined) => {
    onChange(value ? parseFloat(value) : 0)
  }

  return (
    <div className="relative flex items-center">
      <CurrencyInputField
        value={value?.toString()}
        onValueChange={handleValueChange}
        prefix={currency === "USD" ? "$ " : currency === "GBP" ? "£ " : ""}
        decimalsLimit={decimalScale}
        decimalScale={decimalScale}
        disabled={disabled}
        placeholder={placeholder}
        className={cn("p-2 w-full h-12 border rounded-md outline-black outline-[0.5px] bg-background disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-none", className)}
        {...props}
      />
    </div>
  )
} 