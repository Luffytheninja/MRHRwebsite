"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu when clicking outside the header
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header 
      ref={headerRef} 
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="MRHR Collective home">
          <Image 
            src="https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png" 
            alt="MRH Collective" 
            width={120}
            height={64}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#impact" className={styles.navLink}>Our Impact</a>
          <a href="#how-it-works" className={styles.navLink}>What We Do</a>
          <a href="#get-involved" className={styles.navLink}>Get Involved</a>
          <a href="https://mrhrcollective.org/news/" className={styles.navLink}>Insights</a>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="#donate" className={`btn btn-primary ${styles.donateBtn}`} id="header-donate-cta">
            PROTECT A MOTHER
          </a>
          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? styles.barOpen : ""}></span>
            <span className={menuOpen ? styles.barOpen : ""}></span>
            <span className={menuOpen ? styles.barOpen : ""}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <a href="#impact" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Our Impact</a>
        <a href="#how-it-works" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>What We Do</a>
        <a href="#get-involved" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Get Involved</a>
        <a href="https://mrhrcollective.org/news/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Insights</a>
        <a href="#donate" className={`btn btn-primary ${styles.mobileDonate}`} onClick={() => setMenuOpen(false)}>
          PROTECT A MOTHER
        </a>
      </div>
    </header>
  );
}
