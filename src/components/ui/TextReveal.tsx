"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  highlightWords?: string[];
  highlightColor?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, highlightWords = [], highlightColor = "#F97316" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text into words manually to animate smoothly
    const words = Array.from(containerRef.current.querySelectorAll('.reveal-word'));

    gsap.fromTo(words,
      {
        opacity: 0,
        y: 20,
        rotateX: -50,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === containerRef.current) t.kill();
      });
    };
  }, []);

  const createMarkup = () => {
    // Basic word splitter, keeping spaces
    const parts = text.split(/(\s+)/);
    return parts.map((part, index) => {
      if (part.trim() === "") return <span key={index}>{part}</span>;
      
      const isHighlight = highlightWords.some(hw => part.toLowerCase().includes(hw.toLowerCase()));
      
      return (
        <span
          key={index}
          className="reveal-word"
          style={{ 
            display: "inline-block",
            color: isHighlight ? highlightColor : "inherit",
            textShadow: isHighlight ? `0 0 10px ${highlightColor}80` : "none",
            fontWeight: isHighlight ? "600" : "inherit"
          }}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <div ref={containerRef} style={{ perspective: "1000px" }}>
      {createMarkup()}
    </div>
  );
};
