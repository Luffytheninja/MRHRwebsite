"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./SocialProof.module.css";

const partners = [
  { name: "Sterling One Foundation", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/sterling-foundation.png" },
  { name: "Sterling Bank", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/STERLING.png" },
  { name: "Nigerian Breweries", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/AMSTEL.png" },
  { name: "Redwire Group", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/REDWIRE.png" },
  { name: "i-Fitness", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/IFITNESS.png" },
  { name: "SOGON", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/SOGON.png" },
  { name: "AFEMSON", logo: "https://mrhrcollective.org/wp-content/uploads/2025/01/AFEMSON24.png" },
];

const testimonials = [
  {
    quote: "MRHR's programme is the most direct, measurable maternal health intervention we have partnered with in Lagos. The data is real. The impact is undeniable.",
    name: "Dr. Funke Adeyemi",
    role: "Public Health Consultant, Lagos State",
    initials: "FA",
  },
  {
    quote: "We funded MRHR because they showed us the mechanism, not just the mission. Every naira is accountable. That is rare in this space.",
    name: "Chidi Okonkwo",
    role: "Foundation Director, Sterling Impact Fund",
    initials: "CO",
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className="container">
        {/* Partners */}
        <div className={`${styles.partnerBlock} fade-in`}>
          <p className={styles.partnerLabel}>Trusted by</p>
          <div className={styles.partnerRow}>
            {partners.map((p) => (
              <div key={p.name} className={styles.partnerChip} title={p.name}>
                <Image 
                  src={p.logo} 
                  alt={p.name} 
                  width={140}
                  height={60}
                  className={styles.partnerLogo} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={styles.header}>
          <p className="section-label fade-in">Testimonials</p>
          <h2 className={`${styles.title} fade-in fade-in-delay-1`}>What Partners Say</h2>
          <div className="section-divider fade-in fade-in-delay-1" />
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`${styles.testimonialCard} fade-in`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.quoteIcon} aria-hidden="true">&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initials}</div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility bar */}
        <div className={`${styles.credBar} fade-in`}>
          <div className={styles.credItem}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Registered Non-Profit Organization
          </div>
          <div className={styles.credItem}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Operating in Lagos, Nigeria
          </div>
          <div className={styles.credItem}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Impact Reports Published Annually
          </div>
          <div className={styles.credItem}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            100% of Donations to Programme Costs
          </div>
        </div>
      </div>
    </section>
  );
}
