import { TextReveal } from "../ui/TextReveal";

export const Footer = () => {
  const logos = [
    { src: "/assets/9001.png", alt: "ISO 9001" },
    { src: "/assets/14001.png", alt: "ISO 14001" },
    { src: "/assets/45001.png", alt: "ISO 45001" },
    { src: "/assets/27001.png", alt: "ISO 27001" },
    { src: "/assets/AWS.png", alt: "AWS Certified" },
    { src: "/assets/saa.png", alt: "Solutions Architect" },
  ];

  return (
    <footer style={{ padding: "1rem 0 2rem", textAlign: "center", background: "var(--bg-color)", color: "var(--text-muted)", fontSize: "0.9rem", position: "relative", zIndex: 10 }}>
      <div style={{ marginTop: "1rem", padding: "0 2rem" }}>
        <TextReveal text="© 2026 - GEM Safety Solutions. Todos los derechos reservados. Trabajamos bajo estándares ISO y AWS" highlightWords={["GEM Safety Solutions", "ISO", "AWS"]} highlightColor="var(--cta-color)" />
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="carousel-item">
              <img src={logo.src} alt={logo.alt} title={logo.alt} />
            </div>
          ))}
          {/* Second set for seamless scroll */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="carousel-item">
              <img src={logo.src} alt={logo.alt} title={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
