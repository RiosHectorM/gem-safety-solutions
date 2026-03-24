"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  modelRef: React.MutableRefObject<THREE.Group | null>;
}

export const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ modelRef }) => {
  useEffect(() => {
    // Lag Smoothing paramétrico
    gsap.ticker.fps(60);

    // Animaciones de Entradas (Fade-Ins de Textos)
    const fadeElements = gsap.utils.toArray('.problem-card, .service-card, .differential-section h2, .differential-section h3');
    fadeElements.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Inicia cuando el 85% del viewport superior toque el elemento
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    // Parallax Sutil del modelo al scrollear (no rotación brusca, sino leve desplazamiento vertical)
    if (modelRef.current) {
      gsap.to(modelRef.current.position, {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Suaviza la sincronización
        },
        y: -1.5,
        ease: "none"
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [modelRef]);

  return null;
};
