import type { Metadata } from "next";

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
    <>
      {/* CHILDREN */}
      <section className="bg-radio-background w-screen h-screen">
        {children}
      </section>
    </>
  );
}
