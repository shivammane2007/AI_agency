"use client";

import { GlassPane } from "@/components/ui/GlassPane";
import { User, Rocket, Shield, Award, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".reveal-text", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
        });

        (gsap.utils.toArray(".value-card") as HTMLElement[]).forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });
        });
 
        (gsap.utils.toArray(".member-card") as HTMLElement[]).forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen py-24 bg-black bg-dot-pattern">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-32 text-center">
                    <h1 className="reveal-text text-5xl md:text-7xl font-display font-bold mb-8 text-white">Our Vision for AI</h1>
                    <p className="reveal-text text-xl text-zinc-400 leading-relaxed font-light">
                        Founded by a group of industry veterans from Silicon Valley's leading research labs, we are dedicated to building systems that don't just solve problems, but anticipate them.
                    </p>
                </div>

                {/* Mission */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6">
                                <Rocket size={14} /> Our Mission
                            </div>
                            <h2 className="text-4xl font-bold mb-8 leading-tight text-white">Empowering a Smarter, Faster Future</h2>
                            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                                Our goal is to bridge the gap between complex research and real-world utility. We build autonomous agents that learn, adapt, and scale seamlessly with your organizational needs.
                            </p>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-2">
                                "We are moving beyond simple automation into a world of collaborative intelligence."
                            </p>
                        </div>
                        <GlassPane className="h-[400px] overflow-hidden group relative">
                           <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="AI Network" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
                           <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-transparent to-emerald-500/20 pointer-events-none" />
                           <div className="relative h-full flex items-center justify-center">
                               <div className="absolute w-24 h-24 rounded-full bg-emerald-500 blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity" />
                               <div className="text-6xl text-white font-display font-black group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">AI</div>
                           </div>
                        </GlassPane>
                    </div>
                </section>

                {/* Evolution Section */}
                <section className="mb-32 py-20 bg-white/5 rounded-[3rem] px-8 lg:px-16 overflow-hidden relative">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8">The Evolution</h2>
                        <div className="space-y-12">
                            <div className="relative pl-10 border-l border-emerald-500/30">
                                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-emerald-500" />
                                <h4 className="text-xl font-bold mb-2 text-white">2021: The Research Lab</h4>
                                <p className="text-zinc-400">Started as an independent research collective focusing on multi-agent reinforcement learning.</p>
                            </div>
                            <div className="relative pl-10 border-l border-emerald-500/30">
                                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-emerald-500" />
                                <h4 className="text-xl font-bold mb-2">2023: Going Commercial</h4>
                                <p className="text-zinc-500 dark:text-zinc-400">Launched our first pilot programs for enterprise-scale workflow automation.</p>
                            </div>
                            <div className="relative pl-10 border-l border-emerald-500/30">
                                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-emerald-500" />
                                <h4 className="text-xl font-bold mb-2">Future: Global Scale</h4>
                                <p className="text-zinc-500 dark:text-zinc-400">Expanding our infrastructure to support 1M+ autonomous agents across 50 countries.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="values-section mb-32">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Our Core Operating Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="value-card group p-10 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/50 transition-all duration-500">
                                <div className="p-3 rounded-xl bg-white/5 w-fit mb-8 group-hover:bg-emerald-500 transition-colors">
                                    <v.icon size={28} className="text-emerald-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team */}
                <section className="team-section">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">The Architects</h2>
                        <p className="text-zinc-500 dark:text-zinc-400">Led by pioneers in machine learning and distributed systems.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <GlassPane key={i} className="member-card p-8 text-center group cursor-default">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 group-hover:border-emerald-500/100 border-dashed transition-all duration-700 animate-spin-slow" />
                                    <div className="absolute inset-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden flex items-center justify-center">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-xl mb-1 text-white">{member.name}</h4>
                                <p className="text-sm text-emerald-500 mb-4 font-mono uppercase tracking-widest">{member.role}</p>
                                <p className="text-xs text-zinc-500 mb-6 leading-relaxed italic text-zinc-400">"{member.bio}"</p>
                                <div className="flex justify-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
                                    <Twitter size={16} className="cursor-pointer hover:text-emerald-500" />
                                    <Linkedin size={16} className="cursor-pointer hover:text-emerald-500" />
                                </div>
                            </GlassPane>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

const values = [
    { 
        title: "Radical Innovation", 
        desc: "We don't settle for incremental improvements. We build the outliers that redefine entire industries.",
        icon: Rocket 
    },
    { 
        title: "Ethics First", 
        desc: "AI safety isn't a feature; it's our foundation. Every model is built for human alignment and privacy.",
        icon: Shield 
    },
    { 
        title: "Hyper-Excellence", 
        desc: "From the latency of our APIs to the radius of our card corners, excellence is in every detail.",
        icon: Award 
    },
];

const team = [
    { name: "Dr. Elena Vance", role: "CEO & Co-Founder", bio: "Leading AI research for over 15 years. Prev Google Brain.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
    { name: "Julian Black", role: "CTO & Architect", bio: "Architect of distributed systems. Prev OpenAI Engineer.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
    { name: "Sophia Chen", role: "Head of Product", bio: "Expert in human-AI interaction. UX pioneer.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "Marcus Thorne", role: "Strategy Director", bio: "Focused on global scale and policy alignment.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" },
];

