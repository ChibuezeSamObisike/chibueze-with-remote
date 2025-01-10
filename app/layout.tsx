import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

import Providers from '@/app/providers';

const jostSans = Jost({
  variable: '--font-jost-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chibueze With Rotate Task',
  description: 'Developed by Chibueze',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${jostSans.variable} ${jostSans.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
