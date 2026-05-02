"use client";
import { useEffect, useRef } from "react";
import styles from "./GetInvolved.module.css";

const paths = [
  {
    id: "volunteer",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 10l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Lend Your Voice",
    description: "Our health advocates work at the heart of the community. No medical degree required — just a commitment to survival.",
    cta: "Join the Network",
    href: "mailto:info@mrhrcollective.org?subject=Volunteer Application",
  },
  {
    id: "partner",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M6 24h8M34 24h8M24 6v8M24 34v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M18 18l-4-4M30 30l4 4M30 18l4-4M18 30l-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Forge a Legacy",
    description: "Align your organisation with measurable maternal health outcomes. Together, we can transform whole healthcare systems.",
    cta: "Partner With Us",
    href: "mailto:info@mrhrcollective.org?subject=Partnership Inquiry",
  },
  {
    id: "spread",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="36" cy="12" r="5" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="12" cy="24" r="5" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="36" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M17 21.5l14-7M17 26.5l14 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Join the Narrative",
    description: "Awareness is the first step toward action. Share our mission and help us reach those who can help us save a life.",
    cta: "Share the Mission",
    href: "/about",
  },
];

export default function GetInvolved() {
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
    <section id="get-involved" ref={ref} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label fade-in">The Power of the Collective</p>
          <h2 className={`${styles.title} fade-in fade-in-delay-1`}>
            Many paths, one mission.
          </h2>
          <div className="section-divider fade-in fade-in-delay-1" />
          <p className={`${styles.subtitle} fade-in fade-in-delay-2`}>
            While direct support is vital, lasting change requires a community of voices and hands. Discover how you can lend yours.
          </p>
        </div>

        <div className={styles.grid}>
          {paths.map((p, i) => (
            <div
              key={p.id}
              className={`${styles.card} fade-in`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              id={`involve-${p.id}`}
            >
              <div className={styles.iconWrap}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <a href={p.href} className={`btn btn-outline ${styles.cardCta}`}>
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
