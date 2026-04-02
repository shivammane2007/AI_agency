"use client";

import { Card, CardFront, CardBack } from "@/components/ui/CustomCard";
import { Button } from "@/components/ui/CustomButton";
import { Bot, BrainCircuit, Code2, Cpu, Eye, MessageSquareCode, Sparkles, ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".reveal-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        });

        (gsap.utils.toArray(".service-card-wrapper") as HTMLElement[]).forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 60,
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles size={14} /> Full Spectrum AI
                    </div>
                    <h1 className="reveal-header text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-white">Full-Stack <span className="text-emerald-500 italic">GenAI</span></h1>
                    <p className="reveal-header text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                        From high-level strategy to low-level model optimization, we offer the technical expertise required to lead in the age of intelligence.
                    </p>
                </div>

                <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[450px]">
                    {services.map((service, i) => (
                        <div key={i} className="service-card-wrapper h-full w-full">
                            <Card>
                                <CardFront className="bg-zinc-900/40 border-white/10 group-hover:border-emerald-500/50 transition-all duration-500 p-10">
                                    <div className="p-4 rounded-2xl bg-white/5 w-fit mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                                        <service.icon size={32} className="text-emerald-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                        <div className="w-12 h-1 bg-emerald-500 rounded-full mb-6 group-hover:w-24 transition-all duration-700" />
                                        <p className="text-zinc-400 line-clamp-3 font-light leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <p className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        View Deep Dive <ArrowRight size={14} />
                                    </p>
                                </CardFront>
                                <CardBack className="bg-zinc-900 dark:bg-zinc-800 p-10 flex flex-col items-center justify-center text-center">
                                    <service.icon size={64} className="text-emerald-500 mb-8 opacity-20" />
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-zinc-400 mb-10 max-w-xs mx-auto font-light leading-relaxed">
                                        {service.longDesc}
                                    </p>
                                    <Button variant="secondary" size="lg" className="w-full rounded-2xl">Initialize Project</Button>
                                </CardBack>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats or CTA */}
                <div className="mt-32 p-12 rounded-[3.5rem] bg-zinc-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Not sure where to start?</h2>
                            <p className="text-zinc-400 text-lg font-light">
                                Schedule a 30-minute discovery call with our solutions architects to map out your AI roadmap.
                            </p>
                        </div>
                        <div className="flex shrink-0">
                            <Button size="lg" className="px-12 py-8 rounded-[2rem] text-lg group bg-white text-black hover:bg-emerald-500 hover:text-white transition-all">
                                Book Discovery Call <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const services = [
    {
        title: "AI Strategy Consulting",
        description: "Expert guidance on identifying AI opportunities, feasibility analysis, and roadmap development.",
        longDesc: "We deep-dive into your datasets and business logic to identify where LLMs and automation can provide a 10x return on investment.",
        icon: BrainCircuit,
    },
    {
        title: "Custom AI Models",
        description: "Development and fine-tuning of proprietary AI models tailored to your specific business data.",
        longDesc: "From RAG-based systems to custom-trained PyTorch models, we build the brains that power your enterprise.",
        icon: Cpu,
    },
    {
        title: "Automation & Agents",
        description: "Deployment of autonomous AI agents to automate complex workflows and increase efficiency.",
        longDesc: "Our agents operate across your tools, handling negotiation, data synthesis, and task fulfillment 24/7.",
        icon: Bot,
    },
    {
        title: "Computer Vision",
        description: "Advanced image and video analysis solutions for quality control, security, and detection.",
        longDesc: "State-of-the-art vision models that process visual data with human-level accuracy and machine-level speed.",
        icon: Eye,
    },
    {
        title: "NLP & Chatbots",
        description: "Intelligent conversational interfaces and text analysis systems powered by state-of-the-art LLMs.",
        longDesc: "Build empathetic, personality-driven interfaces that resolve user intent with 95%+ success rate.",
        icon: MessageSquareCode,
    },
    {
        title: "SaaS Development",
        description: "End-to-end development of AI-powered SaaS products, from MVP to scalable solutions.",
        longDesc: "We provide the full stack—highly responsive frontends, robust backends, and seamless AI integrations.",
        icon: Code2,
    },
];

