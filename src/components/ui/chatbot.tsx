"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const responseMap: { keywords: string[]; response: string }[] = [
  {
    keywords: ["who is sukhen", "about sukhen", "sukhen das", "who are you"],
    response: "Sukhen Das is a passionate Web Designer & Developer with over 1.5+ years of hands-on experience building modern web apps, full-stack tools, and clean UI interfaces."
  },
  {
    keywords: ["profession", "what does sukhen do", "role", "work"],
    response: "Sukhen works as a full-stack web developer and UI designer creating custom web applications, REST APIs, and responsive digital products."
  },
  {
    keywords: ["project", "sukhen project", "portfolio", "work"],
    response: "Sukhen has built e-commerce stores (Nexus E-commerce), clinic management dashboards (Physio Clinic), algorithm visualizers, fitness UI apps, and brand identity projects!"
  },
  {
    keywords: ["technology", "technologies", "tech stack", "skills", "stack"],
    response: "Sukhen's core tech stack includes HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Node.js, Express, PostgreSQL, MongoDB, Supabase, Tailwind CSS, and Figma."
  },
  {
    keywords: ["web design", "design"],
    response: "Web design involves visual layout, typography, UI/UX structure, responsive breakpoints, and crafting intuitive user journeys."
  },
  {
    keywords: ["frontend", "front end"],
    response: "Frontend is what users see and interact with: React, Next.js, TypeScript, Tailwind CSS, smooth micro-animations, and responsive layouts."
  },
  {
    keywords: ["backend", "back end", "api"],
    response: "Backend handles server logic, databases, authentication, and REST APIs using Node.js, Express, PostgreSQL, and MongoDB."
  },
  {
    keywords: ["contact", "email", "phone", "hire"],
    response: "You can email Sukhen at devbysukhen@gmail.com, call/SMS at +91 9832695291, or chat directly via WhatsApp!"
  },
  {
    keywords: ["learn web", "how to learn", "tips"],
    response: "To master web dev: Start with HTML/CSS fundamentals → JavaScript ES6 → React & Next.js → Node APIs & Databases → Build real-world projects!"
  }
];

export function SukhenBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "👋 Hello! I'm SukhenBot. Ask me anything about Sukhen, his projects, tech stack, or web design!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const lower = text.toLowerCase();
    let botReply = "I'm not sure about that 🤔. Try asking about Sukhen, his projects, tech stack, or contact info!";

    for (const item of responseMap) {
      if (item.keywords.some(kw => lower.includes(kw))) {
        botReply = item.response;
        break;
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botReply
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Bot Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask SukhenBot"
        className={cn(
          "fixed bottom-24 right-8 z-40 p-3.5 rounded-full bg-accent text-white shadow-xl hover:bg-accent-hover transition-all duration-300 transform group flex items-center justify-center border border-accent/40",
          isOpen ? "rotate-90 bg-surface text-primary border-border" : "hover:scale-105"
        )}
      >
        {isOpen ? <X size={20} /> : <Bot size={22} className="animate-bounce" />}
      </button>

      {/* Chat Window Drawer */}
      <div
        className={cn(
          "fixed bottom-36 right-4 sm:right-8 z-50 w-[92vw] sm:w-[380px] h-[480px] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right backdrop-blur-xl",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-8 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-accent-hover p-4 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-none">SukhenBot AI</h3>
              <span className="text-[10px] text-white/80 font-mono">Online &bull; Dev Assistant</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 text-white/80 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-background/60 flex flex-col gap-3 text-xs sm:text-sm">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2 max-w-[85%]",
                msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px]",
                  msg.sender === "user" ? "bg-accent text-white" : "bg-surface border border-border text-accent"
                )}
              >
                {msg.sender === "user" ? <User size={12} /> : <Bot size={12} />}
              </div>
              <div
                className={cn(
                  "p-3 rounded-xl leading-relaxed",
                  msg.sender === "user"
                    ? "bg-accent text-white rounded-tr-none"
                    : "bg-surface border border-border/80 text-primary rounded-tl-none"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-muted font-mono text-xs py-1">
              <Bot size={14} className="text-accent animate-spin" />
              <span>SukhenBot is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-surface border-t border-border/60 flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            placeholder="Ask about Sukhen, projects..."
            className="flex-1 bg-background border border-border/60 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
