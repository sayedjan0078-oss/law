import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>
              <span>Award-Winning Law Firm</span>
            </div>

            <h1>
              Justice Through<br />
              <span className="highlight">Excellence</span><br />
              & Dedication
            </h1>

            <p className="hero-description">
              With over 25 years of legal excellence, Sterling & Associates delivers 
              strategic solutions and unwavering advocacy for individuals and businesses 
              across the United States.
            </p>

            <div className="hero-buttons">
              <Link to="/contact">
                <button className="btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Free Consultation
                </button>
              </Link>
              <Link to="/about">
                <button className="btn-secondary">
                  <i className="fas fa-play-circle"></i>
                  Learn More
                </button>
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="number">25+</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="number">5K+</div>
                <div className="label">Cases Won</div>
              </div>
              <div className="hero-stat">
                <div className="number">98%</div>
                <div className="label">Success Rate</div>
              </div>
              <div className="hero-stat">
                <div className="number">50+</div>
                <div className="label">Expert Attorneys</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="quote-icon">"</div>
              <blockquote>
                The measure of a great law firm is not just in the cases they win, 
                but in the lives they transform and the justice they uphold.
              </blockquote>
              <div className="author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <h4>James Sterling</h4>
                  <p>Managing Partner & Founder</p>
                </div>
              </div>
            </div>

            <div className="hero-floating-card card-1">
              <div className="icon"><i className="fas fa-shield-alt"></i></div>
              <h5>Trusted Protection</h5>
              <p>100% Confidential</p>
            </div>

            <div className="hero-floating-card card-2">
              <div className="icon"><i className="fas fa-trophy"></i></div>
              <h5>Top Rated Firm</h5>
              <p>Best Lawyers 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What We Do</span>
            <h2>Our Practice Areas</h2>
            <div className="divider"></div>
            <p>We provide comprehensive legal services across multiple disciplines, 
            ensuring expert representation for every client need.</p>
          </div>

          <div className="practice-grid">
            {[
              { icon: 'fa-building', title: 'Corporate Law', desc: 'Strategic legal counsel for businesses of all sizes, from formation to complex mergers and acquisitions.' },
              { icon: 'fa-users', title: 'Family Law', desc: 'Compassionate representation in divorce, custody, support, and all family-related legal matters.' },
              { icon: 'fa-gavel', title: 'Criminal Defense', desc: 'Aggressive defense strategies protecting your rights and freedom in federal and state courts.' },
              { icon: 'fa-home', title: 'Real Estate', desc: 'Expert guidance in residential and commercial transactions, zoning, and property disputes.' },
              { icon: 'fa-heartbeat', title: 'Personal Injury', desc: 'Fighting for maximum compensation for victims of negligence and wrongful conduct.' },
              { icon: 'fa-globe-americas', title: 'Immigration Law', desc: 'Navigating complex immigration processes for individuals and businesses seeking legal status.' },
            ].map((item, i) => (
              <div className="practice-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="card-icon"><i className={`fas ${item.icon}`}></i></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to="/practice-areas" className="learn-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about-preview section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="main-image">
                <i className="fas fa-balance-scale"></i>
              </div>
              <div className="experience-badge">
                <div className="number">25+</div>
                <div className="text">Years of Excellence</div>
              </div>
            </div>

            <div className="about-content">
              <span className="subtitle">About Our Firm</span>
              <h2>A Legacy of Legal Excellence & Client Trust</h2>
              <p>
                Founded in 1998, Sterling & Associates has grown from a small boutique firm 
                into one of New York's most respected law practices. Our team of seasoned 
                attorneys brings decades of combined experience across diverse legal disciplines.
              </p>
              <p>
                We believe that every client deserves personalized attention, strategic thinking, 
                and relentless advocacy. Our track record speaks for itself — thousands of 
                successful cases and a 98% client satisfaction rate.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>Free Initial Consultation</span>
                </div>
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>24/7 Client Support</span>
                </div>
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>No Win, No Fee Policy</span>
                </div>
                <div className="about-feature">
                  <div className="check"><i className="fas fa-check"></i></div>
                  <span>Transparent Billing</span>
                </div>
              </div>

              <Link to="/about">
                <button className="btn-dark">
                  Discover More <i className="fas fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Need Legal Assistance?<br />We're Here to Help</h2>
            <p>
              Schedule a free consultation with one of our experienced attorneys today. 
              Your first step towards justice starts here.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="btn-primary">
                  <i className="fas fa-phone-alt"></i>
                  Call (212) 555-1234
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-secondary">
                  <i className="fas fa-envelope"></i>
                  Send a Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Client Testimonials</span>
            <h2>What Our Clients Say</h2>
            <div className="divider"></div>
          </div>

          <div className="testimonials-grid">
            {[
              { name: 'Robert Chen', role: 'CEO, TechVentures Inc.', text: 'Sterling & Associates handled our corporate restructuring flawlessly. Their attention to detail and strategic thinking saved us millions. Truly exceptional legal minds.', initials: 'RC' },
              { name: 'Sarah Mitchell', role: 'Individual Client', text: 'During the most difficult time of my life, the family law team at Sterling provided not just legal expertise but genuine compassion. I couldn\'t have asked for better representation.', initials: 'SM' },
              { name: 'David Thompson', role: 'Real Estate Developer', text: 'We\'ve worked with many firms over the years, but Sterling stands apart. Their real estate team navigated complex zoning issues with remarkable skill and professionalism.', initials: 'DT' },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => <i key={j} className="fas fa-star"></i>)}
                </div>
                <p className="quote">"{t.text}"</p>
                <div className="client">
                  <div className="client-avatar">{t.initials}</div>
                  <div className="client-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/testimonials">
              <button className="btn-dark">
                View All Testimonials <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;