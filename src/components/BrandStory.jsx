import React from 'react';
import { Coffee, Sparkles, Heart, Quote } from 'lucide-react';
import { BRAND_PRINCIPLES } from '../data/cafeData';

export default function BrandStory() {
  const iconMap = {
    Coffee: Coffee,
    Sparkles: Sparkles,
    Heart: Heart,
  };

  return (
    <section
      id="story"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-cream-light)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Two-Column Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Atmospheric Cafe Photography Frame */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="story-img-col"
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src="/images/story-cafe.jpg"
                alt="Inside Brew & Bloom Cafe showing sunlit arched windows, brick walls, and visitors enjoying coffee"
                style={{
                  width: '100%',
                  height: 'clamp(380px, 46vw, 560px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(48,34,28,0.4) 0%, rgba(48,34,28,0) 60%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  color: 'var(--color-cream-light)',
                }}
              >
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.85 }}>
                  The Sanctuary • Indiranagar
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 500 }}>
                  Crafted for slow mornings & unhurried conversations.
                </div>
              </div>
            </div>

            {/* Asymmetric Quote Badge floating on the image edge */}
            <div
              style={{
                position: 'absolute',
                top: '2rem',
                right: '-1.5rem',
                backgroundColor: 'var(--color-espresso)',
                color: 'var(--color-cream)',
                padding: '1.2rem',
                borderRadius: '2px',
                maxWidth: '220px',
                boxShadow: '0 12px 30px rgba(48, 34, 28, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'none',
              }}
              className="story-floating-quote"
            >
              <Quote size={20} color="var(--color-terracotta)" style={{ marginBottom: '0.4rem' }} />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.98rem',
                  color: 'var(--color-cream-light)',
                  lineHeight: 1.45,
                  fontStyle: 'italic',
                }}
              >
                "A good cup of coffee is the punctuation mark of your morning."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & 3 Brand Principles */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="story-text-col"
          >
            <div className="eyebrow eyebrow-sage">OUR PHILOSOPHY</div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-espresso)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '1.5rem',
              }}
            >
              A LITTLE PAUSE IN YOUR EVERYDAY.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--color-espresso-muted)',
                marginBottom: '1.2rem',
              }}
            >
              BREW & BLOOM was born from a simple conviction: in a world moving at
              breakneck speed, morning rituals should remain sacred. We created our
              space as an antidote to rushing—an open sanctuary filled with natural
              sunlight, the sound of steam wands, and the comforting warmth of fresh
              bakes straight from the stone oven.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.8,
                color: 'var(--color-espresso-muted)',
                marginBottom: '2.5rem',
              }}
            >
              Whether you are here with an old paperback, catching up with an old
              friend across our worn oak tables, or simply taking ten quiet minutes
              before the workday begins, you will always find a warm cup and an
              unrushed seat waiting for you.
            </p>

            {/* Three Brand Principles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              {BRAND_PRINCIPLES.map((principle) => {
                const IconComponent = iconMap[principle.icon] || Coffee;
                return (
                  <div
                    key={principle.id}
                    style={{
                      display: 'flex',
                      gap: '1.2rem',
                      alignItems: 'flex-start',
                      padding: '1.2rem 1.4rem',
                      backgroundColor: 'var(--color-cream)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '2px',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    className="principle-card"
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '2px',
                        backgroundColor: 'var(--color-sage-light)',
                        color: 'var(--color-sage-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.6rem',
                          flexWrap: 'wrap',
                          marginBottom: '0.25rem',
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.2rem',
                            color: 'var(--color-espresso)',
                            fontWeight: 600,
                          }}
                        >
                          {principle.title}
                        </h4>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--color-terracotta)',
                            fontWeight: 600,
                          }}
                        >
                          {principle.subtitle}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.88rem',
                          lineHeight: 1.65,
                          color: 'var(--color-espresso-muted)',
                        }}
                      >
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .story-img-col {
            grid-column: span 6 !important;
          }
          .story-text-col {
            grid-column: span 6 !important;
          }
          .story-floating-quote {
            display: block !important;
          }
        }
        .principle-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-subtle);
          border-color: rgba(200, 121, 87, 0.3);
        }
      `}</style>
    </section>
  );
}
