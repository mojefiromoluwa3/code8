import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { BrandPromises } from './components/BrandPromises';
import { PickupDeliverySection } from './components/PickupDeliverySection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { Toast } from './components/Toast';
import { MENU_ITEMS } from './data/menuData';
import { MenuItem, OrderItem, ToastNotification } from './types';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function App() {
  const [orderQuantities, setOrderQuantities] = useState<Record<string, number>>({});
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Compute total item count
  const totalItemCount = useMemo(() => {
    return Object.values(orderQuantities).reduce((acc, count) => acc + count, 0);
  }, [orderQuantities]);

  // Compute OrderItem array for drawer
  const orderItems: OrderItem[] = useMemo(() => {
    return Object.entries(orderQuantities)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id)!;
        return { item, quantity: qty };
      });
  }, [orderQuantities]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (item: MenuItem) => {
    setOrderQuantities((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    showToast(`Added ${item.name} to your order tray!`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderQuantities((prev) => {
      const current = prev[itemId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const handleRemoveItem = (itemId: string) => {
    const item = MENU_ITEMS.find((m) => m.id === itemId);
    setOrderQuantities((prev) => {
      const copy = { ...prev };
      delete copy[itemId];
      return copy;
    });
    if (item) {
      showToast(`Removed ${item.name} from your order`, 'info');
    }
  };

  const handleClearOrder = () => {
    setOrderQuantities({});
    showToast('Your order tray has been cleared', 'info');
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderNowClick = () => {
    if (totalItemCount === 0) {
      handleExploreMenu();
    } else {
      setIsOrderDrawerOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-gold-bright selection:text-brand-green-dark">
      {/* 1. Sticky Header */}
      <Header
        orderItemCount={totalItemCount}
        onOpenOrder={() => setIsOrderDrawerOpen(true)}
        onOrderNowClick={handleOrderNowClick}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenOrder={() => setIsOrderDrawerOpen(true)}
        />

        {/* 3. Menu Section */}
        <MenuSection
          orderQuantities={orderQuantities}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveItem}
          onOpenOrder={() => setIsOrderDrawerOpen(true)}
        />

        {/* 4. Brand Promises / About Section */}
        <BrandPromises />

        {/* 5. Pickup & Delivery Section */}
        <PickupDeliverySection
          onOpenOrder={() => setIsOrderDrawerOpen(true)}
        />

        {/* 6. Contact and Location Section */}
        <ContactLocationSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Interactive Order Selection Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
        onShowToast={showToast}
      />

      {/* Floating Order Bar on Mobile when items are in tray */}
      {totalItemCount > 0 && !isOrderDrawerOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden animate-fade-in">
          <button
            type="button"
            onClick={() => setIsOrderDrawerOpen(true)}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-brand-green text-white shadow-soft-lg border border-brand-green-light active:scale-98 transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-xl bg-brand-gold text-brand-green-dark">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-green text-brand-gold-bright text-[10px] font-black flex items-center justify-center">
                  {totalItemCount}
                </span>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-brand-gold-bright uppercase tracking-wider">Order Selection</p>
                <p className="text-sm font-black">{totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} in tray</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-extrabold text-brand-gold-bright uppercase tracking-wide bg-brand-green-light px-3 py-2 rounded-xl">
              <span>View Tray</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}

export default App;
