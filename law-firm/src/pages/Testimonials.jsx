import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    { name: 'Robert Chen', role: 'CEO, TechVentures Inc.', text: 'Sterling & Associates handled our corporate restructuring flawlessly. Their attention to detail and strategic thinking saved us millions. Truly exceptional legal minds.', initials: 'RC', rating: 5 },
    { name: 'Sarah Mitchell', role: 'Individual Client', text: 'During the most difficult time of my life, the family law team at Sterling provided not just legal expertise but genuine compassion. I couldn\'t have asked for better representation.', initials: 'SM', rating: 5 },
    { name: 'David Thompson', role: 'Real Estate Developer', text: 'We\'ve worked with many firms over the years, but Sterling stands apart. Their real estate team navigated complex zoning issues with remarkable skill and professionalism.', initials: 'DT', rating: 5 },
    { name: 'Lisa Anderson', role: 'Small Business Owner', text: 'The business law team helped me navigate the complexities of starting my company. From formation to contracts, they were there every step of the way. Highly recommended!', initials: 'LA', rating: 5 },
    { name: 'Marcus Johnson', role: 'Individual Client', text: 'After a serious car accident, the personal injury team fought tirelessly on my behalf. They secured a settlement that exceeded all my expectations. Forever grateful.', initials: 'MJ', rating: 5 },
    { name: 'Jennifer Park', role: 'CTO, InnovateTech', text: 'Our IP portfolio is in excellent hands with Sterling & Associates. Their patent and trademark expertise has been invaluable to protecting our technological innovations.', initials: 'JP', rating: 5 },
    { name: 'Carlos Rodriguez', role: 'Individual Client', text: 'The immigration team made my family\'s journey to permanent residency smooth and stress-free. Their knowledge of the system and attention to detail was impressive.', initials: 'CR', rating: 5 },
    { name: 'Amanda White', role: 'Estate Planning Client', text: 'The estate planning attorneys helped us create a comprehensive plan that protects our family\'s future. Their guidance gave us peace of mind we hadn\'t felt in years.', initials: 'AW', rating: 5 },
    { name: 'Thomas Baker', role: 'Construction Company CEO', text: 'Sterling\'s construction law expertise saved our company from a potentially devastating dispute. Their negotiation skills and industry knowledge are second to none.', initials: 'TB', rating: 5 },
  ];

  return (
    <>
      <div className="page-header">
        <h1>Client Testimonials</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fas fa-chevron-right"></i>
          <span>Testimonials</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Client Stories</span>
            <h2>Trusted by Thousands</h2>
            <div className="divider"></div>
            <p>Real stories from real clients who trusted us with their most important legal matters.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  {[...Array(t.rating)].map((_, j) => <i key={j} className="fas fa-star"></i>)}
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
        </div>
      </section>
    </>
  );
};

export default Testimonials;