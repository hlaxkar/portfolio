import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Contact: React.FC = () => {
    return (
        <ScrollAnimator>
            <section id="contact" className="py-20 text-center">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                    <span className="text-violet-400 mr-3">05.</span> Get In Touch
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                    I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I&apos;ll do my best to get back to you!
                </p>
                <a href="mailto:hlaxkar@gmail.com" className="inline-block bg-violet-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-violet-600 transition duration-300 transform hover:scale-105 glow-effect">
                    Say Hello
                </a>
            </section>
        </ScrollAnimator>
    );
};

export default Contact;
