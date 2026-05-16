"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnalyticsPage() {
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
          <Link href="/defi/stake" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💎 Stake</Link>
          <Link href="/defi/farm" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🌾 Farm</Link>
          <Link href="/defi/analytics" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>📊 Analytics</Link>
          <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "0.5rem 0" }} />
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "#00d4ff", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem" }}>🔙 Volver a Hub</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-4xl mx-auto relative z-10">
        <h2 className="cyber-title text-3xl text-center mb-8">Analytics</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { label: "TVL Total", value: "$14.2M", color: "#00d4ff" },
            { label: "Ganancias (24h)", value: "+$4,521", color: "#22c55e" },
            { label: "Pools Activos", value: "12", color: "#b829dd" },
            { label: "Volumen (24h)", value: "$2.1M", color: "#f59e0b" }
          ].map((stat, i) => (
            <div key={i} className="cyber-panel text-center" style={{ background: "rgba(10, 14, 39, 0.8)", border: `1px solid ${stat.color}33` }}>
              <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.8)", border: "1px solid rgba(0, 212, 255, 0.2)", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-4 text-white">Historial de Transacciones</h3>
          <div className="space-y-3">
            {[
              { type: "Swap", detail: "ETH → USDT", amount: "-0.5 ETH", time: "Hace 2h", color: "#00d4ff" },
              { type: "Stake", detail: "PRIM Token", amount: "+1200 PRIM", time: "Hace 5h", color: "#b829dd" },
              { type: "Farm", detail: "Harvest", amount: "+45.2 USDT", time: "Hace 1d", color: "#22c55e" }
            ].map((tx, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border-l-4" style={{ borderColor: tx.color }}>
                <div>
                  <div className="font-bold text-white">{tx.type}</div>
                  <div className="text-sm text-gray-400">{tx.detail}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold" style={{ color: tx.color }}>{tx.amount}</div>
                  <div className="text-xs text-gray-500">{tx.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
