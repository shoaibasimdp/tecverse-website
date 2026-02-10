import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/ui/CookieConsent';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: {
    default: 'tecverse',
    template: '%s | tecverse',
  },
  description: 'tecverse specializes in AI-driven technology solutions including AI automation, machine learning, predictive analytics, and intelligent dashboards for modern enterprises.',
  keywords: ['AI Solutions', 'Machine Learning', 'Artificial Intelligence', 'Software Development', 'Data Analytics', 'AI Automation', 'SaaS'],
  authors: [{ name: 'tecverse' }],
  creator: 'tecverse',
  openGraph: {
    type: 'website',
    title: 'tecverse',
    description: 'AI-driven technology solutions for modern enterprises',
    siteName: 'tecverse',
  },
  icons: {
    icon: '/tec.png',
    shortcut: '/tec.png',
    apple: '/tec.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
