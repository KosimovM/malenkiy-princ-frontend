"use client";
import React from "react";
import { Input, Badge, Avatar } from "antd";
import { SearchIcon, Bell, ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-4 z-40 mb-10 w-full animate-in fade-in duration-500">
      <nav className="glass px-8 py-4 rounded-[2rem] flex items-center justify-between gap-10 border border-white/10 shadow-xl shadow-black/20">
        <div className="flex-1 max-w-2xl relative group">
          <Input
            placeholder="Поиск чудес во вселенной..."
            prefix={<SearchIcon size={20} className="text-gray-400 group-focus-within:text-primary transition-colors" />}
            className="!rounded-2xl !bg-white/5 !border-white/10 !text-white !h-12 !px-4 hover:!border-primary/50 focus:!border-primary !transition-all"
            allowClear
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all relative group">
              <Badge count={2} size="small" offset={[2, -2]} color="var(--primary)">
                <Bell size={24} className="group-hover:animate-bounce" />
              </Badge>
            </button>
            
            <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group">
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="h-10 w-[1px] bg-white/10 mx-2" />

          <button className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-2xl transition-all border border-transparent hover:border-white/10 group">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-white tracking-wide">Дилшод С.</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-70">Gold Traveler</p>
            </div>
            <Avatar 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
              size={48}
              className="border-2 border-primary/50 shadow-lg shadow-primary/20 ring-4 ring-white/5"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
