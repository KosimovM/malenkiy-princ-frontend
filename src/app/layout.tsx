import "./styles/globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { MainLayout } from "@/widgets/layout";
import { Outfit, Geist_Mono } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Маленький Принц | Магазин",
  description: "Премиальный магазин по мотивам Маленького Принца",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased selection:bg-primary/30 min-h-screen relative`}
      >
        <div className="stars-bg" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
