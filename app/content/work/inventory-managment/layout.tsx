import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./client/invglobals.css";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Inventory Manamgment",
  description: "by Mostafa",
};

export default function inventorymanagmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
