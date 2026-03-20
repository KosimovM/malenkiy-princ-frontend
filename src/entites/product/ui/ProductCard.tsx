import React from "react";
import { mockProductCardData } from "@/entites/product/mockData";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard() {
  const products = mockProductCardData;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 tracking-tight">
      {products.map((product, idx) => (
        <div
          key={product.title + idx}
          className="group relative glass-dark rounded-[2rem] overflow-hidden p-3 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/20 border-white/5 hover:border-primary/30"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white/5 to-white/10">
            <img
              alt={product.title}
              src={product.image}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 z-10">
              <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Star size={18} fill={idx === 0 ? "white" : "none"} />
              </button>
            </div>
            
            {/* Price Tag Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass px-4 py-2 rounded-2xl flex items-center justify-between">
                <span className="text-white font-bold text-lg">{product.price} TJS</span>
                <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-3 pt-5 pb-2">
            <h3 className="text-white font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Limited Edition</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
