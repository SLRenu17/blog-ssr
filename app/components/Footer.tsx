"use client";

import Link from "next/link";
import "../footer.css";

interface SocialIcon {
  iconClass: string;
  link: string;
  label: string;
}

const Footer: React.FC = () => {
  const socialIcons: SocialIcon[] = [
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
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2 className="section-title">
            Abhi Drain Line Cleaning Services UAE
          </h2>

          <p className="company-tagline">
            Abhi Drain Line Cleaning Services is a professional cleaning company
            in the UAE offering reliable, affordable, and eco-friendly drain and
            sewage cleaning solutions. We specialize in residential, commercial,
            and industrial drainage systems across Dubai, Abu Dhabi, Sharjah, and
            Ajman.
          </p>
        </div>

        {/* Follow + Contact */}
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
              className="contact-link"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp: +971 55 610 8355
            </a>

            <a href="tel:+971556108355" className="contact-link">
              <i className="fa fa-phone"></i> Call: +971 55 610 8355
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer-section quick-links" aria-label="Quick Links">
          <h3 className="section-title">Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      <hr className="footer-divider" />

      <div className="copyright">
        © {new Date().getFullYear()} Abhi Drain Line Cleaning Services UAE.
        All Rights Reserved.
        <p>Developed By Renuka and Ganesh<p/>
      </div>
    </footer>
  );
};

export default Footer;
