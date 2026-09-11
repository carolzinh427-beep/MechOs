/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const ScrewdriverMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.7;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.6) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.5;
      ringRef.current.rotation.y -= delta * 0.8;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0.4]}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
        {/* 3D Screwdriver Group */}
        <group position={[0, -0.2, 0]}>
          {/* 1. Ergonomic Handle */}
          <mesh position={[0, -0.8, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.26, 0.2, 1.1, 16]} />
            <meshStandardMaterial
              color="#141722"
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Handle Rubber Grip Ribs (Electric Green Details) */}
          {[-1.1, -0.9, -0.7, -0.5].map((yPos, i) => (
            <mesh key={i} position={[0, yPos, 0]} castShadow receiveShadow>
              <torusGeometry args={[0.24 - i * 0.01, 0.035, 12, 32]} />
              <meshStandardMaterial
                color="#00E676"
                roughness={0.3}
                metalness={0.7}
                emissive="#00E676"
                emissiveIntensity={0.2}
              />
            </mesh>
          ))}

          {/* Handle Top Cap / End Nut */}
          <mesh position={[0, -1.35, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.18, 0.22, 0.2, 16]} />
            <meshStandardMaterial color="#00E676" roughness={0.2} metalness={0.9} />
          </mesh>

          {/* 2. Screwdriver Metallic Shaft */}
          <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.07, 0.08, 1.4, 16]} />
            <meshStandardMaterial
              color="#E2E8F0"
              roughness={0.1}
              metalness={0.95}
            />
          </mesh>

          {/* Shaft Collar */}
          <mesh position={[0, -0.22, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.15, 16]} />
            <meshStandardMaterial color="#00E676" roughness={0.2} metalness={0.8} />
          </mesh>

          {/* 3. Screwdriver Flathead / Tip */}
          <mesh position={[0, 1.25, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.16, 0.25, 0.025]} />
            <meshStandardMaterial
              color="#CBD5E1"
              roughness={0.15}
              metalness={0.95}
            />
          </mesh>
        </group>

        {/* Outer Orbiting Tech Ring */}
        <mesh ref={ringRef} castShadow receiveShadow>
          <torusGeometry args={[1.5, 0.03, 16, 80]} />
          <meshStandardMaterial
            color="#00E676"
            roughness={0.2}
            metalness={0.8}
            emissive="#00E676"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
};

export interface TechTool3DProps {
  className?: string;
}

export const TechTool3D: React.FC<TechTool3DProps> = ({ className = '' }) => {
  return (
    <div className={`w-[130px] h-[130px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] shrink-0 relative flex items-center justify-center ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#00E676]/15 blur-2xl rounded-full pointer-events-none" />

      <Canvas
        shadows={false}
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={0.9} color="#00E676" />
        <pointLight position={[0, 0, 3]} intensity={1.2} color="#00E676" />

        <ScrewdriverMesh />
      </Canvas>
    </div>
  );
};

export default TechTool3D;
