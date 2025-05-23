import { useUser } from "@/context/user.context";
import { useGetCategories } from "@/hooks/services/categories";
import { useUpdateUser } from "@/hooks/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import MultipleSelector from "@/components/ui/multi-selector";
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";

const formSchema = z.object({
  skills: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .min(1, "Please select at least one skill"),
});

export const UpdateSkill = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [],
    },
  });

  const { user, setUser } = useUser();

  const [open, setOpen] = useState(false);

  const { mutate, status } = useUpdateUser();

  const { data } = useGetCategories();

  const option = useMemo(() => {
    if (!data?.length) return [];

    return data.map((category) => ({
      value: category,
      label: category.replaceAll("_", " "),
    }));
  }, [data]);

  useEffect(() => {
    if (user?.categories) {
      const selectorValues = user?.categories?.map((category) => ({
        label: category,
        value: category,
      }));

      form.setValue("skills", selectorValues);
    }
  }, [form, user]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // console.log("categories", );
    const categories = values.skills.map((skill) => skill.value);
    const query = `categories=${categories.join(",")}`;

    mutate(
      {
        email: user?.email ?? "",
        queryParam: query,
      },
      {
        onSuccess: () => {
          setUser({
            ...user!,
            categories: categories,
          });

          toast("Skills updated successfully");

          form.reset();

          setOpen(false);
        },
      }
    );
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <PencilLine />
          <span className="hidden md:block">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <DialogHeader>
              <DialogTitle>Update Skills</DialogTitle>
              <DialogDescription>
                Showcase your strengths. Add skills to highlight what you’re
                great at.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* <FormLabel>Skills</FormLabel> */}
                    <FormControl>
                      <div className="w-full py-4">
                        <MultipleSelector
                          defaultOptions={option}
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                          placeholder="Select skills you like..."
                          emptyIndicator={
                            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                              no skill found.
                            </p>
                          }
                          maxSelected={5}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" disabled={status === "pending"}>
                {status === "pending" ? "Updating" : "Update Skills"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
