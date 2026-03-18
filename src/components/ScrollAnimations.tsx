"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  modelRef: React.MutableRefObject<THREE.Mesh | null>;
}

export const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ modelRef }) => {
  useEffect(() => {
    // Configurar Lag Smoothing para no competir con el ticker de Three.js
    gsap.ticker.fps(60);

    if (modelRef.current) {
      // Configurar animación inicial
      const model = modelRef.current;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Suavizar animación al hacer scroll
        },
      });

      // Animación de rotación y traslación lateral
      tl.to(model.rotation, {
        y: Math.PI * 2,
        x: Math.PI / 2,
        ease: "none",
      }, 0)
      .to(model.position, {
        x: 2, // Se desplaza hacia la derecha
        ease: "power1.inOut",
      }, 0);
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [modelRef]);

  return null;
};
