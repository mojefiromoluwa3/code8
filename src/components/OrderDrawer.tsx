import React, { useState, useId } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  Copy, 
  Check, 
  MapPin, 
  Info, 
  Store,
  Truck
} from 'lucide-react';
import { OrderItem, OrderType } from '../types';
import { BUSINESS_INFO, FALLBACK_FOOD_IMAGE } from '../data/menuData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
  onShowToast: (message: string, type?: 'success' | 'info') => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
  onShowToast,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<OrderType>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; address?: string }>({});

  const nameInputId = useId();
  const addressInputId = useId();
  const notesInputId = useId();

  if (!isOpen) return null;

  const totalItemCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Validate form before opening WhatsApp
  const validateForm = () => {
    const newErrors: { name?: string; address?: string } = {};

    if (!customerName.trim()) {
      newErrors.name = 'Please enter your name so CODE-8 knows who is ordering.';
    }

    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      newErrors.address = 'Please provide your delivery address in Lagos.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Compile formatted WhatsApp message
  const compileOrderMessage = () => {
    const itemsList = orderItems
      .map((oi) => `  • ${oi.quantity}x ${oi.item.name} (${oi.item.categoryLabel})`)
      .join('\n');

    let msg = `*Hello CODE-8!* 🍽️\n`;
    msg += `I would like to place an order from your menu:\n\n`;
    msg += `*SELECTED ITEMS:*\n${itemsList}\n\n`;
    msg += `*ORDER DETAILS:*\n`;
    msg += `• *Customer Name:* ${customerName.trim() || 'Not specified'}\n`;
    msg += `• *Fulfillment Type:* ${orderType === 'pickup' ? 'Self Pickup (at 8thGear Hub, Magodo)' : 'Doorstep Delivery'}\n`;
    
    if (orderType === 'delivery') {
      msg += `• *Delivery Address:* ${deliveryAddress.trim()}\n`;
    }

    if (specialNotes.trim()) {
      msg += `• *Special Notes / Requests:* ${specialNotes.trim()}\n`;
    }

    msg += `\n_Please confirm availability and the total price for this order. Thank you!_`;
    return msg;
  };

  const handleContinueOnWhatsApp = () => {
    if (orderItems.length === 0) {
      onShowToast('Please add at least one meal, snack, or drink to your order.', 'info');
      return;
    }

    if (!validateForm()) {
      onShowToast('Please complete the required details before continuing.', 'info');
      return;
    }

    const message = compileOrderMessage();
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onShowToast('Drafting your order on WhatsApp! You can review and tap send.', 'success');
  };

  const handleCopyOrder = () => {
    if (orderItems.length === 0) return;
    const message = compileOrderMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    onShowToast('Order details copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="order-drawer-title">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-green-deep/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-soft-lg flex flex-col justify-between animate-slide-in-right">
          
          {/* Header */}
          <div className="px-6 py-5 bg-brand-green text-white flex items-center justify-between border-b border-brand-green-light">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-brand-green-light/80 text-brand-gold-bright">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 id="order-drawer-title" className="text-lg font-black tracking-tight text-brand-gold-bright">
                  Your Order Tray
                </h2>
                <p className="text-xs text-brand-cream-soft/80 font-medium">
                  {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {orderItems.length > 0 && (
                <button
                  type="button"
                  onClick={onClearOrder}
                  className="text-xs font-bold text-white/70 hover:text-white px-2 py-1 rounded hover:bg-brand-green-light"
                  title="Clear all selected items"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-brand-green-light transition-colors"
                aria-label="Close order drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
            
            {/* Empty State */}
            {orderItems.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-3xl bg-brand-cream-soft flex items-center justify-center text-brand-charcoal-muted mb-4 border border-brand-cream-border">
                  <ShoppingBag className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-green mb-1">
                  Your tray is empty
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal-muted max-w-xs mb-6">
                  Explore our menu to add authentic Jollof rice, Amala, golden pastries, snacks, or refreshing drinks!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-brand-green text-brand-gold-bright text-xs font-extrabold uppercase tracking-wide hover:bg-brand-green-light shadow-soft-sm transition-all"
                >
                  Browse Menu Items
                </button>
              </div>
            ) : (
              <>
                {/* Notice on Pricing as instructed */}
                <div className="p-3.5 rounded-2xl bg-brand-gold-subtle border border-brand-gold/40 flex items-start gap-2.5 text-xs text-brand-charcoal leading-relaxed">
                  <Info className="w-4 h-4 text-brand-gold-hover shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold text-brand-green">Direct CODE-8 Confirmation:</strong> Prices and current meal availability are confirmed directly through WhatsApp with no automatic charges or hidden costs.
                  </div>
                </div>

                {/* Selected Items List */}
                <div className="space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-charcoal-muted">
                    Selected Items ({totalItemCount})
                  </span>

                  <div className="divide-y divide-brand-cream-border/60">
                    {orderItems.map(({ item, quantity }) => (
                      <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-xl object-cover bg-brand-cream-soft shrink-0"
                            onError={(e) => { e.currentTarget.src = FALLBACK_FOOD_IMAGE; }}
                          />
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-brand-green truncate">{item.name}</h4>
                            <span className="text-[11px] font-semibold text-brand-charcoal-muted">{item.categoryLabel}</span>
                          </div>
                        </div>

                        {/* Stepper & Delete */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 rounded-lg bg-brand-cream-soft hover:bg-brand-cream-border text-brand-charcoal transition-colors"
                            aria-label={`Decrease ${item.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>

                          <span className="w-7 text-center font-extrabold text-xs text-brand-charcoal">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 rounded-lg bg-brand-cream-soft hover:bg-brand-cream-border text-brand-charcoal transition-colors"
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1.5 ml-1 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details & Fulfillment Form */}
                <div className="pt-4 border-t border-brand-cream-border space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-charcoal-muted">
                    Order Details
                  </span>

                  {/* Customer Name */}
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs font-bold text-brand-charcoal mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      placeholder="e.g. Mary Adelowo"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                        errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-brand-cream-border bg-brand-cream/40'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 font-medium mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Fulfillment Type Toggle (Pickup vs Delivery) */}
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1.5">
                      Fulfillment Method <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType('pickup')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          orderType === 'pickup'
                            ? 'bg-brand-green text-brand-gold-bright border-brand-green shadow-sm'
                            : 'bg-white text-brand-charcoal border-brand-cream-border hover:bg-brand-cream-soft'
                        }`}
                      >
                        <Store className="w-4 h-4" />
                        <span>Self Pickup</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          orderType === 'delivery'
                            ? 'bg-brand-green text-brand-gold-bright border-brand-green shadow-sm'
                            : 'bg-white text-brand-charcoal border-brand-cream-border hover:bg-brand-cream-soft'
                        }`}
                      >
                        <Truck className="w-4 h-4" />
                        <span>Doorstep Delivery</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-brand-charcoal-muted mt-1.5">
                      {orderType === 'pickup'
                        ? 'Pickup location: 8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos.'
                        : 'Delivery will be arranged to your preferred Lagos address via CODE-8 dispatch.'}
                    </p>
                  </div>

                  {/* Delivery Address (Requested only when Delivery is chosen) */}
                  {orderType === 'delivery' && (
                    <div className="animate-fade-in">
                      <label htmlFor={addressInputId} className="block text-xs font-bold text-brand-charcoal mb-1">
                        Delivery Address in Lagos <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id={addressInputId}
                          rows={2}
                          placeholder="e.g. 15 CMD Road, Magodo Phase 2 / Secretariat, Lagos"
                          value={deliveryAddress}
                          onChange={(e) => {
                            setDeliveryAddress(e.target.value);
                            if (errors.address) setErrors({ ...errors, address: undefined });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none ${
                            errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-brand-cream-border bg-brand-cream/40'
                          }`}
                        />
                        <MapPin className="w-4 h-4 text-brand-charcoal-muted absolute right-3 top-3 pointer-events-none" />
                      </div>
                      {errors.address && (
                        <p className="text-xs text-rose-500 font-medium mt-1">{errors.address}</p>
                      )}
                    </div>
                  )}

                  {/* Special Requests / Notes */}
                  <div>
                    <label htmlFor={notesInputId} className="block text-xs font-bold text-brand-charcoal mb-1">
                      Special Requests / Notes <span className="text-brand-charcoal-muted font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id={notesInputId}
                      rows={2}
                      placeholder="e.g. Mild pepper, extra napkins, specific packing instructions..."
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-brand-cream-border bg-brand-cream/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
                    />
                    <p className="text-[10px] text-brand-charcoal-muted mt-1 italic">
                      * Special notes and meal customizations must be confirmed by CODE-8 based on daily kitchen preparation.
                    </p>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Drawer Footer (Actions) */}
          {orderItems.length > 0 && (
            <div className="p-6 bg-brand-cream border-t border-brand-cream-border/80 space-y-3">
              {/* WhatsApp Proceed Button */}
              <button
                type="button"
                onClick={handleContinueOnWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark text-sm font-black tracking-wide uppercase shadow-glow-gold transition-all duration-200 active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Continue on WhatsApp</span>
              </button>

              {/* Secondary Option: Copy formatted text */}
              <button
                type="button"
                onClick={handleCopyOrder}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-brand-cream-soft text-brand-charcoal text-xs font-bold border border-brand-cream-border transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-brand-charcoal-muted" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Order Summary Text'}</span>
              </button>

              <p className="text-[10.5px] text-center text-brand-charcoal-muted leading-tight">
                Tapping &ldquo;Continue on WhatsApp&rdquo; will open your WhatsApp app or web with your pre-filled order for <strong>{BUSINESS_INFO.whatsappDisplay}</strong>. You will review and send the message yourself.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
