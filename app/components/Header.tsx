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
        <Link href="/" className={styles.logo} aria-label="MRH Collective home">
          <Image 
            src="/images/scraped/MRH-Logo-White-1-1024x546.png" 
            alt="MRH Collective" 
            width={200}
            height={107}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/programs" className={styles.navLink}>Programs</Link>
          <Link href="/research" className={styles.navLink}>Research</Link>
          <Link href="/impact" className={styles.navLink}>Impact</Link>
          <Link href="/news" className={styles.navLink}>News</Link>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/join-us" className={`btn btn-primary ${styles.donateBtn}`} id="header-donate-cta">
            JOIN THE COLLECTIVE
          </Link>
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
        <Link href="/about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/programs" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Programs</Link>
        <Link href="/research" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Research</Link>
        <Link href="/impact" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Impact</Link>
        <Link href="/news" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>News</Link>
        <Link href="/join-us" className={`btn btn-primary ${styles.mobileDonate}`} onClick={() => setMenuOpen(false)}>
          JOIN THE COLLECTIVE
        </Link>
      </div>
    </header>
  );
}
