'use client';
import { useState } from 'react';

export default function RegistroPage() {
  const [form, setForm] = useState({ nombre: '', simbolo: '', supply: '', precio: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registro simulado: ${JSON.stringify(form)}`);
    // Aquí puedes llamar a createLaunch del contrato
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Registrar Nueva Memecoin</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Nombre del token</label>
          <input type="text" className="w-full p-2 rounded bg-gray-800 text-white" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} required />
        </div>
        <div>
          <label className="block mb-1">Símbolo</label>
          <input type="text" className="w-full p-2 rounded bg-gray-800 text-white" value={form.simbolo} onChange={e => setForm({...form, simbolo: e.target.value})} required />
        </div>
        <div>
          <label className="block mb-1">Supply inicial</label>
          <input type="number" className="w-full p-2 rounded bg-gray-800 text-white" value={form.supply} onChange={e => setForm({...form, supply: e.target.value})} required />
        </div>
        <div>
          <label className="block mb-1">Precio (en Wei)</label>
          <input type="number" className="w-full p-2 rounded bg-gray-800 text-white" value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} required />
        </div>
        <button type="submit" className="bg-green-600 px-4 py-2 rounded">Registrar</button>
      </form>
    </div>
  );
}
