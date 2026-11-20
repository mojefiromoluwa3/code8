import React, { useState } from 'react';
import { Sparkles, MessageCircle, Utensils, Coffee, Cookie, Layers, Flame } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/menuData';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  orderQuantities: Record<string, number>;
  selectedSoups?: Record<string, string>;
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemove: (itemId: string) => void;
  onSelectSoup?: (itemId: string, soup: string) => void;
  onOpenOrder: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  orderQuantities,
  selectedSoups,
  onAddToCart,
  onUpdateQuantity,
  onRemove,
  onSelectSoup,
  onOpenOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');

  const categories: { id: MenuCategory; label: string; icon: React.ReactNode; count: number }[] = [
    { id: 'all', label: 'All Items', icon: <Layers className="w-4 h-4" />, count: MENU_ITEMS.length },
    { id: 'meals', label: 'Main Meals', icon: <Utensils className="w-4 h-4" />, count: MENU_ITEMS.filter(i => i.category === 'meals').length },
    { id: 'proteins', label: 'Proteins & Sides', icon: <Flame className="w-4 h-4" />, count: MENU_ITEMS.filter(i => i.category === 'proteins').length },
    { id: 'snacks', label: 'Snacks', icon: <Cookie className="w-4 h-4" />, count: MENU_ITEMS.filter(i => i.category === 'snacks').length },
    { id: 'drinks', label: 'Drinks', icon: <Coffee className="w-4 h-4" />, count: MENU_ITEMS.filter(i => i.category === 'drinks').length },
  ];

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const whatsappSpecialUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello CODE-8! 🍽️ I would like to inquire about your daily specials, proteins and additional menu items ("And Much More...")!'
  )}`;

  return (
    <section id="menu" className="py-20 bg-brand-cream/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-gold-subtle text-brand-green font-bold text-xs uppercase tracking-wider mb-3 border border-brand-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Freshly Prepared Daily
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-green tracking-tight mb-3">
            Explore Our Menu
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal-muted font-normal">
            Good food, great vibes. Find something delicious from our meals, fresh proteins, snacks, and chilled drinks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                  isActive
                    ? 'bg-brand-green text-brand-gold-bright shadow-soft-sm scale-102'
                    : 'bg-white text-brand-charcoal hover:bg-brand-cream-soft border border-brand-cream-border'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-brand-green-light text-brand-gold-bright' : 'bg-brand-cream-soft text-brand-charcoal-muted'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              currentQuantity={orderQuantities[item.id] || 0}
              selectedSoup={selectedSoups?.[item.id]}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
              onSelectSoup={onSelectSoup}
            />
          ))}

          {/* "And Much More…" Feature Card (Preserves Flyer Promise) */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-brand-green via-brand-green to-brand-green-dark text-white rounded-3xl p-6 sm:p-8 shadow-soft-lg border-2 border-brand-gold/40 relative overflow-hidden group">
            {/* Background design elements */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-brand-gold/10 blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold text-brand-green-dark text-xs font-black uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                Flyer Promise
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-brand-gold-bright tracking-tight mb-3">
                And Much More…
              </h3>

              <p className="text-sm text-brand-cream-soft/90 leading-relaxed mb-6 font-normal">
                Looking for extra sides, assorted meats, specials, or catering for private events? CODE-8 prepares daily kitchen specials. Reach out to inquire what else is cooking today!
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappSpecialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shadow-glow-gold hover:scale-102"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenOrder}
                className="inline-flex items-center justify-center py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors"
              >
                Review Tray
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
