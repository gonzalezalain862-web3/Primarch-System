'use client';
import { useState } from 'react';

export default function ConfigPage() {
  const [idioma, setIdioma] = useState('es');
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>
      <div className="mb-4">
        <label className="block mb-2">Idioma</label>
        <select value={idioma} onChange={e => setIdioma(e.target.value)} className="p-2 bg-gray-800 rounded">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <p className="mt-2">Idioma seleccionado: {idioma === 'es' ? 'Español' : 'English'}</p>
      </div>
    </div>
  );
}
