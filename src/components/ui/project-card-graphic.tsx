import { 
  ShieldAlert, 
  Zap, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layout, 
  Palette, 
  Code2,
  Lock,
  Server
} from "lucide-react";

interface ProjectCardGraphicProps {
  category: string;
  title: string;
  projectId?: string;
}

export function ProjectCardGraphic({ category, title }: ProjectCardGraphicProps) {
  if (category === "DevSecOps") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-cyan-950/80 via-slate-900 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono font-bold">
            <ShieldAlert size={12} /> CI/CD & K8S
          </div>
          <Server size={18} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
        </div>

        <div className="z-10 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs">
            <Terminal size={14} /> kubectl apply -f deployment.yaml
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 w-3/4 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (category === "AI & Security") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-mono font-bold">
            <Zap size={12} /> OWASP WAF
          </div>
          <Lock size={18} className="text-slate-600 group-hover:text-purple-400 transition-colors" />
        </div>

        <div className="z-10 flex items-center justify-between font-mono text-xs border border-purple-500/30 rounded-xl p-3 bg-purple-950/30 backdrop-blur-sm">
          <span className="text-purple-300 font-bold">AI Threat Risk: 96%</span>
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-[10px]">BLOCKED</span>
        </div>
      </div>
    );
  }

  if (category === "Algorithms & Web") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
            <Sparkles size={12} /> Big-O Engine
          </div>
          <Cpu size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
        </div>

        <div className="z-10 flex items-end gap-1.5 h-16 justify-center">
          {[40, 75, 25, 90, 55, 100].map((h, i) => (
            <div 
              key={i} 
              style={{ height: `${h}%` }} 
              className={`w-3 rounded-t-sm ${i === 3 ? "bg-amber-400" : "bg-emerald-500/60"}`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (category === "UI/UX" || category === "Branding") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-amber-950/40 via-surface to-background p-6 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
        <div className="flex items-center justify-between">
          <Palette className="text-amber-400/80" size={20} />
          <span className="text-[10px] font-mono text-muted uppercase">Design System</span>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500/40 border border-amber-400"></div>
          <div className="w-6 h-6 rounded-full bg-indigo-500/40 border border-indigo-400"></div>
          <div className="w-6 h-6 rounded-full bg-emerald-500/40 border border-emerald-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/20 via-surface to-background p-6 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
      <div className="flex items-center justify-between">
        <Code2 className="text-accent" size={20} />
        <span className="text-[10px] font-mono text-muted uppercase">{category}</span>
      </div>
      <div className="flex items-center gap-2 text-xs font-mono text-secondary">
        <Layout size={14} className="text-accent" />
        <span className="truncate">{title}</span>
      </div>
    </div>
  );
}
