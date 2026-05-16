"use client";

import { useState } from "react";
import Link from "next/link";

export default function PagoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState("");

  const connectMetaMask = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        setAccount(accounts[0]);
        setWalletConnected(true);
      } catch (error) {
        console.error("Error conectando MetaMask:", error);
      }
    } else {
      alert("Por favor instala MetaMask");
    }
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
        <div className="cyber-panel max-w-lg w-full">
          <h1 className="cyber-title text-3xl text-center mb-2">
            PAGO SEGURO
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Conecta tu wallet para continuar
          </p>

          {!walletConnected ? (
            <div className="text-center">
              <div className="mb-8">
                <div className="text-6xl mb-4">🦊</div>
                <p className="text-gray-300 mb-6">
                  Necesitas MetaMask para realizar el pago
                </p>
              </div>
              <button 
                onClick={connectMetaMask}
                className="cyber-button w-full py-4 text-lg"
              >
                Conectar MetaMask
              </button>
            </div>
          ) : (
            <div>
              <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-6">
                <div className="text-green-400 font-bold mb-1">✓ Wallet Conectada</div>
                <div className="text-sm text-gray-300 break-all">{account}</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Plan seleccionado:</span>
                  <span className="text-cyan-400 font-bold">Pro</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Monto:</span>
                  <span className="text-purple-400 font-bold">$29 USD</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Red:</span>
                  <span className="text-pink-400 font-bold">Ethereum</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Total en ETH:</span>
                  <span className="text-cyan-400 font-bold">~0.012 ETH</span>
                </div>
              </div>

              <button className="cyber-button w-full py-4 text-lg">
                Confirmar Pago
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
