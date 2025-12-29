import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./footer.css";

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
    <>
      {/* ✅ SEO Section */}
      <Helmet>
        <title>Abhi Drain Line Cleaning Services UAE | Professional Drain & Sewage Cleaning</title>
        <meta
          name="description"
          content="Abhi Drain Line Cleaning Services UAE offers professional drain, sewage, and water tank cleaning across Dubai, Abu Dhabi, Sharjah, and Ajman. Reliable and eco-friendly solutions for residential, commercial, and industrial cleaning."
        />
        <meta
          name="keywords"
          content="drain line cleaning UAE, sewage cleaning Dubai, pipe unclogging Abu Dhabi, eco-friendly drain cleaning Sharjah, industrial drain cleaning Ajman"
        />
        <link rel="canonical" href="https://www.abhidrainlinecleaning.com/" />

        {/* Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhi Drain Line Cleaning Services UAE" />
        <meta
          property="og:description"
          content="Professional drain and sewage cleaning services across UAE — trusted experts in maintaining clean, safe drainage systems."
        />
        <meta
          property="og:image"
          content="https://www.abhidrainlinecleaning.com/assets/seo-default.jpg"
        />
        <meta property="og:url" content="https://www.abhidrainlinecleaning.com/" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhi Drain Line Cleaning Services UAE" />
        <meta
          name="twitter:description"
          content="Your trusted partner for professional drain and sewage cleaning services across the UAE."
        />
        <meta
          name="twitter:image"
          content="https://www.abhidrainlinecleaning.com/assets/seo-default.jpg"
        />
      </Helmet>

      {/* ✅ Footer Section */}
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
                <Link to="/" aria-label="Go to Abhi Drain Line Cleaning Services Home Page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" aria-label="Learn more about Abhi Drain Line Cleaning Services">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  aria-label="Explore professional drain cleaning services in UAE"
                >
                  Services
                </Link>
              </li>
              <li>
                <a href="/blogs" aria-label="Read cleaning and maintenance blogs">Blogs</a>
              </li>
              <li>
                <Link to="/contact" aria-label="Contact Abhi Drain Line Cleaning Services">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* ✅ Follow Us + Contact */}
          <div className="footer-section follow-us">
            <h3 className="section-title">Follow Us</h3>
            <div className="social-icons">
              {socialIcons.map((item, index) => (
                <a
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
              <a
                href="https://wa.me/971556108355"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Abhi Drain Line Cleaning Services on WhatsApp"
                className="contact-link"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp: +971 55 610 8355
              </a>

              <a
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
    </>
  );
};

export default Footer;
