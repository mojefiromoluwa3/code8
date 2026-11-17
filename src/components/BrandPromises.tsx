import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const BrandPromises: React.FC = () => {
  const promiseIcons = [
    <Utensils className="w-8 h-8 text-brand-gold-bright" />,
    <HeartHandshake className="w-8 h-8 text-brand-gold-bright" />,
    <ShieldCheck className="w-8 h-8 text-brand-gold-bright" />
  ];

  return (
    <section id="about" className="py-20 bg-brand-green text-white relative overflow-hidden">
      {/* Decorative leaf / subtle background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-light/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-dark/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light/80 text-brand-gold-bright text-xs font-black uppercase tracking-wider mb-3 border border-brand-green-light">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Our Brand Commitments
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Good Food, Great Vibes.
          </h2>
          <p className="text-base sm:text-lg text-brand-cream-soft/80 font-normal">
            At CODE-8, we take pride in offering delicious, authentic food crafted for your everyday satisfaction.
          </p>
        </div>

        {/* 3 Brand Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_INFO.promises.map((promise, index) => (
            <div
              key={index}
              className="bg-brand-green-light/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-brand-green-deep flex items-center justify-center mb-6 shadow-md border border-brand-green-light group-hover:scale-105 transition-transform">
                  {promiseIcons[index]}
                </div>

                {/* Exact Flyer Promise Title */}
                <h3 className="text-xl sm:text-2xl font-black text-brand-gold-bright tracking-tight mb-3">
                  {promise.title}
                </h3>

                {/* Supporting description faithful to flyer */}
                <p className="text-sm text-brand-cream-soft/90 leading-relaxed font-normal">
                  {promise.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold-bright" />
                <span className="text-xs font-bold text-brand-gold-light tracking-wide uppercase">
                  CODE-8 Guarantee
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Line Showcase Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-gold to-brand-gold-bright text-brand-green-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div className="text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-brand-green-dark/70">
              {BUSINESS_INFO.brandLine}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-green-deep tracking-tight mt-0.5">
              Taste the difference in every bite.
            </h3>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello CODE-8! 🍽️ I would like to order your freshly cooked meals today.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-brand-gold-bright font-extrabold text-sm tracking-wide uppercase shadow-md transition-all hover:scale-102 shrink-0"
          >
            Connect With CODE-8
          </a>
        </div>

      </div>
    </section>
  );
};
