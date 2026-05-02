import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <Image 
                  src="/images/scraped/MRH-Logo-White-1-1024x546.png" 
                  alt="MRH Collective" 
                  width={200}
                  height={106}
                  className={styles.logoImage}
                />
              </div>
              <p className={styles.tagline}>
                Every mother&apos;s life is a legacy worth protecting. We are a collective dedicated to ensuring no birth story in Nigeria ends in silence.
              </p>
              <Link href="/join-us" className={`btn btn-accent ${styles.footerDonate}`} id="footer-donate-cta">
                JOIN THE COLLECTIVE
              </Link>
            </div>

            {/* Navigation */}
            <div className={styles.navGroup}>
              <p className={styles.navTitle}>Organisation</p>
              <nav>
                <Link href="/about" className={styles.navLink}>About Us</Link>
                <Link href="/programs" className={styles.navLink}>Programs</Link>
                <Link href="/research" className={styles.navLink}>Research</Link>
                <Link href="/impact" className={styles.navLink}>Impact</Link>
                <Link href="/news" className={styles.navLink}>News</Link>
              </nav>
            </div>

            <div className={styles.navGroup}>
              <p className={styles.navTitle}>Collaborate</p>
              <nav>
                <a href="mailto:volunteer@mrhrcollective.org" className={styles.navLink}>Lend Your Voice</a>
                <a href="mailto:partnerships@mrhrcollective.org" className={styles.navLink}>Forge a Legacy</a>
                <a href="mailto:info@mrhrcollective.org" className={styles.navLink}>Contact Us</a>
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.contactGroup}>
              <p className={styles.navTitle}>Reach Us</p>
              <a href="mailto:info@mrhrcollective.org" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@mrhrcollective.org
              </a>
              <a href="tel:+2348139707005" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +234 08139707005
              </a>
              <p className={styles.location}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                4, Sam Shonibare Street, Off Ogunlanna Street, Surulere, Lagos.
              </p>
              <div className={styles.socials}>
                <a href="https://linkedin.com/company/mrhrcollective" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://instagram.com/mrhcollective" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com/mrhcollective" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>© {currentYear} MRH Collective. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
