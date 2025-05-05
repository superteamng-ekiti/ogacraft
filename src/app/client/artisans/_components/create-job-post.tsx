import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(4, { message: 'Title must be at least 4 characters long' }),
  budget: z.string().min(1, { message: 'Enter budget' }),
  currency: z.string().min(1, { message: 'Select a currency' }),
  deadline: z.string().min(1, { message: 'Select a deadline' }),
});

const CreateJobPost = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      budget: '',
      currency: 'usd',
      deadline: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try { 
      console.log(values)

    } catch (error: any) {
      form.reset();
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[208px]">Post a Job</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="font-bold">
          Create Job Request Post
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

                <div>
                  <div className="w-full md:w-1/2">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget</FormLabel>

                          <div className="flex gap-1 border border-border rounded-lg">
                            <Input
                              className="w-[62%] border-0 outline-0 focus-visible:ring-0"
                              {...field}
                              placeholder="Enter amount"
                            />

                            <FormField
                              control={form.control}
                              name="currency"
                              render={({ field: currencyField }) => (
                                <Select
                                  onValueChange={currencyField.onChange}
                                  defaultValue={currencyField.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="w-[38%] border-0 bg-transparent">
                                      <SelectValue placeholder="Currency" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="usdt">USDT</SelectItem>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                          </div>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="mt-8">
              <Button variant="outline" className="w-1/2" type="submit">
                Cancel
              </Button>
              <Button className="w-1/2" type="submit">
                Send Job Request
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateJobPost