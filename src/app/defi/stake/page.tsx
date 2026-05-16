"use client";

import { useState } from "react";
import Link from "next/link";

export default function StakePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)" }}>
      <nav className="hamburger-menu" style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ width: "45px", height: "45px", background: "linear-gradient(135deg, #00d4ff, #b829dd)", border: "none", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
        </button>
        <div className="hamburger-dropdown" style={{ position: "absolute", top: "60px", right: "0", background: "rgba(10, 14, 39, 0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "0.8rem", minWidth: "220px", opacity: menuOpen ? 1 : 0, visibility: menuOpen ? "visible" : "hidden", transform: menuOpen ? "translateY(0)" : "translateY(-10px)", transition: "0.3s" }}>
          <Link href="/defi/swap" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💱 Swap</Link>
          <Link href="/defi/stake" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>💎 Stake</Link>
          <Link href="/defi/farm" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🌾 Farm</Link>
          <Link href="/defi/analytics" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📊 Analytics</Link>
          <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "0.5rem 0" }} />
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "#00d4ff", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem" }}>🔙 Volver a Hub</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-4xl mx-auto relative z-10">
        <h2 className="cyber-title text-3xl text-center mb-8">Staking</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "PRIM Token", apy: "12.5%", type: "Flexible" },
            { name: "ETH 2.0", apy: "4.2%", type: "Locked 24m" },
            { name: "USDC", apy: "6.8%", type: "Flexible" },
            { name: "wBTC", apy: "2.1%", type: "Locked 12m" }
          ].map((pool, i) => (
            <div key={i} className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.8)", border: "1px solid rgba(184, 41, 221, 0.3)" }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">{pool.type}</span>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-1" style={{ color: "#b829dd" }}>{pool.apy}</div>
                <div className="text-gray-400 text-sm">APY Estimado</div>
              </div>
              <input type="text" className="cyber-input" placeholder="Cantidad a stakear" />
              <button className="cyber-button w-full" style={{ background: "linear-gradient(135deg, #b829dd, #ff00ff)" }}>
                Stakear {pool.name}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
