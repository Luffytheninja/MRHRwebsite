"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ImpactSnapshot.module.css";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  context: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: 59450,
    suffix: "",
    label: "Women Impacted",
    context: "Total mothers and girls supported through our programs across Nigeria in 2025.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Maternal Survival",
    context: "A verified survival rate for all women registered under our flagship MamaBase program.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    ),
  },
  {
    value: 11055,
    suffix: "+",
    label: "Iyaloju Outreach",
    context: "Underserved women reached with essential maternal health services and education.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    value: 431,
    suffix: "",
    label: "Workers Trained",
    context: "Health facility birth attendants trained in Emergency Obstetric Care (EmOC).",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>
    ),
  },
  {
    value: 1938749,
    suffix: "",
    label: "Radio Reach",
    context: "People sensitized on maternal health and Respectful Maternity Care (RMC) via media.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="14" rx="2"/><path d="M5 3v5"/><path d="M9 3v5"/><path d="M13 3v5"/><path d="M17 3v5"/><path d="M21 3v5"/></svg>
    ),
  },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState("0" + suffix);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const duration = 1800;
    const start = performance.now();
    const isDecimal = value % 1 !== 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const cur = value * eased;
      setDisplay((isDecimal ? cur.toFixed(1) : Math.round(cur).toLocaleString()) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value, suffix]);

  return <span className={styles.statNum}>{display}</span>;
}

export default function ImpactSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className={styles.section}>
      <div className={styles.topBand} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Impact Snapshot</p>
          <h2 className={styles.title}>
            Numbers that represent lives.
          </h2>
          <div className="section-divider" />
          <p className={styles.subtitle}>
            Behind every statistic is a mother who came home to her family.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.card} fade-in ${active ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.icon}>{s.icon}</span>
              <Counter value={s.value} suffix={s.suffix} active={active} />
              <p className={styles.label}>{s.label}</p>
              <p className={styles.context}>{s.context}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className={styles.trustBar}>
          <p className={styles.trustText}>
            <span className={styles.trustDot} aria-hidden="true" />
            Data verified across 2023–2025 programme cycles · Lagos State, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
