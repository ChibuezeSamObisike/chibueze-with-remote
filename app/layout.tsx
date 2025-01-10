import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

import Providers from '@/app/Providers';
import DashboardLayout from '@/components/DashboardLayout';

const jostSans = Jost({
  variable: '--font-jost-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        style={{ backgroundColor: '#F7F8FD' }}
        className={`${jostSans.variable} ${jostSans.className} `}
      >
        <Providers>
          <DashboardLayout>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
