import React from 'react';
import { ArrowDownRight, MessageCircle, Truck, UtensilsCrossed, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, FALLBACK_FOOD_IMAGE } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenOrder }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello CODE-8! 🍽️ I would like to place an order from your menu.'
  )}`;

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative background blobs & leaf accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-green-soft/40 to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-brand-gold-subtle/80 -z-10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Service & Brand Line Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green text-brand-gold-bright text-xs font-black tracking-wider uppercase shadow-soft-sm">
                <Truck className="w-3.5 h-3.5" />
                {BUSINESS_INFO.serviceMessage}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-gold-light/60 text-brand-green-dark text-xs font-black tracking-wide border border-brand-gold/30">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold-hover" />
                {BUSINESS_INFO.brandLine}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-green tracking-tight leading-[1.08] mb-4">
              Good Food, <br className="hidden sm:inline" />
              <span className="relative inline-block text-brand-green">
                Great Vibes<span className="text-brand-gold">.</span>
                {/* Underline accent */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold-bright" viewBox="0 0 260 12" fill="none" preserveAspectRatio="none">
                  <path d="M3 9C60 3 180 3 257 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-brand-charcoal-muted max-w-xl font-normal leading-relaxed mt-3 mb-8">
              Enjoy delicious meals, snacks and refreshing drinks from <strong className="font-bold text-brand-green">CODE-8</strong>. Available for pickup and delivery.
            </p>

            {/* Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-green hover:bg-brand-green-light text-brand-gold-bright font-extrabold text-base tracking-wide transition-all duration-200 shadow-soft-lg hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <UtensilsCrossed className="w-5 h-5 text-brand-gold-bright transition-transform group-hover:rotate-12" />
                <span>Explore Our Menu</span>
                <ArrowDownRight className="w-4 h-4 text-brand-gold-bright opacity-80 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark font-extrabold text-base tracking-wide transition-all duration-200 shadow-glow-gold hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Quick 3 Promises Pills from Flyer */}
            <div className="mt-10 pt-6 border-t border-brand-cream-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              {BUSINESS_INFO.promises.map((p, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span className="text-xs font-bold text-brand-charcoal">{p.title}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Food Arrangement inspired by the flyer */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow & Background Disk */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green to-brand-green-light rounded-3xl transform rotate-2 scale-95 opacity-90 shadow-soft-lg -z-10" />

              {/* Main Visual Showcase Card */}
              <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-soft-lg border border-brand-cream-border overflow-hidden">
                
                {/* Hero Showcase Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-green-dark group">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
                    alt="CODE-8 Nigerian Jollof Rice Showcase"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_FOOD_IMAGE;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/90 via-transparent to-black/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/90 backdrop-blur-md text-brand-gold-bright text-xs font-extrabold border border-brand-green-light/40">
                    <span className="w-2 h-2 rounded-full bg-brand-gold-bright animate-ping" />
                    Hot & Fresh Today
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-brand-gold-light uppercase tracking-wider">CODE-8 Signature</p>
                    <p className="text-lg font-black tracking-tight">Authentic Jollof, Amala, Snacks & Chilled Drinks</p>
                  </div>
                </div>

                {/* Mini Mosaic Thumbnails: Snacks & Drinks */}
                <div className="grid grid-cols-3 gap-2.5 mt-3">
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-brand-cream-soft group">
                    <img
                      src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=350&q=80"
                      alt="Amala"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      onError={(e) => { e.currentTarget.src = FALLBACK_FOOD_IMAGE; }}
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-end p-1.5">
                      <span className="text-[11px] font-bold text-white leading-tight">Amala</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-square bg-brand-cream-soft group">
                    <img
                      src="https://images.unsplash.com/photo-1562007908-859b4ba9a1a2?auto=format&fit=crop&w=350&q=80"
                      alt="Golden Pie"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      onError={(e) => { e.currentTarget.src = FALLBACK_FOOD_IMAGE; }}
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-end p-1.5">
                      <span className="text-[11px] font-bold text-white leading-tight">Pie</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-square bg-brand-cream-soft group">
                    <img
                      src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=350&q=80"
                      alt="Chilled Zobo"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      onError={(e) => { e.currentTarget.src = FALLBACK_FOOD_IMAGE; }}
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-end p-1.5">
                      <span className="text-[11px] font-bold text-white leading-tight">Zobo</span>
                    </div>
                  </div>
                </div>

                {/* Floating Quick Action Tag */}
                <div className="mt-3 pt-3 border-t border-brand-cream-border/60 flex items-center justify-between text-xs text-brand-charcoal">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    Accepting Orders Today
                  </span>
                  <button
                    onClick={onOpenOrder}
                    className="font-extrabold text-brand-green hover:underline cursor-pointer"
                  >
                    Start Order &rarr;
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
