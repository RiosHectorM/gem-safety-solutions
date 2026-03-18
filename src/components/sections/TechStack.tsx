export const TechStack = () => {
  const techs = ["AWS", "ISO 27001", "Next.js", "Go", "Python", "React", "Docker"];
  
  return (
    <section className="tech-section" style={{ padding: "4rem 2rem", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "1rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "2rem" }}>
          Tecnologías y Estándares que Dominamos
        </p>
        
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "3rem",
          alignItems: "center" 
        }}>
          {techs.map((tech, idx) => (
            <div key={idx} style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "rgba(255,255,255,0.4)",
              transition: "color 0.3s ease",
              cursor: "default"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-main)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
