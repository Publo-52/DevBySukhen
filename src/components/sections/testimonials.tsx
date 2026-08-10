import Image from "next/image";
import { testimonials } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-secondary/40 border-t border-border/50">
      <Container>
        <SectionHeading 
          number="04" 
          title="Client Testimonials" 
          subtitle="Feedback from clients and colleagues I've had the pleasure to work with."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-surface border border-border/70 rounded-2xl p-8 flex flex-col justify-between hover:border-accent/40 shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 text-border/40 w-16 h-16 pointer-events-none group-hover:text-accent/10 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-secondary text-base italic leading-relaxed mb-8 relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/40 flex-shrink-0">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-primary text-base">{item.name}</h4>
                  <span className="text-xs font-mono text-muted">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
