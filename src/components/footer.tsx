import Link from 'next/link';
import { Scale, Twitter, Linkedin, Facebook , Instagram} from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
  { href: '#blog', label: 'Blog' },
];

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">IRA Lex Terra</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Providing expert legal guidance with integrity and professionalism. My client-centered approach ensures your legal matters are handled with the utmost care.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="tel:+919045404468" className="hover:text-primary transition-colors">+91 9045404468</a></li>
              <li><a href="mailto:advadityapanwar5@gmail.com" className="hover:text-primary transition-colors">advadityapanwar5@gmail.com</a></li>
              <li>C-142, Chhattarpur Enclave Phase-II, New Delhi-110074</li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Me</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="https://www.instagram.com/aditya.panwar5?igsh=ODBndjVpcTFvNzEz" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
          <p className='text-center sm:text-left'>&copy; {new Date().getFullYear()} IRA Lex Terra. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
