import React, { useState, useEffect } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/cafeData';

export default function CafeGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Close lightbox on Escape key and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  const handleNext = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section
      id="gallery"
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
            VISUAL JOURNAL
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
            }}
          >
            MOMENTS AT BREW & BLOOM
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--color-espresso-muted)' }}>
            A glimpse into our daily mornings—golden light, blooming pour-overs,
            warm pastries fresh from the oven, and the quiet beauty of our space.
            Click any photograph to view in high resolution.
          </p>
        </div>

        {/* Asymmetrical Masonry/Grid Photo Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
          className="gallery-grid"
        >
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'var(--color-cream-dark)',
                boxShadow: 'var(--shadow-subtle)',
                border: '1px solid var(--border-subtle)',
                height: index === 0 || index === 3 ? '380px' : '300px',
              }}
              className="gallery-item-wrap"
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="gallery-img"
              />

              {/* Hover Dark Vignette & Caption */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 21, 17, 0.85) 0%, rgba(30, 21, 17, 0.2) 50%, rgba(30, 21, 17, 0) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  color: 'var(--color-cream-light)',
                }}
                className="gallery-overlay"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <Maximize2 size={16} />
                </div>

                <div
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terracotta-light)',
                    fontWeight: 600,
                    marginBottom: '0.2rem',
                  }}
                >
                  {photo.category}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '0.25rem',
                  }}
                >
                  {photo.title}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(250, 247, 242, 0.85)',
                    lineHeight: 1.4,
                  }}
                >
                  {photo.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          onClick={() => setActivePhotoIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(18, 12, 9, 0.94)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          className="animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: 'var(--color-cream-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 10,
              transition: 'background-color 0.2s',
            }}
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '1.5rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: 'var(--color-cream-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 10,
              transition: 'background-color 0.2s',
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '1.5rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: 'var(--color-cream-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 10,
              transition: 'background-color 0.2s',
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '920px',
              width: '100%',
              backgroundColor: 'var(--color-espresso-deep)',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ position: 'relative', maxHeight: '70vh', backgroundColor: '#000' }}>
              <img
                src={GALLERY_PHOTOS[activePhotoIndex].image}
                alt={GALLERY_PHOTOS[activePhotoIndex].title}
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>

            {/* Lightbox Caption Footer */}
            <div
              style={{
                padding: '1.2rem 1.6rem',
                backgroundColor: 'var(--color-espresso-deep)',
                color: 'var(--color-cream-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--color-terracotta)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {GALLERY_PHOTOS[activePhotoIndex].category}
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'white' }}>
                  {GALLERY_PHOTOS[activePhotoIndex].title}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'rgba(250, 247, 242, 0.75)', marginTop: '0.2rem' }}>
                  {GALLERY_PHOTOS[activePhotoIndex].description}
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'rgba(250, 247, 242, 0.6)', letterSpacing: '0.1em' }}>
                {activePhotoIndex + 1} / {GALLERY_PHOTOS.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-wrap:hover .gallery-img {
          transform: scale(1.06);
        }
        .gallery-item-wrap:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
