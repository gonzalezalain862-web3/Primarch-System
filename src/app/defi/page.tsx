"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeFiHub() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "swap", icon: "💱", title: "Swap", desc: "Intercambia tokens al instante", color: "#00d4ff" },
    { id: "stake", icon: "💎", title: "Stake", desc: "Gana rendimientos pasivos", color: "#b829dd" },
    { id: "farm", icon: "🌾", title: "Yield Farm", desc: "Maximiza tus ganancias", color: "#22c55e" },
    { id: "analytics", icon: "📊", title: "Analytics", desc: "Métricas en tiempo real", color: "#f59e0b" },
  ];

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)", overflowX: "hidden" }}>
      
      {/* 🔧 MENÚ HAMBURGUESA COMPLETO */}
      <div style={{ 
        position: "fixed", 
        top: "1.5rem", 
        right: "1.5rem", 
        zIndex: 99999,
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-end"
      }}>
        
        {/* Botón Hamburguesa */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          onTouchStart={() => setMenuOpen(!menuOpen)} 
          style={{
            width: "56px", 
            height: "56px", 
            background: "linear-gradient(135deg, #00d4ff, #b829dd)", 
            border: "none", 
            borderRadius: "50%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: "6px",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0, 212, 255, 0.6)",
            position: "relative",
            zIndex: 99999
          }}
        >
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
        </button>

        {/* Menú Desplegable COMPLETO */}
        <div style={{
          marginTop: "10px",
          background: "rgba(10, 14, 39, 0.98)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(0, 212, 255, 0.3)",
          borderRadius: "16px", 
          padding: "12px",
          minWidth: "260px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
          opacity: menuOpen ? "1" : "0",
          visibility: menuOpen ? "visible" : "hidden",
          transform: menuOpen ? "scale(1)" : "scale(0.95)",
          transformOrigin: "top right",
          transition: "all 0.2s ease-in-out",
          pointerEvents: menuOpen ? "auto" : "none",
          zIndex: 99998
        }}>
          {/* Sección Principal */}
          <div style={{ marginBottom: "8px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "12px", color: "#00d4ff", marginBottom: "8px", fontWeight: "bold" }}>PRINCIPAL</div>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>🏠 Inicio</Link>
            <Link href="/registro" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>📝 Registro</Link>
            <Link href="/configuracion" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>⚙️ Configuración</Link>
            <Link href="/planes" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>💎 Planes</Link>
          </div>

          {/* Sección DeFi */}
          <div style={{ marginBottom: "8px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "12px", color: "#b829dd", marginBottom: "8px", fontWeight: "bold" }}>PLATAFORMA DeFi</div>
            <Link href="/defi" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "#00d4ff", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(0, 212, 255, 0.15)", fontWeight: "bold", fontSize: "15px" }}>🚀 DeFi Hub</Link>
            <Link href="/defi/swap" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px", paddingLeft: "28px" }}>💱 Swap</Link>
            <Link href="/defi/stake" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px", paddingLeft: "28px" }}>💎 Stake</Link>
            <Link href="/defi/farm" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px", paddingLeft: "28px" }}>🌾 Yield Farm</Link>
            <Link href="/defi/analytics" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px", paddingLeft: "28px" }}>📊 Analytics</Link>
          </div>

          {/* Sección Pagos y Contacto */}
          <div>
            <div style={{ fontSize: "12px", color: "#22c55e", marginBottom: "8px", fontWeight: "bold" }}>PAGOS Y SOPORTE</div>
            <Link href="/pago" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "4px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>💳 Pagar con MetaMask</Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 14px", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0px", background: "rgba(255, 255, 255, 0.05)", fontSize: "15px" }}>📞 Contacto</Link>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="px-4 py-24 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="cyber-title text-4xl md:text-5xl mb-4">PLATAFORMA DeFi</h1>
          <p className="cyber-subtitle">Gestiona tus activos digitales con poder institucional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((sec) => (
            <Link key={sec.id} href={`/defi/${sec.id}`}>
              <div 
                className="group"
                style={{ 
                  background: "rgba(10, 14, 39, 0.65)", 
                  backdropFilter: "blur(10px)",
                  border: `2px solid ${sec.color}33`, 
                  borderRadius: "20px", 
                  padding: "2rem", 
                  cursor: "pointer", 
                  transition: "transform 0.3s, border-color 0.3s",
                  height: "100%" 
                }}
                onMouseEnter={(e) => {
                   e.currentTarget.style.transform = "translateY(-5px)";
                   e.currentTarget.style.borderColor = sec.color;
                }}
                onMouseLeave={(e) => {
                   e.currentTarget.style.transform = "translateY(0)";
                   e.currentTarget.style.borderColor = `${sec.color}33`;
                }}
              >
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{sec.icon}</div>
                <h2 className="text-2xl font-bold mb-2 text-white">{sec.title}</h2>
                <p className="text-gray-400 mb-4">{sec.desc}</p>
                <div className="font-bold" style={{ color: sec.color }}>Acceder →</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
