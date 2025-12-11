'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full rounded-full" size="lg">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, { message: '', errors: {}, success: false });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  
  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        reset();
      }
    }
  }, [state, toast, reset]);
  
  const formErrors = state?.errors || {};

  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Contact Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            I'm here to help. Reach out for a consultation or inquiry.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Card className="p-6 md:p-8 bg-background border-border/50 fade-in-up">
            <CardContent className="p-0">
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Input id="name" type="text" placeholder="Full Name" {...register('name')} aria-invalid={!!errors.name || !!formErrors?.name} className="h-12" />
                  {(errors.name || formErrors?.name) && <p className="text-sm text-destructive">{errors.name?.message || formErrors?.name?.[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Input id="email" type="email" placeholder="Email Address" {...register('email')} aria-invalid={!!errors.email || !!formErrors?.email} className="h-12"/>
                  {(errors.email || formErrors?.email) && <p className="text-sm text-destructive">{errors.email?.message || formErrors?.email?.[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Input id="phone" type="tel" placeholder="Phone Number (Optional)" {...register('phone')} className="h-12"/>
                </div>
                <div className="space-y-2">
                  <Textarea id="message" placeholder="Your Message" rows={5} {...register('message')} aria-invalid={!!errors.message || !!formErrors?.message} />
                  {(errors.message || formErrors?.message) && <p className="text-sm text-destructive">{errors.message?.message || formErrors?.message?.[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 fade-in-up delay-1 text-center sm:text-left">
            <div className="flex gap-4 items-start flex-col sm:flex-row items-center sm:items-start">
              <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Chamber Address</h3>
                <p className="text-muted-foreground">270 Lawyers Chamber, Delhi high court of India</p>
              </div>
              <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Office Address</h3>
                <p className="text-muted-foreground">Q-1A, LGF, Jangpura Extension New Delhi-110014</p>
              </div>
              <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Residential Address</h3>
                <p className="text-muted-foreground">C-142, Chhattarpur Enclave Phase-II, New Delhi-110074</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start flex-col sm:flex-row items-center sm:items-start">
              <Phone className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91 9045404468</p>
              </div>
            </div>
            <div className="flex gap-4 items-start flex-col sm:flex-row items-center sm:items-start">
              <Mail className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg font-headline text-foreground">Email</h3>
                <p className="text-muted-foreground">advadityapanwar5@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start flex-col sm:flex-row items-center sm:items-start">
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
