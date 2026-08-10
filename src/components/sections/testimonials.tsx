"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { testimonials, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Star, Quote, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAILJS_PUBLIC_KEY = "i7bzv9oIiI_04XGKs";
const EMAILJS_SERVICE_ID = "service_weu46mj";
const EMAILJS_TEMPLATE_ID = "template_osiyarc";
const FORMSPREE_URL = "https://formspree.io/f/manjkwqg";

export function Testimonials() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    role: "",
    rating: 5,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelect = (rating: number) => {
    setFeedbackForm(prev => ({ ...prev, rating }));
  };

  const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    let sent = false;

    // 1. Try EmailJS SDK
    try {
      const emailjsResult = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: feedbackForm.name,
          role: feedbackForm.role,
          rating: `${feedbackForm.rating} Stars`,
          message: feedbackForm.message
        },
        EMAILJS_PUBLIC_KEY
      );

      if (emailjsResult.status === 200 || emailjsResult.text === "OK") {
        sent = true;
      }
    } catch (err) {
      console.warn("Testimonial EmailJS SDK failed:", err);
    }

    // 2. Fallback to Formspree API
    if (!sent) {
      try {
        const formspreeRes = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "Client Testimonial Submission",
            name: feedbackForm.name,
            role: feedbackForm.role,
            rating: `${feedbackForm.rating} Stars`,
            message: feedbackForm.message
          }),
        });

        if (formspreeRes.ok) {
          sent = true;
        }
      } catch (err) {
        console.warn("Testimonial Formspree fallback failed:", err);
      }
    }

    // 3. Fallback to mailto
    if (!sent) {
      const mailBody = `Feedback from ${feedbackForm.name} (${feedbackForm.role})\nRating: ${feedbackForm.rating}/5 Stars\n\nReview:\n${feedbackForm.message}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent("Client Feedback")}&body=${encodeURIComponent(mailBody)}`;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFeedbackForm({ name: "", role: "", rating: 5, message: "" });
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-secondary/40 border-t border-border/50">
      <Container>
        <SectionHeading 
          number="04" 
          title="Client Testimonials" 
          subtitle="Don't just take my word for it — here's what clients and collaborators have to say."
        />

        {/* Testimonials Cards Grid */}
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

        {/* Share Experience / Testimonial Feedback Form */}
        <div className="max-w-2xl mx-auto bg-surface border border-border rounded-2xl p-8 shadow-2xl mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Share Your Experience</h3>
            <p className="text-muted text-sm">Your honest feedback matters — submit your review to be featured on this page.</p>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center flex flex-col items-center justify-center animate-fade-in">
              <CheckCircle2 size={40} className="text-emerald-400 mb-4" />
              <h4 className="text-xl font-bold text-primary mb-2">Feedback Received!</h4>
              <p className="text-secondary text-sm mb-4">Thank you for sharing your experience. Sukhen appreciates your feedback.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono text-accent hover:underline"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">Your Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    value={feedbackForm.name}
                    onChange={e => setFeedbackForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Alex Johnson"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-medium text-primary">Your Role / Company *</label>
                  <input 
                    type="text" 
                    id="role"
                    value={feedbackForm.role}
                    onChange={e => setFeedbackForm(prev => ({ ...prev, role: e.target.value }))}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Founder, TechCorp"
                  />
                </div>
              </div>

              {/* Interactive Star Rating */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">Rating *</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingSelect(star)}
                      className="p-1 text-muted hover:text-amber-400 transition-colors focus:outline-none"
                    >
                      <Star 
                        size={24} 
                        className={star <= feedbackForm.rating ? "text-amber-400 fill-current" : "text-border"} 
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-muted ml-2">{feedbackForm.rating} / 5 Stars</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">Your Feedback *</label>
                <textarea 
                  id="message"
                  value={feedbackForm.message}
                  onChange={e => setFeedbackForm(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                  placeholder="Share details about your experience working with Sukhen..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Submitting Feedback...
                  </>
                ) : (
                  <>
                    Submit Feedback <Send size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
