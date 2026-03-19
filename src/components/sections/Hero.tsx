export const Hero = () => {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 2rem",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="hero-content" style={{ maxWidth: "800px", background: "rgba(18, 18, 18, 0.6)", padding: "2rem", borderRadius: "1rem", backdropFilter: "blur(4px)" }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "800",
          marginBottom: "1.5rem",
          lineHeight: "1.2",
          textShadow: "0 4px 20px rgba(0,0,0,0.8)"
        }}>
          GEM Safety Solutions:<br />
          <span style={{ color: "var(--accent-color)" }}>Seguridad Integral para la Industria del Futuro</span>
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "var(--text-muted)",
          marginBottom: "2.5rem",
          lineHeight: "1.6"
        }}>
          Consultoría Integral en Higiene y Seguridad <br /> (ISO 45001 - 14001 - 9001) 
        </p>
        <p style={{
          fontSize: "1.25rem",
          color: "var(--text-muted)",
          marginBottom: "2.5rem",
          lineHeight: "1.6"
        }}>
          Infraestructura Cloud Segura <br /> (ISO 27001 & AWS). 
          
        </p>
        <p style={{
          fontSize: "1.25rem",
          color: "var(--text-muted)",
          marginBottom: "2.5rem",
          lineHeight: "1.6"
        }}>
          <span style={{ color: "var(--accent-color)" }}>Donde la seguridad física se encuentra con el futuro digital.</span>
        </p>
        <button
          className="cta-button"
          style={{
            padding: "1rem 2rem",
            fontSize: "1.125rem",
            fontWeight: "bold",
            color: "var(--bg-color)",
            backgroundColor: "var(--cta-color)",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(184, 115, 51, 0.4)"
          }}
          onClick={() => {
            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--cta-hover)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--cta-color)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Solicitar Consulta Técnica
        </button>
      </div>
    </section>
  );
};
