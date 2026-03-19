"use client";

import { UserCircle2 } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";

export const About = () => {
  return (
    <section id="sobre-nosotros" style={{ padding: "8rem 2rem", position: "relative", zIndex: 10, background: "var(--bg-color)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", color: "var(--text-main)", textAlign: "center", textTransform: "uppercase" }}>
          Sobre <span style={{ color: "var(--cta-color)" }}>Nosotros</span>
        </h2>

        <div style={{ marginBottom: "4rem", fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: "1.8", textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <TextReveal 
            text="En GEM Safety Solutions somos expertos en integrar la seguridad industrial clásica con arquitecturas cloud modernas. Ayudamos a su empresa a alcanzar un Cumplimiento Normativo robusto sin comprometer la eficiencia o la innovación." 
            highlightWords={["Cumplimiento Normativo"]} 
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {/* Avatar 1 */}
          <div style={{ background: "var(--bg-lighter)", padding: "2rem", borderRadius: "1rem", textAlign: "center" }}>
            <UserCircle2 size={80} color="var(--cta-color)" style={{ margin: "0 auto 1rem auto" }} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>María Eugenia</h3>
            <p style={{ color: "var(--cta-color)", fontWeight: "bold", marginBottom: "1rem" }}>Experta en Normativa y Prevención</p>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Especialista en ISO 45001, 14001 y 9001. Cuenta con más de 10 años de trayectoria garantizando la seguridad e higiene en plantas industriales de alto riesgo, asegurando bienestar y Cumplimiento Normativo estricto.
            </p>
          </div>

          {/* Avatar 2 */}
          <div style={{ background: "var(--bg-lighter)", padding: "2rem", borderRadius: "1rem", textAlign: "center" }}>
            <UserCircle2 size={80} color="var(--accent-color)" style={{ margin: "0 auto 1rem auto" }} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>Héctor Martin</h3>
            <p style={{ color: "var(--accent-color)", fontWeight: "bold", marginBottom: "1rem" }}>Arquitecto Cloud y Ciberseguridad</p>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Certificado en AWS e implementador de ISO 27001. Lidera el diseño de infraestructuras digitales resilientes, protegiendo los datos corporativos frente a las amenazas de ciberseguridad modernas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
