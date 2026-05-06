import React from 'react';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const areas = [
    { icon: 'fa-building', title: 'Corporate & Business Law', desc: 'Comprehensive legal solutions for businesses including formation, governance, mergers & acquisitions, contract negotiation, compliance, and strategic planning. We serve clients from startups to Fortune 500 companies.', items: ['Business Formation & Structuring', 'Mergers & Acquisitions', 'Contract Drafting & Review', 'Corporate Governance', 'Regulatory Compliance'] },
    { icon: 'fa-users', title: 'Family Law', desc: 'Compassionate and skilled representation in all family law matters. We understand the emotional complexities involved and work diligently to protect your family\'s best interests.', items: ['Divorce & Separation', 'Child Custody & Support', 'Prenuptial Agreements', 'Adoption', 'Domestic Violence Protection'] },
    { icon: 'fa-gavel', title: 'Criminal Defense', desc: 'Aggressive and strategic defense for individuals facing criminal charges. Our experienced trial attorneys protect your constitutional rights at every stage of the legal process.', items: ['Federal Crimes', 'White Collar Crimes', 'Drug Offenses', 'DUI/DWI Defense', 'Appeals & Post-Conviction'] },
    { icon: 'fa-home', title: 'Real Estate Law', desc: 'Expert legal guidance for all real estate transactions and disputes. From residential purchases to complex commercial developments, we ensure your investments are protected.', items: ['Residential Transactions', 'Commercial Leasing', 'Title Examination', 'Zoning & Land Use', 'Construction Disputes'] },
    { icon: 'fa-heartbeat', title: 'Personal Injury', desc: 'Dedicated advocacy for victims of accidents and negligence. We fight tirelessly to secure maximum compensation for your injuries, medical expenses, and lost wages.', items: ['Auto Accidents', 'Medical Malpractice', 'Workplace Injuries', 'Product Liability', 'Wrongful Death'] },
    { icon: 'fa-globe-americas', title: 'Immigration Law', desc: 'Navigating the complex U.S. immigration system with expertise and care. We help individuals and businesses achieve their immigration goals efficiently.', items: ['Family-Based Immigration', 'Employment Visas', 'Naturalization', 'Deportation Defense', 'Asylum Applications'] },
    { icon: 'fa-copyright', title: 'Intellectual Property', desc: 'Protecting your innovations, creative works, and brand identity. Our IP attorneys safeguard your intellectual assets with comprehensive legal strategies.', items: ['Patent Applications', 'Trademark Registration', 'Copyright Protection', 'IP Litigation', 'Licensing Agreements'] },
    { icon: 'fa-hand-holding-usd', title: 'Estate Planning', desc: 'Strategic planning to protect your wealth and ensure your wishes are honored. We help you create comprehensive estate plans tailored to your unique situation.', items: ['Wills & Trusts', 'Probate Administration', 'Power of Attorney', 'Tax Planning', 'Charitable Giving'] },
    { icon: 'fa-briefcase', title: 'Employment Law', desc: 'Protecting the rights of both employers and employees in the workplace. We provide counsel on compliance, disputes, and policy development.', items: ['Wrongful Termination', 'Discrimination Claims', 'Wage & Hour Disputes', 'Employment Contracts', 'Workplace Policies'] },
  ];

  return (
    <>
      <div className="page-header">
        <h1>Practice Areas</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fas fa-chevron-right"></i>
          <span>Practice Areas</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Expertise</span>
            <h2>Comprehensive Legal Services</h2>
            <div className="divider"></div>
            <p>Our team of specialized attorneys provides expert representation across a wide range of legal disciplines.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '30px' }}>
            {areas.map((area, i) => (
              <div key={i} className="practice-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="card-icon"><i className={`fas ${area.icon}`}></i></div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
                  {area.items.map((item, j) => (
                    <li key={j} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '6px 0', fontSize: '14px', color: 'var(--text-secondary)'
                    }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--accent-gold)', fontSize: '12px' }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="learn-more">
                  Get Started <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Not Sure Which Area You Need?</h2>
            <p>Contact us for a free consultation. Our team will assess your situation and connect you with the right attorney.</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="btn-primary">
                  <i className="fas fa-phone-alt"></i>
                  Call (212) 555-1234
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreas;