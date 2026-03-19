export const Differential = () => {
  return (
    <section className="differential-section" style={{ padding: "8rem 2rem", background: "var(--bg-lighter)", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--cta-color)" }}>
          Seguridad Sin Brechas: Del Suelo de Planta a la Nube
        </h2>

        <h3 style={{ fontSize: "1.5rem", fontWeight: "300", marginBottom: "3rem", color: "var(--text-main)" }}>
          En un mundo donde la industria está cada vez más conectada, la seguridad ya no puede dividirse. En GEM, unificamos
          <span style={{ color: "var(--cta-hover)", fontWeight: "600" }}> la Prevención de Riesgos Físicos</span> con la <span style={{ color: "var(--accent-color)", fontWeight: "600" }}>la Resiliencia Digital</span>.
        </h3>

        <div style={{ display: "flex", justifyContent: "center", gap: "4rem", marginTop: "4rem", flexWrap: "wrap" }}>


          <div style={{ flex: 1, minWidth: "250px", textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ width: "40px", height: "4px", background: "var(--cta-color)", marginBottom: "1rem" }} />
            <h4 style={{ fontSize: "1.25rem" }}>Liderazgo en Seguridad e Higiene</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Tenemos experiencia brindando protección, capacitación y gestión integral para los entornos industriales más exigentes.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: "250px", textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ width: "40px", height: "4px", background: "var(--accent-color)", marginBottom: "1rem" }} />
            <h4 style={{ fontSize: "1.25rem" }}>+20 Años de Experiencia Digital</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Desarrollo de infraestructuras complejas, cumplimiento normativo global en la nube (ISO 27001) y arquitecturas resilientes sobre AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
