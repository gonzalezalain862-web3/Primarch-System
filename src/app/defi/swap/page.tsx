"use client";

import { useState } from "react";
import Link from "next/link";

export default function SwapPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)" }}>
      {/* Menú DeFi Específico */}
      <nav className="hamburger-menu" style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ width: "45px", height: "45px", background: "linear-gradient(135deg, #00d4ff, #b829dd)", border: "none", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
        </button>
        <div className="hamburger-dropdown" style={{ position: "absolute", top: "60px", right: "0", background: "rgba(10, 14, 39, 0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "0.8rem", minWidth: "220px", opacity: menuOpen ? 1 : 0, visibility: menuOpen ? "visible" : "hidden", transform: menuOpen ? "translateY(0)" : "translateY(-10px)", transition: "0.3s" }}>
          <Link href="/defi/swap" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>💱 Swap</Link>
          <Link href="/defi/stake" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💎 Stake</Link>
          <Link href="/defi/farm" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🌾 Farm</Link>
          <Link href="/defi/analytics" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📊 Analytics</Link>
          <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "0.5rem 0" }} />
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "#00d4ff", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem" }}>🔙 Volver a Hub</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-md mx-auto relative z-10">
        <h2 className="cyber-title text-3xl text-center mb-8">Swap</h2>
        
        <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.8)", border: "1px solid rgba(0, 212, 255, 0.2)" }}>
          <div className="mb-4">
            <label className="text-gray-400 text-sm mb-2 block">From</label>
            <input 
              type="number" 
              className="cyber-input" 
              placeholder="0.00" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              style={{ background: "rgba(0,0,0,0.3)", borderColor: "#00d4ff" }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Balance: 0.00 ETH</span>
              <span style={{ color: "#00d4ff", cursor: "pointer" }}>MAX</span>
            </div>
          </div>

          <div className="flex justify-center -my-3 relative z-10">
            <div style={{ background: "#1a1f35", borderRadius: "50%", padding: "0.5rem", border: "1px solid #00d4ff" }}>↓</div>
          </div>

          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-2 block">To</label>
            <input 
              type="number" 
              className="cyber-input" 
              placeholder="0.00" 
              readOnly 
              value={amount ? (parseFloat(amount) * 2500).toFixed(2) : ""}
              style={{ background: "rgba(0,0,0,0.3)", borderColor: "#b829dd" }}
            />
            <div className="text-xs text-gray-500 mt-1">Balance: 0.00 USDT</div>
          </div>

          <button className="cyber-button w-full" style={{ background: "linear-gradient(135deg, #00d4ff, #b829dd)" }}>
            Conectar Wallet para Swapear
          </button>
        </div>
      </main>
    </div>
  );
}
