"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const whatsappNumber = "584222100167";
  const baseMessage = "Hola! Estoy interesado en Primarch System.";

  const handleWhatsAppClick = (option: string) => {
    const fullMessage = `${baseMessage}%0A%0ATema: ${option}`;
    const url = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;
    window.open(url, "_blank");
  };

  const whatsappOptions = [
    { icon: "💡", text: "Características de la plataforma" },
    { icon: "💰", text: "Planes y precios" },
    { icon: "🔧", text: "Soporte técnico" },
    { icon: "🔌", text: "Integraciones y API" },
    { icon: "❓", text: "Otro tema" }
  ];

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)" }}>
      
      {/* Menú Hamburguesa */}
      <div style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 99999 }}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "56px", height: "56px",
            background: "linear-gradient(135deg, #00d4ff, #b829dd)",
            border: "none", borderRadius: "50%",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "6px",
            cursor: "pointer", boxShadow: "0 4px 20px rgba(0, 212, 255, 0.6)", zIndex: 100000, position: "relative"
          }}
        >
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
        </button>

        {menuOpen && (
          <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99998, backdropFilter: "blur(3px)" }} />
        )}

        <div style={{
          position: "absolute", top: "65px", right: "0",
          background: "rgba(10, 14, 39, 0.98)", backdropFilter: "blur(15px)",
          border: "1px solid rgba(0, 212, 255, 0.3)", borderRadius: "16px", padding: "12px", minWidth: "260px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
          opacity: menuOpen ? "1" : "0", visibility: menuOpen ? "visible" : "hidden",
          transform: menuOpen ? "scale(1)" : "scale(0.95)", transformOrigin: "top right",
          transition: "all 0.25s ease-out", pointerEvents: menuOpen ? "auto" : "none", zIndex: 99999
        }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>🏠 Inicio</Link>
          <Link href="/defi" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>🚀 DeFi Hub</Link>
          <Link href="/pago" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>💳 Pagar</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 14px", color: "#00d4ff", textDecoration: "none", borderRadius: "8px", marginBottom: "0px", background: "rgba(0, 212, 255, 0.15)", fontWeight: "bold", fontSize: "15px" }}>📞 Contacto</Link>
        </div>
      </div>

      <main className="px-4 py-20 max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="cyber-title text-4xl md:text-5xl mb-4" style={{ 
            background: "linear-gradient(135deg, #00d4ff, #b829dd, #ff00ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))"
          }}>
            CONTACTO
          </h1>
          <p className="cyber-subtitle" style={{ 
            background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(0, 212, 255, 0.15)", borderRadius: "16px",
            padding: "1.2rem 1.8rem"
          }}>
            Nuestro equipo de soporte está disponible <span style={{ color: "#00d4ff", fontWeight: "bold" }}>24/7</span> para asistirte
          </p>
        </div>

        {/* Tarjetas de Contacto */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Email */}
          <div style={{
            background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)",
            border: "2px solid rgba(0, 212, 255, 0.3)", borderRadius: "20px",
            padding: "2rem", textAlign: "center",
            boxShadow: "0 8px 32px rgba(0, 212, 255, 0.15)",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00d4ff";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 212, 255, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 212, 255, 0.15)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📧</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#00d4ff" }}>Correo Electrónico</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Para consultas formales o documentación técnica. Respondemos en menos de 24 horas.
            </p>
            <a 
              href="mailto:asistent.ai213@gmail.com"
              style={{
                display: "inline-block", padding: "0.9rem 2rem",
                background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                color: "white", textDecoration: "none", borderRadius: "50px",
                fontWeight: "600", boxShadow: "0 4px 15px rgba(0, 212, 255, 0.4)",
                transition: "all 0.3s"
              }}
            >
              Enviar Email
            </a>
            <p className="text-xs text-gray-500 mt-4 font-mono">asistent.ai213@gmail.com</p>
          </div>

          {/* WhatsApp */}
          <div style={{
            background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)",
            border: "2px solid rgba(34, 197, 94, 0.3)", borderRadius: "20px",
            padding: "2rem", textAlign: "center",
            boxShadow: "0 8px 32px rgba(34, 197, 94, 0.15)",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#22c55e";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.3)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(34, 197, 94, 0.15)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💬</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#22c55e" }}>WhatsApp Directo</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Respuesta inmediata en horario laboral. Ideal para dudas rápidas.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", padding: "0.9rem 2rem",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "white", textDecoration: "none", borderRadius: "50px",
                fontWeight: "600", boxShadow: "0 4px 15px rgba(34, 197, 94, 0.4)",
                transition: "all 0.3s"
              }}
            >
              Iniciar Chat
            </a>
            <p className="text-xs text-gray-500 mt-4 font-mono">+58 422-2100167</p>
          </div>
        </div>

        {/* Opciones de WhatsApp */}
        <div style={{
          background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)",
          border: "2px solid rgba(184, 41, 221, 0.3)", borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 32px rgba(184, 41, 221, 0.15)"
        }}>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ 
            background: "linear-gradient(135deg, #b829dd, #ff00ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            💬 ¿Sobre qué tema necesitas ayuda?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatsappOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(option.text)}
                style={{
                  padding: "1rem 1.2rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: `1px solid rgba(184, 41, 221, 0.2)`,
                  borderRadius: "12px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(184, 41, 221, 0.15)";
                  e.currentTarget.style.borderColor = "#b829dd";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(184, 41, 221, 0.2)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{option.icon}</span>
                <span className="text-white text-sm">{option.text}</span>
                <span style={{ marginLeft: "auto", color: "#b829dd" }}>→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-gray-500 text-sm">
            Primarch System © 2026 • DeFi Seguro & Descentralizado
          </p>
        </div>
      </main>
    </div>
  );
}
