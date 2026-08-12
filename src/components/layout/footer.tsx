import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { MessageSquare, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-14 bg-background border-t border-border/50">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Brand details */}
          <div className="flex flex-col items-start gap-3 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-accent/40 bg-surface flex-shrink-0">
                <Image 
                  src={personalInfo.logoImage} 
                  alt={personalInfo.brandName}
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-primary">
                {personalInfo.brandName}<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              We craft digital experiences that spark thought, inspire action, and empower people through technology — making their journey toward achieving dreams smoother, smarter, and more meaningful.
            </p>
          </div>
          
          {/* Right Social Channels */}
          <div className="flex items-center gap-5">
            <a 
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border text-muted hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-center transition-colors"
              title="WhatsApp"
            >
              <MessageSquare size={18} />
            </a>

            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent/40 flex items-center justify-center transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border text-muted hover:text-primary hover:border-accent/40 flex items-center justify-center transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a 
              href={personalInfo.sms}
              className="w-10 h-10 rounded-full bg-surface border border-border text-muted hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-colors"
              title="Send SMS"
            >
              <PhoneCall size={18} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <p>
            &copy; 2026 {personalInfo.brandName} Portfolio. All rights reserved.
          </p>
          <p>
            Designed & Engineered by {personalInfo.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
