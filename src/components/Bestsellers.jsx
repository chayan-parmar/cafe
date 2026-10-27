import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { BESTSELLERS } from '../data/cafeData';

export default function Bestsellers({ onAddToCart }) {
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (item) => {
    onAddToCart({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image,
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section
      id="bestsellers"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-cream-light)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow eyebrow-sage" style={{ justifyContent: 'center' }}>
            DAILY OBSESSIONS
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
            }}
          >
            OUR FOUR SIGNATURE BESTSELLERS
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--color-espresso-muted)' }}>
            The items our morning regulars order by heart. Slow-crafted, unapologetically
            indulgent, and baked fresh every dawn.
          </p>
        </div>

        {/* 4 Items Horizontal / Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {BESTSELLERS.map((item) => {
            const isAdded = addedId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.35s ease',
                  position: 'relative',
                }}
                className="bestseller-card"
              >
                {/* Photo with Badge */}
                <div
                  style={{
                    height: '240px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-cream-dark)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                    }}
                    className="bestseller-img"
                  />

                  {/* Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'var(--color-terracotta)',
                      color: 'white',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      borderRadius: '2px',
                      boxShadow: '0 4px 12px rgba(200, 121, 87, 0.3)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Details */}
                <div
                  style={{
                    padding: '1.6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: '0.5rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.3rem',
                          fontWeight: 600,
                          color: 'var(--color-espresso)',
                          lineHeight: 1.2,
                        }}
                      >
                        {item.name}
                      </h3>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.35rem',
                          fontWeight: 600,
                          color: 'var(--color-terracotta)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Tasting Notes */}
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--color-sage-dark)',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '0.8rem',
                      }}
                    >
                      {item.tastingNotes}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--color-espresso-muted)',
                        lineHeight: 1.6,
                        marginBottom: '1.4rem',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Order CTA */}
                  <button
                    onClick={() => handleAdd(item)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.8rem 1rem',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      backgroundColor: isAdded ? 'var(--color-sage)' : 'var(--color-espresso)',
                      color: 'var(--color-cream)',
                      border: '1px solid',
                      borderColor: isAdded ? 'var(--color-sage)' : 'var(--color-espresso)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} /> Added to Order Slip
                      </>
                    ) : (
                      <>
                        <Plus size={16} /> Add to Counter Order (₹{item.price})
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .bestseller-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(200, 121, 87, 0.4);
        }
        .bestseller-card:hover .bestseller-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
