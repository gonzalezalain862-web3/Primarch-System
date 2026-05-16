"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeFiHub() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "swap", title: "Swap 💱", desc: "Intercambia tokens al instante", color: "#00d4ff" },
    { id: "stake", title: "Stake 💎", desc: "Gana rendimientos pasivos", color: "#b829dd" },
    { id: "farm", title: "Yield Farm 🌾", desc: "Maximiza tus ganancias", color: "#22c55e" },
    { id: "analytics", title: "Analytics 📊", desc: "Métricas en tiempo real", color: "#f59e0b" },
  ];

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)" }}>
      {/* Menú Global */}
      <nav className="hamburger-menu" style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ width: "45px", height: "45px", background: "linear-gradient(135deg, #00d4ff, #b829dd)", border: "none", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
        </button>
        <div className="hamburger-dropdown" style={{ position: "absolute", top: "60px", right: "0", background: "rgba(10, 14, 39, 0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "0.8rem", minWidth: "220px", opacity: menuOpen ? 1 : 0, visibility: menuOpen ? "visible" : "hidden", transform: menuOpen ? "translateY(0)" : "translateY(-10px)", transition: "0.3s" }}>
          <Link href="/" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🏠 Inicio</Link>
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>🚀 DeFi Hub</Link>
          <Link href="/pago" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💳 Pagar</Link>
          <Link href="/contacto" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-5xl mx-auto relative z-10">
        <h1 className="cyber-title text-4xl text-center mb-4">PLATAFORMA DeFi</h1>
        <p className="cyber-subtitle mb-12">Gestiona tus activos digitales con poder institucional</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((sec) => (
            <Link key={sec.id} href={`/defi/${sec.id}`}>
              <div className="cyber-panel group" style={{ background: "rgba(10, 14, 39, 0.65)", border: `1px solid ${sec.color}44`, cursor: "pointer", transition: "all 0.3s", height: "100%" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = sec.color;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${sec.color}33`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${sec.color}44`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="text-4xl mb-4">{sec.title.split(" ")[1]}</div>
                <h2 className="text-2xl font-bold mb-2 text-white">{sec.title.split(" ")[0]}</h2>
                <p className="text-gray-400">{sec.desc}</p>
                <div className="mt-4 text-right font-bold" style={{ color: sec.color }}>Acceder →</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
