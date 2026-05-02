"use client";
import { useEffect, useRef } from "react";
import styles from "./TheProblem.module.css";

export default function TheProblem() {
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
    <section id="about" ref={ref} className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: visual tension */}
          <div className={styles.left}>
            <div className={`${styles.tensionCard} fade-in`}>
              <div className={styles.tensionHeader}>
                <span className={styles.alertIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                </span>
                <span className={styles.tensionLabel}>The Silent Crisis</span>
              </div>
              <div className={styles.tensionStats}>
                <div className={styles.tensionRow}>
                  <div className={styles.tensionBar}>
                    <div className={styles.tensionFill} style={{ width: "28.5%", background: "var(--clr-primary)" }} />
                  </div>
                  <span>Nigeria accounts for 28.5% of global maternal deaths</span>
                </div>
                <div className={styles.tensionRow}>
                  <div className={styles.tensionBar}>
                    <div className={styles.tensionFill} style={{ width: "91.2%", background: "var(--clr-accent-pink)" }} />
                  </div>
                  <span>912 deaths per 100,000 live births (2023)</span>
                </div>
              </div>
              <div className={styles.tensionClock}>
                <div className={styles.clockPulse} aria-hidden="true" />
                <p>82,000 lives lost in a single year. Most are <strong>preventable</strong>.</p>
              </div>
            </div>
          </div>

          {/* Right: narrative */}
          <div className={styles.right}>
            <p className={`section-label fade-in`}>The Crisis</p>
            <h2 className={`${styles.title} fade-in fade-in-delay-1`}>
              Silence is the greatest barrier.
            </h2>
            <div className={`section-divider fade-in fade-in-delay-1`} />
            <p className={`${styles.body} fade-in fade-in-delay-2`}>
              Nigeria carries one of the heaviest maternal mortality burdens in the world. Despite representing just 2.6% of the global population, we account for nearly a third of all maternal deaths globally. These are not just numbers; they are the result of preventable gaps in care.
            </p>
            <p className={`${styles.body} fade-in fade-in-delay-2`}>
              MRH Collective exists to close these gaps—linking the most vulnerable women to skilled providers and strengthening the systems that serve them.
            </p>
            <div className={`${styles.pullQuote} fade-in fade-in-delay-3`}>
              <div className={styles.pullLine} aria-hidden="true" />
              <p>
                &ldquo;These are not statistics — they are daughters, wives, mothers, 
                and the quiet engines of entire communities.&rdquo;
              </p>
            </div>
            <a href="#how-it-works" className={`btn btn-outline fade-in fade-in-delay-4`} style={{ display: "inline-flex", marginTop: "1.5rem" }}>
              How We&rsquo;re Solving It
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
