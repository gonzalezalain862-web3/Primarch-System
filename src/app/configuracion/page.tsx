"use client";
import { useState } from "react";

export default function Configuracion() {
  const [idioma, setIdioma] = useState("es");
  return (
    <div className="glass-card">
      <h2>Configuración</h2>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <label>Idioma</label>
        <select value={idioma} onChange={e => setIdioma(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <p>Idioma actual: {idioma === 'es' ? 'Español' : 'English'}</p>
      </div>
    </div>
  );
}
