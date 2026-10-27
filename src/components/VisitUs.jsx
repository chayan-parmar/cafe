import React, { useState } from 'react';
import { MapPin, Clock, Phone, CheckCircle2, Send } from 'lucide-react';
import { CAFE_INFO, SEATING_AREAS } from '../data/cafeData';

export default function VisitUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (8:00 AM – 11:30 AM)',
    guests: '2 Guests',
    seatingArea: 'Sunlit Arched Window Nook',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide your phone number';
    }
    if (!formData.date) {
      errors.date = 'Please pick a preferred date';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const refCode = 'BB-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedReservation({ ...formData, refCode });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setConfirmedReservation(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      timeSlot: 'Morning (8:00 AM – 11:30 AM)',
      guests: '2 Guests',
      seatingArea: 'Sunlit Arched Window Nook',
      notes: '',
    });
  };

  return (
    <section
      id="visit"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-cream-light)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <div className="eyebrow eyebrow-sage" style={{ justifyContent: 'center' }}>
            FIND OUR SANCTUARY
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
            }}
          >
            GATHER AT OUR TABLE
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--color-espresso-muted)' }}>
            We are tucked in a quiet leafy lane in Indiranagar, Bengaluru. Drop by for
            your morning pour-over or send a table inquiry for group gatherings.
          </p>
        </div>

        {/* Two-Column Grid: Location Details vs Reservation Inquiry Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
          }}
        >
          {/* Left Column: Location Info & Interactive Styled Map */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
            className="visit-info-col"
          >
            {/* Info Cards */}
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: 'clamp(1.5rem, 3vw, 2.4rem)',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  color: 'var(--color-espresso)',
                  marginBottom: '1.6rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.8rem',
                }}
              >
                Cafe Location & Hours
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-terracotta)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-espresso)', fontSize: '0.9rem' }}>
                      Address
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-espresso-muted)', lineHeight: 1.5 }}>
                      {CAFE_INFO.address}
                    </div>
                    <a
                      href={CAFE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-subtle"
                      style={{ marginTop: '0.5rem', display: 'inline-block' }}
                    >
                      GET DIRECTIONS (GOOGLE MAPS) ↗
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-sage-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-espresso)', fontSize: '0.9rem' }}>
                      Opening Hours
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-espresso-muted)' }}>
                      {CAFE_INFO.hours.weekdays}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-espresso-muted)' }}>
                      {CAFE_INFO.hours.weekends}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-terracotta)', marginTop: '0.2rem' }}>
                      {CAFE_INFO.hours.kitchenNote}
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-espresso)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-espresso)', fontSize: '0.9rem' }}>
                      Contact & Inquiries
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-espresso-muted)' }}>
                      Phone: <a href={`tel:${CAFE_INFO.phone}`}>{CAFE_INFO.phone}</a>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-espresso-muted)' }}>
                      Email: <a href={`mailto:${CAFE_INFO.email}`}>{CAFE_INFO.email}</a>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-espresso-muted)', marginTop: '0.2rem' }}>
                      Instagram:{' '}
                      <a
                        href={CAFE_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-terracotta)', fontWeight: 500 }}
                      >
                        {CAFE_INFO.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Aesthetic Cafe Map Graphic */}
            <div
              style={{
                backgroundColor: 'var(--color-cream-dark)',
                borderRadius: '2px',
                border: '1px solid var(--border-subtle)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.15,
                  backgroundImage: `radial-gradient(var(--color-espresso) 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                }}
              />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-terracotta)', fontWeight: 700 }}>
                  NEIGHBORHOOD MAP GUIDE
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-espresso)', marginTop: '0.2rem' }}>
                  BREW & BLOOM • Indiranagar Hub
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-espresso-muted)', marginTop: '0.4rem', maxWidth: '380px' }}>
                  2 mins walk from 12th Main crossroad. Dedicated bicycle rack and nearby valet parking available on weekends.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.2rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-espresso)' }}>
                  📍 Metro: Indiranagar Station (Purple Line)
                </span>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.72rem', backgroundColor: 'var(--color-white)' }}
                >
                  OPEN MAP
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Static Table Reservation / Inquiry Form */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="visit-form-col"
          >
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: 'clamp(1.8rem, 4vw, 2.8rem)',
                boxShadow: 'var(--shadow-card)',
                height: '100%',
              }}
            >
              {isSubmitted && confirmedReservation ? (
                /* Demo Confirmation State */
                <div
                  style={{
                    textAlign: 'center',
                    padding: '2rem 1rem',
                  }}
                  className="animate-fade-up"
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-sage-light)',
                      color: 'var(--color-sage-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="eyebrow eyebrow-sage" style={{ justifyContent: 'center' }}>
                    INQUIRY RECEIVED
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.8rem',
                      color: 'var(--color-espresso)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    We’ve Saved Your Request, {confirmedReservation.name}!
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-espresso-muted)',
                      maxWidth: '460px',
                      margin: '0 auto 1.8rem',
                      lineHeight: 1.6,
                    }}
                  >
                    This is a demonstration booking confirmation. In live operations,
                    our host confirms table availability via SMS and WhatsApp.
                  </p>

                  {/* Summary Slip */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-cream-light)',
                      border: '1px dashed var(--border-subtle)',
                      borderRadius: '2px',
                      padding: '1.4rem',
                      textAlign: 'left',
                      maxWidth: '420px',
                      margin: '0 auto 2rem',
                      fontSize: '0.86rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-espresso-muted)' }}>Demo Reference:</span>
                      <strong style={{ color: 'var(--color-terracotta)' }}>{confirmedReservation.refCode}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-espresso-muted)' }}>Date & Slot:</span>
                      <strong>{confirmedReservation.date} • {confirmedReservation.timeSlot}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-espresso-muted)' }}>Party Size:</span>
                      <strong>{confirmedReservation.guests}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-espresso-muted)' }}>Seating:</span>
                      <strong>{confirmedReservation.seatingArea}</strong>
                    </div>
                  </div>

                  <button onClick={handleReset} className="btn btn-secondary">
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: '1.8rem' }}>
                    <div className="eyebrow eyebrow-sage">TABLE INQUIRY & RESERVATION</div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.75rem',
                        color: 'var(--color-espresso)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Reserve a Slow Morning Table
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-espresso-muted)' }}>
                      Interested in group tables, work sessions, or weekend brunch?
                      Share your details below. Validated right in the browser.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label">
                        Full Name <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maya Iyer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                      {formErrors.name && <span className="form-error">{formErrors.name}</span>}
                    </div>

                    {/* Email & Phone Dual Row */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      <div className="form-group">
                        <label className="form-label">
                          Email Address <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="maya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input"
                        />
                        {formErrors.email && <span className="form-error">{formErrors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Phone Number <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input"
                        />
                        {formErrors.phone && <span className="form-error">{formErrors.phone}</span>}
                      </div>
                    </div>

                    {/* Date & Time Slot Dual Row */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      <div className="form-group">
                        <label className="form-label">
                          Date <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="form-input"
                        />
                        {formErrors.date && <span className="form-error">{formErrors.date}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Time Window</label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="form-select"
                        >
                          <option>Morning (8:00 AM – 11:30 AM)</option>
                          <option>Midday Brunch (11:30 AM – 2:30 PM)</option>
                          <option>Afternoon Tea (2:30 PM – 5:30 PM)</option>
                          <option>Evening Brews (5:30 PM – 8:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Guests & Seating Area */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      <div className="form-group">
                        <label className="form-label">Number of Guests</label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="form-select"
                        >
                          <option>1 Guest (Solo Study / Reading)</option>
                          <option>2 Guests</option>
                          <option>3 to 4 Guests</option>
                          <option>5 to 8 Guests (Group Table)</option>
                          <option>9+ Guests (Private Area)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Preferred Seating</label>
                        <select
                          value={formData.seatingArea}
                          onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                          className="form-select"
                        >
                          {SEATING_AREAS.map((area) => (
                            <option key={area.id} value={area.name}>
                              {area.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Notes / Requests */}
                    <div className="form-group">
                      <label className="form-label">Special Requests (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="High chair, quiet nook for laptop work, celebration pastry, etc."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="form-textarea"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '1.05rem',
                        marginTop: '0.6rem',
                        fontSize: '0.84rem',
                      }}
                    >
                      <Send size={16} />
                      SEND TABLE INQUIRY (DEMO)
                    </button>

                    <div style={{ fontSize: '0.72rem', color: '#9B8B82', textAlign: 'center' }}>
                      Static frontend demonstration. No data sent to an external server.
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .visit-info-col {
            grid-column: span 5 !important;
          }
          .visit-form-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}
