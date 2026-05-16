"use client";

import { useState } from "react";
import Link from "next/link";

export default function PagoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txStatus, setTxStatus] = useState("");

  // Tu dirección de recepción de Ethereum
  const RECIPIENT_ADDRESS = "0x5572905245624E6cC5116F444c019ddc47F87829";
  const PAYMENT_AMOUNT = "0.012";

  const connectMetaMask = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        setAccount(accounts[0]);
        setWalletConnected(true);
        setTxStatus("");
      } catch (error) {
        console.error("Error conectando MetaMask:", error);
      }
    } else {
      alert("Por favor instala MetaMask para continuar");
    }
  };

  const handlePayment = async () => {
    if (!walletConnected) return;
    setLoading(true);
    setTxStatus("pending");

    try {
      const transactionParameters = {
        to: RECIPIENT_ADDRESS,
        from: account,
        value: (parseFloat(PAYMENT_AMOUNT) * 1e18).toString(16),
      };

      const txHash = await (window as any).ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      setTxStatus("success");
      console.log("Transacción enviada:", txHash);
      alert("¡Pago realizado con éxito! Hash: " + txHash);
    } catch (error) {
      console.error("Error en el pago:", error);
      setTxStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-[#050810] text-white font-sans">
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
        <div className="cyber-panel max-w-lg w-full relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

          <h1 className="cyber-title text-3xl text-center mb-2 tracking-wider">
            PAGO SEGURO
          </h1>
          <p className="text-gray-400 text-center mb-8 text-sm font-medium">
            Transacción directa vía Smart Contract
          </p>

          {!walletConnected ? (
            <div className="text-center py-8">
              <div className="mb-6 inline-block p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                <span className="text-6xl">🦊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Conecta tu Billetera
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-xs mx-auto">
                Necesitamos conectar tu wallet MetaMask para procesar el pago del plan <span className="text-cyan-400 font-bold">Pro</span>.
              </p>
              <button 
                onClick={connectMetaMask}
                className="cyber-button w-full py-4 text-lg font-bold shadow-lg shadow-cyan-500/20"
              >
                Conectar MetaMask
              </button>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              
              {txStatus === "success" ? (
                <div className="text-center py-6 bg-green-500/10 border border-green-500/30 rounded-xl mb-6">
                  <span className="text-4xl mb-2 block">✅</span>
                  <h3 className="text-xl font-bold text-green-400">¡Pago Confirmado!</h3>
                  <p className="text-gray-400 text-sm mt-2">Tu plan Pro ha sido activado.</p>
                </div>
              ) : (
                <>
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Wallet Conectada</span>
                      <span className="flex items-center gap-1 text-green-400 text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Activa
                      </span>
                    </div>
                    <p className="text-white font-mono text-sm break-all bg-black/30 p-2 rounded text-center">
                      {account}
                    </p>
                  </div>

                  <div className="space-y-0 mb-8 rounded-xl border border-gray-700 overflow-hidden bg-gray-800/30">
                    <div className="flex justify-between p-4 border-b border-gray-700">
                      <span className="text-gray-400">Plan seleccionado</span>
                      <span className="text-white font-bold">Pro</span>
                    </div>
                    <div className="flex justify-between p-4 border-b border-gray-700">
                      <span className="text-gray-400">Monto (USD)</span>
                      <span className="text-white font-bold">$29.00</span>
                    </div>
                    <div className="flex justify-between p-4 border-b border-gray-700">
                      <span className="text-gray-400">Red</span>
                      <span className="text-white font-bold">Ethereum Mainnet</span>
                    </div>
                    <div className="flex justify-between p-4 bg-gradient-to-r from-cyan-500/10 to-transparent">
                      <span className="text-cyan-400 font-bold">Total a pagar</span>
                      <span className="text-cyan-400 font-bold text-lg">~{PAYMENT_AMOUNT} ETH</span>
                    </div>
                  </div>

                  <button 
                    onClick={handlePayment}
                    disabled={loading}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg 
                      ${loading 
                        ? "bg-gray-600 cursor-not-allowed opacity-70" 
                        : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-[1.02] shadow-cyan-500/30"
                      }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando en MetaMask...
                      </span>
                    ) : (
                      "💳 Confirmar y Pagar con ETH"
                    )}
                  </button>
                  
                  {txStatus === "error" && (
                    <p className="text-red-400 text-sm text-center mt-4 bg-red-500/10 p-2 rounded">
                      La transacción fue rechazada o falló. Intenta de nuevo.
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
