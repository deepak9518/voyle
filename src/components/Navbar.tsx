// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll effect (optional)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // prevent body scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/image.png"
            alt="Voyle Screen Logo"
            width={140}
            height={40}
            className="logo-img"
          />
        </Link>

        {/* Hamburger icon */}
        <div
          className="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
        </div>

        {/* Desktop navigation (hidden on mobile) */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/why-us">Why Us</Link>
          <Link href="/contact" className="btn-nav">
            Get Quote <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>

      {/* Full-screen mobile overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="mobile-menu-header">
              <Link href="/" className="logo" onClick={closeMenu}>
                <Image
                  src="/image.png"
                  alt="Voyle Screen Logo"
                  width={140}
                  height={40}
                  className="logo-img"
                />
              </Link>
              <button
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="mobile-nav-links">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/products" onClick={closeMenu}>
                Products
              </Link>
              <Link href="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
              <Link href="/why-us" onClick={closeMenu}>
                Why Us
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn-nav-mobile"
              >
                Get Quote <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
