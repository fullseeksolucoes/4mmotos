import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "4M Motos | Oficina de Motos em Sabará - MG",
  description:
    "Oficina especializada em manutenção, revisão e preparação de motocicletas em Sabará, MG. Serviços de mecânica de motos, troca de óleo, revisão completa, diagnóstico eletrônico e performance. Atendimento profissional e preços justos.",
  keywords: [
    "oficina de motos Sabará",
    "mecânico de motos Sabará MG",
    "revisão de moto Sabará",
    "manutenção de motocicletas",
    "troca de óleo moto",
    "oficina mecânica motos",
    "conserto de moto Sabará",
    "preparação de motos",
    "diagnóstico eletrônico moto",
    "oficina 4M Motos",
    "mecânica de motos BH",
    "oficina de motos região metropolitana BH",
  ],
  authors: [{ name: "4M Motos" }],
  creator: "4M Motos",
  publisher: "4M Motos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://4mmotos.com.br",
    siteName: "4M Motos",
    title: "4M Motos | Oficina de Motos em Sabará - MG",
    description:
      "Oficina especializada em manutenção, revisão e preparação de motocicletas em Sabará, MG. Atendimento profissional e preços justos.",
    images: [
      {
        url: "/banner.webp",
        width: 1200,
        height: 630,
        alt: "4M Motos - Oficina de Motocicletas em Sabará MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4M Motos | Oficina de Motos em Sabará - MG",
    description:
      "Oficina especializada em manutenção, revisão e preparação de motocicletas em Sabará, MG.",
    images: ["/banner.webp"],
  },
  alternates: {
    canonical: "https://4mmotos.com.br",
  },
  category: "Oficina Mecânica",
};

// Schema.org JSON-LD para SEO local com múltiplas unidades
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "4M Motos",
  description:
    "Oficina especializada em manutenção, revisão e preparação de motocicletas em Sabará, MG.",
  url: "https://4mmotos.com.br",
  logo: "https://4mmotos.com.br/logo.png",
  image: "https://4mmotos.com.br/banner.webp",
  // Duas unidades
  location: [
    {
      "@type": "AutoRepair",
      name: "4M Motos - Unidade 1",
      telephone: "+55-31-3674-2574",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Marieta Machado, 330",
        addressLocality: "Sabará",
        addressRegion: "MG",
        postalCode: "34505-390",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -19.8924826,
        longitude: -43.8068614,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "12:00",
        },
      ],
    },
    {
      "@type": "AutoRepair",
      name: "4M Motos - Unidade 2",
      telephone: "+55-31-3674-2574",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Marquês de Sapucaí, 591",
        addressLocality: "Sabará",
        addressRegion: "MG",
        postalCode: "34505-600",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -19.8858894,
        longitude: -43.8036866,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "12:00",
        },
      ],
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Sabará",
    containedInPlace: {
      "@type": "State",
      name: "Minas Gerais",
    },
  },
  priceRange: "$$",
  serviceType: [
    "Revisão de motocicletas",
    "Manutenção preventiva",
    "Troca de óleo",
    "Diagnóstico eletrônico",
    "Preparação e performance",
    "Conserto de motos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
