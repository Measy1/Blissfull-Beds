import { useState } from "react";

const Footer = () => {
      const [showAbout, setShowAbout] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>Subscribe to Our Online shop</h2>
          <p>Get updates about the latest products and deals!</p>
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
            <p>📍06006 ,Sarit,Westlands</p>
            <p>📞 +(254)740426348</p>
            <p>✉️ support@Safenestkids.com</p>
          </div>

          {/* Quick Links (Now aligned horizontally) */}
          <div className="footer-section">
            <h3 className="quick">Quick Links</h3>
            <div className="quick-links">
              <a href="#">Home</a> <br />
              <a href="#">Browse Products</a> <br />
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
              Welcome to Safenest Kids, your trusted destination for safe, fun,
              and thoughtfully designed products for little ones! We specialize
              in providing high-quality baby and kids' essentials—from nursery
              furniture and toys to clothing and accessories—crafted to nurture
              and protect every step of your child’s journey.
            </p>
          </div>
        )}

        {/* Copyright */}
        <div className="footer-bottom">
          <p>Developed by:Mary Kamau</p>
          <p>© 2025 Safenest Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
