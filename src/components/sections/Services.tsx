import { ShieldCheck, CloudLightning, CloudBackup, FileCode } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";

export const Services = () => {
  return (
    <section style={{ padding: "8rem 2rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", color: "var(--accent-color)", textAlign: "center", textTransform: "uppercase" }}>
          Nuestros Servicios de Vanguardia
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4rem" }} className="services-grid">

          {/* Service Block 1 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderLeft: "4px solid #F97316",
            borderRight: "4px solid #F97316"

          }}>
            <ShieldCheck size={56} color="#F97316" style={{ marginBottom: "1.5rem" }} />
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center", color: "#F97316" }}>Gestión de Riesgos e Higiene Industrial</h3>
            <div style={{ color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "2rem" }}>
              <TextReveal text="Cumplimiento Normativo y Sistemas de Gestión (ISO)." highlightWords={["Cumplimiento Normativo y Sistemas de Gestión (ISO)."]} highlightColor="#F97316" />
            </div>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Desarrollamos e implementamos Sistemas de Gestión Integrados (SGI) bajo estándares ISO 9001, 14001 y 45001. Realizamos auditorías de cumplimiento legal (Ley 19.587), relevamientos de riesgos (SRT), planes de contingencia y capacitación técnica para garantizar entornos de trabajo seguros y eficientes.
              </li>
            </ul>
          </div>

          {/* Service Block 2 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderRight: "4px solid var(--accent-color)",
            borderLeft: "4px solid var(--accent-color)"
          }}>
            <CloudLightning size={56} color="var(--accent-color)" style={{ marginBottom: "1.5rem" }} />
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center", color: "var(--accent-color)" }}>Infraestructura Cloud & ISO 27001</h3>
            <div style={{ color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "2rem" }}>
              <TextReveal text="Blindaje de activos de información en la nube." highlightWords={["Blindaje de activos de información en la nube."]} highlightColor="var(--accent-color)" />
            </div>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Diseñamos arquitecturas resilientes y escalables en Amazon Web Services (AWS) bajo el marco de la norma ISO 27001. Implementamos estrategias de ciberseguridad defensiva, gestión de identidades (IAM) y continuidad de negocio para proteger el activo más valioso de tu empresa: la información.
              </li>
            </ul>
          </div>

          {/* Service Block 3 */}
          <div className="service-card" style={{
            background: "linear-gradient(145deg, var(--bg-lighter) 0%, var(--bg-color) 100%)",
            padding: "3rem",
            borderRadius: "1rem",
            borderRight: "4px solid #23f806ff",
            borderLeft: "4px solid #23f806ff"
          }}>
            <FileCode  size={56} color="#23f806ff" style={{ marginBottom: "1.5rem" }} />
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center", color: "#23f806ff" }}>Inteligencia de Datos para Auditorías</h3>
            <div style={{ color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "2rem" }}>
              <TextReveal text="Software a medida para la gestión de cumplimiento." highlightWords={["Software a medida para la gestión de cumplimiento."]} highlightColor="#3cf916ff" />
            </div>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                 Fusionamos la ingeniería de software con la normativa legal para crear herramientas de Automatización de Auditorías. Mediante algoritmos de IA, agilizamos la generación de informes técnicos, seguimiento de hallazgos y control de activos, permitiendo una toma de decisiones basada en datos reales y en tiempo real.
              </li>
            </ul>
          </div>
        </div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "300", marginTop: "3rem", color: "var(--text-main)", textAlign: "center", textTransform: "uppercase" }}>
          <TextReveal text="Unificamos el cumplimiento con la resiliencia de tus datos en la nube." highlightWords={["Unificamos el cumplimiento", "resiliencia de tus datos en la nube."]} highlightColor="var(--accent-color)" />
          
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
