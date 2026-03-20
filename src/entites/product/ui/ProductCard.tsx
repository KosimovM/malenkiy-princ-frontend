"use client";
import React from "react";
import { mockProductCardData } from "@/entites/product/mockData";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { message } from "antd";

export default function ProductCard() {
  const [messageApi, contextHolder] = message.useMessage();
  const products = mockProductCardData;

  const addToCart = (title: string) => {
    messageApi.open({
      type: 'success',
      content: `«${title}» добавлена в вашу корзину`,
      icon: <Sparkles className="text-primary animate-pulse inline-block mr-2" size={16} />,
      style: { marginTop: '10vh' },
    });
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 tracking-tight">
      {contextHolder}
      {products.map((product, idx) => (
        <div
          key={product.title + idx}
          className="group relative glass-dark rounded-[2.5rem] overflow-hidden p-4 transition-all duration-700 hover:translate-y-[-10px] hover:shadow-[0_20px_50px_rgba(148,74,255,0.2)] border border-white/5 hover:border-primary/40 flex flex-col h-full"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/5 to-white/10 mb-6">
            <img
              alt={product.title}
              src={product.image}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute top-4 right-4 z-10">
              <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md">
                <Star size={20} fill={idx === 0 ? "var(--primary)" : "none"} className={idx === 0 ? "text-primary" : "text-white"} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-2 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">B-612 Original</span>
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                {product.title}
              </h3>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Цена</span>
                <span className="text-2xl font-black text-white">{product.price} TJS</span>
              </div>
              <button 
                onClick={() => addToCart(product.title)}
                className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 relative group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <ShoppingCart size={24} className="relative z-10" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
