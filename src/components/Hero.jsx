import React from 'react';
import { ArrowDown, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Headline & Story */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              zIndex: 2,
            }}
            className="hero-text-col"
          >
            {/* Eyebrow Label with Sage Green */}
            <div className="eyebrow eyebrow-sage animate-fade-in">
              <Sparkles size={14} color="var(--color-sage-dark)" />
              INDEPENDENT SPECIALTY COFFEE & ARTISAN BAKERY
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-espresso)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                marginBottom: '1.4rem',
              }}
              className="animate-fade-up"
            >
              GOOD COFFEE.<br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--color-terracotta)',
                }}
              >
                SLOW MORNINGS.
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
                lineHeight: 1.75,
                color: 'var(--color-espresso-muted)',
                maxWidth: '540px',
                marginBottom: '2.2rem',
              }}
              className="animate-fade-up"
            >
              Your neighborhood escape for carefully crafted coffee, fresh bakes,
              and moments worth slowing down for. Single-origin roasts, 72-hour
              fermented pastries, and an atmosphere made for genuine connection.
            </p>

            {/* Buttons: EXPLORE THE MENU & OUR STORY */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.8rem',
              }}
              className="animate-fade-up"
            >
              <a href="#menu" className="btn btn-primary" id="hero-menu-cta">
                EXPLORE THE MENU
                <ArrowRight size={16} />
              </a>
              <a href="#story" className="btn btn-secondary">
                OUR STORY
              </a>
            </div>

            {/* Small Opening-Hours Label & Location Badge */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.2rem',
                paddingTop: '1.4rem',
                borderTop: '1px solid var(--border-subtle)',
                maxWidth: '520px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-sage)',
                    boxShadow: '0 0 0 4px rgba(137, 148, 119, 0.25)',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-espresso)',
                  }}
                >
                  Open Daily
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--color-espresso-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Clock size={14} color="var(--color-terracotta)" />
                <span>Mon – Fri 7:30 AM – 9 PM • Sat – Sun 8 AM – 10 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetrical Editorial Photography Composition */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="hero-image-col"
          >
            {/* Main Visual Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--color-cream-dark)',
              }}
            >
              <img
                src="/images/hero-brew-bloom.jpg"
                alt="Artisan Flat White Coffee with Swan Latte Art and Warm Butter Croissant at Brew & Bloom"
                style={{
                  width: '100%',
                  height: 'clamp(360px, 52vw, 620px)',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.8s ease',
                }}
                className="hero-main-img"
              />

              {/* Subtle Photo Overlay Gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(48,34,28,0.02) 0%, rgba(48,34,28,0.3) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Floating Quality Stamp */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  backgroundColor: 'rgba(250, 247, 242, 0.94)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '0.85rem 1.2rem',
                  borderRadius: '2px',
                  border: '1px solid rgba(48, 34, 28, 0.1)',
                  boxShadow: '0 8px 24px rgba(48, 34, 28, 0.12)',
                  maxWidth: '240px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#D48B38' }}>
                  {'★'.repeat(5)}
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-espresso)', marginLeft: '0.2rem' }}>
                    4.9 / 5
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: 'var(--color-espresso-muted)',
                    marginTop: '0.2rem',
                    lineHeight: 1.3,
                  }}
                >
                  Over 850+ slow mornings & joyful coffee moments
                </div>
              </div>

              {/* Top Right Floating Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'var(--color-espresso-deep)',
                  color: 'var(--color-cream-light)',
                  padding: '0.55rem 0.95rem',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: '2px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-terracotta)',
                  }}
                />
                Fresh Roast #14 • Chikmagalur
              </div>
            </div>

            {/* Asymmetrical Decorative Round Seal */}
            <div
              style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-cream-light)',
                border: '1px dashed var(--color-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(48, 34, 28, 0.08)',
                zIndex: 3,
              }}
              className="animate-spin-slow desktop-seal"
            >
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--color-espresso)', textTransform: 'uppercase' }}>
                ESTD • 2024<br />
                <span style={{ color: 'var(--color-terracotta)' }}>ARTISAN</span><br />
                COFFEE
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3.5rem',
          }}
        >
          <a
            href="#story"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-espresso-muted)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
            className="animate-float"
            aria-label="Scroll to Brand Story"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={14} color="var(--color-terracotta)" />
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-text-col {
            grid-column: span 6 !important;
          }
          .hero-image-col {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 959px) {
          .desktop-seal {
            display: none !important;
          }
        }
        .hero-main-img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
