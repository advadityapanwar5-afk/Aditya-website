import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Star } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto fade-in-up group">
            <Image
                src="/images/about-portrait.jpg"
                alt="Portrait of a confident legal professional"
                data-ai-hint="lawyer portrait"
                fill
                className="rounded-xl object-cover shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:scale-105"
              />
             <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-background p-4 rounded-xl shadow-lg border border-border/50 fade-in-up delay-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="bg-primary/10 p-2 sm:p-4 rounded-full border border-primary/20">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl sm:text-3xl text-primary">100+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Cases Successfully Resolved</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="fade-in-up delay-1 text-center md:text-left">
            <Badge variant="outline" className="mb-2">About Me</Badge>
            <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">
              Dedicated to Justice, Committed to You
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
              I believe in a client-first approach, combining deep legal expertise with a commitment to clear communication and transparent processes. My practice is built on a foundation of integrity, diligence, and a relentless pursuit of the best possible outcomes for my clients.
            </p>
            <div className="mt-8 space-y-4">
              {/* Item 1 */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Star className="h-5 w-5 text-primary " />
                </div>
                <p className="text-muted-foreground"><strong className="text-foreground">Certified Legal Expert:</strong> I am a highly qualified and decorated legal professional.</p>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground"><strong className="text-foreground">Proven Track Record:</strong> A history of successful case resolutions and satisfied clients.</p>
              </div>

              {/* Item 3 (New) */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground"><strong className="text-foreground">Transparent Communication:</strong> I ensure you are informed and confident at every stage.</p>
              </div>

              {/* Item 4 (New) */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground"><strong className="text-foreground">Ethical Standards:</strong> Upholding the highest levels of integrity and professionalism.</p>
              </div>
            </div>
            <div className="mt-10">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
