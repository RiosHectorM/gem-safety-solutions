"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, ClipboardCheck, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "Diagnóstico", desc: "Evaluación inicial de procesos e infraestructura", icon: <Search size={40} /> },
  { id: 2, title: "Implementación", desc: "Mejoras físicas en planta y despliegue digital seguro", icon: <PenTool size={40} /> },
  { id: 3, title: "Auditoría", desc: "Revisión integral y Cumplimiento Normativo", icon: <ClipboardCheck size={40} /> },
  { id: 4, title: "Certificación", desc: "Acompañamiento en certificación ISO", icon: <Award size={40} /> },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, // Step by step delay
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="proceso" style={{ padding: "8rem 2rem", position: "relative", zIndex: 10 }}>
      <div ref={containerRef} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", color: "var(--text-main)", textAlign: "center", textTransform: "uppercase" }}>
          El <span style={{ color: "var(--accent-color)" }}>Proceso</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", position: "relative" }}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              style={{
                background: "var(--bg-lighter)",
                padding: "2rem",
                borderRadius: "1rem",
                textAlign: "center",
                borderTop: `4px solid ${index % 2 === 0 ? "var(--cta-color)" : "var(--accent-color)"}`,
                position: "relative"
              }}
            >
              <div style={{ 
                width: "60px", 
                height: "60px", 
                borderRadius: "50%", 
                background: "var(--bg-color)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                margin: "-3.5rem auto 1rem auto",
                border: "2px solid var(--text-muted)",
                color: index % 2 === 0 ? "var(--cta-color)" : "var(--accent-color)"
              }}>
                {step.id}
              </div>
              <div style={{ color: index % 2 === 0 ? "var(--cta-color)" : "var(--accent-color)", marginBottom: "1rem" }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{step.title}</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.5" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
