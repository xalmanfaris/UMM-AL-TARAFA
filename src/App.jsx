import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { BiteJoyNavbar } from './components/BiteJoyNavbar';
import { BiteJoyHero } from './components/BiteJoyHero';
import { ShopByCraving } from './components/ShopByCraving';
import { DiscoverNew } from './components/DiscoverNew';
import { TopPicksSection } from './components/TopPicksSection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { RewardsStrip } from './components/RewardsStrip';
import { BiteJoyFooter } from './components/BiteJoyFooter';
import { BuildBoxModal } from './components/BuildBoxModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickView } from './components/ProductQuickView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function MainSite() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isBuildBoxOpen, setIsBuildBoxOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Wishlist state saved in local storage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('tarafa_wishlist');
      return saved ? JSON.parse(saved) : ['prod-pistachios', 'prod-choco-clusters'];
    } catch {
      return [];
    }
  });

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const updated = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      try {
        localStorage.setItem('tarafa_wishlist', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#24140E] font-sans selection:bg-[#C0121D] selection:text-white relative overflow-x-hidden w-full">
      
      {/* 1. Header Navigation */}
      <BiteJoyNavbar
        onOpenBuildBox={() => setIsBuildBoxOpen(true)}
        wishlistCount={wishlist.length}
      />

      <main className="relative z-10">
        {/* 2. Hero Section: "Small Bites, Big Goodness." + Signboard Badges */}
        <BiteJoyHero onOpenBuildBox={() => setIsBuildBoxOpen(true)} />

        {/* 3. Shop by Craving: 4 Full-Picture 1:1 Boxes */}
        <ShopByCraving
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* 4. "Discover Something New ♡" - 3 Pastel Cards */}
        <DiscoverNew
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 5. "Top Picks Loved by All ♡" - Product Grid */}
        <TopPicksSection
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
        />

        {/* 7. Storefront Showcase & Location in Souq Al Rolla */}
        <StoreLocationSection />

        {/* 8. Rewards Strip - Mascot & Loyalty Bar */}
        <RewardsStrip />
      </main>

      {/* 9. Storefront Signboard Crimson Red Footer */}
      <BiteJoyFooter onOpenBuildBox={() => setIsBuildBoxOpen(true)} />

      {/* Slide-out Cart Drawer with Live Counts & WhatsApp Order */}
      <CartDrawer />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Custom Goodness Box Builder Modal */}
      <BuildBoxModal
        isOpen={isBuildBoxOpen}
        onClose={() => setIsBuildBoxOpen(false)}
      />

      {/* Floating WhatsApp Quick Inquiries */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <MainSite />
      </CartProvider>
    </LanguageProvider>
  );
}
