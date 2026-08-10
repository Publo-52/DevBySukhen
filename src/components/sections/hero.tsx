import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Terminal, Code2, Database, Shield } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center relative overflow-hidden">
      {/* Background glow effects (subtle) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column: Content */}
        <div className="flex flex-col items-start z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-secondary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {personalInfo.status}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6">
            Hi, I&apos;m <span className="text-accent">{personalInfo.name}</span>.
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-6 leading-snug">
            {personalInfo.role} <br className="hidden md:block" />
            {personalInfo.tagline}
          </h2>

          <p className="text-muted text-lg max-w-lg mb-10 leading-relaxed">
            I’m a BCA student focused on modern web development, backend systems, databases, and cybersecurity.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href={personalInfo.resume} variant="outline" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-6 text-sm text-secondary">
            <div className="flex flex-col gap-1">
              <span className="text-muted uppercase text-xs font-semibold tracking-wider">Based in</span>
              <span className="font-medium text-primary">{personalInfo.location}</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex flex-col gap-1">
              <span className="text-muted uppercase text-xs font-semibold tracking-wider">Focus</span>
              <span className="font-medium text-primary">Web &bull; Security &bull; Cloud</span>
            </div>
          </div>
        </div>

        {/* Right column: Technical Visual */}
        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto lg:max-w-none lg:aspect-auto lg:h-[600px] animate-reveal-up opacity-0 [animation-delay:200ms]">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/50 to-transparent rounded-2xl border border-border p-6 shadow-2xl flex flex-col overflow-hidden">
            {/* Editor header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="ml-2 text-xs font-mono text-muted">developer-profile.ts</div>
            </div>
            
            {/* Editor content */}
            <div className="flex-1 font-mono text-sm sm:text-base flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">1</span>
                <div className="text-secondary">
                  <span className="text-accent">const</span> <span className="text-primary">developer</span> = <span className="text-accent">&#123;</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">2</span>
                <div className="text-secondary pl-4">
                  name: <span className="text-accent-hover">&apos;{personalInfo.name}&apos;</span>,
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">3</span>
                <div className="text-secondary pl-4">
                  role: <span className="text-accent-hover">&apos;{personalInfo.role}&apos;</span>,
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">4</span>
                <div className="text-secondary pl-4">
                  skills: <span className="text-accent">[</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">5</span>
                <div className="text-secondary pl-8 flex items-center gap-2">
                  <Code2 size={14} className="text-muted" /> <span className="text-accent-hover">&apos;Frontend&apos;</span>,
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">6</span>
                <div className="text-secondary pl-8 flex items-center gap-2">
                  <Terminal size={14} className="text-muted" /> <span className="text-accent-hover">&apos;Backend&apos;</span>,
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">7</span>
                <div className="text-secondary pl-8 flex items-center gap-2">
                  <Database size={14} className="text-muted" /> <span className="text-accent-hover">&apos;Databases&apos;</span>,
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">8</span>
                <div className="text-secondary pl-8 flex items-center gap-2">
                  <Shield size={14} className="text-muted" /> <span className="text-accent-hover">&apos;Cybersecurity&apos;</span>
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

              <div className="flex items-start gap-4 mt-4">
                <span className="text-muted select-none w-4 text-right">11</span>
                <div className="text-secondary">
                  <span className="text-muted italic">&#47;&#47; Building the future, one commit at a time.</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-muted select-none w-4 text-right">12</span>
                <div className="text-secondary flex items-center">
                  <span className="w-2 h-5 bg-accent/80 animate-pulse ml-1 inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
