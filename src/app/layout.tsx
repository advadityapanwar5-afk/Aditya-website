import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import DisclaimerDialog from '@/components/disclaimer-dialog';
import WhatsappButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'IRA Lex Terra | Advocate Aditya Panwar',
  description: 'Expert Legal Guidance from IRA Lex Terra. Led by Advocate Aditya Panwar, we provide professional legal services you can trust in Civil, Criminal, and Corporate Law.',
  metadataBase: new URL('https://www.iralawoffice.in'), // NOTE: If you buy a new domain (e.g., iralexterra.com), change this URL here.
  keywords: [
    'IRA Lex Terra', 
    'Advocate Aditya Panwar', 
    'Aditya Panwar Lawyer',
    'Legal Services Delhi', 
    'Civil Lawyer', 
    'Criminal Defense Lawyer',
    'Best Advocate in Delhi'
  ],
  verification: {
    google: '_7RXa4gZX7OJJBgr-DLSleo4EfHxhFLPpsGHFVnSW_0',
  },
  openGraph: {
    title: 'IRA Lex Terra | Advocate Aditya Panwar',
    description: 'Expert Legal Guidance You Can Trust. Specialized in Civil, Criminal, and Corporate Law.',
    siteName: 'IRA Lex Terra',
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  'name': 'IRA Lex Terra',
  'alternateName': ['IRA Lex Terra', 'Advocate Aditya Panwar', 'Adv Aditya Panwar'],
  'url': 'https://www.iralawoffice.in', // Update this if you get a new domain
  'founder': {
    '@type': 'Person',
    'name': 'Aditya Panwar',
    'jobTitle': 'Advocate'
  },
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '270 Lawyers Chamber, Delhi High Court',
    'addressLocality': 'New Delhi',
    'postalCode': '110003',
    'addressCountry': 'IN'
  },
  'priceRange': '$$',
  'knowsAbout': ['Criminal Law', 'Civil Law', 'Family Law', 'Corporate Law', 'Real Estate Law']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400..700;1,7..72,400..700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body antialiased')}>
        <DisclaimerDialog />
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
