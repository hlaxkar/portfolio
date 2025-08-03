'use client';

import React, { useEffect, useRef } from 'react';

interface ScrollAnimatorProps {
    children: React.ReactNode;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.classList.add('section-hidden');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        entry.target.classList.remove('section-hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return <div ref={ref}>{children}</div>;
};

export default ScrollAnimator;
