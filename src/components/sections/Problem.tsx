import { AlertTriangle, CloudOff, FileCheck } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle size={48} color="var(--cta-color)" />,
      title: "¿Quiere evitar multas o clausuras?",
      description: "El incumplimiento de normativas de seguridad e higiene no solo cuesta dinero, sino la continuidad operativa de su empresa."
    },
    {
      icon: <CloudOff size={48} color="var(--accent-color)" />,
      title: "¿Esta preocupado por la seguridad de sus datos en la nube?",
      description: "Las vulnerabilidades en infraestructura Cloud exponen la información más sensible de tu negocio."
    },
    {
      icon: <FileCheck size={48} color="var(--text-main)" />,
      title: "¿Esta buscando certificar normas ISO pero no sabe por dónde empezar?",
      description: "El proceso de compliance puede ser abrumador sin la guía de auditores experimentados."
    }
  ];

  return (
    <section className="problem-section" style={{ padding: "8rem 2rem", backgroundColor: "var(--bg-lighter)", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", color: "var(--accent-color)" , textTransform: "uppercase"}}>El Problema que Resolvemos</h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "2.5rem" 
        }}>
          {problems.map((prob, idx) => (
            <div key={idx} className="problem-card" style={{
              background: "var(--bg-color)",
              padding: "2.5rem 1.5rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              transition: "transform 0.3s ease"
            }}>
              <div>{prob.icon}</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{prob.title}</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.5" }}>{prob.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
