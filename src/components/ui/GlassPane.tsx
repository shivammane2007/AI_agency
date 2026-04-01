import { cn } from "@/lib/utils";
import React from "react";

interface GlassPaneProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function GlassPane({ children, className, ...props }: GlassPaneProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
