import React from 'react';

interface WordmarkProps {
  className?: string;
  light?: boolean;
}

export const Wordmark: React.FC<WordmarkProps> = ({ className = '', light = false }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 font-display select-none ${className}`}>
      {/* Brand Icon Badge */}
      <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl font-black text-xl tracking-tight transition-transform duration-200 hover:scale-105 shadow-md ${
        light 
          ? 'bg-brand-gold-bright text-brand-green-dark shadow-black/20' 
          : 'bg-brand-green text-brand-gold-bright shadow-brand-green/30 border border-brand-green-light'
      }`}>
        <span className="relative z-10 font-black">C8</span>
        {/* Subtle decorative dot */}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-gold-bright border-2 border-white shadow-sm" />
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`text-2xl font-black tracking-tight ${
            light ? 'text-white' : 'text-brand-green'
          }`}>
            CODE<span className="text-brand-gold-bright font-black">-8</span>
          </span>
        </div>
        <span className={`text-[9.5px] font-bold tracking-widest uppercase mt-0.5 ${
          light ? 'text-brand-gold-light' : 'text-brand-charcoal-muted'
        }`}>
          Good Food &bull; Great Vibes
        </span>
      </div>
    </div>
  );
};
