import React from 'react';
import { Link } from 'react-router-dom';

const Attorneys = () => {
  const attorneys = [
    { name: 'James Sterling', role: 'Managing Partner', specialty: 'Corporate Law & M&A', initials: 'JS', desc: 'Founder with 30+ years of experience in corporate law and complex business transactions.' },
    { name: 'Victoria Hayes', role: 'Senior Partner', specialty: 'Criminal Defense', initials: 'VH', desc: 'Former federal prosecutor with an exceptional trial record in high-profile criminal cases.' },
    { name: 'Michael Chen', role: 'Partner', specialty: 'Real Estate Law', initials: 'MC', desc: 'Specializes in commercial real estate transactions and development projects nationwide.' },
    { name: 'Sarah Mitchell', role: 'Partner', specialty: 'Family Law', initials: 'SM', desc: 'Compassionate advocate dedicated to protecting families through complex legal transitions.' },
    { name: 'Robert Williams', role: 'Senior Associate', specialty: 'Immigration Law', initials: 'RW', desc: 'Expert in complex immigration matters with a focus on employment-based visas.' },
    { name: 'Emily Rodriguez', role: 'Senior Associate', specialty: 'Personal Injury', initials: 'ER', desc: 'Passionate about securing maximum compensation for injury victims and their families.' },
    { name: 'Daniel Park', role: 'Associate', specialty: 'Intellectual Property', initials: 'DP', desc: 'Technology lawyer protecting innovations and intellectual property rights for startups.' },
    { name: 'Amanda Foster', role: 'Associate', specialty: 'Estate Planning', initials: 'AF', desc: 'Helps clients build comprehensive estate plans to protect their legacy and wealth.' },
  ];

  return (
    <>
      <div className="page-header">
        <h1>Our Attorneys</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fas fa-chevron-right"></i>
          <span>Attorneys</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Meet The Team</span>
            <h2>Exceptional Legal Professionals</h2>
            <div className="divider"></div>
            <p>Our attorneys bring decades of combined experience, diverse expertise, and an unwavering commitment to excellence.</p>
          </div>

          <div className="attorneys-grid">
            {attorneys.map((attorney, i) => (
              <div className="attorney-card" key={i}>
                <div className="attorney-image">
                  <i className="fas fa-user-tie"></i>
                  <div className="overlay">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                    <a href="#"><i className="fas fa-phone-alt"></i></a>
                  </div>
                </div>
                <div className="attorney-info">
                  <h3>{attorney.name}</h3>
                  <div className="role">{attorney.role}</div>
                  <p>{attorney.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Need the Right Attorney for Your Case?</h2>
            <p>We'll match you with the perfect attorney based on your specific legal needs.</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Attorneys;