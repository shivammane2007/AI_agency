"use client";
import React, { useState, useEffect } from 'react';
import { Home, Lightbulb, Code2, Briefcase, User, Mail } from 'lucide-react';
import Link from 'next/link';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
}

const dockItems: DockItem[] = [
  { id: 'home', icon: <Home size={20} />, label: 'Home', href: '/' },
  { id: 'services', icon: <Lightbulb size={20} />, label: 'Services', href: '/services' },
  { id: 'solutions', icon: <Code2 size={20} />, label: 'Solutions', href: '/solutions' },
  { id: 'case-studies', icon: <Briefcase size={20} />, label: 'Case Studies', href: '/case-studies' },
  { id: 'about', icon: <User size={20} />, label: 'About', href: '/about' },
  { id: 'contact', icon: <Mail size={20} />, label: 'Contact', href: '/contact' },
];

interface DockItemProps {
  item: DockItem;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const DockItemComponent: React.FC<DockItemProps> = ({ item, isHovered, onHover }) => {
  return (
    <Link
      href={item.href}
      className="relative group"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={`
          relative flex items-center justify-center
          w-10 h-10 rounded-xl
          bg-black/20 backdrop-blur-md
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          ${isHovered 
            ? 'bg-emerald-500/20 border-emerald-500/40 -translate-y-1.5 shadow-lg shadow-emerald-500/20' 
            : 'hover:bg-white/5 hover:-translate-y-0.5'
          }
        `}
      >
        <div className={`
          text-white transition-all duration-300
          ${isHovered ? 'text-emerald-400 scale-125 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-zinc-400 group-hover:text-white'}
        `}>
          {item.icon}
        </div>
      </div>
      
      {/* Tooltip */}
      <div className={`
        absolute -bottom-10 left-1/2 transform -translate-x-1/2
        px-3 py-1.5 rounded-lg
        bg-zinc-900/90 backdrop-blur-xl
        text-white text-xs font-medium
        border border-white/10
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        ${isHovered 
          ? 'opacity-100 translate-y-2' 
          : 'opacity-0 translate-y-0'
        }
        shadow-xl
      `}>
        {item.label}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-zinc-900/90 rotate-45 border-l border-t border-white/10"></div>
        </div>
      </div>
    </Link>
  );
};
export const MinimalistDock: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const scrollThreshold = 10; // Avoid jitter

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hide on scroll down, show on scroll up
          if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }

          // Apply extra shadow/blur intensity when scrolled away from top
          setIsScrolled(currentScrollY > 20);
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`
      fixed top-0 left-1/2 transform -translate-x-1/2 z-[100]
      transition-all duration-300 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
    `}>
      <div className="relative">
        {/* Dock Container */}
        <div className={`
          flex items-center gap-2 px-3 py-2.5
          rounded-2xl
          bg-zinc-950/60 backdrop-blur-3xl
          border border-white/10
          ${isScrolled ? 'shadow-[0_0_40px_rgba(0,0,0,0.8)] border-white/20' : 'shadow-[0_0_40px_rgba(0,0,0,0.5)]'}
          transition-all duration-500 ease-out
          w-fit h-[64px]
        `}>
          {dockItems.map((item) => (
            <DockItemComponent
              key={item.id}
              item={item}
              isHovered={hoveredItem === item.id}
              onHover={setHoveredItem}
            />
          ))}
        </div>
        
        {/* Reflection Effect (Above) */}
        <div className="absolute bottom-full left-0 right-0 h-10 overflow-hidden pointer-events-none">
          <div className={`
            flex items-center gap-2 px-3 py-2.5
            rounded-2xl
            opacity-15
            transform scale-y-[-1] blur-md
            transition-all duration-300 ease-out
          `}>
            {dockItems.map((item) => (
              <div
                key={`reflection-${item.id}`}
                className={`
                  flex items-center justify-center
                  w-10 h-10 rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredItem === item.id ? 'translate-y-[-4px]' : ''}
                `}
              >
                <div className="text-emerald-500/50">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalistDock;
