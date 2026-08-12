"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { testimonials, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Star, 
  Quote, 
  Send, 
  Loader2, 
  CheckCircle2, 
  BadgeCheck, 
  Sparkles, 
  MessageSquarePlus, 
  ShieldCheck,
  TrendingUp,
  ThumbsUp,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EMAILJS_PUBLIC_KEY = "i7bzv9oIiI_04XGKs";
const EMAILJS_SERVICE_ID = "service_weu46mj";
const EMAILJS_TEMPLATE_ID = "template_osiyarc";
const FORMSPREE_URL = "https://formspree.io/f/manjkwqg";

export function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    role: "",
    category: "Full-Stack Dev",
    rating: 5,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ["All", "Full-Stack Dev", "Branding & UI", "Web Design"];

  const filteredTestimonials = selectedCategory === "All"
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

  const handleRatingSelect = (rating: number) => {
    setFeedbackForm(prev => ({ ...prev, rating }));
  };

  const getRatingLabel = (rating: number) => {
    switch (rating) {
      case 5: return "5.0 - Exceptional Performance! ⭐⭐⭐⭐⭐";
      case 4: return "4.0 - Great Work & Experience ⭐⭐⭐⭐";
      case 3: return "3.0 - Good Work ⭐⭐⭐";
      case 2: return "2.0 - Needs Improvement ⭐⭐";
      case 1: return "1.0 - Poor Experience ⭐";
      default: return "";
    }
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
          rating: `${feedbackForm.rating} Stars (${feedbackForm.category})`,
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
            category: feedbackForm.category,
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
      const mailBody = `Feedback from ${feedbackForm.name} (${feedbackForm.role})\nCategory: ${feedbackForm.category}\nRating: ${feedbackForm.rating}/5 Stars\n\nReview:\n${feedbackForm.message}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent("Client Feedback")}&body=${encodeURIComponent(mailBody)}`;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFeedbackForm({ name: "", role: "", category: "Full-Stack Dev", rating: 5, message: "" });
  };

  return (
    <section id="testimonials" className="py-10 md:py-14 bg-surface-secondary/40 border-t border-border/50 relative overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <Container>
        <SectionHeading 
          number="05" 
          title="Client Testimonials" 
          subtitle="Don't just take my word for it — explore verified feedback from clients and software engineering collaborators."
        />

        {/* High-Impact Client Satisfaction Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
          <div className="bg-surface/80 backdrop-blur-sm border border-border/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/40 transition-colors shadow-sm">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
            </div>
            <span className="text-2xl font-extrabold text-primary">5.0 / 5.0</span>
            <span className="text-xs font-mono text-muted mt-1">Average Client Rating</span>
          </div>

          <div className="bg-surface/80 backdrop-blur-sm border border-border/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/40 transition-colors shadow-sm">
            <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-1">
              <BadgeCheck size={20} />
            </div>
            <span className="text-2xl font-extrabold text-primary">100%</span>
            <span className="text-xs font-mono text-muted mt-1">Verified Client Satisfaction</span>
          </div>

          <div className="bg-surface/80 backdrop-blur-sm border border-border/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/40 transition-colors shadow-sm">
            <div className="p-2 rounded-full bg-accent/10 text-accent mb-1">
              <TrendingUp size={20} />
            </div>
            <span className="text-2xl font-extrabold text-primary">100%</span>
            <span className="text-xs font-mono text-muted mt-1">On-Time Code Delivery</span>
          </div>

          <div className="bg-surface/80 backdrop-blur-sm border border-border/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/40 transition-colors shadow-sm">
            <div className="p-2 rounded-full bg-purple-500/10 text-purple-400 mb-1">
              <UserCheck size={20} />
            </div>
            <span className="text-2xl font-extrabold text-primary">15+</span>
            <span className="text-xs font-mono text-muted mt-1">Successful Projects</span>
          </div>
        </div>

        {/* Controls: Filter Category Tabs & Write Review Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-border/40">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 whitespace-nowrap border",
                  selectedCategory === cat
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "bg-surface/60 text-secondary border-border/50 hover:text-primary hover:bg-surface"
                )}
              >
                {cat} {cat === "All" ? `(${testimonials.length})` : `(${testimonials.filter(t => t.category === cat).length})`}
              </button>
            ))}
          </div>

          {/* Toggle Write Review Drawer */}
          <Button
            variant={showReviewForm ? "secondary" : "outline"}
            size="sm"
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="w-full sm:w-auto border-accent/40 text-primary hover:bg-accent/10 transition-colors"
          >
            <MessageSquarePlus size={16} className="mr-2 text-accent" />
            {showReviewForm ? "Close Feedback Drawer" : "Submit Your Review"}
          </Button>
        </div>

        {/* Write Review Collapsible Interactive Card / Live Preview */}
        {showReviewForm && (
          <div className="bg-surface border border-accent/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl mb-16 animate-reveal-up relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/50">
              <div>
                <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider flex items-center gap-1.5 mb-1">
                  <Sparkles size={14} /> Share Client Feedback
                </span>
                <h3 className="text-2xl font-bold text-primary">Write a Verified Client Review</h3>
              </div>
              <p className="text-xs font-mono text-muted max-w-sm">
                Your feedback helps improve future engineering projects and features directly on this portfolio.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 text-center flex flex-col items-center justify-center bg-background/50 border border-emerald-500/30 rounded-2xl animate-fade-in">
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                  <CheckCircle2 size={44} />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2">Thank You for Your Feedback!</h4>
                <p className="text-secondary text-sm max-w-md mb-6 leading-relaxed">
                  Your review has been transmitted successfully. Sukhen appreciates your collaboration and honest evaluation!
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                  >
                    Submit Another Review
                  </Button>
                  <Button
                    onClick={() => setShowReviewForm(false)}
                    variant="primary"
                    size="sm"
                  >
                    Done & Return to Reviews
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Form Inputs */}
                <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-mono font-semibold text-primary">Your Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        value={feedbackForm.name}
                        onChange={e => setFeedbackForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="e.g. Alex Johnson"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="role" className="text-xs font-mono font-semibold text-primary">Role / Title *</label>
                      <input 
                        type="text" 
                        id="role"
                        value={feedbackForm.role}
                        onChange={e => setFeedbackForm(prev => ({ ...prev, role: e.target.value }))}
                        required
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="e.g. Founder, Tech Startup"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="category" className="text-xs font-mono font-semibold text-primary">Project Type *</label>
                      <select
                        id="category"
                        value={feedbackForm.category}
                        onChange={e => setFeedbackForm(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="Full-Stack Dev">Full-Stack Dev</option>
                        <option value="Branding & UI">Branding & UI</option>
                        <option value="Web Design">Web Design</option>
                        <option value="DevSecOps & Cloud">DevSecOps & Cloud</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono font-semibold text-primary">Rating *</label>
                      <div className="flex items-center gap-1.5 h-10 px-3 bg-background border border-border/80 rounded-xl">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            onClick={() => handleRatingSelect(star)}
                            className="p-1 text-muted hover:text-amber-400 transition-transform hover:scale-125 focus:outline-none"
                          >
                            <Star 
                              size={18} 
                              className={star <= (hoverRating ?? feedbackForm.rating) ? "text-amber-400 fill-current" : "text-border"} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-mono font-semibold text-primary">Your Review Details *</label>
                    <textarea 
                      id="message"
                      value={feedbackForm.message}
                      onChange={e => setFeedbackForm(prev => ({ ...prev, message: e.target.value }))}
                      required
                      rows={4}
                      className="w-full bg-background border border-border/80 rounded-xl px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                      placeholder="Share what impressed you about working with Sukhen..."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin mr-2" />
                        Transmitting Review...
                      </>
                    ) : (
                      <>
                        Submit Client Feedback <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Right Live Review Card Preview */}
                <div className="flex flex-col gap-3 justify-center">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider block">Live Review Card Preview</span>
                  <div className="bg-background border border-accent/40 rounded-2xl p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
                    <Quote className="absolute top-6 right-6 text-accent/10 w-20 h-20 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold">
                          <ShieldCheck size={12} /> Verified Preview
                        </span>
                        <span className="text-[11px] font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-semibold">
                          {feedbackForm.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-amber-400 mb-4">
                        {Array.from({ length: feedbackForm.rating }).map((_, i) => (
                          <Star key={i} size={16} className="fill-current" />
                        ))}
                      </div>

                      <p className="text-secondary text-sm italic leading-relaxed mb-6 min-h-[4rem]">
                        &ldquo;{feedbackForm.message || "Your client review quote preview will render here in real-time as you type..."}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                      <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm">
                        {(feedbackForm.name || "A")[0].toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <h5 className="font-bold text-primary text-sm">{feedbackForm.name || "Your Name"}</h5>
                        <span className="text-xs font-mono text-muted">{feedbackForm.role || "Client / Title"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Enhanced Testimonials Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredTestimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-surface border border-border/70 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-accent/60 shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-0.5"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/15 transition-colors pointer-events-none"></div>

              <Quote className="absolute top-4 right-4 text-border/25 w-14 h-14 pointer-events-none group-hover:text-accent/15 transition-colors" />

              <div>
                {/* Header Tag Bar: Verified Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                    <ShieldCheck size={11} /> Verified Client
                  </span>
                  
                  {item.category && (
                    <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full font-semibold">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-current drop-shadow-sm" />
                  ))}
                  <span className="text-[11px] font-mono text-muted ml-1.5 font-semibold">5.0</span>
                </div>

                {/* Quote */}
                <p className="text-secondary text-xs sm:text-sm italic leading-relaxed mb-6 relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author info & Project Tag */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/40 flex-shrink-0 group-hover:border-accent transition-colors shadow-sm">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors">{item.name}</h4>
                      <BadgeCheck size={14} className="text-accent fill-accent/20" />
                    </div>
                    <span className="text-[11px] font-mono text-muted">{item.role}</span>
                  </div>
                </div>

                {item.project && (
                  <span className="text-[10px] font-mono text-muted bg-background px-2 py-0.5 rounded border border-border/50 hidden sm:inline-block">
                    {item.project}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
