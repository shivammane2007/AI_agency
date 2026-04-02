"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ProcessStep({ number, title, description, icon: Icon, className }: ProcessStepProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
        scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
        },
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className={cn("group relative flex gap-8 p-6 rounded-2xl transition-all duration-500 hover:bg-zinc-800/30", className)}>
      <div className="flex-shrink-0 relative">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
          <Icon size={32} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-500">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors text-white">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
