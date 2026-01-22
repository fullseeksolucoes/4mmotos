import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "4MMotos | Sua moto merece o melhor cuidado",
  description:
    "Oficina especializada em manutenção, revisão e performance de motocicletas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
