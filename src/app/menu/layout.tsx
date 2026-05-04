import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Damas",
  description:
    "Consultez le menu Damas VDN et Le Boulevard — Boulangerie artisanale, burgers signature, brunchs raffinés et pâtisseries fines à Dakar.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
