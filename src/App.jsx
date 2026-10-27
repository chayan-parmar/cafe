import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import SignatureExperience from './components/SignatureExperience';
import MenuSection from './components/MenuSection';
import Bestsellers from './components/Bestsellers';
import CafeGallery from './components/CafeGallery';
import Testimonials from './components/Testimonials';
import VisitUs from './components/VisitUs';
import OrderDrawer from './components/OrderDrawer';
import Footer from './components/Footer';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'bs-1',
      name: 'Brown Sugar Cinnamon Latte',
      price: 290,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'bs-2',
      name: 'Classic Butter Croissant',
      price: 190,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Add Item to Counter Order
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });

    setToastMessage(`Added "${item.name}" to counter order`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: newQty } : i))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Section B: Hero */}
        <Hero />

        {/* Section C: Brand Story */}
        <BrandStory />

        {/* Section G: Bestsellers */}
        <Bestsellers onAddToCart={handleAddToCart} />

        {/* Section D: Signature Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* Section E: Signature Experience */}
        <SignatureExperience />

        {/* Section F: Cafe Gallery */}
        <CafeGallery />

        {/* Section H: Testimonials */}
        <Testimonials />

        {/* Section I: Visit Us & Reservation */}
        <VisitUs />
      </main>

      {/* Section J: Footer */}
      <Footer />

      {/* Counter Order Slide-Out Tray */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'var(--color-espresso-deep)',
            color: 'var(--color-cream-light)',
            padding: '0.85rem 1.4rem',
            borderRadius: '2px',
            boxShadow: '0 12px 32px rgba(48, 34, 28, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            fontSize: '0.86rem',
            fontWeight: 500,
          }}
          className="animate-fade-up"
        >
          <CheckCircle size={18} color="var(--color-sage)" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              marginLeft: '0.5rem',
              color: 'var(--color-terracotta)',
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'underline',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
            View Tray →
          </button>
        </div>
      )}
    </div>
  );
}
