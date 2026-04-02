"use client";

import WorkspaceForm from "@/components/ui/form-layout";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, MapPin, Globe, MessageSquare } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function Contact() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from(".reveal-title", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
        })
        .from(".info-item", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        }, "-=0.8")
        .from(".workspace-form-container", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
        }, "-=0.8");
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen pt-28 pb-24 bg-black relative overflow-hidden bg-dot-pattern isolation-auto">
            {/* Background Decorative Elements - Isolated */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[160px] -z-10 pointer-events-none animate-pulse-slow overflow-hidden" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse-slow delay-1000 overflow-hidden" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 isolate">
                
                {/* Creative Content Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 relative">
                    {/* Decorative glow behind title */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-emerald-500/20 rounded-[100%] blur-[60px] -z-10 pointer-events-none" />
                    
                    <h1 className="reveal-title text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight mb-6">
                        Architect Your <span className="text-emerald-500 italic">Workspace</span>.
                    </h1>
                    <p className="reveal-title text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Initialize your environment, select your compute region, and scale your design team with our elite infrastructure.
                    </p>
                    
                    {/* Contact Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <div className="info-item flex items-center gap-3 bg-zinc-900/80 border border-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm hover:border-emerald-500/30 transition-colors">
                            <Mail size={16} className="text-emerald-500" />
                            <span className="text-sm font-medium text-zinc-300">hello@aiagency.com</span>
                        </div>
                        <div className="info-item flex items-center gap-3 bg-zinc-900/80 border border-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm hover:border-emerald-500/30 transition-colors">
                            <Globe size={16} className="text-emerald-500" />
                            <span className="text-sm font-medium text-zinc-300">San Francisco, CA</span>
                        </div>
                        <div className="info-item flex items-center gap-3 bg-zinc-900/80 border border-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm hover:border-emerald-500/30 transition-colors">
                            <MessageSquare size={16} className="text-emerald-500" />
                            <span className="text-sm font-medium text-zinc-300">+1 (555) 000-0000</span>
                        </div>
                    </div>
                </div>

                <div className="workspace-form-container">
                    <WorkspaceForm />
                </div>
            </div>
        </div>
    );
}
