"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaHome, FaUserPlus, FaCog, FaCoins } from "react-icons/fa";
// // import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
//   const { address, isConnected } = useAccount();
//   const { connect, connectors } = useConnect();
//   const { disconnect } = useDisconnect();

  return (
    <nav className="bg-[#0a0a0f] border-b border-purple-900/30 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Primarch
            </span>
            <span className="text-xs text-gray-500 tracking-widest uppercase">
              System
            </span>
          </div>
        </Link>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-2xl text-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/" icon={<FaHome />} text="Inicio" />
          <NavLink href="/registro" icon={<FaUserPlus />} text="Registro" />
          <NavLink href="/configuracion" icon={<FaCog />} text="Configuración" />
          <NavLink href="/pago" icon={<FaCoins />} text="Comprar/Crear" />
          <div className="w-px h-6 bg-gray-700 mx-2"></div>
          {isConnected ? (
            <button
              onClick={() => disconnect()}
              className="bg-gray-800 hover:bg-red-900/50 border border-gray-700 px-4 py-2 rounded-lg text-sm transition-all"
            >
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </button>
          ) : (
            <button
              onClick={() => connect({ connector: connectors[0] })}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-purple-500/20"
            >
              Conectar MetaMask
            </button>
          )}
        </div>
      </div>

      {/* Menú lateral móvil */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d1a] border-t border-purple-900/30 p-4 space-y-3">
          <MobileLink href="/" icon={<FaHome />} text="Inicio" onClick={() => setMenuOpen(false)} />
          <MobileLink href="/registro" icon={<FaUserPlus />} text="Registro" onClick={() => setMenuOpen(false)} />
          <MobileLink href="/configuracion" icon={<FaCog />} text="Configuración" onClick={() => setMenuOpen(false)} />
          <MobileLink href="/pago" icon={<FaCoins />} text="Comprar/Crear" onClick={() => setMenuOpen(false)} />
          <div className="border-t border-gray-800 pt-3">
            {isConnected ? (
              <button onClick={() => disconnect()} className="w-full text-left bg-red-900/30 border border-red-800/50 p-3 rounded-lg text-red-300">
                Desconectar — {address?.slice(0, 8)}...
              </button>
            ) : (
              <button onClick={() => connect({ connector: connectors[0] })} className="w-full text-left bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-lg font-semibold">
                Conectar MetaMask
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm">
      {icon} <span>{text}</span>
    </Link>
  );
}

function MobileLink({ href, icon, text, onClick }: { href: string; icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-3 hover:bg-gray-800/50 rounded-lg text-gray-300 transition-colors" onClick={onClick}>
      {icon} <span>{text}</span>
    </Link>
  );
}
