"use client";

import { CanvasScene } from "@/components/CanvasScene";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { QuickScan } from "@/components/sections/QuickScan";
import { Services } from "@/components/sections/Services";
import { Differential } from "@/components/sections/Differential";
import { TechStack } from "@/components/sections/TechStack";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* El Canvas en el fondo */}
      <CanvasScene />

      {/* Contenido HTML por encima del Canvas */}
      <div className="content-wrapper" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        
        <Problem />
        <Process />
        <QuickScan />
        <Services />
        <Differential />
        <TechStack />
        <About />
        <ContactSection />
        
        <FloatingActions />
      </div>
      <Footer />
    </main>
  );
}
