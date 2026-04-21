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
                    <div className={styles.tensionFill} style={{ width: "82%", background: "var(--clr-primary)" }} />
                  </div>
                  <span>1 in 22 Nigerian mothers faces this risk</span>
                </div>
                <div className={styles.tensionRow}>
                  <div className={styles.tensionBar}>
                    <div className={styles.tensionFill} style={{ width: "65%", background: "var(--clr-gold)" }} />
                  </div>
                  <span>512 lives lost per 100,000 births</span>
                </div>
              </div>
              <div className={styles.tensionClock}>
                <div className={styles.clockPulse} aria-hidden="true" />
                <p>A tragedy occurs every <strong>10 minutes</strong>. Most are preventable.</p>
              </div>
            </div>
          </div>

          {/* Right: narrative */}
          <div className={styles.right}>
            <p className={`section-label fade-in`}>The Reality</p>
            <h2 className={`${styles.title} fade-in fade-in-delay-1`}>
              Silence is the<br />Greatest Barrier.
            </h2>
            <div className={`section-divider fade-in fade-in-delay-1`} />
            <p className={`${styles.body} fade-in fade-in-delay-2`}>
              Haemorrhage, infection, eclampsia — these are medical terms for stories that shouldn&apos;t have ended. In underserved communities, the distance to a clinic isn&apos;t just measured in miles; it&apos;s measured in the cost of a ride and the fear of the unknown.
            </p>
            <p className={`${styles.body} fade-in fade-in-delay-2`}>
              We believe and prove every day that these deaths are not inevitable. They are a call to action.
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
