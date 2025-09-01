"use client";


import React, { Suspense, useMemo } from 'react';
import { Canvas, useFrame, type RootState } from '@react-three/fiber';
import { Environment, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

type FloatingTorusProps = {
    color: string;
    position: [number, number, number];
    rotationSpeed?: number;
};

const FloatingTorus: React.FC<FloatingTorusProps> = ({ color, position, rotationSpeed = 0.3 }) => {
    const material = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness: 0.25, metalness: 0.6 }), [color]);
    const meshRef = React.useRef<THREE.Mesh>(null!);

    useFrame((state: RootState) => {
        const elapsed = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = elapsed * rotationSpeed;
            meshRef.current.rotation.y = elapsed * rotationSpeed * 1.4;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2} position={position}>
            <mesh ref={meshRef} material={material} castShadow receiveShadow>
                <torusGeometry args={[0.7, 0.25, 24, 64]} />
            </mesh>
        </Float>
    );
};

const StarField: React.FC = () => {
    const [material, texture] = useMemo(() => {
        // Create a canvas element to draw the circle
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Failed to get canvas context');
        canvas.width = 64;
        canvas.height = 64;

        // Draw a white circle with a soft edge
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.PointsMaterial({
            color: '#fff',
            size: 0.35, // You might need to adjust size
            sizeAttenuation: true,
            map: texture, // Apply the circular texture
            transparent: true, // Enable transparency
            alphaTest: 0.5, // Discard pixels that are mostly transparent
        });

        return [material, texture];
    }, []);

    const points = useMemo(() => {
        const vertices: number[] = [];
        for (let i = 0; i < 1000; i += 1) {
            const x = (Math.random() - 0.5) * 80;
            const y = (Math.random() - 0.5) * 80;
            const z = (Math.random() - 0.5) * 80;
            vertices.push(x, y, z);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        return geometry;
    }, []);

    // const material = useMemo(() => new THREE.PointsMaterial({ color: '#a78bfa', size: 0.15, sizeAttenuation: true }), []);

    return <points geometry={points} material={material} />;
};

const ThreeBackground: React.FC = () => {
    return (
        <div className="three-bg" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }} shadows={false} dpr={[1, 2]}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1.0} castShadow={false} />
                <Suspense fallback={null}>
                    {/* <Environment preset="city" /> */}
                </Suspense>

                <StarField />
                {/* <FloatingTorus color={"#a78bfa"} position={[2.8, 0.5, -1.2]} rotationSpeed={0.22} />
                <FloatingTorus color={"#60a5fa"} position={[-3.0, -1.0, -0.8]} rotationSpeed={0.35} />
                <FloatingTorus color={"#34d399"} position={[0.2, 2.2, -1.5]} rotationSpeed={0.28} /> */}

                {/* Optional: enable camera interaction on desktop */}
                <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.9} />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;


