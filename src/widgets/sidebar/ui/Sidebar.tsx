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
  { label: "Главная", href: "/", icon: <HomeIcon size={22} /> },
  { label: "Каталог", href: "/catalog", icon: <ShoppingBag size={22} /> },
  { label: "Избранное", href: "/favorites", icon: <HeartIcon size={22} /> },
  { label: "Профиль", href: "/profile", icon: <User size={22} /> },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-64 glass-dark rounded-[2.5rem] flex flex-col p-8 z-50 border border-white/10">
      <div className="flex items-center gap-4 mb-12 px-2 group cursor-pointer">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40 group-hover:rotate-12 transition-transform duration-500">
          <Star className="text-white fill-white" size={26} />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-white leading-none">
            Принц
          </h1>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">Shop Edition</p>
        </div>
      </div>

      <nav className="flex-1 space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
                ${isActive 
                  ? "bg-primary text-white shadow-xl shadow-primary/30" 
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              )}
              <span className={`relative z-10 ${isActive ? "text-white" : "group-hover:text-primary transition-colors duration-300"}`}>
                {item.icon}
              </span>
              <span className="font-bold tracking-wide relative z-10">{item.label}</span>
              
              {!isActive && (
                <div className="absolute left-0 w-1 h-0 bg-primary group-hover:h-6 transition-all duration-300 rounded-r-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        <Link
          href="/settings"
          className="flex items-center gap-4 px-5 py-4 text-gray-400 hover:text-white transition-all bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 group"
        >
          <Settings size={22} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-bold tracking-wide">Настройки</span>
        </Link>
      </div>
    </aside>
  );
};
