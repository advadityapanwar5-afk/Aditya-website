import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AppointmentSection() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'cta-banner-bg');

  return (
    <section className="relative overflow-hidden bg-card p-0">
      <div className="relative py-20 md:py-32">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            data-ai-hint={bgImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-brightness-50"></div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in-up">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
              Need an appointment for legal help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get professional assistance from an experienced advocate. Your initial consultation is the first step towards resolving your legal challenges.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg shadow-primary/20">
                <a href="#contact">Schedule a Meeting</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
