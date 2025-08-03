import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

<DefaultSeo {...SEO} />

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> */ }

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Harshit Laxkar - Full Stack Developer',
    description: 'Portfolio of Harshit Laxkar, a passionate Full Stack Developer specializing in the MEAN stack, Node.js, and modern web technologies.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-gray-900 text-slate-300 antialiased`}>
                <Header />
                <main className="container mx-auto px-6 pt-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}