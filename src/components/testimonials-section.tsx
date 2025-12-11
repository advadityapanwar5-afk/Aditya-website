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
    name: 'John D.',
    caseType: 'Civil Litigation Client',
    quote:
      "I was in a tough spot, and I couldn't have asked for a better advocate. Their professionalism, dedication, and strategic approach were instrumental in winning my case. I'm forever grateful for the outstanding legal support.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah L.',
    caseType: 'Real Estate Client',
    quote:
      "The real estate transaction was complex, but they made it seamless. Their attention to detail and clear communication gave me peace of mind throughout the entire process. Highly recommended for any property matters.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael B.',
    caseType: 'Corporate Law Client',
    quote:
      'As a startup founder, navigating corporate law was daunting. I received expert guidance that was crucial for my business. The advice was not only legally sound but also practical and tailored to my company\'s needs.',
    rating: 5,
  },
   {
    id: 4,
    name: 'Emily R.',
    caseType: 'Family Law Client',
    quote:
      'Going through a difficult family matter, I needed someone compassionate yet firm. I found that perfect balance here. I was supported and represented with both strength and sensitivity, leading to a fair resolution.',
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
