"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, User, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  actionUrl?: string;
  actionLabel?: string;
}

const suggestedQuestions = [
  "Who is Sukhen?",
  "Show Tech Stack",
  "View Projects",
  "Contact Info",
  "Download Resume"
];

const responseMap: { keywords: string[]; response: string; actionUrl?: string; actionLabel?: string }[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings", "good morning", "good evening"],
    response: "👋 Hello! I'm SukhenBot AI. How can I help you today? Feel free to ask about Sukhen's experience, projects, skills, or hiring availability!"
  },
  {
    keywords: ["who is sukhen", "about sukhen", "sukhen das", "who are you", "tell me about"],
    response: "Sukhen Das is a Web Designer & Full-Stack Developer with 1.5+ years of experience crafting responsive web applications, custom UI/UX designs, and backend REST APIs.",
    actionUrl: "#about",
    actionLabel: "Read More About Sukhen"
  },
  {
    keywords: ["profession", "what does sukhen do", "role", "work", "job"],
    response: "Sukhen specializes in Web Development (React, Next.js, Node.js), Database Design (PostgreSQL, MongoDB), UI/UX Design (Figma), and SEO optimization.",
    actionUrl: "#services",
    actionLabel: "View Services"
  },
  {
    keywords: ["project", "projects", "sukhen project", "portfolio", "work", "devsecops", "security", "visualizer"],
    response: "Sukhen has built featured engineering projects including the DevSecOps Deployment Platform, AI API Security Platform, and AI-Powered Algorithm Visualizer!",
    actionUrl: "#projects",
    actionLabel: "Explore Projects Section"
  },
  {
    keywords: ["technology", "technologies", "tech stack", "skills", "stack", "react", "next", "node", "css"],
    response: "Tech Stack: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, Express, PostgreSQL, Supabase, MongoDB, Tailwind CSS, Git & Figma.",
    actionUrl: "#skills",
    actionLabel: "View All Skills"
  },
  {
    keywords: ["service", "services", "offer", "maintenance", "seo"],
    response: "Sukhen offers 4 core services: Web Design & Development, UI/UX Design, Website Maintenance & Optimization, and Search Engine Optimization (SEO).",
    actionUrl: "#services",
    actionLabel: "Check Services"
  },
  {
    keywords: ["education", "degree", "bca", "college", "university", "qualification"],
    response: "Sukhen is pursuing a Bachelor of Computer Applications (BCA Honors) with coursework in DBMS, Data Structures, Web Engineering, Systems & Cybersecurity.",
    actionUrl: "#experience",
    actionLabel: "View Education & Coursework"
  },
  {
    keywords: ["contact", "email", "phone", "hire", "number", "reach", "whatsapp", "call"],
    response: `You can reach Sukhen via email at ${personalInfo.email}, call/SMS at +91 9832695291, or chat directly on WhatsApp!`,
    actionUrl: personalInfo.whatsapp,
    actionLabel: "Chat on WhatsApp"
  },
  {
    keywords: ["resume", "cv", "pdf", "download"],
    response: "You can view and download Sukhen's official resume PDF directly.",
    actionUrl: personalInfo.resume,
    actionLabel: "Download Resume PDF"
  },
  {
    keywords: ["price", "pricing", "cost", "rate"],
    response: "Sukhen offers fixed-price packages for defined scopes and hourly rates for flexible projects. Get in touch for an itemized estimate!",
    actionUrl: "#contact",
    actionLabel: "Request Price Quote"
  },
  {
    keywords: ["learn web", "how to learn", "tips", "tutorial"],
    response: "Sukhen's advice for web dev: Master HTML/CSS basics → JavaScript ES6+ → React & Next.js → Node.js APIs → Build real projects!"
  }
];

export function SukhenBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "👋 Hello! I'm SukhenBot AI. Ask me anything about Sukhen Das, his projects, tech stack, or hiring details!"
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

  const processUserMessage = (queryText: string) => {
    const text = queryText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `u-${messages.length + 1}`,
      sender: "user",
      text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const lower = text.toLowerCase();
    let botReply = "I'm not sure about that 🤔. Try asking about Sukhen, his projects, tech stack, resume, or contact info!";
    let actionUrl: string | undefined = undefined;
    let actionLabel: string | undefined = undefined;

    for (const item of responseMap) {
      if (item.keywords.some(kw => lower.includes(kw))) {
        botReply = item.response;
        actionUrl = item.actionUrl;
        actionLabel = item.actionLabel;
        break;
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `b-${messages.length + 2}`,
          sender: "bot",
          text: botReply,
          actionUrl,
          actionLabel
        }
      ]);
    }, 700);
  };

  return (
    <>
      {/* Bot Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask SukhenBot AI"
        className={cn(
          "fixed bottom-20 right-6 z-50 p-3.5 rounded-full bg-accent text-white shadow-2xl hover:bg-accent-hover transition-all duration-300 transform flex items-center justify-center border border-accent/40 group",
          isOpen ? "rotate-90 bg-surface text-primary border-border" : "hover:scale-105"
        )}
      >
        {isOpen ? <X size={20} /> : <Bot size={22} className="animate-pulse" />}
      </button>

      {/* Chat Window Drawer */}
      <div
        className={cn(
          "fixed bottom-36 right-4 sm:right-6 z-50 w-[94vw] sm:w-[380px] h-[520px] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right backdrop-blur-xl",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-8 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-accent-hover p-4 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-none flex items-center gap-1.5">
                SukhenBot AI
              </h3>
              <span className="text-[10px] text-white/80 font-mono">Dev Assistant &bull; Always Online</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 text-white/80 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-background/60 flex flex-col gap-3.5 text-xs sm:text-sm">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2.5 max-w-[88%]",
                msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5",
                  msg.sender === "user" ? "bg-accent text-white" : "bg-surface border border-border text-accent"
                )}
              >
                {msg.sender === "user" ? <User size={12} /> : <Bot size={12} />}
              </div>

              <div className="flex flex-col gap-2">
                <div
                  className={cn(
                    "p-3 rounded-2xl leading-relaxed",
                    msg.sender === "user"
                      ? "bg-accent text-white rounded-tr-none"
                      : "bg-surface border border-border/80 text-primary rounded-tl-none shadow-sm"
                  )}
                >
                  {msg.text}
                </div>

                {/* Optional Action Button inside reply */}
                {msg.actionUrl && msg.actionLabel && (
                  <a
                    href={msg.actionUrl}
                    target={msg.actionUrl.startsWith("http") || msg.actionUrl.endsWith(".pdf") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (msg.actionUrl?.startsWith("#")) {
                        setIsOpen(false);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all w-fit"
                  >
                    <span>{msg.actionLabel}</span>
                    <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-muted font-mono text-xs py-1">
              <Bot size={14} className="text-accent animate-spin" />
              <span>SukhenBot is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div 
          className="px-3 py-2 bg-surface-secondary/60 border-t border-border/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {suggestedQuestions.map(q => (
            <button
              key={q}
              onClick={() => processUserMessage(q)}
              className="px-2.5 py-1 rounded-full bg-surface border border-border/60 text-[11px] font-medium text-secondary hover:text-primary hover:border-accent whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-surface border-t border-border/60 flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === "Enter" && processUserMessage(inputValue)}
            placeholder="Ask about Sukhen, projects..."
            className="flex-1 bg-background border border-border/60 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={() => processUserMessage(inputValue)}
            className="p-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </>
  );
}
