"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Terminal, Code2, Database, Shield, Check, Copy } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "stack">("profile");

  const copyCode = () => {
    navigator.clipboard.writeText("npx devbysukhen@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column: Content */}
        <div className="flex flex-col items-start z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-secondary mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {personalInfo.status}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary mb-6">
            Hi, I&apos;m <span className="text-accent">{personalInfo.name}</span>.
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6 leading-snug">
            {personalInfo.role} <br className="hidden md:block" />
            <span className="text-muted font-normal">{personalInfo.tagline}</span>
          </h2>

          <p className="text-muted text-lg max-w-lg mb-10 leading-relaxed">
            Focused on building modern full-stack web applications, backend APIs, relational databases, and security-first software.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary" size="lg">
              Explore Projects
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Key Metrics grid */}
          <div className="mt-14 pt-8 border-t border-border/50 grid grid-cols-3 gap-6 w-full max-w-lg">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary font-mono">3+</span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1">Full Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary font-mono">10+</span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1">Tech Tools</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-accent font-mono">BCA</span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider mt-1">Degree Candidate</span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Technical Visual */}
        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto lg:max-w-none lg:aspect-auto lg:h-[580px] animate-reveal-up opacity-0 [animation-delay:200ms]">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/60 to-surface-secondary/40 rounded-2xl border border-border/80 p-6 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm">
            
            {/* Editor header with tabs */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                <div className="flex items-center gap-1 bg-background/60 p-1 rounded-lg border border-border/40 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "profile" ? "bg-accent text-white font-medium" : "text-muted hover:text-primary"
                    }`}
                  >
                    developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "stack" ? "bg-accent text-white font-medium" : "text-muted hover:text-primary"
                    }`}
                  >
                    stack.config.ts
                  </button>
                </div>
              </div>

              <button
                onClick={copyCode}
                className="p-1.5 rounded bg-background/60 hover:bg-background text-muted hover:text-primary transition-colors border border-border/40"
                title="Copy terminal command"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
            
            {/* Editor content */}
            {activeTab === "profile" ? (
              <div className="flex-1 font-mono text-xs sm:text-sm flex flex-col gap-3.5 leading-relaxed overflow-y-auto">
                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">1</span>
                  <div className="text-secondary">
                    <span className="text-accent">export const</span> <span className="text-primary">developer</span> = <span className="text-accent">&#123;</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">2</span>
                  <div className="text-secondary pl-4">
                    name: <span className="text-emerald-400">&apos;{personalInfo.name}&apos;</span>,
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">3</span>
                  <div className="text-secondary pl-4">
                    degree: <span className="text-emerald-400">&apos;BCA (2023 - 2026)&apos;</span>,
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">4</span>
                  <div className="text-secondary pl-4">
                    focusAreas: <span className="text-accent">[</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">5</span>
                  <div className="text-secondary pl-8 flex items-center gap-2">
                    <Code2 size={14} className="text-accent" /> <span className="text-emerald-400">&apos;Full-Stack Web Development&apos;</span>,
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">6</span>
                  <div className="text-secondary pl-8 flex items-center gap-2">
                    <Terminal size={14} className="text-accent" /> <span className="text-emerald-400">&apos;Node.js & Express REST APIs&apos;</span>,
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">7</span>
                  <div className="text-secondary pl-8 flex items-center gap-2">
                    <Database size={14} className="text-accent" /> <span className="text-emerald-400">&apos;PostgreSQL & MongoDB&apos;</span>,
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">8</span>
                  <div className="text-secondary pl-8 flex items-center gap-2">
                    <Shield size={14} className="text-accent" /> <span className="text-emerald-400">&apos;Web Security & OWASP&apos;</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">9</span>
                  <div className="text-secondary pl-4">
                    <span className="text-accent">]</span>,
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-muted select-none w-4 text-right">10</span>
                  <div className="text-secondary">
                    <span className="text-accent">&#125;</span>;
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-2">
                  <span className="text-muted select-none w-4 text-right">11</span>
                  <div className="text-secondary">
                    <span className="text-muted italic">&#47;&#47; Continuous learning & clean code principles.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 font-mono text-xs sm:text-sm flex flex-col gap-3.5 leading-relaxed">
                <div className="text-secondary">
                  <span className="text-accent">import</span> &#123; React, NextJS, Node, PostgreSQL &#125; <span className="text-accent">from</span> <span className="text-emerald-400">&apos;tech-stack&apos;</span>;
                </div>
                <div className="p-3 bg-background/60 rounded-lg border border-border/40 space-y-2 mt-2">
                  <div className="text-xs font-semibold text-primary">Core Runtime & Architecture</div>
                  <div className="text-xs text-muted leading-relaxed">
                    TypeScript &bull; Next.js App Router &bull; Tailwind CSS &bull; RESTful Microservices &bull; JWT Auth
                  </div>
                </div>
              </div>
            )}

            {/* Terminal prompt footer */}
            <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">$</span> ready for hire
              </span>
              <span className="w-2 h-4 bg-accent/80 animate-pulse"></span>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

