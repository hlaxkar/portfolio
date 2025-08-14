import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-start">
            <div className="max-w-3xl">
                <p className="text-violet-400 text-lg font-medium mb-2 animate-fade-in-up" style={{ animationDelay: '0ms' }}>Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Harshit Laxkar.</h1>
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-400 mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>I build things for the web.</h2>
                <p className="text-slate-400 text-lg max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    I&apos;m a passionate Full Stack Developer with a knack for creating dynamic, scalable web applications. With expertise in the MEAN stack and a focus on clean code and performance, I turn complex problems into elegant digital solutions.
                </p>
                <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <a href="https://github.com/hlaxkar" target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-violet-600 transition duration-300 transform hover:scale-105">
                        View GitHub
                    </a>
                    <a href="https://linkedin.com/in/hlaxkar" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105">
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Hero;
