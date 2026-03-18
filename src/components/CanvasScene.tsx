"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Preload, useProgress, Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { ScrollAnimations } from "./ScrollAnimations";

// Loader elegante
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white", fontFamily: "sans-serif" }}>
        {progress.toFixed(0)}% Cargando...
      </div>
    </Html>
  );
}

// Geometría compleja con reflectividad
function ComplexModel({ modelRef }: { modelRef: React.MutableRefObject<THREE.Mesh | null> }) {
  useFrame(() => {
    // Pequeña rotación base libre
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
      modelRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={modelRef}>
      <torusKnotGeometry args={[1, 0.3, 200, 32]} />
      <meshPhysicalMaterial
        color="#8B5CF6"
        metalness={0.9}
        roughness={0.1}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        reflectivity={1}
      />
    </mesh>
  );
}

// Controlador de cámara responsive
function CameraController() {
  const { camera, size } = useThree();
  
  // Ajustar el FOV según el ancho de pantalla (móviles)
  if (camera instanceof THREE.PerspectiveCamera) {
    if (size.width < 768) {
      camera.fov = 75;
      camera.position.z = 6;
    } else {
      camera.fov = 50;
      camera.position.z = 5;
    }
    camera.updateProjectionMatrix();
  }
  return null;
}

export function CanvasScene() {
  const modelRef = useRef<THREE.Mesh>(null);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, background: "black" }}>
      <Canvas dpr={[1, 2]}>
        <CameraController />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        
        <Suspense fallback={<Loader />}>
          <ComplexModel modelRef={modelRef} />
          <Preload all />
        </Suspense>
      </Canvas>
      <ScrollAnimations modelRef={modelRef} />
    </div>
  );
}
