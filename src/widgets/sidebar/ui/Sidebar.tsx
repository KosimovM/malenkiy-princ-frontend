// src/widgets/sidebar/ui/Sidebar.tsx
"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  ShoppingBag, 
  HeartIcon, 
  User, 
  Settings,
  Star,
  PlusCircle,
  MessageSquare,
  Search,
  Sparkles,
  Zap,
  LayoutGrid,
  Clock,
  PanelLeftClose
} from "lucide-react";
import { Avatar, Badge, Tooltip } from "antd";

const mainNav = [
  { label: "Главная", href: "/", icon: <HomeIcon size={20} /> },
  { label: "Каталог", href: "/catalog", icon: <LayoutGrid size={20} /> },
  { label: "Поиск", href: "/search", icon: <Search size={20} /> },
];

const projects = [
  { label: "Новая планета", href: "/projects/new", icon: <PlusCircle size={18} /> },
  { label: "Инвестиции B-612", href: "/invest", icon: <Zap size={18} className="text-accent" /> },
  { label: "Здоровье Розы", href: "/health", icon: <HeartIcon size={18} className="text-red-400" /> },
];

const recentChats = [
  "Заказ #8612-B: Статус",
  "Доставка на планету Земля",
  "Вопросы о Лисенке",
  "Проверка астероидов",
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside 
      className={`fixed top-0 left-0 h-screen bg-[#0d0e12] flex flex-col z-50 border-r border-white/5 shadow-2xl transition-all duration-500 ease-in-out isolate antialiased
        ${isOpen ? "w-72 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-full pointer-events-none"}`}
    >
      {/* Top Header with Toggle */}
      <div className="flex items-center justify-between p-4 mt-2">
        <h1 className="text-xl font-black text-white px-4 tracking-tighter">Принц</h1>
        <Tooltip title="Закрыть сайдбар">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-white transition-colors"
          >
            <PanelLeftClose size={20} />
          </button>
        </Tooltip>
      </div>

      {/* Search / Top Action */}
      <div className="p-4 pt-2">
        <button className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 group">
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-primary group-hover:animate-pulse" />
            <span className="text-sm font-bold text-gray-300">Новый поиск</span>
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar space-y-8">
        {/* Navigation Group */}
        <nav className="space-y-1">
          {mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? "bg-white/10 text-white font-bold" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span className={isActive ? "text-primary" : "text-gray-500 group-hover:text-primary transition-colors"}>
                  {item.icon}
                </span>
                <span className="text-sm tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Activity Group */}
        <section>
          <div className="flex items-center justify-between px-4 mb-3 text-gray-600">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em]">Ваша активность</h2>
            <Clock size={12} />
          </div>
          <div className="space-y-1">
            {recentChats.map((chat) => (
              <button
                key={chat}
                className="w-full text-left px-4 py-2.5 rounded-xl text-gray-500 hover:bg-white/5 transition-all text-xs truncate group flex items-center gap-2"
              >
                <MessageSquare size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                {chat}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* User Footer */}
      <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="glass-dark rounded-2xl p-4 border border-white/10 mb-2 group cursor-pointer hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Badge dot color="var(--primary)" offset={[-2, 32]}>
              <Avatar 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
                size={40}
              />
            </Badge>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Дилшод С.</p>
              <p className="text-[10px] text-gray-500 uppercase font-black">Free Plan</p>
            </div>
          </div>
        </div>

        <Link
          href="/profile"
          className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white transition-all hover:bg-white/5 rounded-xl text-sm"
        >
          <User size={18} />
          <span>Личный кабинет</span>
        </Link>
      </div>
    </aside>
  );
};
