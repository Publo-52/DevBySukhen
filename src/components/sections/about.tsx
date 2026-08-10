import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, FolderCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-secondary/40 border-t border-border/50">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Profile Image with Badge */}
          <div className="relative mx-auto lg:mx-0 max-w-sm w-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-accent/40 shadow-2xl p-1 bg-gradient-to-tr from-accent/20 to-border">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface border border-border/80 rounded-2xl p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-xl">
                1.5+
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">Years</span>
                <span className="text-xs font-bold text-primary">Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-accent font-mono text-sm font-medium tracking-wider mb-2 block">01 / ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                Crafting digital experiences with passion & precision.
              </h2>
            </div>

            <div className="space-y-4 text-secondary text-base md:text-lg leading-relaxed">
              <p>{personalInfo.about}</p>
              <p>{personalInfo.aboutExtended}</p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-surface p-4 rounded-xl border border-border/60 flex items-start gap-3">
                <GraduationCap className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase font-semibold">Education</h4>
                  <p className="text-sm font-semibold text-primary">{personalInfo.education}</p>
                </div>
              </div>

              <div className="bg-surface p-4 rounded-xl border border-border/60 flex items-start gap-3">
                <Briefcase className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase font-semibold">Experience</h4>
                  <p className="text-sm font-semibold text-primary">{personalInfo.experienceYears}</p>
                </div>
              </div>

              <div className="bg-surface p-4 rounded-xl border border-border/60 flex items-start gap-3">
                <FolderCheck className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase font-semibold">Projects</h4>
                  <p className="text-sm font-semibold text-primary">12+ Delivered</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href={personalInfo.resume} variant="primary" target="_blank">
                <Download size={18} className="mr-2" /> Download Resume
              </Button>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
