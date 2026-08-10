"use client";

import { useState } from "react";
import { faqs } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border/50">
      <Container>
        <SectionHeading 
          number="05" 
          title="Frequently Asked Questions" 
          subtitle="Answers to common questions about my services, pricing, and project workflow."
        />

        <div className="max-w-3xl mx-auto flex flex-col gap-4 mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-surface border border-border/70 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-primary text-base sm:text-lg hover:text-accent transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "text-muted transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-accent"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-secondary text-sm sm:text-base leading-relaxed border-t border-border/30 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
