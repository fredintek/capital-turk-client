import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroContent } from "@/utilities/interfaces";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capital Turk",
  description: "Capital Turk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-[100vh]`}
      >
        {/* HEADER */}
        <Header/>

        {/* CHILDREN */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
