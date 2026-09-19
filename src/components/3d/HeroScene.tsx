'use client';

import React, { useRef, Suspense, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

function HeroModel() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/hero-model.glb');
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Window mouse listener ensures cursor movement is captured even with pointer-events-none container
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-center the model based on its bounding box
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Recenter the model to origin
    clonedScene.position.sub(center);
    
    // Size 2.2 fits accurately inside the highlighted red box without touching text or screen edges
    const targetSize = 2.2;
    const autoScale = targetSize / (maxDim || 1);
    clonedScene.scale.setScalar(autoScale);

    // Initial front orientation facing camera
    clonedScene.rotation.x = Math.PI / 2;
    clonedScene.rotation.y = 0;
    clonedScene.rotation.z = 0;
  }, [clonedScene]);

  useFrame(() => {
    if (ref.current) {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Base position [-3.1, 0.5, 0] centers it in the red box area + subtle mouse movement shift
      const targetPosX = -3.1 + mouseX * 0.3;
      const targetPosY = 0.5 + mouseY * 0.3;

      // Dynamic rotation reacting to cursor movement
      const targetRotY = mouseX * 1.0;
      const targetRotX = -mouseY * 0.6;

      // Smooth lerp for both position and rotation so it moves along with cursor
      ref.current.position.x += (targetPosX - ref.current.position.x) * 0.08;
      ref.current.position.y += (targetPosY - ref.current.position.y) * 0.08;
      
      ref.current.rotation.y += (targetRotY - ref.current.rotation.y) * 0.08;
      ref.current.rotation.x += (targetRotX - ref.current.rotation.x) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={ref} position={[-3.1, 0.5, 0]}>
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
}

useGLTF.preload('/models/hero-model.glb');

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }} 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, alpha: true }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <directionalLight position={[-5, -5, 5]} intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00E5FF" />
        <pointLight position={[-5, -5, 5]} intensity={1.5} color="#7C3AED" />
        <Suspense fallback={null}>
          <HeroModel />
        </Suspense>
      </Canvas>
    </div>
  );
}





