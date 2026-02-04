import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jaanvi Chouhan | Full-Stack Developer & AI/ML Enthusiast',
  description: '3rd Year B.Tech CSE Student specializing in MERN Stack, AI/ML, and modern web technologies. Google Cloud Facilitator and passionate problem solver.',
  keywords: ['Jaanvi Chouhan', 'Full-Stack Developer', 'MERN Stack', 'AI/ML', 'Web Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Jaanvi Chouhan' }],
  openGraph: {
    title: 'Jaanvi Chouhan | Full-Stack Developer',
    description: '3rd Year B.Tech CSE Student specializing in MERN Stack, AI/ML, and modern web technologies.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaanvi Chouhan | Full-Stack Developer',
    description: '3rd Year B.Tech CSE Student specializing in MERN Stack, AI/ML, and modern web technologies.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
