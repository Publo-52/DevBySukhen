import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-secondary/50 border-y border-border/50">
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          
          {/* Left Column - Heading */}
          <div>
            <div className="sticky top-32">
              <span className="text-accent font-mono text-sm font-medium tracking-wider mb-4 block">01 /</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                About Me
              </h2>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-12">
            <div className="prose prose-invert max-w-none text-secondary text-lg leading-relaxed">
              <p>
                {personalInfo.about}
              </p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
                <p className="text-primary font-medium">{personalInfo.education}</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Focus</h3>
                <p className="text-primary font-medium">Web Development &bull; Cybersecurity</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Location</h3>
                <p className="text-primary font-medium">{personalInfo.location}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Currently</h3>
                <p className="text-primary font-medium">Building real-world projects</p>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
