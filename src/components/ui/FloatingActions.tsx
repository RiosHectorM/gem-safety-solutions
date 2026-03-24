"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MessageCircle } from "lucide-react";
import styles from "./FloatingActions.module.css";

gsap.registerPlugin(ScrollTrigger);

export const FloatingActions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    // Initial state: Hidden
    gsap.set(elements, { opacity: 0, y: 30, scale: 0.8 });

    // Entry animation: Fade into 0.7 opacity as requested
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(elements, {
          opacity: 0.7,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
        });
      }
    }, 2000);

    // Bounce on scroll effect
    const bounceAnim = gsap.to(elements, {
      y: -15,
      duration: 0.2,
      paused: true,
      ease: "power2.out",
      stagger: 0.05,
      yoyo: true,
      repeat: 1
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      onUpdate: (self) => {
        // Bounce when scrolling with certain velocity
        if (Math.abs(self.getVelocity()) > 200 && !bounceAnim.isActive()) {
          bounceAnim.play(0);
        }
      }
    });

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className={styles.floatingContainer} ref={containerRef}>
      <a
        href="https://calendly.com/gem-safety-solutions/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.calendly}`}
      >
        <Calendar size={30} className={styles.icon} />
        <span className={styles.buttonText}>Meeting</span>
      </a>

      <a
        href="https://wa.me/5493517868629?text=Hola%20GEM%2C%20realic%C3%A9%20el%20Quick%20Scan%20en%20la%20web%20y%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20."
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
      >
        <MessageCircle size={30} className={styles.icon} />
        <span className={styles.buttonText}>WhatsApp</span>
      </a>
    </div>
  );
};
