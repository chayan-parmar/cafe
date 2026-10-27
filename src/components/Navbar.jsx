import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Clock, MapPin, ChevronRight, Coffee } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Ambient Announcement Ticker */}
      <div style={{
        backgroundColor: 'var(--color-espresso-deep)',
        color: 'var(--color-cream-light)',
        padding: '0.45rem 1rem',
        fontSize: '0.72rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.2rem',
        zIndex: 101,
        position: 'relative'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Clock size={12} color="var(--color-terracotta)" />
          Open Today: 7:30 AM – 9:00 PM
        </span>
        <span style={{ opacity: 0.35 }}>•</span>
        <span style={{ display: 'none', md: 'inline', alignItems: 'center', gap: '0.35rem' }}>
          <MapPin size={12} color="var(--color-sage)" />
          12th Main, Indiranagar, Bengaluru
        </span>
        <span style={{ opacity: 0.35 }}>•</span>
        <span style={{ color: 'var(--color-terracotta-light)' }}>
          Single Origin Harvest: Chikmagalur Arabica
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(245, 240, 232, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(48, 34, 28, 0.08)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 8px 24px -6px rgba(48, 34, 28, 0.06)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '88px',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Brand Wordmark & Botanical Badge */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: 'var(--color-espresso)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-espresso)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-cream)',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(48, 34, 28, 0.15)',
              }}
            >
              <Coffee size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  lineHeight: 1,
                  color: 'var(--color-espresso)',
                }}
              >
                BREW & BLOOM
              </div>
              <div
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terracotta)',
                  fontWeight: 600,
                  marginTop: '0.15rem',
                }}
              >
                Specialty Coffee & Bakes
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-espresso)',
                  position: 'relative',
                  padding: '0.3rem 0',
                }}
                className="nav-link-hover"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Menu CTA & Counter Order Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {/* Counter Order Bag Icon */}
            <button
              onClick={onOpenCart}
              aria-label="View Counter Order"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '2px',
                backgroundColor: 'var(--color-cream-light)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--color-espresso)',
                cursor: 'pointer',
              }}
              title="View your Counter Order"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: 'var(--color-terracotta)',
                    color: 'white',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(200, 121, 87, 0.4)',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* "VIEW OUR MENU" Button */}
            <a
              href="#menu"
              className="btn btn-primary"
              style={{
                display: 'none',
                padding: '0.75rem 1.4rem',
                fontSize: '0.76rem',
              }}
              id="desktop-menu-btn"
            >
              VIEW OUR MENU
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '2px',
                backgroundColor: mobileMenuOpen ? 'var(--color-espresso)' : 'var(--color-cream-light)',
                color: mobileMenuOpen ? 'var(--color-cream)' : 'var(--color-espresso)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '116px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(245, 240, 232, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem 3rem',
            overflowY: 'auto',
          }}
          className="animate-fade-in"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="eyebrow eyebrow-sage" style={{ marginBottom: '0.5rem' }}>
              NAVIGATION
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  fontWeight: 500,
                  color: 'var(--color-espresso)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.8rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={20} color="var(--color-terracotta)" />
              </a>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="#menu"
              onClick={handleLinkClick}
              className="btn btn-terracotta"
              style={{ width: '100%', textAlign: 'center' }}
            >
              VIEW OUR MENU
            </a>
            <div
              style={{
                padding: '1.2rem',
                backgroundColor: 'var(--color-cream-light)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                fontSize: '0.82rem',
                color: 'var(--color-espresso-muted)',
              }}
            >
              <div style={{ fontWeight: 600, color: 'var(--color-espresso)', marginBottom: '0.3rem' }}>
                Visit BREW & BLOOM
              </div>
              <div>42, 12th Main Road, Indiranagar, Bengaluru</div>
              <div style={{ marginTop: '0.3rem', color: 'var(--color-terracotta)', fontWeight: 500 }}>
                Open Today: 7:30 AM – 9:00 PM
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation Helper CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #desktop-menu-btn {
            display: inline-flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--color-terracotta);
          transition: width 0.25s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
