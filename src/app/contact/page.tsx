"use client";

import { Button } from "@/components/ui/Button";
import { GlassPane } from "@/components/ui/GlassPane";
import { Mail, MapPin, Phone, MessageSquare, Send, Globe, ChevronRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Contact() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from(".reveal-title", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
        .from(".info-item", {
            x: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        }, "-=0.5")
        .from(".contact-form", {
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "-=0.8");
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen py-24 bg-zinc-50 dark:bg-black relative overflow-hidden bg-grid-pattern">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Info Column */}
                        <div className="lg:col-span-5">
                            <h1 className="reveal-title text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
                                Start a <span className="text-emerald-500 italic">Conversation</span>.
                            </h1>
                            <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-16 font-light leading-relaxed">
                                Whether you're looking for a discovery session or have a specific challenge in mind, we're ready to engineer your solution.
                            </p>

                            <div className="space-y-10">
                                <div className="info-item group flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Technical Inquiry</h3>
                                        <p className="text-xl font-bold hover:text-emerald-500 transition-colors">hello@aiagency.com</p>
                                    </div>
                                </div>

                                <div className="info-item group flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Global HQ</h3>
                                        <p className="text-xl font-bold leading-snug">
                                            123 AI Boulevard<br />
                                            San Francisco, CA 94103
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item group flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Direct Line</h3>
                                        <p className="text-xl font-bold">+1 (555) 000-0000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-white/5">
                                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Follow Research</p>
                                <div className="flex gap-6 text-zinc-400">
                                    <span className="hover:text-emerald-500 cursor-pointer font-bold transition-colors underline underline-offset-8">TWITTER</span>
                                    <span className="hover:text-emerald-500 cursor-pointer font-bold transition-colors underline underline-offset-8">LINKEDIN</span>
                                    <span className="hover:text-emerald-500 cursor-pointer font-bold transition-colors underline underline-offset-8">GITHUB</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7 contact-form">
                            <GlassPane className="p-8 md:p-12 relative border-emerald-500/10">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Send size={150} className="-rotate-12" />
                                </div>
                                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Identity</label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Name or Organization"
                                                className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Contact Node</label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="email@example.com"
                                                className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Objective</label>
                                        <select
                                            id="subject"
                                            className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium appearance-none"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Project Partnership</option>
                                            <option>Technical Support</option>
                                            <option>Media & Press</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Data Payload</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Describe your vision or challenge..."
                                            className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none font-medium"
                                        />
                                    </div>

                                    <Button size="lg" className="w-full py-8 text-lg rounded-[2rem] group">
                                        Initialize Connection 
                                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </GlassPane>
                            
                            <div className="mt-8 flex items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Support Available</span>
                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 24h Response Target</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

