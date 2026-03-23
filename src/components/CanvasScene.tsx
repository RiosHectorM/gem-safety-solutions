"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Preload, useProgress, Html, PerformanceMonitor, Grid } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { ScrollAnimations } from "./ScrollAnimations";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "var(--accent-color)", fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: "bold" }}>
        {progress.toFixed(0)}% Inicializando...
      </div>
    </Html>
  );
}

function DiamondShield({ lowPerf }: { lowPerf: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  // Define Shield Shape
  const shieldShape = new THREE.Shape();
  shieldShape.moveTo(0, 1.4);
  shieldShape.lineTo(0.9, 1.1);
  shieldShape.lineTo(1.1, 0.2);
  shieldShape.quadraticCurveTo(1.1, -0.6, 0, -1.4);
  shieldShape.quadraticCurveTo(-1.1, -0.6, -1.1, 0.2);
  shieldShape.lineTo(-0.9, 1.1);
  shieldShape.closePath();

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 2
  };

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Inner "Diamond Core" */}
      <mesh>
        <extrudeGeometry args={[shieldShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="var(--accent-color)"
          metalness={0.1}
          roughness={0}
          transmission={1}
          thickness={1.5}
          ior={2.4}
          clearcoat={1}
          attenuationDistance={1}
          attenuationColor="var(--accent-color)"
          transparent={true}
        />
      </mesh>

      {/* Wireframe Shell "Industrial Tech" */}
      <mesh scale={[1.1, 1.1, 1.1]} position={[0, 0, 0.05]}>
        <extrudeGeometry args={[shieldShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="var(--cta-color)"
          wireframe={true}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      {/* Glow / Core Light effect */}
      <pointLight color="var(--accent-color)" intensity={5} distance={3} />
    </group>
  );
}

// Representa Fusión Industrial-Cloud
function ComplexModel({ modelRef, lowPerf }: { modelRef: React.MutableRefObject<THREE.Group | null>, lowPerf: boolean }) {
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const pointer = state.pointer;
    targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, (pointer.y * Math.PI) / 6, 0.05);
    targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, (pointer.x * Math.PI) / 6, 0.05);

    if (modelRef.current) {
      modelRef.current.rotation.x = targetRotation.current.x;
      modelRef.current.rotation.y = targetRotation.current.y;
    }
  });

  return (
    <group ref={modelRef}>
      <Grid
        position={[0, -2.5, -3]}
        args={[10.5, 10.5]}
        cellSize={0.5}
        cellThickness={1}
        cellColor="var(--cta-hover)"
        sectionSize={2.5}
        sectionThickness={1.5}
        sectionColor="var(--cta-color)"
        fadeDistance={25}
        fadeStrength={1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Suspense fallback={null}>
        <DiamondShield lowPerf={lowPerf} />
      </Suspense>
    </group>
  );
}

function CameraController() {
  const { camera, size } = useThree();
  if (camera instanceof THREE.PerspectiveCamera) {
    if (size.width < 768) {
      camera.fov = 75;
      camera.position.z = 7;
    } else {
      camera.fov = 50;
      camera.position.z = 6;
      camera.position.x = 2; // Offset hacia la derecha para que no tape el texto del Hero
    }
    camera.updateProjectionMatrix();
  }
  return null;
}

export function CanvasScene() {
  const modelRef = useRef<THREE.Group>(null);
  const [dpr, setDpr] = useState([1, 2]);
  const [lowPerf, setLowPerf] = useState(false);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 0, background: "var(--bg-color)" }}>
      <Canvas dpr={dpr as [number, number]} gl={{ antialias: !lowPerf, alpha: false }}>
        <PerformanceMonitor
          onDecline={() => {
            setDpr([1, 1]);
            setLowPerf(true);
          }}
          onIncline={() => {
            setDpr([1, 2]);
            setLowPerf(false);
          }}
        />
        <CameraController />
        <ambientLight intensity={0.7} />
        {/* Usamos baja resolución de sombras (o sin ellas) cuando el rendimiento baja */}
        <directionalLight position={[10, 10, 5]} intensity={2} color="var(--accent-color)" castShadow={!lowPerf} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="var(--cta-color)" />
        <Environment preset="night" blur={0.8} />

        <Suspense fallback={<Loader />}>
          <ComplexModel modelRef={modelRef} lowPerf={lowPerf} />
          <Preload all />
        </Suspense>
      </Canvas>
      <ScrollAnimations modelRef={modelRef} />
    </div>
  );
}
