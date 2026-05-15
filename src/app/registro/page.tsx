'use client';
import { useState } from 'react';

export default function RegistroPage() {
  const [nombre, setNombre] = useState('');
  const [simbolo, setSimbolo] = useState('');
  const [supply, setSupply] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro simulado: ${nombre} (${simbolo}) - Supply: ${supply} - Precio: ${precio} wei`);
    // Aquí luego conectas con el contrato
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Registrar Nueva Memecoin</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Nombre del token</label>
          <input type="text" className="w-full p-2 rounded bg-gray-800 text-white" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1">Símbolo</label>
          <input type="text" className="w-full p-2 rounded bg-gray-800 text-white" value={simbolo} onChange={e => setSimbolo(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1">Supply inicial</label>
          <input type="number" className="w-full p-2 rounded bg-gray-800 text-white" value={supply} onChange={e => setSupply(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1">Precio (en Wei)</label>
          <input type="number" className="w-full p-2 rounded bg-gray-800 text-white" value={precio} onChange={e => setPrecio(e.target.value)} required />
        </div>
        <button type="submit" className="bg-green-600 px-4 py-2 rounded">Registrar</button>
      </form>
    </div>
  );
}
