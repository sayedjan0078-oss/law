import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    practiceArea: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
  };

  return (
    <>
      <div className="page-header">
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fas fa-chevron-right"></i>
          <span>Contact</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Get in Touch</h3>
              <p>Ready to discuss your legal needs? Reach out to us today for a free, confidential consultation.</p>

              <div className="contact-item">
                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="details">
                  <h4>Main Office</h4>
                  <p>1250 Broadway, Suite 3601<br />New York, NY 10001, USA</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><i className="fas fa-phone-alt"></i></div>
                <div className="details">
                  <h4>Phone Numbers</h4>
                  <p>Main: (212) 555-1234<br />Toll Free: (800) 555-5678<br />Fax: (212) 555-9012</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><i className="fas fa-envelope"></i></div>
                <div className="details">
                  <h4>Email Addresses</h4>
                  <p>General: info@sterlinglaw.com<br />Support: support@sterlinglaw.com<br />Careers: careers@sterlinglaw.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><i className="fas fa-clock"></i></div>
                <div className="details">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="contact-socials">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(212) 555-0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Practice Area</label>
                  <select name="practiceArea" value={formData.practiceArea} onChange={handleChange}>
                    <option value="">Select a practice area</option>
                    <option value="corporate">Corporate & Business Law</option>
                    <option value="family">Family Law</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="realestate">Real Estate Law</option>
                    <option value="injury">Personal Injury</option>
                    <option value="immigration">Immigration Law</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="estate">Estate Planning</option>
                    <option value="employment">Employment Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Please describe your legal matter briefly..." required></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.654!2d-73.9878!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMTYuMSJX!5e0!3m2!1sen!2sus!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sterling & Associates Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;