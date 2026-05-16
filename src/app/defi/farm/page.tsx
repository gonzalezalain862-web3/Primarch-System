"use client";

import { useState } from "react";
import Link from "next/link";

export default function FarmPage() {
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
          <Link href="/defi/farm" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>🌾 Farm</Link>
          <Link href="/defi/analytics" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📊 Analytics</Link>
          <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "0.5rem 0" }} />
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "#00d4ff", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem" }}>🔙 Volver a Hub</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-4xl mx-auto relative z-10">
        <h2 className="cyber-title text-3xl text-center mb-8">Yield Farming</h2>
        
        <div className="space-y-6">
          {[
            { pair: "PRIM-ETH", apy: "124.5%", tvl: "$2.4M" },
            { pair: "USDC-PRIM", apy: "45.2%", tvl: "$1.8M" },
            { pair: "ETH-DAI", apy: "12.8%", tvl: "$5.1M" }
          ].map((pool, i) => (
            <div key={i} className="cyber-panel flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: "rgba(10, 14, 39, 0.8)", border: "1px solid rgba(34, 197, 94, 0.3)" }}>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(34, 197, 94, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>🌾</div>
                <div>
                  <div className="text-xl font-bold text-white">{pool.pair}</div>
                  <div className="text-gray-400 text-sm">TVL: {pool.tvl}</div>
                </div>
              </div>
              <div className="text-center md:text-right w-full md:w-auto">
                <div className="text-3xl font-bold" style={{ color: "#22c55e" }}>{pool.apy}</div>
                <button className="cyber-button text-sm mt-2 md:mt-0" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>Depositar LP</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
