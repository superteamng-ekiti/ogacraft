import { Button } from "@/components/ui/button";
import { FormCategorySelector } from "@/components/ui/category-selector";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Select imports removed as they're now used in the CurrencyInput component
import { DatePicker } from "@/components/ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MinimalTiptapEditor from "@/components/minimal-tiptap";
import { MultiUploadForm } from "@/components/upload/multi-upload";
import LocationSelector from "@/components/form/location-selector";
import { useCreateJob } from "@/hooks/services/create-job";
import { getUnixTime } from "date-fns";
import { useUser } from "@/context/user.context";
import { toast } from "sonner";
import { CurrencyInput } from "@/components/form/current-input";

const formSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must be at least 4 characters long" }),
  description: z.string(),
  budget: z.string().min(1, { message: "Enter budget" }),
  currency: z.string().min(1, { message: "Select a currency" }),
  deadline: z.date({ message: "Select a deadline" }),
  location: z.string().min(1, { message: "Enter location" }),
  category: z.string().min(1, { message: "Select a category" }),
  images: z
    .array(
      z.union([
        z.string(),
        z.object({
          imageUrl: z.string(),
        }),
      ])
    )
    .optional(),
});

interface CreateJobPostProps {
  artisan_id?: string;
}

const CreateJobPost = ({ artisan_id }: CreateJobPostProps) => {
  const { mutate, status } = useCreateJob();
  const imageUploadRef = useRef<(() => Promise<string[]>) | null>(null);

  const { user } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      budget: "",
      description: "",
      currency: "usd",
      deadline: undefined,
      category: "",
      images: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // First upload any images if they exist
      let imageUrls: string[] = [];

      if (imageUploadRef.current) {
        // This will trigger the actual upload of the images
        imageUrls = await imageUploadRef.current();
      }

      const jobData = {
        title: values.title,
        description: values.description,
        categories: values.category,
        location: values.location,
        deadline: getUnixTime(values.deadline),
        budget: values.budget,
        images: imageUrls,
        artisan_id,
        client: user?._id,
        email: user?.email,
      };

      if (artisan_id) {
        jobData.artisan_id = artisan_id;
      }

      mutate(jobData, {
        onSuccess: () => {
          toast.success("Job created successfully");
          form.reset();
        },
        onError: (error: unknown) => {
          // Type guard for error objects
          const e = error as Error & {
            response?: {
              data?: {
                message?: string;
              };
            };
          };
          // Try to extract error message from the API response
          const errorMessage =
            e?.response?.data?.message || e?.message || "Failed to create job";
          toast.error(errorMessage);
        },
      });
    } catch (error) {
      // Type guard for error objects
      const e = error as Error & {
        response?: {
          data?: {
            message?: string;
          };
        };
      };
      // Try to extract error message from the API response
      const errorMessage =
        e?.response?.data?.message || e?.message || "Failed to create job";
      toast.error(errorMessage);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[208px]">{artisan_id ? "Send Job Request" : "Post a Job"}</Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto max-h-[90vh] p-3 sm:p-6 w-[min(calc(100%-1rem),95vw)] max-w-full sm:max-w-lg">
        <DialogHeader className="font-bold">
          {artisan_id ? "Send Job Request" : "Post a Job"}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
            <div>
              <div className="w-full flex flex-col gap-4">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter title"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget</FormLabel>

                          <CurrencyInput
                            value={Number(field.value)}
                            onChange={(value) =>
                              field.onChange(value.toString())
                            }
                            currency={"NGN"}
                            placeholder="Enter amount"
                          />

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="deadline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Deadline</FormLabel>
                          <FormControl>
                            <DatePicker field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full">
                    <LocationSelector
                      control={form.control}
                      name="location"
                      label="Location"
                      placeholder="Enter your street address"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <FormCategorySelector
                      control={form.control}
                      name="category"
                      label="Job Category"
                      placeholder="Select Job Category"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <MinimalTiptapEditor
                            {...field}
                            className="w-full"
                            editorContentClassName="p-5"
                            output="html"
                            placeholder="Enter your description..."
                            autofocus={true}
                            editable={true}
                            editorClassName="focus:outline-hidden"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <MultiUploadForm
                            title="Images (Optional)"
                            maxFiles={4}
                            maxSizeMB={20}
                            uploadRef={imageUploadRef}
                            onComplete={(urls) => field.onChange(urls)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="mt-6 flex-col sm:flex-row gap-3 w-full">
              <Button
                variant="outline"
                className="w-full sm:w-1/2"
                type="button"
                onClick={() => form.reset()}
              >
                Cancel
              </Button>
              <Button
                className="w-full sm:w-1/2"
                type="submit"
                disabled={status === "pending" || !form.formState.isValid}
              >
                {status === "pending" ? "Sending..." : "Send Job Request"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobPost;
