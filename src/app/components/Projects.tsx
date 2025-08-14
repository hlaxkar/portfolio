import React from 'react';
import ScrollAnimator from './ScrollAnimator';

interface Project {
    title: string;
    description: string;
    tags: string;
}

const projectsData: Project[] = [
    {
        title: "Deal Maker System Migration",
        description: "A complete backend migration of a CRM system, dramatically improving performance and scalability.",
        tags: "Node.js, Express, MySQL, React, Redis"
    },
    {
        title: "Proteba - Health Report Dashboard",
        description: "A dashboard for customers to view biological scores, nutrition recommendations, and create diet charts.",
        tags: "Angular, PHP, MySQL, Data Visualisation"
    },
    {
        title: "ScreenDuck Movie Tracker",
        description: "A movie review and tracking website built from scratch using the TMDB API, featuring user lists and bookmarks.",
        tags: "PHP, MySQL, HTML, CSS, REST API"
    },
    {
        title: "Phenotype Assessment App",
        description: "An application to collect phenotype information from patients through a series of structured questions.",
        tags: "Angular, PHP, MySQL, Tailwind CSS"
    },
    {
        title: "Disease Prediction Models",
        description: "Robust and scalable algorithms to predict various diseases using phenotype and microbial information.",
        tags: "Python, PHP, MySQL"
    },
    {
        title: "Gift-Scout Chatbot",
        description: "A chatbot plugin for WordPress that recommends gift products to customers using AI and Amazon APIs.",
        tags: "PHP, React, OpenAI API, Amazon API"
    }
];

const Projects: React.FC = () => {
    return (
        <ScrollAnimator>
            <section id="projects" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-violet-400 mr-3">03.</span> Things I&apos;ve Built
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <div key={project.title} className="glass-effect rounded-lg p-6 flex flex-col justify-between hover:border-violet-400 transition duration-300 transform hover:-translate-y-2">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4">{project.description}</p>
                            </div>
                            <p className="text-sm text-slate-500 font-mono">{project.tags}</p>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default Projects;
