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
