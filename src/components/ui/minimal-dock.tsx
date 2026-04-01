'use client'
import React, { useState } from 'react';
import { Home, Lightbulb, Code2, Briefcase, User, Mail, Settings } from 'lucide-react';
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
          w-11 h-11 rounded-xl
          bg-black/20 backdrop-blur-md
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          ${isHovered 
            ? 'scale-110 bg-emerald-500/20 border-emerald-500/40 -translate-y-2 shadow-lg shadow-emerald-500/20' 
            : 'hover:scale-105 hover:bg-white/5 hover:-translate-y-1'
          }
        `}
      >
        <div className={`
          text-white transition-all duration-300
          ${isHovered ? 'text-emerald-400 scale-110 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-zinc-400 group-hover:text-white'}
        `}>
          {item.icon}
        </div>
      </div>
      
      {/* Tooltip */}
      <div className={`
        absolute -top-12 left-1/2 transform -translate-x-1/2
        px-3 py-1.5 rounded-lg
        bg-zinc-900/90 backdrop-blur-xl
        text-white text-xs font-medium
        border border-white/10
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        ${isHovered 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-2'
        }
        shadow-xl
      `}>
        {item.label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-zinc-900/90 rotate-45 border-r border-b border-white/10"></div>
        </div>
      </div>
    </Link>
  );
};

export const MinimalistDock: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        {/* Dock Container */}
        <div className={`
          flex items-end gap-3 px-4 py-3
          rounded-2xl
          bg-zinc-950/40 backdrop-blur-2xl
          border border-white/5
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
          transition-all duration-500 ease-out
          ${hoveredItem ? 'scale-[1.02]' : ''}
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
        
        {/* Reflection Effect */}
        <div className="absolute top-full left-0 right-0 h-12 overflow-hidden pointer-events-none">
          <div className={`
            flex items-start gap-3 px-4 py-3
            rounded-2xl
            opacity-20
            transform scale-y-[-1] blur-sm
            transition-all duration-500 ease-out
            ${hoveredItem ? 'scale-[1.02] scale-y-[-1.02]' : ''}
          `}>
            {dockItems.map((item) => (
              <div
                key={`reflection-${item.id}`}
                className={`
                  flex items-center justify-center
                  w-11 h-11 rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredItem === item.id ? 'translate-y-2' : ''}
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
