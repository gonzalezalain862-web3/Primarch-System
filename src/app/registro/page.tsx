"use client";

import { useEffect, useState } from "react";

export default function RegistroPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-8">Cargando registro...</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Registro</h1>
      {/* Tu lógica de registro aquí */}
      <p>Contenido cargado en cliente.</p>
    </main>
  );
}
