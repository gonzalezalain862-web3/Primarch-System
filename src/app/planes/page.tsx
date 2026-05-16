"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlanesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const planes = [
    {
      name: "Básico",
      price: "Gratis",
      features: ["Wallet básica", "Swap tokens", "Staking simple", "Soporte email"],
      color: "cyan"
    },
    {
      name: "Pro",
      price: "$29/mes",
      features: ["Todo en Básico", "Yield farming avanzado", "Analytics premium", "Soporte 24/7", "Sin comisiones de swap"],
      color: "purple",
      popular: true
    },
    {
      name: "Institucional",
      price: "$99/mes",
      features: ["Todo en Pro", "API access", "White label", "Gestor dedicado", "Auditorías personalizadas"],
      color: "pink"
    }
  ];

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

      <main className="px-4 py-20">
        <h1 className="cyber-title text-4xl text-center mb-4">PLANES</h1>
        <p className="cyber-subtitle text-center mb-16">
          Elige el plan que mejor se adapte a tus necesidades
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planes.map((plan, index) => (
            <div 
              key={index}
              className={`cyber-panel relative ${plan.popular ? "border-2 border-cyan-400 scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  MÁS POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
              <div className="text-4xl font-bold text-center mb-8 text-cyan-400">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pago">
                <button className="cyber-button w-full">
                  Seleccionar Plan
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
