import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const About: React.FC = () => {
    return (
        <ScrollAnimator>
            <section id="about" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
                    <span className="text-violet-400 mr-3">01.</span> About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    <div className="md:col-span-3 text-slate-400 text-lg space-y-4">
                        <p>
                            Hello! I&apos;m Harshit, a developer driven by a passion for building innovative and efficient web applications. My journey into the world of programming started with a fascination for how technology can solve real-world problems. Today, I specialize in the full stack, from crafting intuitive user interfaces with Angular and React to engineering robust backend systems with Node.js.
                        </p>
                        <p>
                            My experience has equipped me with a strong command over JavaScript, TypeScript, and various frameworks. I thrive on challenges, whether it&apos;s migrating a legacy CRM and slashing response times from 25 seconds to 200 milliseconds, or developing predictive models for healthcare. I&apos;m always eager to learn and apply new technologies to create seamless and impactful user experiences.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-center items-center">
                        <div className="w-64 h-64 rounded-full bg-violet-500/20 relative flex items-center justify-center glow-effect">
                            <svg className="w-48 h-48 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default About;
