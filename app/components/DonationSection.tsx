"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./DonationSection.module.css";

const tiers = [
  {
    id: "tier-5000",
    amount: "₦5,000",
    usd: "≈ $3",
    title: "Antenatal Care",
    impact: "Funds one antenatal clinic visit — a potentially life-saving check-up for a mother who wouldn't otherwise afford it.",
    items: ["Blood pressure screening", "Iron supplements", "Birth planning session"],
    badge: null,
    color: "var(--clr-primary-light)",
  },
  {
    id: "tier-20000",
    amount: "₦20,000",
    usd: "≈ $13",
    title: "Safe Delivery",
    impact: "Covers the full facility delivery cost for one mother — including a skilled birth attendant and emergency readiness.",
    items: ["Skilled birth attendant", "Delivery kit & supplies", "2-night stay + postnatal check"],
    badge: "Most Chosen",
    color: "var(--clr-primary)",
  },
  {
    id: "tier-50000",
    amount: "₦50,000",
    usd: "≈ $33",
    title: "Emergency Care",
    impact: "Provides emergency obstetric intervention for a high-risk pregnancy — the difference between life and loss.",
    items: ["Emergency transport", "Specialist consultation", "Full birth & postnatal care"],
    badge: "High Impact",
    color: "var(--clr-primary-dark)",
  },
];

export default function DonationSection() {
  const [selected, setSelected] = useState("tier-20000");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="donate" ref={ref} className={styles.section}>
      <div className={styles.bgLayer} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            Extend Your Hand
          </p>
          <h2 className={`${styles.title} fade-in`}>Your Choice is Her Chance</h2>
          <div className="section-divider fade-in" />
          <p className={`${styles.subtitle} fade-in fade-in-delay-1`}>
            Maternal mortality isn&apos;t just a statistic — it&apos;s a daughter losing a guide, a family losing its heart. Your contribution below is a direct, verified intervention that writes a different ending.
          </p>
        </div>

        {/* Tier cards */}
        <div className={styles.tiersGrid} role="radiogroup" aria-label="Donation tiers">
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              className={`${styles.tierCard} ${selected === tier.id ? styles.selected : ""} fade-in`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              onClick={() => setSelected(tier.id)}
              role="radio"
              aria-checked={selected === tier.id}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(tier.id)}
              id={tier.id}
            >
              {tier.badge && (
                <div className={styles.badge}>{tier.badge}</div>
              )}
              <div className={styles.tierHeader}>
                <span className={styles.amount}>{tier.amount}</span>
                <span className={styles.usd}>{tier.usd}</span>
              </div>
              <h3 className={styles.tierTitle}>{tier.title}</h3>
              <p className={styles.tierImpact}>{tier.impact}</p>
              <ul className={styles.tierItems}>
                {tier.items.map((item) => (
                  <li key={item}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.selectIndicator}>
                {selected === tier.id ? "✓ Selected" : "Select"}
              </div>
            </div>
          ))}
        </div>

        {/* Microcopy */}
        <p className={`${styles.microcopy} fade-in`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', opacity: 0.8 }}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
          This protects a life this week. Not eventually — this week.
        </p>

        {/* Payment block */}
        <div className={`${styles.payBlock} fade-in`}>
          <div className={styles.payInfo}>
            <h3 className={styles.payTitle}>Ready to rewrite a story?</h3>
            <p className={styles.payDesc}>Your contribution is a direct investment in a mother&apos;s survival. We ensure 100% of public donations go straight to frontline maternal care.</p>
            
            <div className={styles.methodStack}>
              <div className={styles.methodItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <span>Secure Online Payment</span>
              </div>
              <div className={styles.methodItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Direct Bank Transfer</span>
              </div>
            </div>

            <div className={styles.ctaWrapper}>
              <p className={styles.urgencyLine}>A mother in Lagos is waiting for this care today.</p>
              <a
                href="https://donate.mrhrcollective.org"
                className="btn btn-primary"
                id="donation-main-cta"
              >
                CONFIRM YOUR CARE
              </a>
              <p className={styles.transparencyNote}>
                Certified Non-Profit Organization · Transparent Reporting
              </p>
            </div>
          </div>

          {/* Impact Visual */}
          <div className={styles.visualSide} aria-hidden="true">
            <div className={styles.imageCard}>
              <img 
                src="https://mrhrcollective.org/wp-content/uploads/2025/02/AdobeStock_911734917.jpeg" 
                alt="Impact" 
                className={styles.impactImg} 
              />
              <div className={styles.impactBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>VERIFIED IMPACT</span>
              </div>
            </div>
            <p className={styles.visualMeta}>100% of your gift reaches the frontline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
