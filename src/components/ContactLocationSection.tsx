import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, Navigation, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const ContactLocationSection: React.FC = () => {
  const telLink = `tel:${BUSINESS_INFO.phone}`;
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello CODE-8! 🍽️ I am reaching out from your website to make an inquiry / place an order.'
  )}`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos'
  )}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    '8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 bg-brand-cream/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-gold-subtle text-brand-green font-bold text-xs uppercase tracking-wider mb-3 border border-brand-gold/30">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-green tracking-tight mb-4">
            Contact & Location
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal-muted font-normal">
            Have questions about our daily dishes or ready to place your order? Connect with CODE-8 directly via phone, WhatsApp, or visit our Magodo pickup hub.
          </p>
        </div>

        {/* Content Grid: Contact Details & Verified Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-cream-border shadow-soft-sm">
              <span className="text-xs font-black uppercase tracking-wider text-brand-charcoal-muted block mb-4">
                Call & Chat Line
              </span>
              
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-green-soft text-brand-green flex items-center justify-center shrink-0 border border-brand-green/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-green tracking-tight">
                    {BUSINESS_INFO.phone}
                  </h3>
                  <p className="text-xs text-brand-charcoal-muted font-medium">
                    Available for Calls & WhatsApp Orders
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-cream-border/60">
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-green hover:bg-brand-green-light text-brand-gold-bright text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shadow-sm active:scale-98"
                >
                  <Phone className="w-4 h-4 text-brand-gold-bright" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shadow-glow-gold active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Instagram Button */}
              <div className="pt-3">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shadow-md active:scale-98 w-full"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram (@code8go)</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-cream-border shadow-soft-sm flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-brand-charcoal-muted block mb-4">
                  Official Business Address
                </span>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold-subtle text-brand-gold-hover flex items-center justify-center shrink-0 border border-brand-gold/30 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-brand-green leading-snug">
                      8thGear Hub
                    </h3>
                    <p className="text-sm text-brand-charcoal mt-1 font-medium leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-brand-charcoal-muted mt-2">
                      Easy access for self-collection and courier dispatches in Magodo & surrounding Lagos areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-cream-border/60">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-cream-soft hover:bg-brand-cream-border text-brand-charcoal text-xs font-bold transition-all w-full border border-brand-cream-border"
                >
                  <Navigation className="w-4 h-4 text-brand-green" />
                  <span>Open Address in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-5 border border-brand-cream-border shadow-soft-sm flex flex-col min-h-[400px]">
            <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-brand-cream-border/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-extrabold text-brand-green uppercase tracking-wider">
                  Verified Location Map
                </span>
              </div>
              <span className="text-xs text-brand-charcoal-muted">Magodo Secretariat, Lagos</span>
            </div>

            {/* Embedded Google Maps using standard address search iframe */}
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-brand-cream-soft border border-brand-cream-border min-h-[340px]">
              <iframe
                title="CODE-8 Location at 8thGear Hub, Magodo Secretariat, Lagos"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
