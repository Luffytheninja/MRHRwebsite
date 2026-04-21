"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const targets = [7883, 99.9, 80];
    const suffixes = ["+", "%", "%"];
    const durations = [2000, 2000, 2000];

    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = targets[i];
      const suffix = suffixes[i];
      const duration = durations[i];
      const start = performance.now();
      const isDecimal = target % 1 !== 0;

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString()) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 600 + i * 200);
    });
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero — Childbirth should be a celebration of life">
      <div className={styles.heroBg} aria-hidden="true">
        <img 
          src="https://mrhrcollective.org/wp-content/uploads/2025/02/AdobeStock_911734917.jpeg" 
          alt="" 
          className={styles.bgImg} 
        />
        <div className={styles.bgOverlay} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <p className={`section-label ${styles.label}`}>
            LET&apos;S KEEP MOTHERS ALIVE
          </p>

          <h1 className={styles.headline}>
            Giving Life Should<br />
            Never Mean <em>Losing</em> Yours.
          </h1>

          <p className={styles.subline}>
            A mother&apos;s heartbeat is the rhythm of a community. In Nigeria, that rhythm is too often silenced by preventable causes. We are a collective dedicated to ensuring every birth story ends with a celebration of life.
          </p>

          <div className={styles.ctas}>
            <a href="#donate" className={`btn btn-primary ${styles.primaryCta}`} id="hero-donate-cta">
              PROTECT A MOTHER
            </a>
            <a href="#impact" className={`btn btn-white ${styles.secondaryCta}`} id="hero-learn-cta">
              OUR JOURNEY
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollMouse}><span className={styles.scrollWheel} /></span>
        <p>Scroll to discover</p>
      </div>
    </section>
  );
}
