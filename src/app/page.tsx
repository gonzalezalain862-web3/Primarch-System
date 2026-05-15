'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [account, setAccount] = useState('');
  const [connected, setConnected] = useState(false);

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setConnected(true);
      } catch (err) {
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
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a Primarch System</h1>
      {!connected ? (
        <button onClick={connect} className="bg-blue-600 px-6 py-3 rounded-lg text-lg">Conectar MetaMask</button>
      ) : (
        <div className="bg-green-800 inline-block p-4 rounded-lg">
          <p>✅ Conectado: {account.slice(0,6)}...{account.slice(-4)}</p>
          <button onClick={disconnect} className="bg-red-600 px-4 py-2 rounded mt-2">Desconectar</button>
        </div>
      )}
    </div>
  );
}
