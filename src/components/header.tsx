'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, Scale } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) => (
    <nav
      className={cn(
        'flex items-center gap-6 text-sm font-medium',
        isMobile && 'flex-col items-start gap-4'
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-foreground/80 transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline tracking-wide text-foreground">
            Advocate Aditya Panwar
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {renderNavLinks()}
          <Button asChild className="rounded-full">
            <Link href="#contact">Book Consultation</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex h-full flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <Scale className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold font-headline">Advocate Aditya Panwar</span>
                </Link>
                <div className="flex flex-col gap-6 text-lg">
                  {renderNavLinks(true)}
                </div>
                <Button asChild className="mt-auto rounded-full">
                  <Link href="#contact">Book Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
