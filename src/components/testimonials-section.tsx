import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  name: string;
  caseType: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh K.',
    caseType: 'Civil Litigation Client',
    quote:
      "I was going through a very difficult situation and honestly felt stuck. From day one, the team guided me properly and stood by me at every step. Their knowledge, dedication, and clear strategy helped me win the case. I am truly thankful for their support.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Anita S.',
    caseType: 'Real Estate Client',
    quote:
      "Buying property can be stressful, especially with all the legal formalities. They handled everything smoothly and explained each detail in simple terms. I felt confident and stress-free throughout the process. Highly recommended for property-related matters.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram M.',
    caseType: 'Corporate Law Client',
    quote:
      "As a startup founder, legal compliance was confusing for me. I received excellent guidance that was both practical and business-friendly. Their advice helped me make the right decisions at the right time. A reliable legal partner for any growing business.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Pooja R.',
    caseType: 'Family Law Client',
    quote:
      "During a very sensitive family issue, I needed someone who could understand my situation and still be strong legally. I found exactly that here. They handled my case with care, patience, and professionalism, which led to a fair and positive outcome.",
    rating: 5,
  },
];


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center fade-in-up">
          <Badge variant="outline" className="mb-2">
            Client Stories
          </Badge>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">
            What My Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            I am proud to have earned the trust of my clients. Here's what some of them have to say about their experience.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto fade-in-up"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-card border-border/50 p-6 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-6 text-base">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.caseType}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px] max-lg:hidden" />
          <CarouselNext className="right-[-50px] max-lg:hidden"/>
        </Carousel>
      </div>
    </section>
  );
}
