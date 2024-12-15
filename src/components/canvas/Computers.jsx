import React, { Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const Computers = () => {
  const computer = useGLTF("./../../../adamHead/adamHead.gltf");

  return (
    <mesh position={[0, 0, 0]}>
      {/* Hemisphere light for ambient lighting */}
      <hemisphereLight intensity={2} groundColor="black" />

      {/* Point light for direct lighting */}
      <pointLight intensity={2} position={[5, 5, 5]} />

      {/* Directional light simulating sunlight */}
      <directionalLight intensity={3} position={[10, 10, 10]} castShadow />

      {/* Your 3D model */}
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '280vw', height: '280vh' }} // Adjust to a percentage of the viewport
    >
      <Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
    </Canvas>
  )
}


export default ComputersCanvas;
