"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/CustomButton";
import { Card, CardFront, CardBack } from "@/components/ui/CustomCard";
import { ArrowRight, Bot, BrainCircuit, Cpu, Zap, Target, Layers, ShieldCheck, Search, Rocket } from "lucide-react";
import { GlassPane } from "@/components/ui/GlassPane";
import { MetricCard } from "@/components/ui/MetricCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { HeroWave } from "@/components/ui/ai-input-hero";
import { UserAvatars } from "@/components/ui/user-avatars";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Features Cards Stagger
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Stats Section Fade In
      gsap.from(".stats-header", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Process Section Timeline
      gsap.from(".process-title", {
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="flex flex-col bg-dot-pattern">
      {/* NEW HERO SECTION */}
      <HeroWave 
        title="Building Intelligent Systems for the Future"
        subtitle="We design, develop, and deploy AI-powered digital products that redefine industries."
        onPromptSubmit={(val) => console.log("Prompt submitted:", val)}
      />

      {/* FEATURES / STARTUP STYLE */}
      <section className="features-section py-24 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Powered by Advanced AI</h2>
            <p className="max-w-xl mx-auto text-zinc-400">
              Leverage state-of-the-art models and infrastructure to scale your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
            {features.map((feature, i) => (
              <div key={i} className="feature-card h-[400px] w-full">
                <Card>
                  <CardFront className="bg-zinc-900/60 border-white/10">
                    <div className="p-4 rounded-full bg-white/5 w-fit mb-6">
                      <feature.icon size={32} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.shortDesc}</p>
                    </div>
                    <div className="mt-auto pt-8 flex items-center text-sm font-medium text-emerald-500">
                      Hover to reveal <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardFront>
                  <CardBack>
                    <feature.icon size={48} className="text-emerald-500 mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-zinc-400 mb-8">{feature.longDesc}</p>
                    <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                  </CardBack>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="stats-header text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Unrivaled Excellence</h2>
            <p className="max-w-xl mx-auto text-zinc-400">
              We deliver measurable impact through cutting-edge research and deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              label="Efficiency Gain" 
              value={85} 
              suffix="%" 
              icon={Zap} 
              description="Average reduction in operational bottlenecks across our client portfolio."
            />
            <MetricCard 
              label="Data Precision" 
              value={99} 
              suffix=".9%" 
              icon={Target} 
              description="Highest accuracy achieved in our custom-trained large language models."
            />
            <MetricCard 
              label="Enterprise Trust" 
              value={250} 
              suffix="+" 
              icon={ShieldCheck} 
              description="Global corporations relying on our AI security frameworks."
            />
            <MetricCard 
              label="ROI Acceleration" 
              value={4} 
              suffix="x" 
              icon={Rocket} 
              description="Faster project delivery compared to traditional software cycles."
            />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-24">
              <h2 className="process-title text-3xl md:text-5xl font-display font-bold mb-6 leading-tight text-white">
                Our Proven AI <span className="text-emerald-500">Methodology</span>
              </h2>
              <p className="text-zinc-400 mb-8 max-w-sm">
                A seamless transition from conceptualizing ideas to deploying scalable enterprise-grade systems.
              </p>
              <Button onClick={() => window.location.href = '/contact'} className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="lg:w-2/3 flex flex-col gap-6">
              <ProcessStep 
                number="01" 
                title="Discovery Phase" 
                icon={Search}
                description="We deep-dive into your datasets, workflows, and business objectives to identify high-impact AI opportunities."
              />
              <ProcessStep 
                number="02" 
                title="Strategic Prototyping" 
                icon={Layers}
                description="Rapid development of MVPs to validate core hypotheses and demonstrate tangible value before full-scale build."
              />
              <ProcessStep 
                number="03" 
                title="Model Development" 
                icon={BrainCircuit}
                description="Architecture selection and rigorous training of custom models optimized for your specific performance metrics."
              />
              <ProcessStep 
                number="04" 
                title="Deployment & Scaling" 
                icon={Rocket}
                description="Final integration into existing tech stacks with robust monitoring and auto-scaling infrastructure."
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 border-t border-zinc-800 bg-zinc-900/10">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 px-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">What Our Clients Say</h2>
              <p className="text-zinc-400">Direct impact documented by our valued partners.</p>
            </div>
            <div className="flex gap-4 mb-2">
              <div className="flex -space-x-4">
                <UserAvatars 
                  users={[
                    { id: 1, image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face" },
                    { id: 2, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" },
                    { id: 3, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
                    { id: 4, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
                  ]} 
                  maxVisible={4} 
                  size={48} 
                  overlap={40}
                  className="ring-2 ring-emerald-500/20 rounded-full"
                />
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-white">4.9/5</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Rating Score</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <GlassPane key={i} className="p-8 border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                <div className="flex gap-1 mb-6 text-emerald-500">
                  {[...Array(5)].map((_, j) => (
                    <Zap key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic text-zinc-300 mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 overflow-hidden shadow-lg shadow-emerald-500/10">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.author}</h4>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </GlassPane>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF LOGOS (Placeholder) */}
      <section className="py-16 border-y border-zinc-800 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-mono text-zinc-500 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="text-2xl font-bold font-display">OPENAI</div>
            <div className="text-2xl font-bold font-display">VERCEL</div>
            <div className="text-2xl font-bold font-display">LINEAR</div>
            <div className="text-2xl font-bold font-display">ANTHROPIC</div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "AI Strategy",
    shortDesc: "Strategic implementation of AI technologies.",
    longDesc: "We help you identify high-impact AI opportunities and build a roadmap for implementation that drives real business value.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Models",
    shortDesc: "Fine-tuned LLMs for specific use cases.",
    longDesc: "Develop and deploy custom language models trained on your proprietary data for superior performance and privacy.",
    icon: Cpu,
  },
  {
    title: "Automation Agents",
    shortDesc: "Autonomous agents that work 24/7.",
    longDesc: "Deploy intelligent agents that handle complex workflows, customer support, and data analysis without human intervention.",
    icon: Bot,
  },
];

const testimonials = [
  {
    quote: "The efficiency gains were immediate. Our workflow overhead dropped by 40% in the first quarter of deployment.",
    author: "Sarah Chen",
    role: "CTO, NexaCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Building proprietary models seemed daunting until we partnered with AI Agency. Their expertise is unmatched.",
    author: "Marcus Thorne",
    role: "Head of AI, FluxFlow",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The safety frameworks they implemented allowed us to confidently scale our LLM across global regions.",
    author: "Evelyn Ross",
    role: "Security Director, SecureNet",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  }
];
