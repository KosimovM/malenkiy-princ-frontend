import React from "react";
import ProductCard from "@/entites/product/ui/ProductCard";
import { Sparkles } from "lucide-react";

export default function MainPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative mb-16 rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background border border-white/5 p-12 sm:p-20">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-6">
            <Sparkles size={16} />
            <span>Добро пожаловать в мир чудес</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1]">
            Открой свою <span className="text-primary italic">планету</span> стиля
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            «Самое главное — то, чего не увидишь глазами». Наша коллекция создана для тех, кто ищет особенное в повседневном.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Начать исследование
            </button>
            <button className="px-8 py-4 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-colors">
              О нас
            </button>
          </div>
        </div>

        {/* Decorative Planet */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] left-[20%] w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full" />
      </section>

      {/* Catalog Header */}
      <div className="flex items-center justify-between mb-8 px-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Новые поступления</h2>
          <p className="text-gray-500 text-sm">Вещи с историей и душой</p>
        </div>
        <button className="text-primary font-bold text-sm hover:underline">
          Смотреть все →
        </button>
      </div>

      <main>
        <ProductCard />
      </main>
    </div>
  );
}
