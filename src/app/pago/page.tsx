'use client';
import { useState, useEffect } from 'react';

export default function Pagar() {
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
      <h1>Página de Pago</h1>
      {account ? (
        <p>Conectado: {account.slice(0,6)}...{account.slice(-4)}</p>
      ) : (
        <p>No hay wallet conectada. Ve a la página principal para conectar.</p>
      )}
    </div>
  );
}
