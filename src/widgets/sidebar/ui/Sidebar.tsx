// src/widgets/sidebar/ui/Sidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  ShoppingBag, 
  HeartIcon, 
  User, 
  Settings,
  Star
} from "lucide-react";

const navItems = [
  { label: "Главная", href: "/", icon: <HomeIcon size={24} /> },
  { label: "Каталог", href: "/catalog", icon: <ShoppingBag size={24} /> },
  { label: "Избранное", href: "/favorites", icon: <HeartIcon size={24} /> },
  { label: "Профиль", href: "/profile", icon: <User size={24} /> },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-64 glass-dark rounded-[2.5rem] flex flex-col p-8 z-50 border border-white/10 shadow-2xl isolate antialiased">
      <div className="flex items-center gap-4 mb-12 px-2 group cursor-pointer relative z-20">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40 group-hover:rotate-12 transition-all duration-500">
          <Star className="text-white fill-white" size={26} />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-white leading-none">
            Принц
          </h1>
          <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mt-1.5">Shop Edition</p>
        </div>
      </div>

      <nav className="flex-1 space-y-4 relative z-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 group relative overflow-hidden
                ${isActive 
                  ? "bg-primary text-white shadow-xl shadow-primary/30 scale-[1.02]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
              <span className={`relative z-10 flex-shrink-0 ${isActive ? "text-white" : "group-hover:text-primary transition-colors duration-300"}`}>
                {item.icon}
              </span>
              <span className={`relative z-10 font-bold tracking-wide ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                {item.label}
              </span>
              
              {!isActive && (
                <div className="absolute left-0 w-1.5 h-0 bg-primary group-hover:h-8 transition-all duration-500 rounded-r-full shadow-[0_0_15px_rgba(148,74,255,1)]"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 relative z-20">
        <Link
          href="/settings"
          className="flex items-center gap-4 px-6 py-4 text-gray-400 hover:text-white transition-all bg-white/[0.03] rounded-2xl border border-white/5 hover:border-white/20 group backdrop-blur-sm"
        >
          <Settings size={22} className="group-hover:rotate-90 transition-transform duration-700" />
          <span className="font-bold tracking-wide">Настройки</span>
        </Link>
      </div>
    </aside>
  );
};
