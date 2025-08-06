import type { Metadata } from "next";

import { Outfit, Open_Sans } from "next/font/google";

//Components and archives
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "../components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rede Autoestima-se",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${outfit.className} ${openSans.className}`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
