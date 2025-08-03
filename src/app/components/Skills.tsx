import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Skills: React.FC = () => {
    return (
        <ScrollAnimator>
            <section id="skills" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-violet-400 mr-3">04.</span> Skills & Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Python</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>PHP</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>JavaScript & TypeScript</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>C++</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Frameworks</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Angular</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Node.js & Express.js</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>React</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Flask</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Tools & Platforms</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Git & GitHub</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Docker</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Redis</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>MySQL & MongoDB</li>
                            <li className="flex items-center"><span className="text-violet-400 mr-2">▹</span>Figma & Photoshop</li>
                        </ul>
                    </div>
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default Skills;
