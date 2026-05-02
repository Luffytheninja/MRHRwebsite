"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./HumanStory.module.css";

export default function HumanStory() {
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
    <section ref={ref} className={styles.section}>
      <div className={styles.bgLayer} aria-hidden="true" />
      <div className="container">
        {/* Section header */}
        <div className={`${styles.sectionHeader} fade-in`}>
          <p className="section-label">A Life Protected</p>
          <h2 className={styles.title}>Every mother's heartbeat is her family's story.</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.storyGrid}>
          {/* Visual side */}
          <div className={`${styles.visual} fade-in`} aria-hidden="true">
            <div className={styles.portraitCard}>
              <div className={styles.portraitBg}>
                <Image 
                  src="/images/legacy-preserved.png" 
                  alt="A mother supported by MRHR Collective — Illustrative" 
                  width={600}
                  height={800}
                  quality={85}
                  className={styles.portraitImg} 
                />
              </div>
              <div className={styles.portraitOverlay}>
                <p className={styles.portraitName}>A Legacy Preserved</p>
                <p className={styles.portraitMeta}>MamaBase Beneficiary</p>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className={styles.narrative}>
            <div className={`${styles.storyBlock} fade-in fade-in-delay-1`}>
              <span className={styles.storyTag}>The Silence</span>
              <p>
                Amara was seven months pregnant with her third child. Like many in Lagos Island, the 45-minute journey to a public clinic was a luxury she couldn&apos;t afford, and a risk she didn&apos;t understand.
              </p>
            </div>

            <div className={`${styles.storyBlock} fade-in fade-in-delay-2`}>
              <span className={styles.storyTag}>The Discovery</span>
              <p>
                During a routine MamaBase outreach, we found her. Her blood pressure was dangerously high — a silent symptom of pre-eclampsia. She felt fine, but her story was on the verge of a tragedy she didn&apos;t see coming.
              </p>
            </div>

            <div className={`${styles.storyBlock} fade-in fade-in-delay-3`}>
              <span className={styles.storyTag}>The Intervention</span>
              <p>
                Within 48 hours, Amara was enrolled in our emergency care pathway. Medication, supervised visits, and a guaranteed facility berth were provided. We removed the distance between her and her survival.
              </p>
            </div>

            <div className={`${styles.storyBlock} ${styles.outcome} fade-in fade-in-delay-4`}>
              <span className={styles.storyTag}>The Return</span>
              <p>
                On a Tuesday morning, Amara delivered a healthy bundle of joy. She walked home with her family, her heart beating for those who need her most. It wasn&apos;t just a safe delivery; it was a legacy preserved.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className={`${styles.quote} fade-in fade-in-delay-4`}>
              <p>
                &ldquo;They came to me when I didn&apos;t know I needed to go to them. They kept my children from losing their mother.&rdquo;
              </p>
              <footer>— Amara O., Lagos Island, 2024</footer>
            </blockquote>
          </div>
        </div>

        {/* Transition CTA */}
        <div className={`${styles.transitionCta} fade-in`}>
          <p>Amara&rsquo;s story is one of 7,883. Your donation writes the next one.</p>
          <a href="#donate" className="btn btn-primary" id="story-donate-cta">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Give ₦40,000. Keep a mother alive.
          </a>
        </div>
      </div>
    </section>
  );
}
