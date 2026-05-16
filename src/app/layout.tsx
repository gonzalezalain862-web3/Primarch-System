import { Web3Provider } from "@/providers/Web3Provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
