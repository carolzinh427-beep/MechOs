/* eslint-disable react/no-unknown-property */
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const GearMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const gearRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  // Generate 8 3D gear teeth around the ring
  const teethCount = 8;
  const teeth = useMemo(() => {
    const arr = [];
    const radius = 1.05;
    for (let i = 0; i < teethCount; i++) {
      const angle = (i / teethCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      arr.push({ x, y, angle });
    }
    return arr;
  }, [teethCount]);

  useFrame((state, delta) => {
    if (gearRef.current) {
      // Continuous 360 rotation of the 3D gear
      gearRef.current.rotation.z += delta * 0.8;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 1.2;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.4, 0.2, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Main Rotating 3D Gear */}
        <group ref={gearRef}>
          {/* Main Gear Outer Ring */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[1.0, 1.0, 0.25, 32]} />
            <meshStandardMaterial
              color="#141722"
              roughness={0.15}
              metalness={0.9}
            />
          </mesh>

          {/* 3D Gear Teeth (Dentes da Engrenagem) */}
          {teeth.map((tooth, i) => (
            <mesh
              key={i}
              position={[tooth.x, tooth.y, 0]}
              rotation={[0, 0, tooth.angle]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[0.3, 0.25, 0.25]} />
              <meshStandardMaterial
                color="#00E676"
                roughness={0.2}
                metalness={0.85}
                emissive="#00E676"
                emissiveIntensity={0.15}
              />
            </mesh>
          ))}

          {/* Central Hole Cutout Border */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.55, 0.55, 0.26, 24]} />
            <meshStandardMaterial
              color="#00E676"
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Center Axle Core */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.28, 24]} />
            <meshStandardMaterial
              color="#0F111A"
              roughness={0.1}
              metalness={0.95}
            />
          </mesh>

          {/* Electric Center Dot */}
          <mesh position={[0, 0, 0.15]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#00E676"
              roughness={0.1}
              metalness={0.5}
              emissive="#00E676"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>

        {/* Counter-rotating Inner Tech Ring */}
        <mesh ref={innerRingRef} position={[0, 0, 0]}>
          <torusGeometry args={[1.35, 0.025, 12, 60]} />
          <meshStandardMaterial
            color="#00E676"
            roughness={0.3}
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

        <GearMesh />
      </Canvas>
    </div>
  );
};

export default TechTool3D;
