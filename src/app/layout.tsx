import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// JSON-LD estructurado
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "GEM Safety Solutions",
  "image": "https://gem-safety-solutions.vercel.app/logogem.png",
  "description": "Consultora Híbrida en Córdoba: Seguridad e Higiene Industrial, Sistemas de Gestión ISO (9001, 14001, 45001) y Ciberseguridad Cloud (ISO 27001 & AWS).",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Córdoba",
    "addressCountry": "AR"
  },
  "url": "https://gem-safety-solutions.vercel.app/"
};

export const metadata: Metadata = {
  title: "GEM Safety Solutions | Seguridad Industrial y Ciberseguridad AWS en Córdoba",
  description: "Consultora Híbrida: Expertos en Seguridad e Higiene Industrial (Córdoba, Argentina) e Infraestructura Cloud Segura (ISO 27001 & AWS). Protegemos plantas físicas y entornos digitales.",
  keywords: ["Seguridad Industrial", "Higiene y Seguridad Córdoba", "ISO 27001", "Ciberseguridad", "AWS Córdoba", "Consultoría Cloud", "Auditoría de Sistemas de Gestión", "ISO 9001", "ISO 14001", "ISO 45001"],
  authors: [{ name: "GEM Safety Solutions" }],
  openGraph: {
    title: "GEM Safety Solutions | La fusión entre Seguridad Industrial y Cloud AWS",
    description: "Blindamos tu Industria con Tecnología y Cumplimiento Normativo. Aseguramos tus plantas industriales en Córdoba y tu infraestructura en AWS bajo normas ISO.",
    url: "https://gem-safety-solutions.vercel.app/",
    siteName: "GEM Safety Solutions",
    images: [
      {
        url: "https://gem-safety-solutions.vercel.app/logogem.png", 
        width: 1200,
        height: 630,
        alt: "GEM Safety Solutions - Seguridad Industrial & Cloud",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEM Safety Solutions | Seguridad Física e Infraestructura Digital",
    description: "Lideramos tanto en Seguridad e Higiene Industrial como en Arquitectura y Auditoría Cloud (AWS, ISO 27001). Protegé tu negocio hoy.",
    images: ["https://gem-safety-solutions.vercel.app/logogem.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
