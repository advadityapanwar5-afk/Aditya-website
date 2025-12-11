'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Create FormData for Web3Forms
      const formData = new FormData();
      formData.append("access_key", "95cf794d-5f95-4830-9cb2-3746ffdc0649");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      if (data.phone) formData.append("phone", data.phone);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
        reset(); // Clear form
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            I'm here to help. Reach out for a consultation or inquiry.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Card className="p-6 md:p-8 bg-background border-border/50 fade-in-up">
            <CardContent className="p-0">
              {/* Form submits via onSubmit handler now */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Hidden input for subject (Optional customization for Web3Forms) */}
                <input type="hidden" name="subject" value="New Contact Form Submission" />

                <div className="space-y-2">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                    className="h-12"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    className="h-12"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    {...register('phone')}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    {...register('message')}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 fade-in-up delay-1 text-center sm:text-left">
            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
              <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Chamber Address</h3>
                <p className="text-muted-foreground">270 Lawyers Chamber, Delhi high court of India</p>
              </div>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
              <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Office Address</h3>
                <p className="text-muted-foreground">Q-1A, LGF, Jangpura Extension New Delhi-110014</p>
              </div>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
              <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Residential Address</h3>
                <p className="text-muted-foreground">C-142, Chhattarpur Enclave Phase-II, New Delhi-110074</p>
              </div>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
              <Phone className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91 9045404468</p>
              </div>
            </div>
            
            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
              <Mail className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Email</h3>
                <p className="text-muted-foreground">advadityapanwar5@gmail.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
              <Clock className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Working Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Sat: 10:00 AM - 2:00 PM (By Appointment)</p>
                <p className="text-muted-foreground">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
