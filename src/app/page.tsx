"use client";

import { CanvasScene } from "@/components/CanvasScene";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Differential } from "@/components/sections/Differential";
import { TechStack } from "@/components/sections/TechStack";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* El Canvas en el fondo */}
      <CanvasScene />
      
      {/* Contenido HTML por encima del Canvas */}
      <div className="content-wrapper" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Problem />
        <About />
        <Process />
        <Services />
        <Differential />
        <TechStack />
        <ContactSection />
      </div>

      {/* Footer sencillo */}
      <footer style={{ padding: "2rem", textAlign: "center", background: "var(--bg-color)", color: "var(--text-muted)", fontSize: "0.9rem", position: "relative", zIndex: 10 }}>
        © {new Date().getFullYear()} GEM Safety Solutions. Todos los derechos reservados.
      </footer>
    </main>
  );
}
