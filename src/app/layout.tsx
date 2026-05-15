import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primarch System",
  description: "Tu DApp en Sepolia - Conecta tu wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
