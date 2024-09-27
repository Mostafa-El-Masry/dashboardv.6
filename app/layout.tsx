import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "MATRIX",
  description: "by Mostafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={noto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
