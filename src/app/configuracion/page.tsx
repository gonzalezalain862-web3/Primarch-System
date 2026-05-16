"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ConfiguracionPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const [selectedTheme, setSelectedTheme] = useState("cyberpunk");
  const [notifications, setNotifications] = useState({
    email: true,
    transactions: true,
    promotions: false
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [appliedLanguage, setAppliedLanguage] = useState("es");

  // Cargar configuración guardada al montar
  useEffect(() => {
    const savedLang = localStorage.getItem("primarch_language");
    const savedTheme = localStorage.getItem("primarch_theme");
    const savedNotifs = localStorage.getItem("primarch_notifications");
    
    if (savedLang) setLanguage(savedLang);
    if (savedTheme) setSelectedTheme(savedTheme);
    if (savedNotifs) setNotifications(JSON.parse(savedNotifs));
  }, []);

  const handleSave = () => {
    setSaving(true);
    
    // Guardar en localStorage
    localStorage.setItem("primarch_language", language);
    localStorage.setItem("primarch_theme", selectedTheme);
    localStorage.setItem("primarch_notifications", JSON.stringify(notifications));
    
    // Aplicar cambios inmediatamente
    setAppliedLanguage(language);
    document.documentElement.lang = language;
    
    // Aplicar tema al body
    const themeColors = themes[selectedTheme].colors;
    document.documentElement.style.setProperty("--primary-color", themeColors.primary);
    document.documentElement.style.setProperty("--secondary-color", themeColors.secondary);
    
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  const languages = [
    { code: "es", name: "Español", flag: "🇪", greeting: "Hola" },
    { code: "en", name: "English", flag: "🇬🇧", greeting: "Hello" },
    { code: "pt", name: "Português", flag: "🇧🇷", greeting: "Olá" },
    { code: "zh", name: "中文", flag: "🇨🇳", greeting: "你好" },
  ];

  const themes = {
    cyberpunk: {
      name: "Cyberpunk",
      description: "Azul neón y púrpura futurista",
      icon: "🌃",
      colors: { primary: "#00d4ff", secondary: "#b829dd" },
      gradient: "linear-gradient(135deg, #00d4ff, #b829dd)",
      bg: "linear-gradient(135deg, #050810 0%, #0a1128 100%)"
    },
    darkMinimalist: {
      name: "Dark Minimalist",
      description: "Gris oscuro elegante y minimalista",
      icon: "🌑",
      colors: { primary: "#9ca3af", secondary: "#4b5563" },
      gradient: "linear-gradient(135deg, #9ca3af, #4b5563)",
      bg: "linear-gradient(135deg, #111827 0%, #1f2937 100%)"
    },
    neonPurple: {
      name: "Neon Purple",
      description: "Púrpura y rosa vibrante",
      icon: "💜",
      colors: { primary: "#d946ef", secondary: "#ec4899" },
      gradient: "linear-gradient(135deg, #d946ef, #ec4899)",
      bg: "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 100%)"
    },
    oceanBlue: {
      name: "Ocean Blue",
      description: "Azul océano profundo",
      icon: "🌊",
      colors: { primary: "#0ea5e9", secondary: "#06b6d4" },
      gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      bg: "linear-gradient(135deg, #0c4a6e 0%, #075985 100%)"
    },
    matrix: {
      name: "Matrix",
      description: "Verde hacker estilo Matrix",
      icon: "💻",
      colors: { primary: "#22c55e", secondary: "#16a34a" },
      gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
      bg: "linear-gradient(135deg, #022c22 0%, #064e3b 100%)"
    },
    sunset: {
      name: "Sunset",
      description: "Naranja y rojo atardecer",
      icon: "🌅",
      colors: { primary: "#f97316", secondary: "#ef4444" },
      gradient: "linear-gradient(135deg, #f97316, #ef4444)",
      bg: "linear-gradient(135deg, #431407 0%, #7f1d1d 100%)"
    }
  };

  // Textos traducidos
  const translations = {
    es: {
      title: "CONFIGURACIÓN",
      language: "🌍 Idioma",
      theme: "🎨 Tema Visual",
      notifications: "🔔 Notificaciones",
      email: "Email alerts",
      transactions: "Transacciones",
      promotions: "Promociones",
      save: "💾 Guardar Cambios",
      saving: "⏳ Guardando...",
      saved: "✅ ¡Cambios guardados!",
      selectLang: "Selecciona tu idioma preferido"
    },
    en: {
      title: "SETTINGS",
      language: "🌍 Language",
      theme: "🎨 Visual Theme",
      notifications: "🔔 Notifications",
      email: "Email alerts",
      transactions: "Transactions",
      promotions: "Promotions",
      save: "💾 Save Changes",
      saving: "⏳ Saving...",
      saved: "✅ Changes saved!",
      selectLang: "Select your preferred language"
    },
    pt: {
      title: "CONFIGURAÇÕES",
      language: "🌍 Idioma",
      theme: "🎨 Tema Visual",
      notifications: "🔔 Notificações",
      email: "Alertas de email",
      transactions: "Transações",
      promotions: "Promoções",
      save: "💾 Salvar Alterações",
      saving: "⏳ Salvando...",
      saved: "✅ Alterações salvas!",
      selectLang: "Selecione seu idioma preferido"
    },
    zh: {
      title: "设置",
      language: "🌍 语言",
      theme: "🎨 视觉主题",
      notifications: "🔔 通知",
      email: "电子邮件提醒",
      transactions: "交易",
      promotions: "促销",
      save: "💾 保存更改",
      saving: "⏳ 保存中...",
      saved: "✅ 更改已保存!",
      selectLang: "选择您喜欢的语言"
    }
  };

  const t = translations[appliedLanguage as keyof typeof translations] || translations.es;
  const currentTheme = themes[selectedTheme as keyof typeof themes];

  return (
    <div className="min-h-screen relative" style={{ background: currentTheme.bg }}>
      {/* Menú Hamburguesa */}
      <nav className={`hamburger-menu ${menuOpen ? "active" : ""}`} style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
        <button 
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: "45px", height: "45px", background: currentTheme.gradient, border: "none", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", boxShadow: `0 4px 15px ${currentTheme.colors.primary}66`, cursor: "pointer" }}
        >
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px" }}></span>
        </button>
        <div className="hamburger-dropdown" style={{ position: "absolute", top: "60px", right: "0", background: "rgba(10, 14, 39, 0.95)", backdropFilter: "blur(12px)", border: `1px solid ${currentTheme.colors.primary}33`, borderRadius: "12px", padding: "0.8rem", minWidth: "220px", opacity: menuOpen ? 1 : 0, visibility: menuOpen ? "visible" : "hidden", transform: menuOpen ? "translateY(0)" : "translateY(-10px)", transition: "0.3s", boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}>
          <Link href="/" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🏠 Inicio</Link>
          <Link href="/registro" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📝 Registro</Link>
          <Link href="/configuracion" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.25)" }}>⚙️ {t.title}</Link>
          <Link href="/planes" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💎 Planes</Link>
          <Link href="/pago" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>💳 Pagar con MetaMask</Link>
          <Link href="/defi" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>🚀 Plataforma DeFi</Link>
          <Link href="/contacto" style={{ display: "block", padding: "0.7rem 1rem", color: "white", textDecoration: "none", borderRadius: "8px", marginBottom: "0.4rem", background: "rgba(0, 212, 255, 0.08)" }}>📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-5xl mx-auto relative z-10">
        <h1 className="cyber-title text-4xl text-center mb-4" style={{ background: currentTheme.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: `drop-shadow(0 0 20px ${currentTheme.colors.primary}66)` }}>
          {t.title}
        </h1>

        <div className="space-y-8">
          {/* Idioma */}
          <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)", border: `1px solid ${currentTheme.colors.primary}22`, borderRadius: "16px", padding: "1.5rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>{t.language}</h2>
            <p className="text-gray-400 text-sm mb-6">{t.selectLang}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  style={{
                    padding: "1.2rem",
                    borderRadius: "12px",
                    border: language === lang.code ? `2px solid ${currentTheme.colors.primary}` : "2px solid rgba(255, 255, 255, 0.1)",
                    background: language === lang.code ? `${currentTheme.colors.primary}22` : "rgba(255, 255, 255, 0.03)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    transform: language === lang.code ? "scale(1.05)" : "scale(1)",
                    boxShadow: language === lang.code ? `0 0 20px ${currentTheme.colors.primary}44` : "none"
                  }}
                >
                  <div className="text-4xl mb-2">{lang.flag}</div>
                  <div className="font-semibold text-white">{lang.name}</div>
                  {language === lang.code && <div className="text-xs mt-2" style={{ color: currentTheme.colors.primary }}>{lang.greeting}!</div>}
                </button>
              ))}
            </div>
          </div>

          {/* Temas Visuales */}
          <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)", border: `1px solid ${currentTheme.colors.primary}22`, borderRadius: "16px", padding: "1.5rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.colors.secondary }}>{t.theme}</h2>
            <p className="text-gray-400 text-sm mb-6">Elige el estilo visual que más te guste</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTheme(key)}
                  style={{
                    padding: "1.2rem",
                    borderRadius: "12px",
                    border: selectedTheme === key ? `3px solid ${theme.colors.primary}` : "2px solid rgba(255, 255, 255, 0.1)",
                    background: theme.bg,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.3s",
                    transform: selectedTheme === key ? "scale(1.05)" : "scale(1)",
                    boxShadow: selectedTheme === key ? `0 0 25px ${theme.colors.primary}66` : "0 4px 15px rgba(0,0,0,0.3)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {selectedTheme === key && (
                    <div style={{ position: "absolute", top: "8px", right: "8px", width: "24px", height: "24px", background: theme.colors.primary, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>✓</div>
                  )}
                  <div className="text-3xl mb-2">{theme.icon}</div>
                  <div className="font-bold text-white mb-1">{theme.name}</div>
                  <div className="text-xs" style={{ color: theme.colors.primary }}>{theme.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Notificaciones */}
          <div className="cyber-panel" style={{ background: "rgba(10, 14, 39, 0.65)", backdropFilter: "blur(16px)", border: `1px solid ${currentTheme.colors.primary}22`, borderRadius: "16px", padding: "1.5rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: currentTheme.colors.secondary }}>{t.notifications}</h2>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <label key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px", cursor: "pointer" }}>
                  <span className="text-white capitalize">{t[key as keyof typeof t]}</span>
                  <div 
                    onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                    style={{
                      width: "50px", height: "26px", borderRadius: "13px",
                      background: value ? currentTheme.gradient : "rgba(255, 255, 255, 0.1)",
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
              width: "100%", padding: "1.2rem", borderRadius: "50px", fontSize: "1.1rem", fontWeight: "600",
              background: saving ? "rgba(255, 255, 255, 0.1)" : currentTheme.gradient,
              color: "white", border: "none", cursor: saving ? "not-allowed" : "pointer",
              boxShadow: saving ? "none" : `0 4px 20px ${currentTheme.colors.primary}66`,
              transition: "all 0.3s",
              transform: saving ? "scale(1)" : "scale(1.02)"
            }}
          >
            {saving ? t.saving : saved ? t.saved : t.save}
          </button>
        </div>
      </main>
    </div>
  );
}
