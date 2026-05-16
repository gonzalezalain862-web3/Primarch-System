"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegistroPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro:", formData);
  };

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

      <main className="flex items-center justify-center min-h-screen px-4 py-20">
        <div className="cyber-panel max-w-md w-full">
          <h1 className="cyber-title text-3xl text-center mb-2">
            REGISTRO
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Únete a la revolución DeFi
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-cyan-400 mb-2">Correo Electrónico</label>
              <input
                type="email"
                className="cyber-input"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-cyan-400 mb-2">Contraseña</label>
              <input
                type="password"
                className="cyber-input"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-cyan-400 mb-2">Confirmar Contraseña</label>
              <input
                type="password"
                className="cyber-input"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>

            <button type="submit" className="cyber-button w-full mt-8">
              Crear Cuenta
            </button>
          </form>

          <p className="text-center mt-6 text-gray-400">
            ¿Ya tienes cuenta?{" "}
            <Link href="/" className="text-cyan-400 hover:text-purple-400">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
