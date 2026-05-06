import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <div className="logo-text">Sterling <span>&</span> Associates</div>
            </div>
            <p>
              Providing exceptional legal services with integrity, dedication, and a commitment 
              to achieving the best outcomes for our clients since 1998.
            </p>
            <div className="contact-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/practice-areas">Practice Areas</Link></li>
              <li><Link to="/attorneys">Our Attorneys</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Practice Areas</h4>
            <ul className="footer-links">
              <li><Link to="/practice-areas">Corporate Law</Link></li>
              <li><Link to="/practice-areas">Family Law</Link></li>
              <li><Link to="/practice-areas">Criminal Defense</Link></li>
              <li><Link to="/practice-areas">Real Estate</Link></li>
              <li><Link to="/practice-areas">Personal Injury</Link></li>
              <li><Link to="/practice-areas">Immigration Law</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>1250 Broadway, Suite 3601<br />New York, NY 10001</p>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone-alt"></i>
              <p>(212) 555-1234<br />(212) 555-5678</p>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@sterlinglaw.com<br />support@sterlinglaw.com</p>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-clock"></i>
              <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sterling & Associates. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;