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
  { label: "Главная", href: "/", icon: <HomeIcon size={20} /> },
  { label: "Каталог", href: "/catalog", icon: <ShoppingBag size={20} /> },
  { label: "Избранное", href: "/favorites", icon: <HeartIcon size={20} /> },
  { label: "Профиль", href: "/profile", icon: <User size={20} /> },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-64 glass-dark rounded-3xl flex flex-col p-6 z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center animate-pulse">
          <Star className="text-white fill-white" size={24} />
        </div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          Принц
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <span className={`${isActive ? "text-white" : "group-hover:text-primary transition-colors duration-300"}`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2 border-t border-white/5 pt-6">
        <Link
          href="/settings"
          className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white transition-colors"
        >
          <Settings size={20} />
          <span className="font-medium text-sm">Настройки</span>
        </Link>
      </div>
    </aside>
  );
};
