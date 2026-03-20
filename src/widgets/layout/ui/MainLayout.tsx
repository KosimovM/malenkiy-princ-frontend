"use client";
import React, { ReactNode } from "react";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 min-w-0 ml-72 pt-4 pr-8 pl-8">
        <Header />
        <div className="max-w-[1600px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};
