import React from "react";
import { Input, Badge, Avatar } from "antd";
import { SearchIcon, Bell, ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-4 z-40 mb-10">
      <nav className="glass px-6 py-3 rounded-2xl flex items-center justify-between gap-8">
        <div className="flex-1 max-w-xl">
          <Input
            placeholder="Поиск чудес..."
            prefix={<SearchIcon size={18} className="text-gray-400 mr-2" />}
            className="!rounded-xl !bg-white/5 !border-white/10 !text-white hover:!border-primary/50 focus:!border-primary"
            allowClear
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
            <Badge count={2} size="small" offset={[2, -2]}>
              <Bell size={22} className="text-gray-400 hover:text-white" />
            </Badge>
          </button>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <ShoppingCart size={22} />
          </button>

          <div className="h-8 w-[1px] bg-white/10 mx-2" />

          <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-white">Дилшод С.</p>
              <p className="text-[10px] text-gray-400">Путешественник</p>
            </div>
            <Avatar 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
              className="border-2 border-primary/30"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
