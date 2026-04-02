"use client";

import { Card } from "@/components/ui/CustomCard";
import { Button } from "@/components/ui/CustomButton";
import { GlassPane } from "@/components/ui/GlassPane";
import Link from "next/link";
import { ArrowRight, Clock, Tag, TrendingUp, Sparkles } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Blog() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".reveal-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        });

        gsap.from(".featured-badge", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    }, { scope: container });

    const featured = posts[0];
    const regularPosts = posts.slice(1);

    return (
        <div ref={container} className="min-h-screen py-24 bg-zinc-50 dark:bg-black bg-grid-pattern">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="reveal-item text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">Intelligence <span className="text-emerald-500">Insights</span></h1>
                    <p className="reveal-item text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-light">
                        Latest updates from the frontier of artificial general intelligence and autonomous systems.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="reveal-item mb-20">
                    <Link href="#" className="group block relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent z-10" />
                                <div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-1000" />
                                <div className="featured-badge absolute top-8 left-8 z-20 px-4 py-2 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <TrendingUp size={14} /> Featured Article
                                </div>
                            </div>
                            <div className="p-8 lg:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-emerald-500 mb-6 font-mono text-sm">
                                    <span className="flex items-center gap-2"><Tag size={14} /> {featured.category}</span>
                                    <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                                    <span className="flex items-center gap-2 font-sans text-zinc-500"><Clock size={14} /> 6 min read</span>
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6 group-hover:text-emerald-500 transition-colors leading-tight">
                                    {featured.title}
                                </h2>
                                <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3">
                                    {featured.excerpt}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-emerald-500 font-bold">
                                        E
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">Dr. Elena Vance</div>
                                        <div className="text-xs text-zinc-500">Oct 24, 2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Sub-header */}
                <div className="reveal-item flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Sparkles className="text-emerald-500" size={24} /> Recent Publications
                    </h3>
                    <div className="flex gap-2">
                        {['All', 'AI Trends', 'Engineering', 'Design'].map(cat => (
                            <button key={cat} className="px-4 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 transition-colors">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {regularPosts.map((post, i) => (
                        <Link key={i} href="#" className="reveal-item group block">
                            <div className="relative mb-8 overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800 aspect-[16/9] border border-zinc-200 dark:border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <Button size="sm" variant="secondary">Read Case Study</Button>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-emerald-500 mb-4 font-mono">
                                <span className="bg-emerald-500/10 px-3 py-1 rounded-full">{post.category}</span>
                                <span className="text-zinc-500">{post.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-500 transition-colors leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-2 font-light leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-sm font-bold text-emerald-500 group-hover:gap-2 transition-all">
                                EXPLORE <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter */}
                <section className="reveal-item mt-32 p-12 rounded-[3rem] bg-emerald-500 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid-pattern invert" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">Stay Ahead of the Curve</h2>
                        <p className="text-emerald-100 mb-10 max-w-xl mx-auto text-lg font-light">
                            Receive a weekly summary of our latest research breakthroughs and enterprise AI deployment strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your work email" 
                                className="px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition-all font-medium flex-grow"
                            />
                            <Button variant="secondary" className="px-8 whitespace-nowrap">Subscribe</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const posts = [
    {
        title: "The Future of Autonomous Agents in Enterprise",
        excerpt: "Autonomous agents are moving beyond simple scheduled tasks. We investigate the architectural shifts required to support agent-driven organizations where AI handles cross-departmental negotiation and fulfillment autonomously.",
        category: "AI Trends",
        date: "Oct 24, 2025",
    },
    {
        title: "Optimizing LLM Inference at Scale",
        excerpt: "When deploying models to millions of users, every millisecond and cent counts. Learn how to implement efficient KV caching and batching strategies to reduce overhead by up to 60% without sacrificing response quality.",
        category: "Engineering",
        date: "Oct 12, 2025",
    },
    {
        title: "The Ethics of Generative Interface Design",
        excerpt: "As UI becomes dynamic and generated on-the-fly, how do we maintain consistency, accessibility, and user trust? This article explores the new design patterns for fluid, personality-driven interfaces.",
        category: "Design",
        date: "Sep 28, 2025",
    },
    {
        title: "Securing the Neural Perimeter",
        excerpt: "Prompt injection and data poisoning are the new cyber threats. We detail our 'Defense in Depth' strategy for protecting enterprise data in RAG-based systems.",
        category: "Cybersecurity",
        date: "Sep 15, 2025",
    },
];

