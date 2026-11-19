import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp, Instagram } from 'lucide-react';
import { Wordmark } from './Wordmark';
import { BUSINESS_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Explore Menu', href: '#menu' },
    { name: 'About & Promises', href: '#about' },
    { name: 'Pickup & Delivery', href: '#services' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-green-deep text-white pt-16 pb-12 border-t border-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Wordmark light />
            
            <div className="pt-2">
              <p className="text-xl font-black text-brand-gold-bright tracking-tight">
                {BUSINESS_INFO.slogan}
              </p>
              <p className="text-sm font-bold text-brand-gold-light/90 mt-1 uppercase tracking-wider">
                {BUSINESS_INFO.brandLine}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-brand-cream-soft/75 max-w-sm leading-relaxed font-normal">
              Fresh meals daily, affordable and pocket friendly Nigerian delicacies, snacks and chilled refreshments. Available for pickup and delivery in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-bright">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-cream-soft/80 hover:text-brand-gold-bright transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-bright">
              Official Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-brand-cream-soft/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold-bright shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Call / WhatsApp:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-gold-bright transition-colors font-semibold">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-bright shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Business Address:</span>
                  <p className="leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-green-light hover:bg-brand-green text-brand-gold-bright text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-bold transition-opacity shadow-sm"
                  aria-label="Follow CODE-8 on Instagram (@code8go)"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream-soft/60">
          <div>
            <p>&copy; {currentYear} {BUSINESS_INFO.brandName}. All rights reserved.</p>
            <p className="text-[11px] text-brand-cream-soft/40 mt-0.5">
              Frontend application built faithfully in accordance with the official CODE-8 promotional flyer.
            </p>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-brand-cream-soft hover:text-white transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-gold-bright" />
          </button>
        </div>

      </div>
    </footer>
  );
};
