import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

// In a real Next.js app this wraps html/body, but for this client-shim we act as a wrapper div
export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}