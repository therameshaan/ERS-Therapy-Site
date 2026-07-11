import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import DisclaimerBanner from '@/components/DisclaimerBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ERS Therapy Inspired Wellness Hub',
  description: 'A calming space for mental wellness with interactive meditation tools, breathing exercises, and motivational media.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <DisclaimerBanner />
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] pb-8">
          <div className="max-w-7xl mx-auto px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}