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
        <body class="cyber-bg cyber-speed-lines">
          <MenuLateral />
          <main className="main-content">
            {children}
          </main>
        </body>
      </html>
    </ThirdwebProvider>
  );
}
