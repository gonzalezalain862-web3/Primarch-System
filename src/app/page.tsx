"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // ✅ ESTILO INLINE FORZADO PARA EL FONDO
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.2) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 100%, rgba(184, 41, 221, 0.2) 0%, transparent 60%),
          linear-gradient(180deg, #050810 0%, #0a1128 100%)
        `,
        position: 'relative'
      }}
    >
      {/* Overlay de cuadrícula */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Líneas de luz animadas */}
      <div className="light-streak" style={{ top: "20%", animationDelay: "0s", position: 'absolute', width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, #00d4ff, #b829dd, transparent)', animation: 'streak 8s linear infinite', zIndex: 1 }} />
      
      {/* Menú Hamburguesa */}
      <nav className={`hamburger-menu ${menuOpen ? "active" : ""}`} style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 1000 }}>
        <button 
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: '45px', height: '45px',
            background: 'linear-gradient(135deg, #00d4ff, #b829dd)',
            border: 'none', borderRadius: '50%',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px',
            boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)',
            cursor: 'pointer'
          }}
        >
          <span style={{ width: '20px', height: '2px', background: 'white', borderRadius: '2px', transition: '0.3s' }}></span>
          <span style={{ width: '20px', height: '2px', background: 'white', borderRadius: '2px', transition: '0.3s' }}></span>
          <span style={{ width: '20px', height: '2px', background: 'white', borderRadius: '2px', transition: '0.3s' }}></span>
        </button>
        
        {/* Dropdown */}
        <div className="hamburger-dropdown" style={{
          position: 'absolute', top: '60px', right: '0',
          background: 'rgba(10, 14, 39, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '12px', padding: '0.8rem',
          minWidth: '220px',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: '0.3s',
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
        }}>
          <Link href="/" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}> Inicio</Link>
          <Link href="/registro" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}>📝 Registro</Link>
          <Link href="/configuracion" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}>⚙️ Configuración</Link>
          <Link href="/planes" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}>💎 Planes</Link>
          <Link href="/pago" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}>💳 Pagar con MetaMask</Link>
          <Link href="/defi" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}>🚀 Plataforma DeFi</Link>
          <Link href="/contacto" style={{ display: 'block', padding: '0.7rem 1rem', color: 'white', textDecoration: 'none', borderRadius: '8px', marginBottom: '0.4rem', background: 'rgba(0, 212, 255, 0.08)' }}>📞 Contacto</Link>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative" style={{ zIndex: 10 }}>
        {/* Título Principal */}
        <div className="text-center mb-8">
          <h1 
            className="cyber-title mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00d4ff, #b829dd, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))',
              letterSpacing: '1px'
            }}
          >
            PRIMARCH SYSTEM
          </h1>
          
          {/* Subtítulo con efecto cristal */}
          <p 
            className="cyber-subtitle"
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              margin: '1.5rem auto',
              lineHeight: '1.7',
              padding: '1.2rem 1.8rem',
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              borderRadius: '16px',
              maxWidth: '800px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
            }}
          >
            La próxima generación de finanzas descentralizadas. 
            Conectando el futuro de las criptomonedas con tecnología blockchain 
            de vanguardia y seguridad institucional.
          </p>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {[
            { icon: "🔐", title: "Seguridad Avanzada", color: "#00d4ff", desc: "Protección de nivel institucional con encriptación de grado militar y auditorías continuas de smart contracts." },
            { icon: "⚡", title: "Transacciones Rápidas", color: "#b829dd", desc: "Opera en tiempo real con las redes blockchain más rápidas. Sin intermediarios, sin demoras innecesarias." },
            { icon: "🌐", title: "Multi-Chain", color: "#ff00ff", desc: "Compatible con Ethereum, BSC, Polygon y más. Gestiona todos tus activos desde una sola plataforma." },
            { icon: "💰", title: "Bajas Comisiones", color: "#00d4ff", desc: "Optimización inteligente de gas fees. Ahorra hasta un 80% en tus transacciones." },
            { icon: "📊", title: "Analytics en Tiempo Real", color: "#b829dd", desc: "Dashboard completo con métricas, gráficos y análisis predictivo de mercado." },
            { icon: "🎯", title: "Yield Farming", color: "#ff00ff", desc: "Maximiza tus ganancias con estrategias automatizadas de staking y liquidity mining." }
          ].map((item, i) => (
            <div 
              key={i} 
              className="feature-card"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '14px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLElement).style.borderColor = item.color;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px ${item.color}33`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 212, 255, 0.15)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem', filter: `drop-shadow(0 0 8px ${item.color}66)` }}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Link href="/defi">
            <button 
              className="cyber-button text-lg px-12 py-4"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #b829dd)',
                color: 'white',
                border: 'none',
                padding: '0.9rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 30px rgba(0, 212, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.4)';
              }}
            >
               Acceder a la Plataforma DeFi
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {[
            { value: "$50M+", label: "TVL", color: "#00d4ff" },
            { value: "10K+", label: "Usuarios", color: "#b829dd" },
            { value: "15+", label: "Blockchains", color: "#ff00ff" },
            { value: "99.9%", label: "Uptime", color: "#00d4ff" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="text-center cyber-panel"
              style={{
                background: 'rgba(10, 14, 39, 0.65)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
