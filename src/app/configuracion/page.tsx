"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConfiguracionPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState("cyber");
  const [notifications, setNotifications] = useState({
    email: true,
    transactions: true,
    promotions: false
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaving(true);
    // Simular guardado
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #050810 0%, #0a1128 100%)" }}>
      {/* Menú Hamburguesa */}
      <nav className={`hamburger-menu ${menuOpen ? "active" : ""}`} style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
        <button 
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: "45px", height: "45px", background: "linear-gradient(135deg, #00d4ff, #b829dd)", border: "none", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", boxShadow: "0 4px 15px rgba(0, 212, 255, 0.4)", cursor: "pointer" }}
        >
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
        </button>
        <div className="hamburger-dropdown" style={{ position: "absolute", top: "60px", right: "0", background: "rgba(10, 14, 39, 0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "0.8rem", minWidth: "220px", opacity: menuOpen ? 1 : 0, visibility: menuOpen ? "visible" : "hidden", transform: menuOpen ? "translateY(0)" : "translateY(-10px)", transition: "0.3s", boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}>
          <Link href="/" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🏠 Inicio</Link>
          <Link href="/registro" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📝 Registro</Link>
          <Link href="/configuracion" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>⚙️ Configuración</Link>
          <Link href="/planes" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💎 Planes</Link>
          <Link href="/pago" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💳 Pagar con MetaMask</Link>
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🚀 Plataforma DeFi</Link>
          <Link href="/contacto" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-4xl mx-auto relative z-10">
        <h1 className="cyber-title text-4xl text-center mb-12">CONFIGURACIÓN</h1>

        <div className="space-y-8">
          {/* Idioma */}
          <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)", border: "1px solid rgba(0, 212, 255, 0.15)", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#00d4ff" }}>🌍 Idioma</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  style={{
                    padding: "1rem",
                    borderRadius: "12px",
                    border: language === lang.code ? "2px solid #00d4ff" : "2px solid rgba(184, 41, 221, 0.3)",
                    background: language === lang.code ? "rgba(0, 212, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    transform: language === lang.code ? "scale(1.05)" : "scale(1)"
                  }}
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="font-semibold text-white">{lang.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tema Visual */}
          <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)", border: "1px solid rgba(0, 212, 255, 0.15)", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#b829dd" }}>🎨 Tema Visual</h2>
            <div className="space-y-4">
              <button
                onClick={() => setTheme("cyber")}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: theme === "cyber" ? "2px solid #00d4ff" : "2px solid rgba(184, 41, 221, 0.3)",
                  background: theme === "cyber" ? "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(184, 41, 221, 0.2))" : "rgba(255, 255, 255, 0.03)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s"
                }}
              >
                <div className="font-bold" style={{ color: "#00d4ff" }}>Cyberpunk</div>
                <div className="text-sm text-gray-400">Azul neón y púrpura futurista</div>
              </button>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)", border: "1px solid rgba(0, 212, 255, 0.15)", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#ff00ff" }}>🔔 Notificaciones</h2>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <label key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px", cursor: "pointer" }}>
                  <span className="text-white capitalize">{key === "email" ? "Email alerts" : key === "transactions" ? "Transacciones" : "Promociones"}</span>
                  <div 
                    onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                    style={{
                      width: "50px", height: "26px", borderRadius: "13px",
                      background: value ? "linear-gradient(135deg, #00d4ff, #b829dd)" : "rgba(255, 255, 255, 0.1)",
                      position: "relative", cursor: "pointer", transition: "background 0.3s"
                    }}
                  >
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%", background: "white",
                      position: "absolute", top: "3px", left: value ? "27px" : "3px",
                      transition: "left 0.3s", boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
                    }} />
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Botón Guardar */}
          <button 
            onClick={handleSave}
            disabled={saving}
            style={{
              width: "100%", padding: "1rem", borderRadius: "50px", fontSize: "1.1rem", fontWeight: "600",
              background: saving ? "rgba(255, 255, 255, 0.1)" : "linear-gradient(135deg, #00d4ff, #b829dd)",
              color: "white", border: "none", cursor: saving ? "not-allowed" : "pointer",
              boxShadow: saving ? "none" : "0 4px 20px rgba(0, 212, 255, 0.4)",
              transition: "all 0.3s"
            }}
          >
            {saving ? "⏳ Guardando..." : saved ? "✅ ¡Cambios guardados!" : "💾 Guardar Cambios"}
          </button>
        </div>
      </main>
    </div>
  );
}
