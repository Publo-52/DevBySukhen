"use client";

import { Shield, Camera, CheckCircle2, Activity, Play, BarChart3 } from "lucide-react";

interface ProjectGraphicProps {
  projectId: string;
}

export function ProjectCardGraphic({ projectId }: ProjectGraphicProps) {
  if (projectId === "online-assessment") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-surface to-surface-secondary p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden group">
        {/* Subtle background mesh */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-emerald-400">Exam Live &bull; Proctor Active</span>
          </div>
          <div className="flex items-center gap-2 bg-background/80 px-2.5 py-1 rounded text-xs font-mono text-muted border border-border/40">
            <Camera size={12} className="text-accent" />
            <span>Webcam Connected</span>
          </div>
        </div>

        {/* Center content mock */}
        <div className="my-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-secondary">
            <span className="font-semibold text-primary">Question 14 of 50</span>
            <span className="font-mono text-accent">Time Left: 42:15</span>
          </div>

          <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/30">
            <div className="h-full bg-gradient-to-r from-accent to-accent-hover w-[28%] rounded-full"></div>
          </div>

          <div className="p-3 bg-background/60 rounded-lg border border-border/40 space-y-2">
            <div className="h-2.5 bg-border/60 rounded w-3/4"></div>
            <div className="h-2 bg-border/40 rounded w-1/2"></div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2 rounded bg-accent/10 border border-accent/30 text-[11px] text-accent font-medium flex items-center gap-1.5">
                <CheckCircle2 size={12} /> Option A: Selected
              </div>
              <div className="p-2 rounded bg-surface border border-border/40 text-[11px] text-muted">
                Option B: Standard
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[11px] text-muted font-mono">
          <div className="flex items-center gap-1.5">
            <Shield size={12} className="text-emerald-400" />
            <span>Anti-Cheating Engine</span>
          </div>
          <span className="text-accent font-semibold">Score: 96%</span>
        </div>
      </div>
    );
  }

  if (projectId === "physio-management") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-surface to-surface-secondary p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/60">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-accent" />
            <span className="text-xs font-semibold text-primary">Physio Care Clinic</span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-secondary text-secondary border border-border/40">
            Admin View
          </span>
        </div>

        {/* Body visual */}
        <div className="grid grid-cols-3 gap-2.5 my-3">
          <div className="p-2.5 rounded-lg bg-background/60 border border-border/40 flex flex-col gap-1">
            <span className="text-[10px] text-muted font-mono uppercase">Patients</span>
            <span className="text-base font-bold text-primary">124</span>
            <span className="text-[10px] text-emerald-400">+12 this week</span>
          </div>

          <div className="p-2.5 rounded-lg bg-background/60 border border-border/40 flex flex-col gap-1">
            <span className="text-[10px] text-muted font-mono uppercase">Appts</span>
            <span className="text-base font-bold text-primary">18</span>
            <span className="text-[10px] text-accent">Today</span>
          </div>

          <div className="p-2.5 rounded-lg bg-background/60 border border-border/40 flex flex-col gap-1">
            <span className="text-[10px] text-muted font-mono uppercase">Revenue</span>
            <span className="text-base font-bold text-emerald-400">$3.4k</span>
            <span className="text-[10px] text-muted">Settled</span>
          </div>
        </div>

        {/* Patient card mini preview */}
        <div className="p-3 bg-background/80 rounded-lg border border-border/40 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-xs">
              JD
            </div>
            <div>
              <div className="font-semibold text-primary text-[12px]">John Doe &bull; Knee Rehab</div>
              <div className="text-[10px] text-muted">Dr. Smith &bull; 02:30 PM</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
            Confirmed
          </span>
        </div>
      </div>
    );
  }

  // Fallback / Algorithm Visualizer Graphic
  return (
    <div className="w-full h-full bg-gradient-to-br from-surface to-surface-secondary p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <BarChart3 size={14} className="text-accent" />
          <span className="text-xs font-semibold text-primary">Merge Sort Visualizer</span>
        </div>
        <div className="flex items-center gap-1.5 bg-accent/10 px-2 py-0.5 rounded text-[11px] font-mono text-accent">
          <Play size={10} className="fill-current" />
          <span>Running (60fps)</span>
        </div>
      </div>

      {/* Array bars visual */}
      <div className="h-28 flex items-end justify-between gap-1.5 py-2 px-3 bg-background/60 rounded-lg border border-border/40 my-2">
        <div className="w-full bg-accent/40 rounded-t h-[35%] transition-all duration-300"></div>
        <div className="w-full bg-accent/50 rounded-t h-[60%] transition-all duration-300"></div>
        <div className="w-full bg-emerald-400 rounded-t h-[85%] shadow-lg shadow-emerald-400/20 transition-all duration-300"></div>
        <div className="w-full bg-accent/60 rounded-t h-[45%] transition-all duration-300"></div>
        <div className="w-full bg-emerald-400 rounded-t h-[95%] shadow-lg shadow-emerald-400/20 transition-all duration-300"></div>
        <div className="w-full bg-accent/40 rounded-t h-[25%] transition-all duration-300"></div>
        <div className="w-full bg-accent/70 rounded-t h-[70%] transition-all duration-300"></div>
        <div className="w-full bg-accent/50 rounded-t h-[50%] transition-all duration-300"></div>
      </div>

      {/* Footer algorithm metrics */}
      <div className="flex items-center justify-between text-[11px] font-mono text-muted">
        <span>Time: O(N log N)</span>
        <span className="text-secondary font-medium">Comparisons: 142</span>
      </div>
    </div>
  );
}
