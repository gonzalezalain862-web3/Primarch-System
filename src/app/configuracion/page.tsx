"use client";
import { useState } from "react";

export default function ConfiguracionPage() {
  const [idioma, setIdioma] = useState("es");
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl font-bold">Configuración</h2>
      <div className="max-w-xs mx-auto">
        <label className="block mb-2">Selecciona idioma</label>
        <select
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
          className="w-full p-3 rounded bg-black/30 border border-white/20 text-white"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <p className="mt-4 text-gray-300">
          {idioma === "es" ? "Idioma actual: Español" : "Current language: English"}
        </p>
      </div>
    </div>
  );
}
