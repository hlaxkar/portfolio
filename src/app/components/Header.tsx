import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="#home" className="text-2xl font-bold text-white">HL.</Link>
                <nav className="hidden md:flex space-x-8">
                    {['about', 'experience', 'projects', 'skills', 'contact'].map(section => (
                        <Link key={section} href={`#${section}`} className="text-slate-300 hover:text-violet-400 transition">{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
