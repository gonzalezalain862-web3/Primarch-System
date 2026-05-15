'use client';
import { useState, useEffect } from 'react';

export default function PagoPage() {
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

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' && connected) {
      window.ethereum.on('accountsChanged', (acc) => {
        if (acc.length === 0) setConnected(false);
        else setAccount(acc[0]);
      });
    }
  }, [connected]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Forma de Pago</h1>
      {!connected ? (
        <button onClick={connect} className="bg-blue-600 px-4 py-2 rounded">Conectar Billetera</button>
      ) : (
        <div className="bg-green-800 p-4 rounded">
          <p>✅ Conectado: {account.slice(0,6)}...{account.slice(-4)}</p>
          <p>Puedes comprar tokens usando SepoliaETH.</p>
        </div>
      )}
    </div>
  );
}
