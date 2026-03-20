import React from "react";
import { Settings, Moon, Sun, Bell, Globe } from "lucide-react";
import { Switch } from "antd";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-4 mb-10 px-4">
        <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary">
          <Settings size={28} />
        </div>
        <h1 className="text-3xl font-black text-white">Настройки</h1>
      </div>

      <div className="space-y-6">
        {[
          { icon: <Moon size={22} className="text-gray-400" />, title: "Темная тема", desc: "Всегда использовать в ночное время", status: true },
          { icon: <Bell size={22} className="text-gray-400" />, title: "Уведомления", desc: "О новых поставках звездной пыли", status: true },
          { icon: <Globe size={22} className="text-gray-400" />, title: "Локализация", desc: "Русский / Французский", status: false },
        ].map((item, i) => (
          <div key={i} className="glass rounded-[2rem] p-6 flex items-center justify-between border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
            <Switch defaultChecked={item.status} className="!bg-primary/30 active:!bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
