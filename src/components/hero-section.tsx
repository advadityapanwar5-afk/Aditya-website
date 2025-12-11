'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const images = [
  {
    src: '/images/hero-main2.png',
    alt: 'Lady Justice statue in dramatic lighting',
  },
  {
    src: '/images/hero-main3.png',
    alt: 'A modern courthouse exterior',
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden p-0">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            data-ai-hint="justice law"
            fill
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            priority={index === 0}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-full">
           
          </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent max-md:bg-gradient-to-t max-md:from-background max-md:to-transparent" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-start container mx-auto px-4 md:px-6">
        <div className="max-w-2xl text-left md:text-left">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-7xl text-balance">
            Expert Legal Guidance You Can Trust
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 text-balance">
            Professional legal services with clarity, integrity, and proven results.
          </p>
          <div className="mt-10 flex items-center gap-x-4 md:gap-x-6">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 text-base md:text-lg py-6 px-8 md:py-7 md:px-10">
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
