import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import MainLayout from "@/components/MainLayout";
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
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}