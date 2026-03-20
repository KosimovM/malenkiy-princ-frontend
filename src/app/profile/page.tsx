"use client";
import React from "react";
import { User, Shield, CreditCard, Box, Settings, MapPin, Star } from "lucide-react";
import { Avatar, Progress } from "antd";

export default function ProfilePage() {
  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative glass rounded-[3rem] p-10 mb-10 flex flex-col lg:flex-row items-center lg:items-end gap-10">
          <div className="relative">
            <Avatar 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
              size={160}
              className="border-4 border-primary/50 shadow-2xl shadow-primary/30 ring-8 ring-white/5"
            />
            <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2 border-4 border-[#0f111a] shadow-lg">
              <Star size={18} className="text-[#0f111a] fill-[#0f111a]" />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left pb-2">
            <h1 className="text-5xl font-black text-white mb-2 tracking-tight">Дилшод С.</h1>
            <p className="text-primary font-bold mb-6 italic text-lg tracking-wide uppercase opacity-80 flex items-center justify-center lg:justify-start gap-2">
              <Star size={14} className="fill-primary" />
              Межпланетный путешественник
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="flex items-center gap-2 px-5 py-2 glass rounded-2xl text-sm text-gray-300 font-medium">
                <Box size={14} className="text-primary" /> ID: 8612-B
              </span>
              <span className="flex items-center gap-2 px-5 py-2 glass rounded-2xl text-sm text-gray-300 font-medium">
                <MapPin size={14} className="text-accent" /> Планета: Земля
              </span>
            </div>
          </div>

          <div className="lg:ml-auto flex flex-col items-center lg:items-end gap-4">
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/30">
              Редактировать
            </button>
            <div className="w-48 text-right hidden lg:block">
              <div className="flex justify-between text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">
                <span>Ранг: Мастер</span>
                <span>85%</span>
              </div>
              <Progress percent={85} showInfo={false} strokeColor="var(--primary)" size="small" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Box className="text-primary" />, title: "Мои заказы", desc: "4 активных посылки с планеты B-612", value: "4" },
          { icon: <CreditCard className="text-accent" />, title: "Оплата", desc: "Visa **** 4242", value: "Primary" },
          { icon: <Shield className="text-green-500" />, title: "Безопасность", desc: "Защищено 2FA", value: "Active" },
        ].map((item, i) => (
          <div key={i} className="glass rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer group border border-white/10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
            <div className="text-xs font-bold text-primary uppercase tracking-widest">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
