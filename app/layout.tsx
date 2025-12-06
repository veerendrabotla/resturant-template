import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartFloat from "@/components/CartFloat";
import { Providers } from "./providers";
import React from "react";

export const metadata: Metadata = {
  title: "SpiceCraft Kitchen",
  description: "Authentic Indian Cuisine",
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-text">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CartFloat />
          </div>
        </Providers>
      </body>
    </html>
  );
}