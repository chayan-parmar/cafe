import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/cafeData';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-cream)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow eyebrow-sage" style={{ justifyContent: 'center' }}>
            TESTIMONIALS & MORNING PRAISE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
            }}
          >
            KIND WORDS, OVER COFFEE.
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--color-espresso-muted)' }}>
            Notes and gentle words from our community of coffee lovers, morning readers,
            and neighbor regulars. (Sample placeholder feedback for demonstration).
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.2rem)',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: '2rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-subtle)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              className="testimonial-card"
            >
              {/* Top Quote Icon & Stars */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.4rem',
                  }}
                >
                  <Quote size={28} color="var(--color-terracotta)" style={{ opacity: 0.8 }} />
                  <div style={{ display: 'flex', gap: '2px', color: '#E09F3E' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#E09F3E" stroke="#E09F3E" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.14rem',
                    lineHeight: 1.6,
                    color: 'var(--color-espresso)',
                    fontStyle: 'italic',
                    marginBottom: '1.6rem',
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-cream-dark)',
                    color: 'var(--color-espresso)',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.95rem',
                    flexShrink: 0,
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {t.avatar}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-espresso)',
                    }}
                  >
                    {t.author}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-espresso-muted)' }}>
                    {t.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--color-terracotta)',
                      fontWeight: 500,
                      marginTop: '0.2rem',
                    }}
                  >
                    {t.drink}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(200, 121, 87, 0.3);
        }
      `}</style>
    </section>
  );
}
