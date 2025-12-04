import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(20, { message: "Phone number is too long" }),
  organization: z.string().trim().min(2, { message: "Organization name is required" }).max(100, { message: "Organization name must be less than 100 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Default time set to 12:00 PM
  const defaultTime = "12:00";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your healthcare management? Contact us today for a personalized demo
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="section-seamless rounded-xl p-8 mb-8 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    id="company"
                    type="text" 
                    placeholder="Company Name" 
                    className="bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    id="date"
                    type="date" 
                    defaultValue={today}
                    className="bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    id="time"
                    type="time" 
                    defaultValue={defaultTime}
                    className="bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea 
                  id="message"
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-white/90 text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>
              <Button type="submit" size="lg" variant="secondary" className="text-lg px-10 w-full md:w-auto button-graident">
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
