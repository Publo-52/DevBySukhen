import { skills } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LucideIcon } from "lucide-react";

interface SkillTagProps {
  name: string;
  icon: LucideIcon;
}

function SkillTag({ name, icon: Icon }: SkillTagProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface border border-border/50 hover:border-accent/50 hover:bg-surface/80 transition-all duration-300 group">
      <Icon size={16} className="text-muted group-hover:text-accent transition-colors" />
      <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  );
}

interface SkillGroupProps {
  title: string;
  items: { name: string; icon: LucideIcon }[];
}

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-10 md:py-14">
      <Container>
        <SectionHeading 
          number="02" 
          title="Skills & Technologies" 
          subtitle="The tools and technologies I use to build scalable, secure, and maintainable applications."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-16">
          <SkillGroup title="Frontend Development" items={skills.frontend} />
          <SkillGroup title="Backend Systems" items={skills.backend} />
          <SkillGroup title="Database" items={skills.database} />
          <SkillGroup title="Developer Tools" items={skills.tools} />
          <SkillGroup title="Areas of Interest" items={skills.interests} />
        </div>
      </Container>
    </section>
  );
}
