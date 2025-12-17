import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import DisclaimerDialog from '@/components/disclaimer-dialog';
import WhatsappButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Ira Law Office | Advocate Aditya Panwar',
  description: 'Expert Legal Guidance from Ira Law Office. Led by Advocate Aditya Panwar, we provide professional legal services you can trust.',
  metadataBase: new URL('https://www.iralawoffice.in'),
  keywords: ['Ira Law Office', 'iralawoffice', 'Advocate Aditya Panwar', 'Legal Services', 'Lawyer', 'Law Firm'],
  verification: {
    google: '_7RXa4gZX7OJJBgr-DLSleo4EfHxhFLPpsGHFVnSW_0',
    
  },
  openGraph: {
    title: 'Ira Law Office',
    description: 'Expert Legal Guidance You Can Trust',
    siteName: 'Ira Law Office',
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  'name': 'Ira Law Office',
  'alternateName': ['iralawoffice', 'Advocate Aditya Panwar'],
  'url': 'https://www.iralawoffice.in',
  'founder': {
    '@type': 'Person',
    'name': 'Aditya Panwar'
  },
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'IN'
  },
  'priceRange': '$$',
  'knowsAbout': ['Criminal Law', 'Civil Law', 'Family Law', 'Corporate Law']
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
