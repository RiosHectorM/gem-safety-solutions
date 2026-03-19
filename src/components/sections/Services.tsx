import { ShieldCheck, CloudLightning } from "lucide-react";

export const Services = () => {
  return (
    <section style={{ padding: "8rem 2rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", color: "var(--accent-color)", textAlign: "center", textTransform: "uppercase" }}>
          Nuestros Servicios de Vanguardia
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="services-grid">
          {/* Service Block 1 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderLeft: "4px solid var(--cta-color)"
          }}>
            <ShieldCheck size={56} color="var(--cta-color)" style={{ marginBottom: "1.5rem" }} />
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Seguridad e Higiene Industrial & Auditorías SGI <br /> (ISO 45001, 14001, 9001)</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "2rem" }}>
              Protección física integral para entornos de alto riesgo.
            </p>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Auditorías y Diagnósticos de Planta
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Sistemas de Gestión Integrados (SGI)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Capacitaciones Especializadas
              </li>
            </ul>
          </div>

          {/* Service Block 2 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderRight: "4px solid var(--accent-color)"
          }}>
            <CloudLightning size={56} color="var(--accent-color)" style={{ marginBottom: "1.5rem" }} />
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Arquitectura Cloud & Ciberseguridad <br /> (AWS & ISO 27001)</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "2rem" }}>
              Ingeniería y cumplimiento normativo para la era digital.
            </p>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Arquitectura Segura en AWS
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Auditoría e Implementación ISO 27001
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Compliance Automation
              </li>
            </ul>
          </div>
        </div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "300", marginTop: "3rem", color: "var(--text-main)", textAlign: "center", textTransform: "uppercase" }}>
          Unificamos el cumplimiento <span style={{ color: "var(--cta-hover)", fontWeight: "600" }}>físico en planta</span> con la resiliencia de tus <span style={{ color: "var(--accent-color)", fontWeight: "600" }}>datos en la nube</span>.
        </h3>

        {/* Responsive Grid css logic for inline style limits */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}} />
      </div>
    </section>
  );
};
