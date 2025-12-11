'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function DisclaimerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAgreed = sessionStorage.getItem('disclaimerAgreed');
    if (isAgreed !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleDeny()}>
      <DialogContent className="sm:max-w-md bg-card/80 backdrop-blur-sm border-primary/20 shadow-2xl shadow-primary/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary ">Disclaimer & Conformation</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2 text-balance">
            The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground text-balance">
          The rules of the Indian Bar Council prohibit lawyers and law firms from advertising or soliciting work through communication in the public domain. This website is not a means for advertisement or solicitation. Its sole purpose is to provide you the information you seek. Advocate Aditya Panwar has no intention to advertise or solicit clients through this website. Please note that all decisions you take from the information provided in the website are your personal decisions and we will bear no responsibility towards them. By clicking on 'I AGREE', you acknowledge that the information provided in the website (a) does not amount to advertising or solicitation and (b) is meant only for your information. If you do not consent to these terms, please click on 'I DISAGREE' and you will be diverted from this website. </p>
        <DialogFooter className="sm:justify-center gap-2 pt-4">
          <Button type="button" onClick={handleAgree} size="lg">
            I Agree
          </Button>
          <Button type="button" variant="outline" onClick={handleDeny} size="lg">
            I Deny
          </Button>
        </DialogFooter>
        <button
          onClick={handleDeny}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
