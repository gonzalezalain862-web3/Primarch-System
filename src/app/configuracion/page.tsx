"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConfiguracionPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState("cyber");

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
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
          <Link href="/configuracion">⚙️ Configuración</Link>
          <Link href="/planes">💎 Planes</Link>
          <Link href="/pago">💳 Pagar con MetaMask</Link>
          <Link href="/defi">🚀 Plataforma DeFi</Link>
          <Link href="/contacto">📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-4xl mx-auto">
        <h1 className="cyber-title text-4xl text-center mb-12">
          CONFIGURACIÓN
        </h1>

        <div className="grid gap-8">
          {/* Idioma */}
          <div className="cyber-panel">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">🌍 Idioma</h2>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    language === lang.code
                      ? "border-cyan-400 bg-cyan-400/20"
                      : "border-purple-400/30 hover:border-cyan-400"
                  }`}
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="font-semibold">{lang.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tema */}
          <div className="cyber-panel">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">🎨 Tema Visual</h2>
            <div className="space-y-4">
              <button
                onClick={() => setTheme("cyber")}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  theme === "cyber"
                    ? "border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                    : "border-purple-400/30 hover:border-cyan-400"
                }`}
              >
                <div className="font-bold text-cyan-400">Cyberpunk</div>
                <div className="text-sm text-gray-400">Azul neón y púrpura futurista</div>
              </button>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="cyber-panel">
            <h2 className="text-2xl font-bold mb-6 text-pink-400">🔔 Notificaciones</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg cursor-pointer">
                <span>Email alerts</span>
                <input type="checkbox" className="w-5 h-5 accent-cyan-400" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg cursor-pointer">
                <span>Transacciones</span>
                <input type="checkbox" className="w-5 h-5 accent-cyan-400" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 bg-white/5 rounded-lg cursor-pointer">
                <span>Promociones</span>
                <input type="checkbox" className="w-5 h-5 accent-cyan-400" />
              </label>
            </div>
          </div>

          {/* Guardar */}
          <button className="cyber-button w-full py-4 text-lg">
            💾 Guardar Cambios
          </button>
        </div>
      </main>
    </div>
  );
}
