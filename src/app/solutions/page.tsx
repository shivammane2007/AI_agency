"use client";

import { Button } from "@/components/ui/CustomButton";
import { GlassPane } from "@/components/ui/GlassPane";
import { ArrowRight, Building, Rocket, Cog, BarChart, CheckCircle2, Sparkles, Zap, Shield, Cpu } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Solutions() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".reveal-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });

        (gsap.utils.toArray(".solution-card") as HTMLElement[]).forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen py-24 bg-black bg-dot-pattern relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="reveal-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles size={14} /> Enterprise Architectures
                    </div>
                    <h1 className="reveal-item text-white text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter drop-shadow-sm">Scalable <span className="text-emerald-500 italic">Impact</span>.</h1>
                    <p className="reveal-item text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                        We engineer custom AI ecosystems that integrate seamlessly with your existing infrastructure, ensuring long-term scalability and security.
                    </p>
                </div>

                <div className="solution-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {solutions.map((solution, i) => (
                        <GlassPane key={i} className="solution-card group p-8 md:p-12 bg-zinc-900/80 border-white/10 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-700 relative overflow-hidden backdrop-blur-2xl">
                            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                                <solution.icon size={120} />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                                        <solution.icon size={32} />
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-emerald-500 transition-colors">
                                        Learn More <ArrowRight size={14} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>
                                
                                <h2 className="text-3xl font-bold mb-6 text-white group-hover:text-emerald-400 transition-colors drop-shadow-sm">{solution.title}</h2>
                                <p className="text-lg text-zinc-400 dark:text-zinc-300 mb-10 leading-relaxed font-light">
                                    {solution.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    {solution.features.map((feature, fi) => (
                                        <div key={fi} className="flex items-center gap-3 text-sm font-medium text-zinc-300 dark:text-zinc-200">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-emerald-500 transition-all duration-1000 group-hover:w-full" />
                        </GlassPane>
                    ))}
                </div>

                {/* Bottom Banner */}
                <section className="reveal-item mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-emerald-500/20">
                    <div className="bg-zinc-900/90 backdrop-blur-2xl rounded-[2.9rem] p-12 text-center">
                        <h3 className="text-2xl md:text-4xl font-display font-bold mb-6 text-white tracking-tight">Need a custom architecture?</h3>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto font-light">
                            Our research team specializes in exotic model architectures and multi-tenant security frameworks. Let's discuss your specific requirements.
                        </p>
                        <Button variant="secondary" size="lg" className="px-10 rounded-2xl group">
                            Technical Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}

const solutions = [
    {
        title: "Enterprise AI Core",
        description: "Hardened infrastructure for global scaling. We implement high-availability clusters with built-in redundancy and strict compliance standards.",
        icon: Building,
        features: ["Multi-Tenant Security", "Air-Gapped Deployment", "Automatic Versioning", "24/7 Health Monitoring"]
    },
    {
        title: "Venture Accelerator",
        description: "Moving from idea to deployment in weeks, not months. We provide the full stack—from data cleaning to the frontend interface.",
        icon: Rocket,
        features: ["Rapid MVP Delivery ", "Serverless Architecture", "Cost-Optimized GPUs", "Marketing Support"]
    },
    {
        title: "Workflow Autonomy",
        description: "Transform internal friction into fluid motion. Our agents handle the 'busy work' across your existing SaaS stack autonomously.",
        icon: Cog,
        features: ["Slack/Teams Integration", "Document Processing", "Automated Reporting", "Intelligent Alerting"]
    },
    {
        title: "Neural Analytics",
        description: "Beyond static charts. Get predictive insights that tell you what's coming next, not just what happened yesterday.",
        icon: BarChart,
        features: ["Predictive Modeling", "Anomaly Detection", "NLP Data Extraction", "Custom Dashboards"]
    },
];

