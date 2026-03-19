"use client";

import { useState } from "react";
import type { ContactRequest, ContactResponse } from "@/types/contact";
import { Mail, MapPin, Linkedin } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState<ContactRequest>({ name: "", empresa: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data: ContactResponse = await res.json();
      
      if (data.success) {
        setStatus("¡Mensaje enviado correctamente! Nos pondremos en contacto a la brevedad.");
        setFormData({ name: "", empresa: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contact-section" style={{ padding: "8rem 2rem", position: "relative", zIndex: 10, background: "var(--bg-lighter)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="contact-grid">
        
        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "1rem" }}>Iniciemos la Conversación</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Contanos sobre tu desafío. Ya sea una auditoría industrial o un despliegue seguro en la nube, tenemos el expertise para blindar tu negocio.
          </p>
          
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-main)" }}>
              <Mail color="var(--cta-color)" />
              <span>contacto@gemsafetysolutions.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-main)" }}>
              <MapPin color="var(--cta-color)" />
              <span>Córdoba, Argentina (Global Reach)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-main)" }}>
              <Linkedin color="var(--cta-color)" />
              <a href="#" style={{ color: "var(--text-main)", textDecoration: "none" }}>GEM Safety Solutions</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ background: "var(--bg-color)", padding: "3rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.05)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="contact-input"
              />
              <input 
                type="text" 
                placeholder="Empresa" 
                required
                value={formData.empresa}
                onChange={e => setFormData({ ...formData, empresa: e.target.value })}
                className="contact-input"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Email Corporativo" 
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="contact-input"
            />
            
            <textarea 
              placeholder="¿Cómo podemos ayudarte?" 
              required
              rows={5}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="contact-input"
              style={{ resize: "vertical" }}
            />
            
            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                padding: "1rem", 
                borderRadius: "0.5rem", 
                border: "none", 
                background: loading ? "var(--text-muted)" : "var(--cta-color)", 
                color: "var(--bg-color)", 
                fontWeight: "bold", 
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "1.1rem",
                transition: "background 0.3s ease"
              }}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
            {status && <p style={{ color: status.includes("Error") ? "#ff6b6b" : "var(--accent-color)", marginTop: "1rem" }}>{status}</p>}
          </form>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .contact-input {
          flex: 1;
          min-width: 200px;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: white;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }
        .contact-input:focus {
          outline: none;
          border-color: var(--accent-color);
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};
