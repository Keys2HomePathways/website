import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import type { InsertContactInquiry } from "@shared/routes";
import { useContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, User } from "lucide-react";

export default function Contact() {
  const mutation = useContact();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a question not answered in the FAQ? Send us a message.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input placeholder="John Doe" className="pl-10 h-12 bg-slate-50" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-foreground">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input placeholder="john@example.com" type="email" className="pl-10 h-12 bg-slate-50" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-foreground">Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="pl-10 min-h-[150px] bg-slate-50 pt-3" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold shadow-lg shadow-primary/25"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
                
                <FormDescription className="text-xs text-center pt-4 text-slate-400">
                  Note: This form is for general inquiries only. This is not an application.
                  <br />
                  <a 
                    href="https://link.apisystem.tech/widget/form/NuDLvjpzzljLuHBYhm0A" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    Click here to start the Quick Eligibility Check.
                  </a>
                </FormDescription>

              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
