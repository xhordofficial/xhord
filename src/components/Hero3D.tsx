import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShape({ position, shape }: { position: [number, number, number]; shape: 'sphere' | 'torus' | 'octahedron' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  const materialProps = {
    color: '#ffffff',
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  };

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'sphere' && <Sphere args={[1, 16, 16]} />}
      {shape === 'torus' && <Torus args={[1, 0.3, 16, 32]} />}
      {shape === 'octahedron' && <Octahedron args={[1, 0]} />}
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} />
        
        <FloatingShape position={[-3, 0, 0]} shape="sphere" />
        <FloatingShape position={[3, 1, -2]} shape="torus" />
        <FloatingShape position={[0, -2, -1]} shape="octahedron" />
        <FloatingShape position={[-2, -1, -3]} shape="sphere" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
