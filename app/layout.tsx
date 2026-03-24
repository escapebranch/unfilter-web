import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { CreatorBadge } from '@/components/ui/CreatorBadge';
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-project-name.vercel.app';

const uncutSans = localFont({
  src: '../public/fonts/UncutSans-Variable.ttf',
  variable: '--font-uncut-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Unfilter | Stack Intelligence for Android',
  description:
    'Unfilter reveals what your installed apps are built with using local, privacy-first static analysis.',
  openGraph: {
    title: 'Unfilter | Stack Intelligence for Android',
    description:
      'Reveal the frameworks, runtimes, and system signals behind the apps on your phone.',
    images: ['/images/unfilter-banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${uncutSans.variable} antialiased`}>
        {children}
        <CreatorBadge />
      </body>
    </html>
  );
}
