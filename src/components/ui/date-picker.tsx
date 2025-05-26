import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FormControl } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form"
import "react-day-picker/dist/style.css"

interface DatePickerProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>
  placeholder?: string
  className?: string
  disabled?: (date: Date) => boolean
}

export function DatePicker<T extends FieldValues>({ 
  field, 
  placeholder = "Pick a date",
  className,
  disabled
}: DatePickerProps<T>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "w-full pl-3 text-left font-normal",
              !field.value && "text-muted-foreground",
              className
            )}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>{placeholder}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          disabled={disabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
} 