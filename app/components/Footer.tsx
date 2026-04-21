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
                <img 
                  src="https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png" 
                  alt="MRH Collective" 
                  className={styles.logoImage}
                />
              </div>
              <p className={styles.tagline}>
                Every mother&apos;s life is a legacy worth protecting. We are a collective dedicated to ensuring no birth story in Nigeria ends in silence.
              </p>
              <a href="#donate" className={`btn btn-accent ${styles.footerDonate}`} id="footer-donate-cta">
                PROTECT A MOTHER
              </a>
            </div>

            {/* Navigation */}
            <div className={styles.navGroup}>
              <p className={styles.navTitle}>Organisation</p>
              <nav>
                <a href="#impact" className={styles.navLink}>Our Impact</a>
                <a href="#how-it-works" className={styles.navLink}>What We Do</a>
                <a href="#get-involved" className={styles.navLink}>Get Involved</a>
                <a href="https://mrhrcollective.org/news/" className={styles.navLink}>Insights</a>
              </nav>
            </div>

            <div className={styles.navGroup}>
              <p className={styles.navTitle}>Collaborate</p>
              <nav>
                <a href="mailto:volunteer@mrhr.org" className={styles.navLink}>Lend Your Voice</a>
                <a href="mailto:partnerships@mrhr.org" className={styles.navLink}>Forge a Legacy</a>
                <a href="mailto:info@mrhr.org" className={styles.navLink}>Contact Us</a>
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.contactGroup}>
              <p className={styles.navTitle}>Reach Us</p>
              <a href="mailto:info@mrhrcollective.org" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@mrhrcollective.org
              </a>
              <p className={styles.location}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                9, Razak Balogun, Surulere, Lagos.
              </p>
              <div className={styles.socials}>
                <a href="https://linkedin.com/company/mrhrcollective" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://instagram.com/mrhcollective" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com/mrhcollective" aria-label="Facebook">
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
            <p>© {currentYear} MRHR Collective. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
