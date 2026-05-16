// Forzar renderizado dinámico (evita prerendering estático)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

"use client";

import { useEffect, useState } from "react";

export default function PagoPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-8">Cargando pago...</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Procesar Pago</h1>
      {/* Tu lógica de pago aquí */}
      <p>Contenido de pago cargado en cliente.</p>
    </main>
  );
}
