import React, { useState } from 'react';
import { ArrowUp, Coffee, Send, Check } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CAFE_INFO } from '../data/cafeData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-espresso-deep)',
        color: 'var(--color-cream-light)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4rem',
          }}
        >
          {/* Column 1: Brand & Wordmark */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="footer-brand-col"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-terracotta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Coffee size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-cream)',
                    fontWeight: 600,
                  }}
                >
                  BREW & BLOOM
                </div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terracotta-light)',
                  }}
                >
                  Specialty Coffee & Bakes
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.88rem',
                lineHeight: 1.7,
                color: 'rgba(250, 247, 242, 0.72)',
                maxWidth: '320px',
                marginBottom: '1.5rem',
              }}
            >
              Your neighborhood sanctuary for carefully crafted coffee, fresh morning
              bakes, and moments worth slowing down for in Indiranagar, Bengaluru.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cream-light)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'background-color 0.2s',
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div
            style={{
              gridColumn: 'span 6',
            }}
            className="footer-links-col"
          >
            <div
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                fontWeight: 600,
                marginBottom: '1.2rem',
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Our Story', href: '#story' },
                { name: 'Menu', href: '#menu' },
                { name: 'Experiences', href: '#experiences' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Visit Us', href: '#visit' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(250, 247, 242, 0.8)',
                      transition: 'color 0.2s',
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Address */}
          <div
            style={{
              gridColumn: 'span 6',
            }}
            className="footer-hours-col"
          >
            <div
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                fontWeight: 600,
                marginBottom: '1.2rem',
              }}
            >
              Hours & Location
            </div>

            <div style={{ fontSize: '0.86rem', color: 'rgba(250, 247, 242, 0.8)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div>{CAFE_INFO.hours.weekdays}</div>
              <div>{CAFE_INFO.hours.weekends}</div>
              <div style={{ color: 'var(--color-terracotta)', fontSize: '0.78rem' }}>
                {CAFE_INFO.hours.kitchenNote}
              </div>

              <div style={{ marginTop: '0.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.8rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-cream)' }}>Indiranagar Cafe</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(250, 247, 242, 0.65)', lineHeight: 1.5, marginTop: '0.2rem' }}>
                  42, 12th Main Road, HAL 2nd Stage, Bengaluru 560038
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="footer-news-col"
          >
            <div
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                fontWeight: 600,
                marginBottom: '1.2rem',
              }}
            >
              The Slow Morning Journal
            </div>
            <p
              style={{
                fontSize: '0.86rem',
                color: 'rgba(250, 247, 242, 0.72)',
                lineHeight: 1.6,
                marginBottom: '1rem',
              }}
            >
              Receive monthly brew guides, seasonal single-origin release notices,
              and secret baker’s notes straight to your inbox.
            </p>

            {subscribed ? (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  backgroundColor: 'rgba(137, 148, 119, 0.25)',
                  border: '1px solid var(--color-sage)',
                  borderRadius: '2px',
                  color: 'var(--color-cream-light)',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Check size={16} color="var(--color-sage)" />
                Welcome to our slow morning circle!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flexGrow: 1,
                    padding: '0.8rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: 'white',
                    borderRadius: '2px',
                    fontSize: '0.85rem',
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-terracotta"
                  style={{ padding: '0.8rem 1.2rem', fontSize: '0.75rem' }}
                >
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Link */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.2rem',
            fontSize: '0.78rem',
            color: 'rgba(250, 247, 242, 0.55)',
          }}
        >
          <div>
            © {CURRENT_YEAR} BREW & BLOOM SPECIALTY COFFEE. All rights reserved.
            Crafted for slow mornings & artisan appreciation.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-cream-light)',
              fontSize: '0.76rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '0.4rem',
            }}
            className="back-to-top-btn"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} color="var(--color-terracotta)" />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-brand-col {
            grid-column: span 4 !important;
          }
          .footer-links-col {
            grid-column: span 2 !important;
          }
          .footer-hours-col {
            grid-column: span 3 !important;
          }
          .footer-news-col {
            grid-column: span 3 !important;
          }
        }
        .footer-link:hover {
          color: var(--color-terracotta) !important;
          padding-left: 4px;
        }
        .back-to-top-btn:hover {
          color: var(--color-terracotta) !important;
        }
      `}</style>
    </footer>
  );
}
