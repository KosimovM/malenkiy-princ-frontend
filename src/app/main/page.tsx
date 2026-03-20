"use client";
import React from "react";
import ProductCard from "@/entites/product/ui/ProductCard";
import { Sparkles, ArrowRight } from "lucide-react";

export default function MainPage() {
  return (
    <div className="pb-20 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative mb-20 rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-primary/30 via-background to-background border border-white/10 p-12 sm:p-24 shadow-2xl shadow-black/40">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 text-primary font-black tracking-[0.3em] uppercase text-xs mb-8">
            <Sparkles size={18} className="animate-pulse" />
            <span>Добро пожаловать в мир чудес</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-[1] tracking-tight">
            Открой свою <br/>
            <span className="text-primary italic relative">
              планету
              <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent/40 rounded-full"></div>
            </span> стиля
          </h1>
          <p className="text-gray-300 text-xl mb-12 leading-relaxed max-w-lg font-medium opacity-90">
            «Самое главное — то, чего не увидишь глазами». Наша коллекция создана для тех, кто ищет особенное в повседневном.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="group px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/40 flex items-center gap-3">
              Начать исследование
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-5 glass text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all border border-white/10">
              О нас
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Floating Ring Overlay */}
        <div className="absolute top-1/2 right-20 -translate-y-1/2 w-64 h-64 border-[40px] border-white/5 rounded-full hidden xl:block animate-float"></div>
      </section>

      {/* Catalog Header */}
      <div className="flex items-end justify-between mb-12 px-6">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight mb-2">Новые поступления</h2>
          <p className="text-primary font-bold uppercase tracking-widest text-xs opacity-70">Вещи с историей и душой</p>
        </div>
        <button className="group flex items-center gap-2 text-white font-black text-sm hover:text-primary transition-colors bg-white/5 px-6 py-3 rounded-xl border border-white/5 hover:border-primary/20">
          Смотреть все 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <main className="px-2">
        <ProductCard />
      </main>
    </div>
  );
}
