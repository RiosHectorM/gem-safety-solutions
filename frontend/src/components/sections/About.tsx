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
          <div className="service-card" style={{
            background: "var(--bg-lighter)", padding: "2rem", borderRadius: "1rem", textAlign: "center",
            borderRight: "4px solid var(--cta-color)",
            borderLeft: "4px solid var(--cta-color)"
          }}>
            <UserCircle2 size={80} color="var(--cta-color)" style={{ margin: "0 auto 1rem auto" }} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>María Eugenia</h3>
            <p style={{ color: "var(--cta-color)", fontWeight: "bold", marginBottom: "1rem" }}>Experta en Normativa y Prevención</p>
            <TextReveal text="Especialista en ISO 45001, 14001 y 9001. Cuenta con experiencia en auditorías y consultoría para garantizar la seguridad e higiene en plantas industriales de alto riesgo, asegurando bienestar y Cumplimiento Normativo estricto." highlightWords={["Cumplimiento Normativo", "ISO 45001, 14001 y 9001"]} highlightColor="var(--cta-color)" />
          </div>

          {/* Avatar 2 */}
          <div className="service-card" style={{
            background: "var(--bg-lighter)", padding: "2rem", borderRadius: "1rem", textAlign: "center",
            borderRight: "4px solid var(--accent-color)",
            borderLeft: "4px solid var(--accent-color)"
          }}>
            <UserCircle2 size={80} color="var(--accent-color)" style={{ margin: "0 auto 1rem auto" }} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>Héctor Martín</h3>
            <p style={{ color: "var(--accent-color)", fontWeight: "bold", marginBottom: "1rem" }}>Arquitecto Cloud y Ciberseguridad</p>
            <TextReveal text="Certificado en AWS e implementador de ISO 27001. Lidera el diseño de infraestructuras digitales resilientes, protegiendo los datos corporativos frente a las amenazas de ciberseguridad modernas." highlightWords={["ISO 27001", "AWS"]} highlightColor="var(--accent-color)" />
          </div>
        </div>

        <div style={{ marginBottom: "4rem", paddingTop: "4rem", fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: "1.8", textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto", borderBottom: "4px solid var(--cta-color)", borderRadius: "1rem"}}>
          <h3 className="service-card" style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)", textTransform: "uppercase" }}>Misión</h3>
          <TextReveal
            text="Empoderar a las organizaciones para que alcancen su máximo potencial operativo, garantizando la seguridad de sus personas y la integridad de sus activos digitales mediante la innovación y el cumplimiento normativo."
            highlightWords={["Empoderar a las organizaciones"]}
            highlightColor="var(--cta-color)"
          />
        </div>

        <div style={{ marginBottom: "4rem", fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: "1.8", textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto", borderBottom: "4px solid var(--accent-color)", borderRadius: "1rem" }}>
          <h3 className="service-card" style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)", textTransform: "uppercase" }}>Visión</h3>
          <TextReveal
            text="Ser la consultora líder en la integración de seguridad industrial y tecnología cloud, siendo referentes en la creación de industrias resilientes y preparadas para los desafíos del futuro."
            highlightWords={["Ser la consultora líder"]}
            highlightColor="var(--cta-color)"
          />
        </div>

        <div style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: "1.8", textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto", borderBottom: "4px solid var(--cta-color)", borderRadius: "1rem" }}>
          <h3 className="service-card" style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-main)", textTransform: "uppercase" }}>Valores</h3>
          <TextReveal
            text="Integridad: Actuamos bajo la ética profesional de auditoría."
            highlightWords={["Integridad"]}
            highlightColor="var(--cta-color)"
          />
          <TextReveal
            text="Innovación: Aplicamos IA y Cloud para resolver problemas de seguridad tradicionales."
            highlightWords={["Innovación"]}
            highlightColor="var(--cta-color)"
          />
          <TextReveal
            text="Compromiso: La seguridad de su equipo es nuestra prioridad absoluta."
            highlightWords={["Compromiso"]}
            highlightColor="var(--cta-color)"
          />
        </div>
      </div>
    </section>
  );
};
