import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
config.autoAddCss = false;

import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HubRun | Votre partenaire running",
  description: "Une application d'aide à la pratique du running",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <div className="flex min-h-screen flex-col bg-red-600">
          <Header />
          <main className="flex min-h-full flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
