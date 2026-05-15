'use client';
import { useState, useEffect } from 'react';

export default function Registro() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_accounts' }).then((acc) => {
        if (acc.length > 0) setAccount(acc[0]);
      });
    }
  }, []);

  return (
    <div>
      <h1>Registro de Memecoin</h1>
      {account ? (
        <p>Conectado como: {account.slice(0,6)}...{account.slice(-4)}</p>
      ) : (
        <p>No hay wallet conectada. Conecta desde la página principal.</p>
      )}
    </div>
  );
}
