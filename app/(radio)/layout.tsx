import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capital Radio",
  description: "Capital Radio",
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
        {/* CHILDREN */}
        <section className="bg-radio-background w-screen h-screen">
          {children}
        </section>
      </body>
    </html>
  );
}
