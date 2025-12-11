import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import DisclaimerDialog from '@/components/disclaimer-dialog';
import WhatsappButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Advocate Aditya Panwar',
  description: 'Expert Legal Guidance You Can Trust',
  viewport: 'width=device-width, initial-scale=1',
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
