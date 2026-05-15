import type { Metadata } from "next";
import { ThirdwebProvider } from "thirdweb/react";
import MenuLateral from "@/components/MenuLateral";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primarch System",
  description: "MULTI-CHANNEL ACCURACY - Zero data entry errors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider>
      <html lang="es">
        <body className="min-h-screen">
          <MenuLateral />
          <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="glass-card w-full max-w-4xl p-6 md:p-8">
              {children}
            </div>
          </main>
        </body>
      </html>
    </ThirdwebProvider>
  );
}
