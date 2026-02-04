'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { Model } from './Robot';

export function JeenieRobot() {
  const [mounted, setMounted] = useState(false);
  const accentColor = '#00f2ff';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-[600px]" />;

  return (
    <div className="w-full h-[850px] relative">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 20 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Center top>
            {/* 3. Massive Scale (8.0) to fill the screen properly */}
            <Model scale={60} accentColor={accentColor} />
          </Center>
          <ContactShadows opacity={0.4} scale={15} blur={2} far={4.5} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}