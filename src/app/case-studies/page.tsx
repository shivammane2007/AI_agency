"use client";

import { ArrowUpRight, BarChart3, Clock, Target, Zap, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MetricCard } from "@/components/ui/MetricCard";
import { GlassPane } from "@/components/ui/GlassPane";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CaseStudies() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".reveal-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        });

        (gsap.utils.toArray(".case-card") as HTMLElement[]).forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen py-24 bg-black bg-dot-pattern">
            <div className="container mx-auto px-6">
                <div className="reveal-header text-center mb-24">
                    <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-white">Impact <span className="text-emerald-500">Stories</span></h1>
                    <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore how we've partnered with industry leaders to deploy transformative AI systems that deliver measurable, high-stakes results.
                    </p>
                </div>

                <div className="case-grid space-y-32">
                    {caseStudies.map((study, i) => (
                        <div key={i} className="case-card group">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-900 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 transition-all duration-700">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30 group-hover:scale-110 transition-transform duration-1000`} />
                                        <div className="absolute inset-0 flex items-center justify-center p-12">
                                            <study.icon size={120} className="text-white opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-125 transition-transform duration-1000" />
                                        </div>
                                        <div className="absolute top-8 left-8">
                                            <span className="px-4 py-2 bg-black/40 backdrop-blur-xl rounded-2xl text-xs font-bold text-white uppercase tracking-widest border border-white/10">
                                                {study.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-8 right-8">
                                            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 shadow-xl">
                                                <ArrowUpRight size={28} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-emerald-500 transition-colors leading-tight text-white">{study.title}</h2>
                                    <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light italic">
                                        "{study.description}"
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        {study.stats.map((stat, si) => (
                                            <div key={si} className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5">
                                                <div className="text-emerald-500 font-display text-3xl font-bold mb-1">{stat.value}</div>
                                                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="w-1 h-auto bg-emerald-500/20 rounded-full overflow-hidden">
                                                <div className="w-full h-1/2 bg-emerald-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-emerald-500">The Challenge</h4>
                                                <p className="text-sm text-zinc-400 leading-relaxed">{study.challenge}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <section className="mt-40 text-center py-24 bg-white/5 rounded-[4rem] px-8 border border-white/5">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Ready to be the next <span className="text-emerald-500">Success</span>?</h2>
                    <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
                        Partner with us to build custom AI solutions that drive growth and outperform competitors.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact">
                            <span className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                                Start Your Project <ArrowUpRight className="ml-2" />
                            </span>
                        </Link>
                        <Link href="/services">
                            <span className="inline-flex items-center px-8 py-4 bg-white text-black rounded-2xl font-bold hover:opacity-90 transition-all">
                                Explore Services
                            </span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

const caseStudies = [
    {
        title: "FinTech Neo-Guard",
        category: "Deep Learning",
        icon: ShieldCheck,
        description: "Deploying a real-time anomaly detection system for a global fintech disruptor processing $2B+ monthly transactions.",
        gradient: "from-emerald-500 to-cyan-500",
        challenge: "Legacy systems were producing 30% false positives, burying human analysts in noise.",
        stats: [
            { label: "Accuracy", value: "99.98%" },
            { label: "False Positives", value: "-85%" }
        ]
    },
    {
        title: "HealthLink Vision",
        category: "Computer Vision",
        icon: Activity,
        description: "Integrating high-precision imaging AI into diagnostic pipelines for 500+ hospitals across Europe.",
        gradient: "from-blue-600 to-indigo-600",
        challenge: "Radiologists faced significant backlogs in emergency diagnostics during peak hours.",
        stats: [
            { label: "Scan Speed", value: "3.2s" },
            { label: "Early Detection", value: "+42%" }
        ]
    },
    {
        title: "GlobalLogistics AI",
        category: "Predictive Analytics",
        icon: Zap,
        description: "Optimizing the global delivery network for a Fortune 100 logistics leader using dynamic reinforcement learning.",
        gradient: "from-orange-500 to-amber-500",
        challenge: "Unpredictable fuel spikes and manual route planning led to inefficient cross-border distribution.",
        stats: [
            { label: "Efficiency", value: "+28%" },
            { label: "Fuel Saved", value: "$4.1M" }
        ]
    },
    {
        title: "RetailFlow Conversational",
        category: "NLP",
        icon: Target,
        description: "Building an empathetic customer agent for a multi-billion dollar e-commerce platform.",
        gradient: "from-purple-500 to-pink-500",
        challenge: "Customer satisfaction was dropping due to rigid, rule-based chatbots that failed on complex queries.",
        stats: [
            { label: "Resolution", value: "72%" },
            { label: "CSAT Score", value: "+1.2" }
        ]
    }
];
