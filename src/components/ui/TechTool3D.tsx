/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TechToolMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.6;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.8;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Central Technological Core/Gear */}
        <mesh ref={coreRef} castShadow receiveShadow>
          <icosahedronGeometry args={[0.9, 1]} />
          <MeshDistortMaterial
            color="#00E676"
            roughness={0.2}
            metalness={0.9}
            distort={0.25}
            speed={1.5}
          />
        </mesh>

        {/* Outer Metallic Ring / Tool Gear */}
        <mesh ref={ringRef} castShadow receiveShadow>
          <torusGeometry args={[1.35, 0.12, 16, 100]} />
          <meshStandardMaterial
            color="#141722"
            roughness={0.1}
            metalness={0.95}
            wireframe={false}
          />
        </mesh>

        {/* Secondary Metallic Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.6, 0.04, 16, 80]} />
          <meshStandardMaterial color="#00E676" roughness={0.3} metalness={0.8} />
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
    <div className={`w-[140px] h-[140px] xs:w-[180px] xs:h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] shrink-0 relative flex items-center justify-center ${className}`}>
      {/* Background Neon Glow */}
      <div className="absolute inset-0 bg-[#00E676]/15 blur-2xl rounded-full pointer-events-none" />

      <Canvas
        shadows
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={0.8} color="#00E676" />
        <pointLight position={[0, 0, 2]} intensity={1.2} color="#00E676" />

        <TechToolMesh />
      </Canvas>
    </div>
  );
};

export default TechTool3D;
