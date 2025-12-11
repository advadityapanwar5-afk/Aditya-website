import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqItems = [
  {
    question: 'What types of cases do you handle?',
    answer:
      'I specialize in a wide range of legal areas, including civil litigation, criminal defense, real estate law, corporate law, family law, and contract law. I recommend scheduling a consultation to discuss the specifics of your case.',
  },
  {
    question: 'What are your fees?',
    answer:
      'My fee structure depends on the complexity of the case. I offer a free initial consultation to discuss your situation and provide a transparent overview of potential costs. I believe in fair and clear pricing with no hidden fees.',
  },
  {
    question: 'How do I schedule a consultation?',
    answer:
      'You can schedule a consultation by filling out the contact form on this website, calling my office at +91 9045404468, or sending me an email. I will get back to you promptly to arrange a convenient time.',
  },
  {
    question: 'What should I bring to my first consultation?',
    answer:
      'For our initial meeting, please bring all relevant documents, correspondence, and any other information related to your case. This will help me get a comprehensive understanding of your situation from the start.',
  },
  {
    question: 'How long will my case take?',
    answer:
      "The duration of a case can vary significantly depending on its complexity, the cooperation of the other party, and court schedules. I will provide you with a realistic timeline during our consultation and keep you updated on the progress.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center fade-in-up">
          <Badge variant="outline" className="mb-2">
            Common Questions
          </Badge>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Here are some answers to common questions I receive. If you don't find what you're looking for, please feel free to reach out.
          </p>
        </div>
        <div className="max-w-3xl mx-auto fade-in-up">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index} className="border-b-border/50">
                <AccordionTrigger className="text-lg font-headline text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
