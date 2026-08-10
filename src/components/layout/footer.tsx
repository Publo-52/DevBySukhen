import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-secondary font-medium">
            &copy; {currentYear} {personalInfo.name}
          </p>
          <p className="text-muted text-sm">
            Built with React &bull; Next.js &bull; Tailwind CSS
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
