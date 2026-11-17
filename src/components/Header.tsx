import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { Wordmark } from './Wordmark';
import { BUSINESS_INFO } from '../data/menuData';

interface HeaderProps {
  orderItemCount: number;
  onOpenOrder: () => void;
  onOrderNowClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  orderItemCount,
  onOpenOrder,
  onOrderNowClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'menu', 'about', 'services', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Pickup & Delivery', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-soft border-b border-brand-cream-border/60 py-3'
          : 'bg-brand-cream/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Brand Wordmark */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl p-0.5"
            aria-label="CODE-8 Homepage"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <Wordmark />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-brand-green-soft/70 px-3 py-1.5 rounded-full border border-brand-cream-border/70" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-green text-brand-gold-bright shadow-sm'
                      : 'text-brand-charcoal hover:text-brand-green hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Cart Button & Order Now */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-charcoal hover:text-brand-green px-3 py-2 rounded-xl transition-colors"
              title="Call CODE-8"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Cart / Order Tray Trigger */}
            <button
              type="button"
              onClick={onOpenOrder}
              className="relative flex items-center justify-center p-2.5 rounded-xl bg-white text-brand-charcoal hover:bg-brand-green-soft border border-brand-cream-border transition-all duration-150 shadow-soft-sm hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label={`View your order selection (${orderItemCount} items)`}
            >
              <ShoppingBag className="w-5 h-5 text-brand-green" />
              {orderItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-brand-gold text-brand-green-dark text-xs font-extrabold rounded-full shadow-sm animate-pulse">
                  {orderItemCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button */}
            <button
              type="button"
              onClick={onOrderNowClick}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all duration-200 shadow-glow-gold hover:shadow-soft-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-xl text-brand-charcoal hover:bg-brand-cream-soft border border-brand-cream-border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-green" /> : <MenuIcon className="w-6 h-6 text-brand-green" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream/98 backdrop-blur-lg border-b border-brand-cream-border shadow-soft-lg px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-green text-brand-gold-bright'
                      : 'text-brand-charcoal hover:bg-brand-green-soft'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-gold-bright" />}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5 pt-2 border-t border-brand-cream-border/70">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderNowClick();
              }}
              className="w-full py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark font-extrabold text-sm tracking-wide uppercase shadow-glow-gold text-center"
            >
              Order Now
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-brand-cream-border text-brand-charcoal text-sm font-bold"
            >
              <Phone className="w-4 h-4 text-brand-green" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
