export const Differential = () => {
  return (
    <section className="differential-section" style={{ padding: "8rem 2rem", background: "var(--bg-lighter)", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--cta-color)", textTransform: "uppercase" }}>
          El Enfoque GEM: Seguridad 360°
        </h2>

        <h3 style={{ fontSize: "1.5rem", fontWeight: "300", marginBottom: "3rem", color: "var(--text-main)" }}>
          En un mundo industrial hiperconectado, la seguridad ya no puede dividirse en compartimentos estancos. En GEM Safety Solutions, eliminamos la brecha entre la prevención de riesgos en planta y la protección de datos en la nube. <br /><br />
          Ofrecemos una visión híbrida única: Entendemos <span style={{ color: "var(--cta-hover)", fontWeight: "600" }}>la normativa de la SRT</span> tanto como el   <span style={{ color: "var(--accent-color)", fontWeight: "600" }}>código en AWS.</span> <br /><br /> <span style={{ color: "#23f806ff", fontWeight: "600" }}>Esta sinergia nos permite no solo cumplir con las leyes locales, sino posicionar a tu empresa bajo estándares de excelencia global.</span>
        </h3>

        <div style={{ display: "flex", justifyContent: "center", gap: "4rem", marginTop: "4rem", flexWrap: "wrap" }}>


          <div className="service-card" style={{ flex: 1, minWidth: "250px", textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem", borderRadius: "1rem", borderRight: "4px solid var(--cta-color)", }}>
            <div style={{ width: "40px", height: "4px", background: "var(--cta-color)", marginBottom: "1rem"}} />
            <h4 style={{ fontSize: "1.25rem" }}>Visión Integrada:</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6", paddingRight: "1rem" }}>
              No solo auditamos procesos, blindamos la infraestructura que los soporta.
            </p>
          </div>
          <div className="service-card" style={{ flex: 1, minWidth: "250px", textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem", borderRadius: "1rem", borderRight: "4px solid var(--accent-color)", }}>
            <div style={{ width: "40px", height: "4px", background: "var(--accent-color)", marginBottom: "1rem" }} />
            <h4 style={{ fontSize: "1.25rem" }}>Seniority Real:</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6", paddingRight: "1rem"}}>
              Combinamos de experiencia en Seguridad Industrial con arquitectura Cloud de vanguardia.
            </p>
          </div>
          <div className="service-card" style={{ flex: 1, minWidth: "250px", textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem", borderRadius: "1rem", borderRight: "4px solid #23f806ff", }}>
            <div style={{ width: "40px", height: "4px", background: "#23f806ff", marginBottom: "1rem" }} />
            <h4 style={{ fontSize: "1.25rem" }}>Resultados Certificables:</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6", paddingRight: "1rem"}}>
              Preparamos a tu organización para cumplir con estándares internacionales (ISO) y normativas vigentes, garantizando la continuidad de tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};
