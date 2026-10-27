import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Coffee, Receipt } from 'lucide-react';

export default function OrderDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [showSlip, setShowSlip] = useState(false);
  const [orderSlipData, setOrderSlipData] = useState(null);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleGenerateSlip = () => {
    if (cartItems.length === 0) return;
    const slipNumber = 'BB-' + Math.floor(100 + Math.random() * 900);
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setOrderSlipData({
      slipNumber,
      time,
      items: [...cartItems],
      total: totalAmount,
    });
    setShowSlip(true);
  };

  const handleCloseSlip = () => {
    setShowSlip(false);
    setOrderSlipData(null);
    onClearCart();
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(30, 21, 17, 0.7)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 250,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--color-cream)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-8px 0 32px rgba(48, 34, 28, 0.25)',
          borderLeft: '1px solid var(--border-subtle)',
        }}
        className="animate-fade-in"
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.4rem 1.6rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-cream-light)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="var(--color-terracotta)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-espresso)' }}>
              My Counter Order
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '0.4rem',
              color: 'var(--color-espresso)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Close Order Tray"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Items List */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '1.4rem 1.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                color: 'var(--color-espresso-muted)',
              }}
            >
              <Coffee size={40} color="var(--color-sage)" style={{ margin: '0 auto 1rem', opacity: 0.7 }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-espresso)', marginBottom: '0.4rem' }}>
                Your order tray is empty
              </div>
              <p style={{ fontSize: '0.85rem' }}>
                Add your favorite coffee and morning bakes from our menu to build your morning order slip.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '0.9rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                  alignItems: 'center',
                }}
              >
                {/* Thumbnail if present */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '2px',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                )}

                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-espresso)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                    ₹{item.price} each
                  </div>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginTop: '0.4rem' }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '2px',
                        backgroundColor: 'var(--color-cream-light)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '2px',
                        backgroundColor: 'var(--color-cream-light)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Subtotal & Delete */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600 }}>
                    ₹{item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{
                      marginTop: '0.5rem',
                      color: '#B93826',
                      opacity: 0.7,
                      cursor: 'pointer',
                    }}
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Subtotal & Actions */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: '1.4rem 1.6rem',
              backgroundColor: 'var(--color-cream-light)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-espresso-muted)' }}>
                Estimated Total (INR)
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                ₹{totalAmount}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <button
                onClick={handleGenerateSlip}
                className="btn btn-primary"
                style={{ flexGrow: 1, padding: '0.9rem' }}
              >
                <Receipt size={16} />
                SHOW COUNTER SLIP
              </button>
              <button
                onClick={onClearCart}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1rem' }}
                title="Clear tray"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#9B8B82', textAlign: 'center' }}>
              * Demo slip for table or takeout ordering at the cafe counter.
            </div>
          </div>
        )}
      </div>

      {/* Counter Slip Modal */}
      {showSlip && orderSlipData && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(20, 14, 11, 0.82)',
            backdropFilter: 'blur(10px)',
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFDF9',
              maxWidth: '380px',
              width: '100%',
              borderRadius: '2px',
              padding: '2rem 1.8rem',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              border: '1px dashed #D6C7B7',
              color: 'var(--color-espresso)',
              fontFamily: 'monospace',
              fontSize: '0.86rem',
            }}
            className="animate-fade-up"
          >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.2rem', borderBottom: '1px dashed #D6C7B7', paddingBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                BREW & BLOOM
              </div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                COUNTER ORDER SLIP
              </div>
              <div style={{ fontSize: '0.75rem', color: '#7E6B60', marginTop: '0.4rem' }}>
                Slip #: {orderSlipData.slipNumber} • {orderSlipData.time}
              </div>
            </div>

            {/* Itemized List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.2rem' }}>
              {orderSlipData.items.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div
              style={{
                borderTop: '1px dashed #D6C7B7',
                borderBottom: '1px dashed #D6C7B7',
                padding: '0.8rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '1.2rem',
              }}
            >
              <span>TOTAL (INR)</span>
              <span>₹{orderSlipData.total}</span>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.74rem', color: '#7E6B60', lineHeight: 1.4, marginBottom: '1.5rem' }}>
              Show this slip at the Brew & Bloom register in Indiranagar.
              Thank you for savoring the slow morning with us!
            </div>

            <button
              onClick={handleCloseSlip}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.8rem' }}
            >
              DONE / CLOSE SLIP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
