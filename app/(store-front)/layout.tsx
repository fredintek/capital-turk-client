import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
    <>
      {/* HEADER */}
      <Header />

      {/* CHILDREN */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
