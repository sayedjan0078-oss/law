import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="page-header">
        <h1>About Our Firm</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fas fa-chevron-right"></i>
          <span>About Us</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="subtitle">Our Story</span>
              <h2>Building a Legacy of Trust & Justice</h2>
              <p>
                Sterling & Associates was founded in 1998 by James Sterling, a visionary 
                attorney with a mission to provide world-class legal services with a personal 
                touch. What began as a small practice in Manhattan has grown into one of 
                New York's most prestigious law firms.
              </p>
              <p>
                Over the past 25+ years, we have successfully represented thousands of clients 
                in complex legal matters, earning a reputation for excellence, integrity, and 
                unwavering dedication to our clients' interests.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>Board Certified Attorneys</span>
                </div>
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>Multi-State Licensing</span>
                </div>
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>Pro Bono Commitment</span>
                </div>
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>International Reach</span>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="main-image">
                <i className="fas fa-landmark"></i>
              </div>
              <div className="experience-badge">
                <div className="number">25+</div>
                <div className="text">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-preview section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '40px'
            }}>
              <div style={{
                width: '60px', height: '60px',
                background: 'var(--gold-gradient)',
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', color: '#1a1a1a',
                marginBottom: '24px'
              }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px' }}>
                To provide exceptional legal representation that empowers our clients, 
                upholds the highest standards of professional ethics, and delivers 
                measurable results in every case we undertake.
              </p>
            </div>

            <div style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '40px'
            }}>
              <div style={{
                width: '60px', height: '60px',
                background: 'var(--gold-gradient)',
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', color: '#1a1a1a',
                marginBottom: '24px'
              }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px' }}>
                To be the most trusted and respected law firm in the nation, 
                recognized for our innovative approach to legal challenges and our 
                commitment to making justice accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            textAlign: 'center'
          }}>
            {[
              { number: '5,000+', label: 'Cases Successfully Resolved', icon: 'fa-briefcase' },
              { number: '98%', label: 'Client Satisfaction Rate', icon: 'fa-smile' },
              { number: '50+', label: 'Expert Attorneys', icon: 'fa-user-tie' },
              { number: '15', label: 'Office Locations Nationwide', icon: 'fa-map-marker-alt' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '40px 24px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '64px', height: '64px',
                  background: 'rgba(201, 168, 76, 0.1)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', color: 'var(--accent-gold)',
                  margin: '0 auto 20px'
                }}>
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '42px', fontWeight: '800',
                  color: 'var(--accent-gold)',
                  lineHeight: '1'
                }}>{stat.number}</div>
                <div style={{
                  fontSize: '14px', color: 'var(--text-secondary)',
                  marginTop: '12px', fontWeight: '500'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Let our experienced team fight for your rights and deliver the justice you deserve.</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;