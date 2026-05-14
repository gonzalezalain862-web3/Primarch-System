'use client';
import { useState, useEffect } from 'react';

// Componente de conexión directa
function MetaMaskConnect() {
  const [account, setAccount] = useState('');
  const [connected, setConnected] = useState(false);

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setConnected(true);
      } catch (err) {
        console.error(err);
        alert('Error al conectar');
      }
    } else {
      alert('Instala MetaMask');
    }
  };

  const disconnect = () => {
    setAccount('');
    setConnected(false);
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' && connected) {
      window.ethereum.on('accountsChanged', (acc) => {
        if (acc.length === 0) disconnect();
        else setAccount(acc[0]);
      });
    }
  }, [connected]);

  return (
    <div style={{ margin: '20px 0' }}>
      {!connected ? (
        <button onClick={connect} className="bg-blue-600 text-white px-4 py-2 rounded">
          Conectar MetaMask
        </button>
      ) : (
        <div>
          <p>✅ Conectado: {account.slice(0,6)}...{account.slice(-4)}</p>
          <button onClick={disconnect} className="bg-red-600 text-white px-4 py-2 rounded">
            Desconectar
          </button>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1>Primarch System</h1>
      <MetaMaskConnect />
      {/* El resto del contenido de tu página va aquí */}
    </div>
  );
}
