import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://damas-sn.vercel.app"),
  title: "Damas | Dalal Ak Jaam",
  description:
    "Bienvenue chez Damas — Boulangerie artisanale, Fast Casual & Salon de Thé à Dakar. Découvrez nos menus signature.",
  keywords: [
    "Damas",
    "Le Boulevard",
    "boulangerie Dakar",
    "brunch Dakar",
    "salon de thé Dakar",
    "restaurant Dakar",
    "VDN Dakar",
  ],
  openGraph: {
    title: "Damas | Dalal Ak Jaam",
    description:
      "Boulangerie artisanale, Fast Casual & Salon de Thé premium à Dakar.",
    type: "website",
    locale: "fr_SN",
    url: "https://damas-sn.vercel.app",
    siteName: "Damas",
    images: [
      {
        url: "https://damas-sn.vercel.app/opengraph-image.png",
        width: 1024,
        height: 1024,
        alt: "Damas — Dalal Ak Jaam",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damas | Dalal Ak Jaam",
    description: "Boulangerie artisanale, Fast Casual & Salon de Thé premium à Dakar.",
    images: ["https://damas-sn.vercel.app/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  other: {
    "theme-color": "#E85A2B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
