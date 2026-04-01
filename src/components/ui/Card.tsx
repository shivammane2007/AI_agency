"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn("group perspective-1000 w-full h-full", className)}
            {...props}
        >
            <div className="relative w-full h-full transition-transform duration-1200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] transform-style-3d preserve-3d group-hover:rotate-y-180">
                {children}
            </div>
        </div>
    );
}

interface CardFaceProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardFront({ children, className, ...props }: CardFaceProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full backface-hidden bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-start justify-between z-10",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardBack({ children, className, ...props }: CardFaceProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-start justify-center text-center",
                className
            )}
            {...props}
        >
            <div className="bg-emerald-500/10 absolute inset-0 rounded-2xl -z-10" />
            {children}
        </div>
    );
}
