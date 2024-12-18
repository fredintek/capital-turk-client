import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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
        className={`${inter.variable} ${robotoMono.variable} antialiased flex flex-col min-h-[100vh]`}
      >
        {/* HEADER */}
        <Header />

        {/* CHILDREN */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
