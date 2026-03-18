"use client";

import { CanvasScene } from "@/components/CanvasScene";
import { useState } from "react";
import type { ContactRequest, ContactResponse } from "@/types/contact";

export default function Home() {
  const [formData, setFormData] = useState<ContactRequest>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data: ContactResponse = await res.json();
      
      if (data.success) {
        setStatus("¡Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error de conexión con el servidor.");
    }
  };

  return (
    <main style={{ minHeight: "300vh", position: "relative" }}>
      <CanvasScene />
      
      {/* Contenido HTML Flotante */}
      <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          Gem Front Experience
        </h1>
        <p style={{ fontSize: "1.5rem" }}>Scroll para explorar la animación 3D</p>
      </section>

      <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "2rem", borderRadius: "1rem", color: "white", maxWidth: "400px", width: "100%" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contacto</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input 
              type="text" 
              placeholder="Nombre" 
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none" }}
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none" }}
            />
            <textarea 
              placeholder="Mensaje" 
              required
              rows={4}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none", resize: "none" }}
            />
            <button type="submit" style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none", background: "#8B5CF6", color: "white", fontWeight: "bold", cursor: "pointer" }}>
              Enviar
            </button>
          </form>
          {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
        </div>
      </section>
    </main>
  );
}
