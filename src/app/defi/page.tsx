"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeFiPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("swap");

  return (
    <div className="min-h-screen relative">
      {/* Menú Hamburguesa */}
      <nav className={`hamburger-menu ${menuOpen ? "active" : ""}`}>
        <button 
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className="hamburger-dropdown">
          <Link href="/">🏠 Inicio</Link>
          <Link href="/registro">📝 Registro</Link>
          <Link href="/configuracion">️ Configuración</Link>
          <Link href="/planes">💎 Planes</Link>
          <Link href="/pago">💳 Pagar con MetaMask</Link>
          <Link href="/defi">🚀 Plataforma DeFi</Link>
          <Link href="/contacto">📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-6xl mx-auto">
        <h1 className="cyber-title text-4xl text-center mb-4">
          PLATAFORMA DeFi
        </h1>
        <p className="cyber-subtitle text-center mb-12">
          Gestiona tus activos digitales con poder institucional
        </p>

        {/* Tabs de Navegación */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: "swap", label: " Swap" },
            { id: "stake", label: "💎 Stake" },
            { id: "farm", label: "🌾 Farm" },
            { id: "analytics", label: "📊 Analytics" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido Dinámico */}
        <div className="cyber-panel max-w-2xl mx-auto min-h-[400px]">
          
          {/* SWAP */}
          {activeTab === "swap" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Intercambio de Tokens</h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <label className="block text-sm text-gray-400 mb-2">From</label>
                  <div className="flex gap-2">
                    <input type="number" className="cyber-input mb-0" placeholder="0.00" />
                    <button className="cyber-button py-2 px-4 text-sm whitespace-nowrap">ETH ▼</button>
                  </div>
                </div>
                
                <div className="flex justify-center -my-3 relative z-10">
                  <button className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center border-4 border-[#0a0e27] hover:scale-110 transition-transform">
                    ↓
                  </button>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <label className="block text-sm text-gray-400 mb-2">To</label>
                  <div className="flex gap-2">
                    <input type="number" className="cyber-input mb-0" placeholder="0.00" readOnly />
                    <button className="cyber-button py-2 px-4 text-sm whitespace-nowrap">USDT ▼</button>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-400 px-2">
                  <span>Price Impact</span>
                  <span className="text-green-400">&lt; 0.01%</span>
                </div>

                <button className="cyber-button w-full py-4 mt-4 text-lg">
                  Conectar Wallet para Swapear
                </button>
              </div>
            </div>
          )}

          {/* STAKE */}
          {activeTab === "stake" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Staking de Alto Rendimiento</h2>
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-400/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-lg">PRIM Token</span>
                    <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-bold">12.5% APY</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Bloqueo flexible. Retira cuando quieras.</p>
                  <input type="number" className="cyber-input" placeholder="Cantidad a stakear" />
                  <button className="cyber-button w-full mt-2">Stakear Ahora</button>
                </div>

                <div className="p-5 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-400/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-lg">ETH 2.0</span>
                    <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">4.2% APY</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Staking nativo de Ethereum. Seguro y descentralizado.</p>
                  <input type="number" className="cyber-input" placeholder="Cantidad en ETH" />
                  <button className="cyber-button w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-500">Stakear ETH</button>
                </div>
              </div>
            </div>
          )}

          {/* FARM */}
          {activeTab === "farm" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-pink-400">Yield Farming</h2>
              <div className="grid gap-4">
                <div className="p-5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-400/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">PRIM-ETH LP</span>
                    <span className="text-green-400 font-bold text-lg">45.2% APY</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Pool de liquidez principal. Recompensas en PRIM y ETH.</p>
                  <div className="flex gap-2 mb-4">
                    <input className="cyber-input mb-0 flex-1" placeholder="Liquidity Tokens" />
                  </div>
                  <button className="cyber-button w-full">Depositar LP</button>
                </div>

                <div className="p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">USDC-PRIM LP</span>
                    <span className="text-green-400 font-bold text-lg">28.8% APY</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Stablecoin pool. Menor volatilidad, rendimientos estables.</p>
                  <button className="cyber-button w-full bg-gradient-to-r from-purple-500 to-pink-500">Depositar LP</button>
                </div>
              </div>
            </div>
          )}

          {/* ANALYTICS */}
          {activeTab === "analytics" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Dashboard de Analytics</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-xl text-center border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">$12,450</div>
                  <div className="text-sm text-gray-400">Balance Total</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-1">+$842</div>
                  <div className="text-sm text-gray-400">Ganancias (24h)</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">3</div>
                  <div className="text-sm text-gray-400">Pools Activos</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center border border-white/10">
                  <div className="text-3xl font-bold text-pink-400 mb-1">142d</div>
                  <div className="text-sm text-gray-400">Días Stakeados</div>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="font-bold mb-3 text-gray-300">Historial Reciente</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-green-400">✓ Swap ETH → USDT</span>
                    <span className="text-gray-400">Hace 2h</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-cyan-400">✓ Stake PRIM</span>
                    <span className="text-gray-400">Hace 1d</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400">✓ Harvest Farm</span>
                    <span className="text-gray-400">Hace 3d</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
