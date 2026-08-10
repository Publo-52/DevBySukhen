"use client";

import { personalInfo } from "@/data/portfolio";
import { MessageSquare, PhoneCall } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-40 right-8 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <a
        href={personalInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={20} />
      </a>

      {/* SMS Button */}
      <a
        href={personalInfo.sms}
        aria-label="Send SMS"
        className="w-11 h-11 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110"
        title="Send SMS"
      >
        <PhoneCall size={18} />
      </a>
    </div>
  );
}
