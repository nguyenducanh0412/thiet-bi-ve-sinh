import NavMenu from "@/components/nav-menu";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import AOSProvider from "../providers/AOSProvider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Thiết bị vệ sinh",
  description: "Thiết bị vệ sinh",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSProvider>
          <TanstackQueryProvider>
            <NavMenu />
            {children}
            <Footer />
          </TanstackQueryProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
