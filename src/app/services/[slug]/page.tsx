'use client';

import { services } from '@/lib/services-data';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ArrowLeft } from 'lucide-react';

// generateStaticParams is not needed for client components with dynamic routes in this manner.
// If you need to pre-render these pages at build time, this would need to be a separate component.
// export async function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-card">
      <Header />
      <main className="flex-1">
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Button variant="outline" onClick={() => router.back()} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>

              <div className="mb-12 text-center">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-xl text-muted-foreground text-balance">
                  {service.details.heading}
                </p>
              </div>

              <Card className="bg-background border-border/50 shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-8">
                  {service.details.sections.map((section, index) => (
                    <div key={index}>
                      <h2 className="font-headline text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                  <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20">
                    <Link href="/#contact">Schedule a Consultation</Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
