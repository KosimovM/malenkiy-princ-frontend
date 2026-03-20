import React from "react";
import { User, Shield, CreditCard, Box } from "lucide-react";
import { Avatar } from "antd";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl">
      <div className="glass rounded-[3rem] p-8 mb-10 flex flex-col md:flex-row items-center gap-8">
        <Avatar 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
          size={120}
          className="border-4 border-primary shadow-2xl shadow-primary/20"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-black text-white mb-2">Дилшод С.</h1>
          <p className="text-primary font-medium mb-4 italic">Межпланетный путешественник</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="px-4 py-1 glass rounded-full text-xs text-gray-400">ID: 8612-B</span>
            <span className="px-4 py-1 glass rounded-full text-xs text-gray-400">Планета: Земля</span>
          </div>
        </div>
        <button className="md:ml-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition-colors">
          Редактировать
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Box className="text-primary" />, title: "Мои заказы", desc: "4 активных" },
          { icon: <CreditCard className="text-accent" />, title: "Оплата", desc: "Visa **** 4242" },
          { icon: <Shield className="text-green-500" />, title: "Безопасность", desc: "Защищено" },
        ].map((item, i) => (
          <div key={i} className="glass rounded-3xl p-6 hover:bg-white/5 transition-colors cursor-pointer border border-white/5">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-white font-bold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
