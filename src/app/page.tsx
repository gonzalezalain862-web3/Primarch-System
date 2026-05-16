"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // ✅ CLASE DE FONDO CYBER APLICADA AQUÍ:
    <div className="min-h-screen relative overflow-hidden bg-cyber-2">
      {/* Líneas de luz animadas */}
      <div className="light-streak" style={{ top: "20%", animationDelay: "0s" }} />
      <div className="light-streak" style={{ top: "50%", animationDelay: "3s" }} />
      <div className="light-streak" style={{ top: "80%", animationDelay: "6s" }} />

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
          <Link href="/configuracion">⚙️ Configuración</Link>
          <Link href="/planes">💎 Planes</Link>
          <Link href="/pago">💳 Pagar con MetaMask</Link>
          <Link href="/defi">🚀 Plataforma DeFi</Link>
          <Link href="/contacto">📞 Contacto</Link>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative z-10">
        {/* Título Principal */}
        <div className="text-center mb-8">
          <h1 className="cyber-title mb-6">
            PRIMARCH SYSTEM
          </h1>
          
          {/* Subtítulo con efecto cristal */}
          <p className="cyber-subtitle">
            La próxima generación de finanzas descentralizadas. 
            Conectando el futuro de las criptomonedas con tecnología blockchain 
            de vanguardia y seguridad institucional.
          </p>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Seguridad Avanzada</h3>
            <p className="text-gray-300">
              Protección de nivel institucional con encriptación de grado militar 
              y auditorías continuas de smart contracts.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-purple-400">Transacciones Rápidas</h3>
            <p className="text-gray-300">
              Opera en tiempo real con las redes blockchain más rápidas. 
              Sin intermediarios, sin demoras innecesarias.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="text-xl font-bold mb-3 text-pink-400">Multi-Chain</h3>
            <p className="text-gray-300">
              Compatible con Ethereum, BSC, Polygon y más. 
              Gestiona todos tus activos desde una sola plataforma.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Bajas Comisiones</h3>
            <p className="text-gray-300">
              Optimización inteligente de gas fees. 
              Ahorra hasta un 80% en tus transacciones.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="text-xl font-bold mb-3 text-purple-400">Analytics en Tiempo Real</h3>
            <p className="text-gray-300">
              Dashboard completo con métricas, gráficos y análisis 
              predictivo de mercado.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-pink-400">Yield Farming</h3>
            <p className="text-gray-300">
              Maximiza tus ganancias con estrategias automatizadas 
              de staking y liquidity mining.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Link href="/defi">
            <button className="cyber-button text-lg px-12 py-4">
              🚀 Acceder a la Plataforma DeFi
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          <div className="text-center cyber-panel">
            <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
            <div className="text-gray-400">TVL</div>
          </div>
          <div className="text-center cyber-panel">
            <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-400">Usuarios</div>
          </div>
          <div className="text-center cyber-panel">
            <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
            <div className="text-gray-400">Blockchains</div>
          </div>
          <div className="text-center cyber-panel">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </main>
    </div>
  );
}
