"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "FAQ", href: "#faq", id: "faq" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border/80 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-primary hover:text-accent transition-colors group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-accent/40 bg-surface flex-shrink-0">
            <Image 
              src={personalInfo.logoImage} 
              alt={personalInfo.brandName}
              fill
              sizes="32px"
              className="object-contain p-0.5"
            />
          </div>
          <span className="font-extrabold">{personalInfo.brandName}</span>
          <span className="text-accent group-hover:translate-x-0.5 transition-transform">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative py-1",
                  isActive 
                    ? "text-accent font-semibold" 
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-fade-in"></span>
                )}
              </a>
            );
          })}
          <div className="h-4 w-px bg-border/60"></div>
          <a
            href={personalInfo.resume}
            target="_blank"
            className="text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2 -mr-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[65px] bg-background/98 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out md:hidden flex flex-col",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-semibold transition-colors",
                activeSection === link.id ? "text-accent" : "text-secondary hover:text-primary"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-16 h-px bg-border my-2"></div>
          <a
            href="#contact"
            className="text-xl font-semibold text-accent hover:text-accent-hover transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}
