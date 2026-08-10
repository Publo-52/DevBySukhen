"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail, Send, Loader2, CheckCircle2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-secondary/40 border-t border-border/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            <span className="text-accent font-mono text-sm font-medium tracking-wider mb-4 block">05 /</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
              Let&apos;s build <br className="hidden lg:block" /> something useful.
            </h2>
            
            <p className="text-secondary text-lg mb-12 max-w-md leading-relaxed">
              I&apos;m open to internships, software development opportunities, interesting collaborations and meaningful projects.
            </p>

            <div className="flex flex-col gap-6 mt-auto">
              <div className="flex items-center gap-3">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-4 text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-lg">{personalInfo.email}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-surface border border-border text-muted hover:text-primary hover:border-accent transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
                {copiedEmail && (
                  <span className="text-xs font-mono text-emerald-400 animate-fade-in">Copied!</span>
                )}
              </div>
              
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-secondary hover:text-accent transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">LinkedIn</span>
              </a>

              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-secondary hover:text-accent transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-secondary">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y placeholder:text-muted"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
          
        </div>
      </Container>
    </section>
  );
}
