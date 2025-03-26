import { useState } from "react";

const Footer = () => {
      const [showAbout, setShowAbout] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>Subscribe to Our Online shop</h2>
          <p>Get updates about the latest beds and deals!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="quick">Contact Us</h3>
            <p >📍06006 ,Sarit,Westlands</p>
            <p >📞 +(254)740426348</p>
            <p>✉️ support@Blissful beds.com</p>
          </div>

          {/* Quick Links (Now aligned horizontally) */}
          <div className="footer-section">
            <h3 className="quick">Quick Links</h3>
            <div className="quick-links">
              <a href="#">Home</a> <br />
              <a href="#">Browse Beds</a> <br />
              
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAbout(!showAbout);
                }}
              >
                About Us {showAbout ? "▲" : "▼"}About Us
              </a>{" "}
              <br />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h3 className="quick">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        {/* About Us Section (Toggles on click) */}
        {showAbout && (
          <div className="about-section">
            <h3>About Us</h3>
            <p>
              About Us - Blissful Beds 🛏️💤 Welcome to Sleep Haven, where comfort
              meets quality! We specialize in providing luxury beds, mattresses,
              and bedroom essentials to ensure you get the perfect night’s
              sleep. Our Mission At Blissful Beds, our mission is simple: to help
              you sleep better. We believe that high-quality sleep is essential
              for a healthy life, and we’re dedicated to offering the finest
              sleep solutions for every home. Why Choose Us?
               ✔️ Premium Quality:
              Our beds and mattresses are crafted with high-end materials for
              ultimate comfort.
               ✔️ Variety & Customization: From memory foam to
              orthopedic mattresses, we have options for all sleepers.

              ✔️Affordable Prices: Luxury doesn’t have to be expensive—we offer
              competitive pricing and flexible payment options.
               ✔️ CustomerSatisfaction: Your comfort is our priority! We provide expert
              guidance to help you find the perfect bed.
            </p>
          </div>
        )}

        {/* Copyright */}
        <div className="footer-bottom">
          <p>Developed by:Mary M</p>
          <p>© 2025 Blissful Beds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
