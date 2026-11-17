import React, { useState } from 'react';
import { Plus, Minus, Check, MessageSquare } from 'lucide-react';
import { MenuItem } from '../types';
import { FALLBACK_FOOD_IMAGE } from '../data/menuData';

interface MenuItemCardProps {
  item: MenuItem;
  currentQuantity: number;
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemove: (itemId: string) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  currentQuantity,
  onAddToCart,
  onUpdateQuantity,
  onRemove,
}) => {
  const [imgError, setImgError] = useState(false);
  const isSelected = currentQuantity > 0;

  return (
    <div className={`group flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-5 border transition-all duration-300 ${
      isSelected 
        ? 'border-brand-green ring-2 ring-brand-green/20 shadow-soft-lg' 
        : 'border-brand-cream-border hover:border-brand-green/40 shadow-soft-sm hover:shadow-soft'
    }`}>
      {/* Top Section: Image & Badges */}
      <div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-cream-soft mb-4">
          <img
            src={imgError ? FALLBACK_FOOD_IMAGE : item.image}
            alt={item.imageAlt}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category Pill */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 text-brand-green shadow-sm border border-brand-cream-border">
              {item.categoryLabel}
            </span>
          </div>

          {/* Feature Badge if any */}
          {item.badge && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-green text-brand-gold-bright shadow-sm">
                {item.badge}
              </span>
            </div>
          )}

          {/* Selected Indicator Ribbon */}
          {isSelected && (
            <div className="absolute bottom-2 left-2 right-2 bg-brand-green/95 backdrop-blur-sm text-brand-gold-bright text-xs font-bold px-3 py-1.5 rounded-xl flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                In your order
              </span>
              <span className="font-extrabold bg-brand-gold text-brand-green-dark px-1.5 py-0.5 rounded-md text-[11px]">
                {currentQuantity}x
              </span>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5 mb-4">
          <h3 className="text-xl font-black text-brand-green tracking-tight group-hover:text-brand-green-light transition-colors">
            {item.name}
          </h3>
          <p className="text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Price note & Action Button / Stepper */}
      <div className="pt-3 border-t border-brand-cream-border/70 flex flex-col gap-3">
        {/* Pricing notice as instructed: no invented prices */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-brand-charcoal-muted font-medium flex items-center gap-1">
            <MessageSquare className="w-3 h-3 text-brand-gold" />
            Price:
          </span>
          <span className="font-bold text-brand-green bg-brand-green-soft px-2 py-0.5 rounded-md">
            Confirmed via WhatsApp
          </span>
        </div>

        {/* Add Button or Stepper */}
        {!isSelected ? (
          <button
            type="button"
            onClick={() => onAddToCart(item)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-cream-soft hover:bg-brand-green text-brand-charcoal hover:text-brand-gold-bright font-extrabold text-sm transition-all duration-200 border border-brand-cream-border hover:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold active:scale-98"
          >
            <Plus className="w-4 h-4 text-brand-gold" />
            <span>Add to Order</span>
          </button>
        ) : (
          <div className="flex items-center justify-between bg-brand-green text-white rounded-xl p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, -1)}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green-light/80 hover:bg-brand-green-light text-brand-gold-bright transition-colors active:scale-95"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="font-extrabold text-sm px-2 text-brand-gold-bright">
              {currentQuantity} in tray
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, 1)}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green-light/80 hover:bg-brand-green-light text-brand-gold-bright transition-colors active:scale-95"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="text-[11px] font-bold text-white/70 hover:text-white px-2 py-1 rounded hover:bg-brand-green-light"
                title="Remove item"
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
