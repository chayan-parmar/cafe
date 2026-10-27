import React, { useState, useMemo } from 'react';
import { Search, Plus, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';

export default function MenuSection({ onAddToCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullMenuModal, setShowFullMenuModal] = useState(false);
  const [addedItemId, setAddedItemId] = useState(null);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Items' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tastingNotes && item.tastingNotes.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddItem = (item) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1200);
  };

  return (
    <section
      id="menu"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-cream)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
          <div className="eyebrow eyebrow-sage" style={{ justifyContent: 'center' }}>
            DAILY SELECTION & SPECIALTY ROASTS
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
            }}
          >
            OUR SIGNATURE MENU
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--color-espresso-muted)' }}>
            Each beverage is dialed in for optimal extraction; each bake is laminated
            with cultured French butter. Sample prices shown in INR (editable demo content).
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            marginBottom: '3rem',
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              justifyContent: 'center',
            }}
          >
            {MENU_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.65rem 1.3rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--color-espresso)' : 'var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--color-espresso)' : 'var(--color-cream-light)',
                    color: isSelected ? 'var(--color-cream)' : 'var(--color-espresso)',
                    boxShadow: isSelected ? '0 4px 14px rgba(48, 34, 28, 0.12)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div
            style={{
              maxWidth: '460px',
              margin: '0 auto',
              width: '100%',
              position: 'relative',
            }}
          >
            <input
              type="text"
              placeholder="Search coffee, bakes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '2.8rem',
                backgroundColor: 'var(--color-cream-light)',
              }}
            />
            <Search
              size={16}
              color="var(--color-espresso-muted)"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.8rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '0.75rem',
                  color: 'var(--color-espresso-muted)',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              backgroundColor: 'var(--color-cream-light)',
              borderRadius: '2px',
              border: '1px dashed var(--border-subtle)',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: 'var(--color-espresso-muted)' }}>
              No menu items match "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Items');
                setSearchQuery('');
              }}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: 'clamp(1.2rem, 2.5vw, 2rem)',
            }}
          >
            {filteredItems.map((item) => {
              const isAdded = addedItemId === item.id;
              const cartItem = cartItems?.find((ci) => ci.id === item.id);

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
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'all 0.3s ease',
                  }}
                  className="menu-card"
                >
                  {/* Photo Container */}
                  <div
                    style={{
                      height: '210px',
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
                        transition: 'transform 0.6s ease',
                      }}
                      className="menu-card-img"
                    />

                    {/* Category Pill Tag */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.8rem',
                        left: '0.8rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-espresso)',
                        borderRadius: '2px',
                      }}
                    >
                      {item.category}
                    </span>

                    {/* Tag badge (Signature, Bestseller, etc.) */}
                    {item.tags && item.tags[0] && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '0.8rem',
                          right: '0.8rem',
                          backgroundColor: 'var(--color-terracotta)',
                          color: 'white',
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          borderRadius: '2px',
                        }}
                      >
                        {item.tags[0]}
                      </span>
                    )}
                  </div>

                  {/* Item Content */}
                  <div
                    style={{
                      padding: '1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      {/* Title & Price */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          gap: '0.8rem',
                          marginBottom: '0.4rem',
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--color-espresso)',
                            lineHeight: 1.25,
                          }}
                        >
                          {item.name}
                        </h3>
                        <div
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.22rem',
                            fontWeight: 600,
                            color: 'var(--color-terracotta)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          ₹{item.price}
                        </div>
                      </div>

                      {/* Tasting Notes */}
                      {item.tastingNotes && (
                        <div
                          style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--color-sage-dark)',
                            fontWeight: 600,
                            marginBottom: '0.6rem',
                          }}
                        >
                          {item.tastingNotes}
                        </div>
                      )}

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.86rem',
                          color: 'var(--color-espresso-muted)',
                          lineHeight: 1.6,
                          marginBottom: '1.2rem',
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Action: Add to Counter Order */}
                    <div
                      style={{
                        paddingTop: '0.9rem',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: '#9B8B82' }}>
                        {cartItem ? `In Order: ${cartItem.quantity}` : 'Sample price (INR)'}
                      </span>
                      <button
                        onClick={() => handleAddItem(item)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.45rem 0.9rem',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          backgroundColor: isAdded
                            ? 'var(--color-sage)'
                            : cartItem
                            ? 'var(--color-espresso)'
                            : 'var(--color-cream-light)',
                          color: isAdded || cartItem ? 'white' : 'var(--color-espresso)',
                          border: '1px solid',
                          borderColor: isAdded
                            ? 'var(--color-sage)'
                            : cartItem
                            ? 'var(--color-espresso)'
                            : 'var(--border-subtle)',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isAdded ? (
                          <>
                            <Check size={14} /> Added
                          </>
                        ) : cartItem ? (
                          <>
                            <Plus size={14} /> Add Another
                          </>
                        ) : (
                          <>
                            <Plus size={14} /> Add to Order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Full Menu CTA & Demo Notice */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <button
            onClick={() => setShowFullMenuModal(true)}
            className="btn btn-primary"
            style={{ padding: '1rem 2.4rem' }}
          >
            VIEW FULL CATALOG & NUTRITION NOTES
          </button>
          <span
            style={{
              fontSize: '0.76rem',
              color: 'var(--color-espresso-muted)',
              maxWidth: '520px',
            }}
          >
            * All prices in INR are editable demonstration figures. Dietary and allergen
            information is prepared for demo purposes; please consult our barista for specific allergen requirements.
          </span>
        </div>
      </div>

      {/* Full Menu Modal */}
      {showFullMenuModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(30, 21, 17, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-cream)',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '2px',
              padding: 'clamp(1.5rem, 4vw, 2.8rem)',
              position: 'relative',
              boxShadow: 'var(--shadow-hover)',
              border: '1px solid var(--border-subtle)',
            }}
            className="animate-fade-up"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.2rem',
              }}
            >
              <div>
                <div className="eyebrow eyebrow-sage">FULL COFFEE & PATISSERIE ROSTER</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-espresso)' }}>
                  BREW & BLOOM CATALOG
                </h3>
              </div>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.75rem' }}
              >
                Close ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {MENU_CATEGORIES.filter((c) => c !== 'All Items').map((category) => {
                const catItems = MENU_ITEMS.filter((i) => i.category === category);
                return (
                  <div key={category}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem',
                        color: 'var(--color-terracotta)',
                        borderBottom: '1px solid var(--border-subtle)',
                        paddingBottom: '0.4rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {category}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {catItems.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            paddingBottom: '0.8rem',
                            borderBottom: '1px dotted var(--border-subtle)',
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--color-espresso)' }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: '0.82rem', color: 'var(--color-espresso-muted)' }}>
                              {item.description}
                            </div>
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontWeight: 600,
                              fontSize: '1.1rem',
                              color: 'var(--color-espresso)',
                            }}
                          >
                            ₹{item.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .menu-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(200, 121, 87, 0.35);
        }
        .menu-card:hover .menu-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
