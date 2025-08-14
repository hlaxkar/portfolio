"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false });

const ThreeBackgroundClient: React.FC = () => {
    return <ThreeBackground />;
};

export default ThreeBackgroundClient;


