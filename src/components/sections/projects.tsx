"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface-secondary/40">
      <Container>
        <SectionHeading 
          number="03" 
          title="Selected Work" 
          subtitle="A selection of projects I've designed, built and learned from."
        />

        <div className="flex flex-col gap-24 mt-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "grid md:grid-cols-2 gap-8 md:gap-16 items-center group",
                index % 2 !== 0 ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"
              )}
            >
              {/* Project Image - Alternating sides */}
              <div 
                className={cn(
                  "relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg cursor-pointer transition-transform duration-500 hover:scale-[1.02]",
                  index % 2 !== 0 && "md:order-last"
                )}
                onClick={() => setSelectedProject(project)}
              >
                {/* Fallback placeholder since actual images aren't available yet */}
                <div className="absolute inset-0 bg-surface flex items-center justify-center border-b border-border">
                  <span className="text-muted font-mono tracking-wider opacity-50">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col items-start">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                  {project.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {project.title}
                </h3>
                
                <div className="bg-surface/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-6 shadow-sm relative z-10 md:-ml-8 md:mr-0 text-secondary leading-relaxed">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-sm font-mono text-muted bg-background px-3 py-1 rounded border border-border/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => setSelectedProject(project)}
                  >
                    Case Study
                  </Button>
                  <a href={project.liveUrl} className="text-muted hover:text-primary transition-colors p-2" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="text-muted hover:text-primary transition-colors p-2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-full bg-surface border border-border rounded-2xl shadow-2xl overflow-y-auto animate-reveal-up flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-surface/90 backdrop-blur border-b border-border flex items-center justify-between p-4 sm:p-6 z-10">
              <h3 className="text-xl font-bold text-primary">{selectedProject.title}</h3>
              <button 
                className="p-2 text-muted hover:text-primary transition-colors bg-background rounded-full border border-border"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-10">
              {/* Cover */}
              <div className="w-full aspect-video bg-background border border-border rounded-xl flex items-center justify-center overflow-hidden">
                <span className="text-muted font-mono tracking-wider opacity-50">High-Resolution Preview</span>
              </div>

              {/* Grid layout for info */}
              <div className="grid md:grid-cols-[2fr_1fr] gap-10">
                {/* Main details */}
                <div className="flex flex-col gap-8">
                  <section>
                    <h4 className="text-lg font-bold text-primary mb-3">Overview</h4>
                    <p className="text-secondary leading-relaxed">{selectedProject.description}</p>
                  </section>
                  
                  <section>
                    <h4 className="text-lg font-bold text-primary mb-3">The Challenge</h4>
                    <p className="text-secondary leading-relaxed">{selectedProject.challenges}</p>
                  </section>

                  <section>
                    <h4 className="text-lg font-bold text-primary mb-3">The Solution</h4>
                    <p className="text-secondary leading-relaxed">{selectedProject.solution}</p>
                  </section>

                  <section>
                    <h4 className="text-lg font-bold text-primary mb-3">Key Features</h4>
                    <ul className="list-disc list-inside text-secondary space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Sidebar details */}
                <div className="flex flex-col gap-8">
                  <div className="bg-background rounded-xl border border-border p-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="text-sm font-mono text-primary bg-surface px-3 py-1 rounded border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button href={selectedProject.liveUrl} variant="primary" className="w-full justify-center">
                      Live Demo <ExternalLink size={16} className="ml-2" />
                    </Button>
                    <Button href={selectedProject.githubUrl} variant="outline" className="w-full justify-center">
                      Source Code <GithubIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
