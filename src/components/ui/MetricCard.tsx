"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  description: string;
  className?: string;
}

export function MetricCard({ label, value, suffix = "", icon: Icon, description, className }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      onUpdate: () => setDisplayValue(Math.floor(obj.val)),
    });
  }, { scope: container });

  return (
    <div 
      ref={container}
      className={cn(
        "group relative overflow-hidden p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/50 transition-all duration-500",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Icon size={80} />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
          <Icon size={24} />
        </div>
        
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-display font-bold tracking-tight">
            {displayValue}
          </span>
          <span className="text-2xl font-bold text-emerald-500">{suffix}</span>
        </div>
        
        <h4 className="text-lg font-semibold mb-2 text-white">{label}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}
