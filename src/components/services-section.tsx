import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { services } from '@/lib/services-data';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center fade-in-up">
          <Badge variant="outline" className="mb-2">My Services</Badge>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">What I Do</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            I offer a comprehensive suite of legal services to meet the diverse needs of my clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="fade-in-up" style={{transitionDelay: `${index * 100}ms`}}>
              <Link href={`/services/${service.slug}`} className="h-full block">
                <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card border-border/50 group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary">
                        <service.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
