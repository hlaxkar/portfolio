import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 text-center text-slate-500 text-sm">
            <p>Designed & Built by Harshit Laxkar</p>
            <div className="space-x-4 mt-2">
                <a href="https://github.com/hlaxkar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">GitHub</a>
                <span>|</span>
                <a href="https://linkedin.com/in/hlaxkar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
