"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const whatsappNumber = "584222100167";
  const baseMessage = "Hola! Estoy interesado en Primarch System. Me gustaría más información sobre:";

  const handleWhatsAppClick = (option: string) => {
    const fullMessage = `${baseMessage}%0A%0A- ${option}`;
    const url = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;
    window.open(url, "_blank");
  };

  const whatsappOptions = [
    "Características de la plataforma",
    "Planes y precios disponibles",
    "Soporte técnico y troubleshooting",
    "Integraciones y API",
    "Otro tema"
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
          <Link href="/registro"> Registro</Link>
          <Link href="/configuracion">⚙️ Configuración</Link>
          <Link href="/planes">💎 Planes</Link>
          <Link href="/pago">💳 Pagar con MetaMask</Link>
          <Link href="/defi">🚀 Plataforma DeFi</Link>
          <Link href="/contacto">📞 Contacto</Link>
        </div>
      </nav>

      <main className="px-4 py-20 max-w-5xl mx-auto">
        <h1 className="cyber-title text-4xl text-center mb-4">
          CONTACTO
        </h1>
        <p className="cyber-subtitle text-center mb-12">
          Nuestro equipo de soporte está disponible 24/7 para asistirte
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="cyber-panel text-center flex flex-col items-center justify-center">
            <div className="text-6xl mb-4 animate-pulse">📧</div>
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">Correo Electrónico</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Para consultas formales o documentación técnica. 
              Respondemos en menos de 24 horas.
            </p>
            <a 
              href="mailto:asistent.ai213@gmail.com"
              className="cyber-button w-full max-w-xs"
            >
              Enviar Email
            </a>
            <div className="mt-4 text-xs text-gray-500 break-all select-all">
              asistent.ai213@gmail.com
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="cyber-panel text-center flex flex-col items-center justify-center border-green-500/30">
            <div className="text-6xl mb-4"></div>
            <h2 className="text-2xl font-bold mb-3 text-green-400">WhatsApp Directo</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Respuesta inmediata en horario laboral. 
              Ideal para dudas rápidas o asistencia en tiempo real.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button w-full max-w-xs bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
            >
              Iniciar Chat
            </a>
            <div className="mt-4 text-xs text-gray-500">
              +58 422-2100167
            </div>
          </div>
        </div>

        {/* WhatsApp Quick Options */}
        <div className="cyber-panel">
          <h2 className="text-xl font-bold mb-6 text-center text-purple-400">
             ¿Sobre qué tema necesitas ayuda?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatsappOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(option)}
                className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-left flex items-center gap-3"
              >
                <span className="text-green-400 text-xl group-hover:scale-110 transition-transform">💬</span>
                <span className="text-gray-300 group-hover:text-white font-medium">{option}</span>
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Al hacer clic, se abrirá WhatsApp con el mensaje predefinido.
          </p>
        </div>

        {/* Social / Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Primarch System © 2026 • Todos los derechos reservados • 
            <span className="text-cyan-400 ml-1">DeFi Seguro & Descentralizado</span>
          </p>
        </div>
      </main>
    </div>
  );
}
