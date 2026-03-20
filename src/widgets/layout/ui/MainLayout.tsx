"use client";
import React, { ReactNode, useState } from "react";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen w-full flex bg-[#0d0e12] overflow-x-hidden relative">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main 
        className={`flex-1 min-w-0 transition-all duration-500 ease-in-out
          ${isSidebarOpen ? "ml-72" : "ml-0"}`}
      >
        <div className="relative pt-4 pr-8 pl-8 pb-10">
          {!isSidebarOpen && (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="fixed top-6 left-6 z-[60] p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 shadow-xl backdrop-blur-md animate-in fade-in zoom-in duration-300"
            >
              <PanelLeftOpen size={24} />
            </button>
          )}
          
          <Header />
          <div className="max-w-[1400px] mx-auto w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
