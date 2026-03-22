export const TechStack = () => {
  const techs = ["AWS", "ISO 27001", "Next.js", "Go", "Python", "React", "Docker"];

  return (
    <section className="tech-section" style={{ padding: "4rem 2rem", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--cta-color)", textTransform: "uppercase" }}>
          Áreas de Especialización
        </h2>

        <div style={{ gap: "2rem" }} className="services-grid">
          {/* Service Block 1 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderLeft: "4px solid var(--cta-color)"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Ingeniería en Prevención y SGI</h3>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "start", gap: "0.5rem", justifyItems: "start" }}>
                <span style={{ color: "var(--cta-color)", alignItems: "center" }}>✔</span> Auditorías de Cumplimiento Legal: Relevamiento general de riesgos (R.G.R.L.) y cumplimiento de la Ley 19.587.
              </li>
              <li style={{ display: "flex", alignItems: "start", gap: "0.5rem", justifyItems: "start" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Implementación de Normas ISO: Especialistas en la transición y certificación de los sistemas de gestión ISO 9001 (Calidad), 14001 (Ambiente) y 45001 (Seguridad y Salud).
              </li>
              <li style={{ display: "flex", alignItems: "start", gap: "0.5rem", justifyItems: "start" }}>
                <span style={{ color: "var(--cta-color)" }}>✔</span> Gestión de Emergencias: Diseño de planes de evacuación, simulación de siniestros y formación de brigadas industriales.
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "space-around"}}>
                <img className="service-card" src="/assets/45001.png" alt="45001" style={{ width: "100px", height: "100px" }} />
                <img className="service-card" src="/assets/14001.png" alt="14001" style={{ width: "100px", height: "100px" }} />
                <img className="service-card" src="/assets/9001.png" alt="9001" style={{ width: "100px", height: "100px" }} />
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
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Cloud Architecture & Digital Compliance </h3>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "start", gap: "0.5rem", justifyItems: "start" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Estrategia de Nube en AWS: Diseño de arquitecturas bajo el marco de "Well-Architected Framework" de Amazon.
              </li>
              <li style={{ display: "flex", alignItems: "start", gap: "0.5rem", justifyItems: "start" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Seguridad de la Información (ISO 27001): Implementación de Sistemas de Gestión de Seguridad de la Información (SGSI) para proteger la propiedad intelectual y los datos del cliente.
              </li>
              <li style={{ display: "flex", alignItems: "start", gap: "0.5rem", justifyItems: "start" }}>
                <span style={{ color: "var(--accent-color)" }}>✔</span> Continuidad del Negocio (BCP): Estrategias de recuperación ante desastres y alta disponibilidad para sistemas críticos.
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "space-around"}}>
                <img className="service-card" src="/assets/27001.png" alt="27001" style={{ width: "100px", height: "100px" }} />
                <img className="service-card" src="/assets/AWS.png" alt="AWS" style={{ width: "100px", height: "60px" }} />
                <img className="service-card" src="/assets/saa.png" alt="saa" style={{ width: "100px", height: "100px" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
