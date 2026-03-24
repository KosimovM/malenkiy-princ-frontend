import React from "react";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center text-primary mb-6 animate-pulse">
        <Heart size={40} fill="currentColor" />
      </div>

      <h1 className="text-3xl font-black text-white mb-4">Ваше избранное пусто</h1>
      <p className="text-gray-500 max-w-md mx-auto">
        «Ты навсегда в ответе за всех, кого приручил». Сохраняйте то, что вам дорого, чтобы не потерять в бесконечности.
      </p>
      <button className="mt-10 px-8 py-3 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform">
        Вернуться в каталог
      </button>
    </div>
  );
}
