import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  number,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className="text-accent font-mono text-sm font-medium tracking-wider">
            {number}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
          {title}
        </h2>
        <div className="h-px bg-border flex-grow ml-4 max-w-xs hidden sm:block"></div>
      </div>
      {subtitle && (
        <p className="text-secondary text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
