"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  User, 
  Sparkles, 
  Plus, 
  Globe, 
  Search, 
  MessageSquare,
  Smile,
  Paperclip,
  Mic,
  ArrowUp
} from "lucide-react";
import { Avatar, Input, Button, Tooltip } from "antd";

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content: "Салом! Ман ёвари шумо «Маленький Принц» ҳастам. Чӣ тавр ман метавонам ба шумо дар саёҳати байнисайёравии имрӯзатон кумак кунам?",
    time: "07:56"
  },
  {
    role: "user",
    content: "Ба ман дар бораи астероиди B-612 нақл кун.",
    time: "07:57"
  },
  {
    role: "assistant",
    content: "Астероиди B-612 — ин хонаи ман аст. Он хеле хурд аст, тақрибан ба андозаи як хона. Дар он ҷо ман се вулкан (ду фаъол ва як хомӯш) ва як гули Розаи хеле зебо дорам. Ман ҳар рӯз вулканҳоро тоза мекунам ва бообабҳоро меканам, то онҳо сайёраро натарконанд.",
    time: "07:58"
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMsg = {
      role: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setInputValue("");

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Ин фикри ҷолиб аст! Ман бояд дар ин бора аз Лис пурсам. Ӯ ҳамеша мегӯяд, ки «самое главное — то, чего не увидишь глазами».",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] relative animate-in fade-in duration-700">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-0 py-8 custom-scrollbar">
        <div className="max-w-3xl mx-auto space-y-10">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex gap-6 animate-in slide-in-from-bottom-2 duration-500 delay-${i * 100}`}
            >
              <div className="flex-shrink-0">
                {msg.role === "assistant" ? (
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                    <Sparkles size={18} className="text-white fill-white" />
                  </div>
                ) : (
                  <Avatar 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod" 
                    className="w-9 h-9 border border-white/10"
                  />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  {msg.role === "assistant" ? "Маленький Принц AI" : "Шумо"} • {msg.time}
                </p>
                <div className="text-gray-200 text-lg leading-relaxed font-medium">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Area - Centered & Floating */}
      <div className="sticky bottom-0 w-full pt-4 pb-8 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12] to-transparent">
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/10 rounded-[2rem] blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
          
          <div className="relative glass-dark rounded-[2rem] border border-white/10 shadow-2xl p-2 flex flex-col gap-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Паёми худро нависед..."
              className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 resize-none min-h-[60px] max-h-[200px] px-4 py-3 text-lg custom-scrollbar"
              rows={1}
            />
            
            <div className="flex items-center justify-between px-2 pb-1">
              <div className="flex items-center gap-1">
                <Tooltip title="Замима кардан">
                  <Button type="text" icon={<Paperclip size={20} />} className="!text-gray-500 hover:!text-white hover:!bg-white/5" />
                </Tooltip>
                <Tooltip title="Овоз">
                  <Button type="text" icon={<Mic size={20} />} className="!text-gray-500 hover:!text-white hover:!bg-white/5" />
                </Tooltip>
                <Tooltip title="Эмодзи">
                  <Button type="text" icon={<Smile size={20} />} className="!text-gray-500 hover:!text-white hover:!bg-white/5" />
                </Tooltip>
              </div>
              
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg
                  ${inputValue.trim() 
                    ? "bg-white text-black hover:scale-105 active:scale-95" 
                    : "bg-white/10 text-gray-500 cursor-not-allowed"
                  }`}
              >
                <ArrowUp size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
          
          <p className="text-[10px] text-center text-gray-600 mt-4 uppercase tracking-[0.2em] font-black">
            AI метавонад хато кунад. Натиҷаҳоро тафтиш кунед.
          </p>
        </div>
      </div>
    </div>
  );
}
