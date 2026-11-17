import React from 'react';
import { Store, Truck, MessageCircle, ArrowRight, Clock, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface PickupDeliverySectionProps {
  onOpenOrder: () => void;
}

export const PickupDeliverySection: React.FC<PickupDeliverySectionProps> = ({ onOpenOrder }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello CODE-8! 🍽️ I would like to arrange an order for pickup or delivery.'
  )}`;

  return (
    <section id="services" className="py-20 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-soft text-brand-green font-bold text-xs uppercase tracking-wider mb-3 border border-brand-green/20">
            Convenient Service
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-green tracking-tight mb-4">
            Pick Up & Delivery
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal-muted font-normal">
            Whether you want to pick up your order or have it delivered directly to your doorstep, CODE-8 makes it simple and seamless. Contact us to arrange your meal today.
          </p>
        </div>

        {/* 2 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Pickup */}
          <div className="bg-white rounded-3xl p-8 border border-brand-cream-border shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-green-soft text-brand-green flex items-center justify-center mb-6 border border-brand-green/20">
                <Store className="w-7 h-7" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-green text-brand-gold-bright text-[11px] font-black uppercase tracking-wider">
                  Option 01
                </span>
                <span className="text-xs font-bold text-brand-charcoal-muted">Ready on Arrival</span>
              </div>

              <h3 className="text-2xl font-black text-brand-green tracking-tight mb-3">
                Pick Up
              </h3>

              <p className="text-sm text-brand-charcoal-muted leading-relaxed mb-6 font-normal">
                Prefer to collect your meal yourself? Contact CODE-8 in advance to confirm meal availability and pickup time. Your food will be freshly packed and ready for quick collection at our Magodo hub.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-brand-cream-border/70 text-xs text-brand-charcoal font-medium">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Pickup Hub: <strong>8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos.</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Pre-order on WhatsApp for zero wait time.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-cream-border/60">
              <button
                type="button"
                onClick={onOpenOrder}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-cream-soft hover:bg-brand-green text-brand-charcoal hover:text-brand-gold-bright font-extrabold text-sm transition-all border border-brand-cream-border"
              >
                <span>Select Items for Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Delivery */}
          <div className="bg-white rounded-3xl p-8 border border-brand-cream-border shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-gold-subtle text-brand-gold-hover flex items-center justify-center mb-6 border border-brand-gold/30">
                <Truck className="w-7 h-7" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-gold text-brand-green-dark text-[11px] font-black uppercase tracking-wider">
                  Option 02
                </span>
                <span className="text-xs font-bold text-brand-charcoal-muted">Doorstep Service</span>
              </div>

              <h3 className="text-2xl font-black text-brand-green tracking-tight mb-3">
                Delivery
              </h3>

              <p className="text-sm text-brand-charcoal-muted leading-relaxed mb-6 font-normal">
                Enjoy hot, delicious meals delivered right to your home, office, or designated location. Contact CODE-8 with your location details to arrange dispatch and meal preparation.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-brand-cream-border/70 text-xs text-brand-charcoal font-medium">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Carefully packed to preserve warmth and fresh flavour during transit.</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Provide your address on WhatsApp for rapid coordination.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-cream-border/60">
              <button
                type="button"
                onClick={onOpenOrder}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-cream-soft hover:bg-brand-green text-brand-charcoal hover:text-brand-gold-bright font-extrabold text-sm transition-all border border-brand-cream-border"
              >
                <span>Select Items for Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Central Callout: Arrange Your Order WhatsApp Button */}
        <div className="bg-brand-green text-white rounded-3xl p-8 sm:p-10 text-center shadow-soft-lg border border-brand-green-light max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-black uppercase tracking-widest text-brand-gold-bright mb-2">
            Ready to Eat?
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Arrange Your Order With CODE-8
          </h3>
          <p className="text-sm sm:text-base text-brand-cream-soft/80 max-w-xl mb-8 font-normal">
            Send us a message directly with your desired food items, quantities, and whether you prefer pickup or delivery.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark font-black text-base uppercase tracking-wider transition-all duration-200 shadow-glow-gold hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Arrange Your Order on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
