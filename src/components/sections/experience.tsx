import { experience, education, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase, GraduationCap } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Experience() {
  return (
    <section id="experience" className="py-10 md:py-14 border-t border-border/50">
      <Container>
        <SectionHeading 
          number="04" 
          title="Experience & Education" 
          subtitle="My academic background and practical building experience."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
          
          {/* Experience Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 text-xl font-bold text-primary mb-2">
              <Briefcase className="text-accent" />
              <h3>Experience</h3>
            </div>
            
            <div className="flex flex-col gap-10 border-l border-border/50 ml-3 pl-8 relative">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></div>
                  
                  <span className="text-sm font-mono text-muted mb-2 block">{exp.year}</span>
                  <h4 className="text-lg font-bold text-primary">{exp.role}</h4>
                  <span className="text-accent text-sm font-medium block mb-4">{exp.company}</span>
                  <p className="text-secondary leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & GitHub Column */}
          <div className="flex flex-col gap-16">
            
            {/* Education */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 text-xl font-bold text-primary mb-2">
                <GraduationCap className="text-accent" />
                <h3>Education</h3>
              </div>
              
              <div className="flex flex-col gap-10 border-l border-border/50 ml-3 pl-8 relative">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-border ring-4 ring-background"></div>
                    
                    <span className="text-sm font-mono text-muted mb-2 block">{edu.period}</span>
                    <h4 className="text-lg font-bold text-primary">{edu.degree}</h4>
                    <span className="text-primary font-medium block mb-4">{edu.institution}</span>
                    
                    <div className="bg-surface/50 rounded-lg p-4 border border-border/50">
                      <span className="text-sm font-semibold uppercase tracking-wider text-muted mb-3 block">Relevant Coursework</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-secondary">
                        {edu.coursework.map((course, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent/50"></div>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col items-center text-center">
              <GithubIcon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">Development Activity</h3>
              <p className="text-secondary mb-8 max-w-md">
                I build, experiment and learn through practical projects. Check out my GitHub for recent commits and repositories.
              </p>
              <Button href={personalInfo.github} variant="outline" target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </Button>
            </div>

          </div>
          
        </div>
      </Container>
    </section>
  );
}
