"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail, Send, Loader2, CheckCircle2, Copy, Check, MapPin, MessageSquare, PhoneCall, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || formData.firstName;
    const subject = formData.subject.trim() || "New Portfolio Inquiry";

    try {
      // Post to Formspree endpoint
      const response = await fetch("https://formspree.io/f/manjkwqg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          subject: subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Formspree service returned non-ok status");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage("Opening your default mail client as fallback...");
      
      // Fallback mailto trigger
      const mailBody = `Name: ${fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-secondary/40 border-t border-border/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            <span className="text-accent font-mono text-sm font-medium tracking-wider mb-4 block">06 / GET IN TOUCH</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
              Let&apos;s build <br className="hidden lg:block" /> something incredible.
            </h2>
            
            <p className="text-secondary text-lg mb-12 max-w-md leading-relaxed">
              If you have a project in mind, need a custom website, or want to discuss a potential collaboration, send a message!
            </p>

            <div className="flex flex-col gap-6 mt-auto">
              {/* Email */}
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
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
                {copiedEmail && (
                  <span className="text-xs font-mono text-emerald-400 animate-fade-in">Copied!</span>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <span className="font-medium text-base">{personalInfo.location}</span>
              </div>
              
              {/* Social Channels */}
              <div className="pt-6 border-t border-border/40 flex items-center gap-4">
                <a 
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare size={18} />
                </a>

                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-surface border border-border text-secondary flex items-center justify-center hover:text-primary hover:border-accent transition-all shadow-sm"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a 
                  href={personalInfo.sms}
                  className="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all shadow-sm"
                  title="Send SMS"
                >
                  <PhoneCall size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Delivered!</h3>
                <p className="text-secondary mb-6">Thank you for reaching out, Sukhen will review your message and reply promptly.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-mono text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-primary">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted"
                      placeholder="John"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-primary">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-primary">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted"
                    placeholder="Web Development / Hiring Inquiry"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary">Message *</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y placeholder:text-muted"
                    placeholder="Describe your project goals or request..."
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-2">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
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
                      Sending Message...
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
