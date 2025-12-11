import { CheckCircle2, MessageSquare, Target, Users, Zap, Award } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Badge } from './ui/badge';

interface Feature {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'I keep you informed at every step, ensuring you understand all your options and the status of your case.',
  },
  {
    icon: Target,
    title: 'Strong Case Strategy',
    description: 'I develop tailored, data-driven strategies to build the strongest possible case for you.',
  },
  {
    icon: Users,
    title: 'Experienced Legal Team',
    description: 'Leverage my extensive experience as a seasoned advocate who is an expert in my respective fields.',
  },
  {
    icon: Award,
    title: 'High Success Rate',
    description: 'My track record speaks for itself, with a history of favorable outcomes and landmark victories.',
  },
  {
    icon: Zap,
    title: 'Client-Centered Approach',
    description: 'Your goals are my priority. I listen, I understand, and I fight for the results you deserve.',
  },
  {
    icon: CheckCircle2,
    title: 'Fast Response & Support',
    description: 'Receive prompt responses and dedicated support from me, ensuring your questions are never left unanswered.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center fade-in-up">
           <Badge variant="outline" className="mb-2">My Strengths</Badge>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Why Clients Choose Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            I am trusted by my clients for my unwavering commitment to excellence and results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col text-center sm:text-left sm:flex-row items-start gap-6 p-6 rounded-xl transition-all duration-300 hover:bg-card fade-in-up" style={{transitionDelay: `${index * 100}ms`}}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0 mx-auto sm:mx-0">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <div className='flex-1'>
                <h3 className="text-lg font-bold font-headline text-foreground">{feature.title}</h3>
                <p className="mt-1 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
