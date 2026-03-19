export const TechStack = () => {
  const techs = ["AWS", "ISO 27001", "Next.js", "Go", "Python", "React", "Docker"];

  return (
    <section className="tech-section" style={{ padding: "4rem 2rem", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "1rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "2rem" }}>
          Tecnologías y Estándares que Dominamos
        </p>
        <div style={{ gap: "4rem" }} className="services-grid">
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
                <span style={{ color: "var(--cta-color)" }}>✔</span> ISO 45001 (Salud y Seguridad)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> ISO 14001 (Ambiente)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> ISO 9001 (Calidad)
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
                <span style={{ color: "var(--accent-color)" }}>✔</span> AWS Cloud Security
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> ISO 27001
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Compliance Automation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
