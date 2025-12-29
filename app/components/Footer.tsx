import React from "react";
import Link from "next/link"; // ✅ Next.js Link

const Footer = () => {
  const socialIcons = [
    {
      iconClass: "fa-facebook-f",
      link: "https://www.facebook.com/abhidrainlinecleaning",
      label: "Follow Abhi Drain Line Cleaning Services on Facebook",
    },
    {
      iconClass: "fa-instagram",
      link: "https://www.instagram.com/abhidrainlinecleaning",
      label: "Follow Abhi Drain Line Cleaning Services on Instagram",
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content-container">
        {/* ✅ Company Info */}
        <div className="footer-section company-info">
          <h2 className="section-title">Abhi Drain Line Cleaning Services UAE</h2>
          <p className="company-tagline">
            Abhi Drain Line Cleaning Services is a professional cleaning company in the UAE
            offering reliable, affordable, and eco-friendly drain and sewage cleaning solutions.
            We specialize in residential, commercial, and industrial drainage systems across
            Dubai, Abu Dhabi, Sharjah, and Ajman. Our mission is to provide spotless drains and
            complete customer satisfaction.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <nav className="footer-section quick-links" aria-label="Quick Links">
          <h3 className="section-title">Quick Links</h3>
          <ul>
            <li>
              <a href="/" aria-label="Go to Abhi Drain Line Cleaning Services Home Page">
                Home
              </a>
            </li>
            <li>
              <a href="/#about-us" aria-label="Learn more about Abhi Drain Line Cleaning Services">
                About Us
              </a>
            </li>
            <li>
              <a href="/#services" aria-label="Explore professional drain cleaning services in UAE">
                Services
              </a>
            </li>
            <li>
              <Link href="/blogs" aria-label="Read cleaning and maintenance blogs">
                Blogs
              </Link>
            </li>
            <li>
              <a href="/#contact" aria-label="Contact Abhi Drain Line Cleaning Services">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* ✅ Follow Us + Contact */}
        <div className="footer-section follow-us">
          <h3 className="section-title">Follow Us</h3>
          <div className="social-icons">
            {socialIcons.map((item, index) => (
              
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <i className={`fab ${item.iconClass}`}></i>
              </a>
            ))}
          </div>

          <div className="contact-methods">
            
              href="https://wa.me/971556108355"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Abhi Drain Line Cleaning Services on WhatsApp"
              className="contact-link"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp: +971 55 610 8355
            </a>

            
              href="tel:+971556108355"
              aria-label="Call Abhi Drain Line Cleaning Services"
              className="contact-link"
            >
              <i className="fa fa-phone"></i> Call: +971 55 610 8355
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* ✅ Copyright */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} Abhi Drain Line Cleaning Services UAE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
