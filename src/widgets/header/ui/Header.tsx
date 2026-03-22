"use client";
import React from "react";
import { Avatar, Badge, Tooltip } from "antd";
import { MessageSquare, Bell, User, History, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 mb-6 w-full animate-in fade-in duration-500 bg-[#0d0e12]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="px-8 py-3 flex items-center justify-between gap-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
            <span className="text-sm font-bold text-gray-300">Little Prince 1.0</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(148,74,255,1)]" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Tooltip title="Таърих">
              <button className="p-2 text-gray-500 hover:text-white transition-all hover:bg-white/5 rounded-xl">
                <History size={20} />
              </button>
            </Tooltip>
            <Tooltip title="Навсозиҳо">
              <Badge dot color="var(--primary)" offset={[-2, 2]}>
                <button className="p-2 text-gray-500 hover:text-white transition-all hover:bg-white/5 rounded-xl">
                  <Bell size={20} />
                </button>
              </Badge>
            </Tooltip>
          </div>

          <div className="h-6 w-[1px] bg-white/10" />

          <button className="flex items-center gap-3 hover:bg-white/5 p-1.5 pr-4 rounded-2xl transition-all border border-transparent hover:border-white/5 group">
            <Avatar 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
              size={32}
              className="border border-primary/30"
            />
            <div className="text-left hidden md:block">
              <p className="text-xs font-bold text-gray-300">Дилшод С.</p>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};
