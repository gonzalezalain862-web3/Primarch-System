import type { Metadata } from "next";
import "./globals.css";
import MenuLateral from "@/components/ui/MenuLateral";

export const metadata: Metadata = {
  title: "Primarch System",
  description: "Tu DApp en Sepolia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <MenuLateral />
        <main className="container mx-auto px-4 py-8 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
