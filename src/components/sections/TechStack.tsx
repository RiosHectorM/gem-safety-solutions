export const TechStack = () => {
  const techs = ["AWS", "ISO 27001", "Next.js", "Go", "Python", "React", "Docker"];

  return (
    <section className="tech-section" style={{ padding: "4rem 2rem", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--cta-color)" }}>
          Tecnologías y Estándares que Dominamos
        </h2>

        <div style={{ gap: "2rem" }} className="services-grid">
          {/* Service Block 1 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderLeft: "4px solid var(--cta-color)"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Seguridad e Higiene Industrial & Auditorías SGI</h3>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Auditorías de cumplimiento (Ley 19.587).
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Gestión de Riesgos y SGI (ISO 45001).
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Capacitaciones en Planta y Prevención.
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
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Arquitectura Cloud & Ciberseguridad </h3>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Arquitectura Cloud Segura en AWS.
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Implementación ISO 27001 (SGSI).
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Continuidad de Negocio & Disaster Recovery.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
