"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./QuickScan.module.css";

const QUESTIONS = [
  {
    id: 1,
    type: "Digital",
    text: "¿Utilizan el Doble Factor de Autenticación (MFA) en todos los accesos críticos de la empresa?",
  },
  {
    id: 2,
    type: "Físico",
    text: "¿Tienen el Relevamiento General de Riesgos Laborales (RGRL) presentado y actualizado ante la SRT?",
  },
  {
    id: 3,
    type: "Digital",
    text: "¿Cuentan con backups de datos automatizados y encriptados fuera del servidor principal?",
  },
  {
    id: 4,
    type: "Físico",
    text: "¿Todo el personal ha recibido las capacitaciones obligatorias de seguridad e higiene en el último año?",
  },
  {
    id: 5,
    type: "Digital",
    text: "¿Existe un protocolo claro de acción ante una sospecha de hackeo o pérdida de datos?",
  },
  {
    id: 6,
    type: "Físico",
    text: "¿Se realizan auditorías internas periódicas de los elementos de protección personal (EPP)?",
  },
  {
    id: 7,
    type: "Digital",
    text: "¿La infraestructura cloud está configurada bajo el principio de \"mínimo privilegio\" de acceso?",
  },
  {
    id: 8,
    type: "Físico",
    text: "¿Cuentan con una política de gestión ambiental o de residuos peligrosos (si aplica)?",
  },
];

export const QuickScan = () => {
  const [step, setStep] = useState(-1); // -1: Intro, 0-7: Questions, 8: Lead Form, 9: Results
  const [responses, setResponses] = useState<number[]>([]);
  const [lead, setLead] = useState({ name: "", company: "", email: "" });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    animateTransition(() => setStep(0));
  };

  const handleAnswer = (score: number) => {
    const newResponses = [...responses, score];
    setResponses(newResponses);
    
    if (step < 7) {
      animateTransition(() => setStep(step + 1));
    } else {
      animateTransition(() => setStep(8));
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    animateTransition(() => setStep(9));
  };

  const animateTransition = (callback: () => void) => {
    if (!containerRef.current) return;
    
    gsap.to(containerRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        callback();
        gsap.to(containerRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  };

  const calculateScore = () => {
    const total = responses.reduce((acc, curr) => acc + curr, 0);
    return Math.round((total / 80) * 100);
  };

  const getResultLevel = (score: number) => {
    if (score < 40) return { label: "Nivel Crítico", color: "#ff4444", desc: "Su empresa presenta vulnerabilidades graves tanto en seguridad física como digital. Se recomienda una intervención inmediata." };
    if (score < 80) return { label: "Nivel Intermedio", color: "#ffbb33", desc: "Poseen bases de seguridad, pero existen brechas importantes que podrían comprometer la continuidad del negocio." };
    return { label: "Nivel Seguro", color: "#00C851", desc: "¡Excelente! Su empresa demuestra una sólida cultura de prevención y ciberseguridad. Sigan manteniendo estos estándares." };
  };

  return (
    <section className={styles.quickScanSection} id="quick-scan">
      <div className={styles.container} ref={containerRef}>
        {step === -1 && (
          <div className={styles.introContainer}>
            <h2 className={styles.title}>Quick Scan GEM</h2>
            <p className={styles.intro}>
              Mida el nivel de resiliencia de su empresa en 2 minutos. 
              Analizamos su seguridad industrial y madurez cloud.
            </p>
            <div style={{ textAlign: "center" }}>
              <button className={styles.submitButton} onClick={handleStart} style={{ padding: "1rem 3rem" }}>
                Comenzar Autodiagnóstico
              </button>
            </div>
          </div>
        )}

        {step >= 0 && step <= 7 && (
          <div className={styles.questionContainer}>
            <div className={styles.progressContainer}>
              <div 
                className={styles.progressBar} 
                style={{ width: `${((step + 1) / 8) * 100}%` }}
              />
            </div>
            <span className={styles.scoreLabel} style={{ marginBottom: "1rem", display: "block" }}>
              {QUESTIONS[step].type} | Pregunta {step + 1} de 8
            </span>
            <h3 className={styles.question}>{QUESTIONS[step].text}</h3>
            <div className={styles.optionsGrid}>
              <button className={styles.optionButton} onClick={() => handleAnswer(10)}>Sí</button>
              <button className={styles.optionButton} onClick={() => handleAnswer(5)}>No estoy seguro</button>
              <button className={styles.optionButton} onClick={() => handleAnswer(0)}>No</button>
            </div>
          </div>
        )}

        {step === 8 && (
          <div className={styles.formContainer}>
            <h2 className={styles.title}>Casi listo...</h2>
            <p className={styles.intro}>Complete sus datos para ver el informe detallado de resiliencia.</p>
            <form onSubmit={handleLeadSubmit} className={styles.formContainer}>
              <div>
                <label className={styles.label}>Nombre Completo</label>
                <input 
                  type="text" 
                  required 
                  className={styles.input} 
                  value={lead.name}
                  onChange={(e) => setLead({...lead, name: e.target.value})}
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label className={styles.label}>Empresa</label>
                <input 
                  type="text" 
                  required 
                  className={styles.input} 
                   value={lead.company}
                  onChange={(e) => setLead({...lead, company: e.target.value})}
                  placeholder="Empresa S.A."
                />
              </div>
              <div>
                <label className={styles.label}>Email Corporativo</label>
                <input 
                  type="email" 
                  required 
                  className={styles.input} 
                   value={lead.email}
                  onChange={(e) => setLead({...lead, email: e.target.value})}
                  placeholder="juan@empresa.com"
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Ver Resultados Finales
              </button>
            </form>
          </div>
        )}

        {step === 9 && (
          <div className={styles.resultsContainer}>
            <div className={styles.scoreCircle}>
              <span className={styles.score}>{calculateScore()}%</span>
              <span className={styles.scoreLabel}>Resiliencia</span>
            </div>
            <h2 className={styles.resultTitle}>{getResultLevel(calculateScore()).label}</h2>
            <p className={styles.resultDesc}>{getResultLevel(calculateScore()).desc}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button 
                className={styles.actionButton}
                onClick={() => setStep(-1)}
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
              >
                Reiniciar
              </button>
              <a 
                href="https://calendly.com/gem-safety-solutions/30min" 
                className={styles.actionButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Auditoría
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
