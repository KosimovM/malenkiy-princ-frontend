"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import ProductCard from "@/entites/product/ui/ProductCard";

export default function CatalogPage() {
  return (
    <div className="pb-10">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary">
          <ShoppingBag size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-white">Каталог</h1>
          <p className="text-gray-500">Все сокровища нашей вселенной</p>
        </div>
      </div>
      
      <ProductCard />
    </div>
  );
}
