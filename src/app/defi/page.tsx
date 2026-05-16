"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeFiHub() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { 
      id: "swap", 
      icon: "💱", 
      title: "Swap", 
      desc: "Intercambia tokens al instante",
      color: "#00d4ff",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)"
    },
    { 
      id: "stake", 
      icon: "💎", 
      title: "Stake", 
      desc: "Gana rendimientos pasivos",
      color: "#b829dd",
      gradient: "linear-gradient(135deg, #b829dd, #8b1fb3)"
    },
    { 
      id: "farm", 
      icon: "🌾", 
      title: "Yield Farm", 
      desc: "Maximiza tus ganancias",
      color: "#22c55e",
      gradient: "linear-gradient(135deg, #22c55e, #16a34a)"
    },
    { 
      id: "analytics", 
      icon: "📊", 
      title: "Analytics", 
      desc: "Métricas en tiempo real",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
  ];

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)" }}>
      {/* Menú Global */}
      <nav className="hamburger-menu" style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={{ 
            width: "50px", 
            height: "50px", 
            background: "linear-gradient(135deg, #00d4ff, #b829dd)", 
            border: "none", 
            borderRadius: "50%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: "6px", 
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 212, 255, 0.4)"
          }}
        >
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "24px", height: "3px", background: "white", borderRadius: "2px" }}></span>
        </button>
        
        {/* Dropdown Menu */}
        <div className="hamburger-dropdown" style={{ 
          position: "absolute", 
          top: "65px", 
          right: "0", 
          background: "rgba(10, 14, 39, 0.95)", 
          backdropFilter: "blur(12px)", 
          border: "1px solid rgba(0, 212, 255, 0.2)", 
          borderRadius: "12px", 
          padding: "0.8rem", 
          minWidth: "220px", 
          opacity: menuOpen ? 1 : 0, 
          visibility: menuOpen ? "visible" : "hidden", 
          transform: menuOpen ? "translateY(0)" : "translateY(-10px)", 
          transition: "0.3s",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
        }}>
          <Link href="/" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🏠 Inicio</Link>
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>🚀 DeFi Hub</Link>
          <Link href="/pago" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💳 Pagar</Link>
          <Link href="/contacto" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="cyber-title text-4xl md:text-5xl mb-4" style={{ 
            background: "linear-gradient(135deg, #00d4ff, #b829dd, #ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))"
          }}>
            PLATAFORMA DeFi
          </h1>
          <p className="cyber-subtitle" style={{ 
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0, 212, 255, 0.15)",
            borderRadius: "16px",
            padding: "1.2rem 1.8rem"
          }}>
            Gestiona tus activos digitales con poder institucional
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((sec) => (
            <Link key={sec.id} href={`/defi/${sec.id}`}>
              <div 
                className="cyber-panel group" 
                style={{ 
                  background: "rgba(10, 14, 39, 0.65)", 
                  backdropFilter: "blur(16px)",
                  border: `2px solid ${sec.color}44`, 
                  borderRadius: "20px",
                  padding: "2rem",
                  cursor: "pointer", 
                  transition: "all 0.3s",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = sec.color;
                  target.style.boxShadow = `0 0 40px ${sec.color}44`;
                  target.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = `${sec.color}44`;
                  target.style.boxShadow = "none";
                  target.style.transform = "translateY(0)";
                }}
              >
                {/* Icono Grande */}
                <div style={{ 
                  fontSize: "4rem", 
                  marginBottom: "1rem",
                  filter: `drop-shadow(0 0 10px ${sec.color}66)`,
                  transition: "transform 0.3s"
                }}>
                  {sec.icon}
                </div>
                
                {/* Título */}
                <h2 className="text-3xl font-bold mb-2 text-white">{sec.title}</h2>
                
                {/* Descripción */}
                <p className="text-gray-400 mb-6">{sec.desc}</p>
                
                {/* Botón Acceder */}
                <div 
                  className="flex items-center gap-2 font-bold text-lg"
                  style={{ 
                    color: sec.color,
                    transition: "transform 0.3s"
                  }}
                >
                  <span>Acceder</span>
                  <span style={{ 
                    transition: "transform 0.3s"
                  }}>→</span>
                </div>

                {/* Efecto de brillo en hover */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(90deg, transparent, ${sec.color}22, transparent)`,
                  transition: "left 0.5s"
                }} />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats adicionales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "TVL", value: "$50M+", color: "#00d4ff" },
            { label: "Usuarios", value: "10K+", color: "#b829dd" },
            { label: "Pools", value: "15+", color: "#22c55e" },
            { label: "Uptime", value: "99.9%", color: "#f59e0b" }
          ].map((stat, i) => (
            <div key={i} className="cyber-panel text-center" style={{ 
              background: "rgba(10, 14, 39, 0.5)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${stat.color}33`,
              padding: "1rem"
            }}>
              <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
