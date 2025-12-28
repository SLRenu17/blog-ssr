"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../header.css";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
        </button>

        <div className="logo-container" onClick={() => handleNavigation("/")}>
          <Image
            src="/log3.png"
            className="logo"
            alt="Logo"
            width={150}
            height={60}
            priority
          />
        </div>

        <nav className={isMenuOpen ? "nav-open" : ""}>
          <button onClick={() => handleNavigation("/")}>Home</button>
          <button onClick={() => handleNavigation("/about-us")}>About Us</button>
          <button onClick={() => handleNavigation("/services")}>Services</button>

          {/* ✅ Use Next.js Link for internal navigation */}
          <Link
            href="/blogs"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>

          <button onClick={() => handleNavigation("/contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}