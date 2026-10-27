import React from 'react';
import { Check } from 'lucide-react';
import { SIGNATURE_EXPERIENCES } from '../data/cafeData';

export default function SignatureExperience() {
  return (
    <section
      id="experiences"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-cream-light)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow eyebrow-sage" style={{ justifyContent: 'center' }}>
            DAILY CRAFT & HOSPITALITY
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
            }}
          >
            THE BREW & BLOOM RITUAL
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--color-espresso-muted)' }}>
            Three interconnected pillars define our philosophy: precision espresso craft,
            unhurried morning viennoiserie, and an inviting space made for you to linger.
          </p>
        </div>

        {/* Three Editorial Blocks with Varied Image Positioning */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem' }}>
          {SIGNATURE_EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={exp.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: 'clamp(2rem, 5vw, 4.5rem)',
                  alignItems: 'center',
                }}
              >
                {/* Image Block: Left for 01 & 03, Right for 02 */}
                <div
                  style={{
                    gridColumn: 'span 12',
                    order: isEven ? 2 : 1,
                  }}
                  className="exp-img-col"
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: 'var(--color-cream-dark)',
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'clamp(320px, 42vw, 480px)',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.7s ease',
                      }}
                      className="exp-feature-img"
                    />

                    {/* Editorial Tag Pill */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.2rem',
                        left: '1.2rem',
                        backgroundColor: 'rgba(48, 34, 28, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-cream-light)',
                        padding: '0.35rem 0.8rem',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        borderRadius: '2px',
                      }}
                    >
                      {exp.tag}
                    </div>

                    {/* Pull Quote Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1.2rem',
                        left: '1.2rem',
                        right: '1.2rem',
                        backgroundColor: 'rgba(250, 247, 242, 0.94)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '2px',
                        border: '1px solid rgba(48, 34, 28, 0.08)',
                        fontSize: '0.84rem',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        color: 'var(--color-espresso)',
                      }}
                    >
                      "{exp.quote}"
                    </div>
                  </div>
                </div>

                {/* Text Block */}
                <div
                  style={{
                    gridColumn: 'span 12',
                    order: isEven ? 1 : 2,
                  }}
                  className="exp-text-col"
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '3.6rem',
                      color: 'var(--color-terracotta)',
                      lineHeight: 1,
                      opacity: 0.8,
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}
                  >
                    {exp.id}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                      color: 'var(--color-espresso)',
                      marginBottom: '0.4rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {exp.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.86rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-sage-dark)',
                      fontWeight: 600,
                      marginBottom: '1.2rem',
                    }}
                  >
                    {exp.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.8,
                      color: 'var(--color-espresso-muted)',
                      marginBottom: '1.8rem',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {exp.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '0.85rem',
                          color: 'var(--color-espresso)',
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-sage-light)',
                            color: 'var(--color-sage-dark)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={12} strokeWidth={2.5} />
                        </div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .exp-img-col {
            grid-column: span 6 !important;
          }
          .exp-text-col {
            grid-column: span 6 !important;
          }
        }
        .exp-feature-img:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
