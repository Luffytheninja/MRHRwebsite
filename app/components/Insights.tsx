"use client";
import { useEffect, useRef } from "react";
import styles from "./Insights.module.css";

const articles = [
  {
    id: "evidence-based",
    tag: "Approach",
    title: "Resolving the Crisis — An Evidence-Based Approach",
    excerpt:
      "How MRHR applies clinical interventions, community outreach, and data-driven programme design to close the maternal mortality gap in Lagos.",
    readTime: "5 min read",
  },
  {
    id: "anc-attendance",
    tag: "Research",
    title: "Why 80% ANC Attendance Changes Everything",
    excerpt:
      "Antenatal care attendance is the single highest-leverage predictor of maternal survival. Here's how we moved the needle.",
    readTime: "4 min read",
  },
  {
    id: "community-health",
    tag: "Programme",
    title: "The CHW Model: Care that Comes to You",
    excerpt:
      "Community health workers are the invisible infrastructure of maternal care. Our network and what it's achieved.",
    readTime: "6 min read",
  },
];

export default function Insights() {
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
    <section id="insights" ref={ref} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label fade-in">Insights</p>
          <h2 className={`${styles.title} fade-in fade-in-delay-1`}>Knowledge that Drives Action</h2>
          <div className="section-divider fade-in fade-in-delay-1" />
          <p className={`${styles.subtitle} fade-in fade-in-delay-2`}>
            Our thinking on maternal health — evidence, programme learnings, and the arguments that matter.
          </p>
        </div>

        <div className={styles.articlesGrid}>
          {articles.map((a, i) => (
            <article
              key={a.id}
              className={`${styles.articleCard} fade-in`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              id={`insight-${a.id}`}
            >
              <div className={styles.articleTop}>
                <span className={styles.articleTag}>{a.tag}</span>
                <span className={styles.readTime}>{a.readTime}</span>
              </div>
              <h3 className={styles.articleTitle}>{a.title}</h3>
              <p className={styles.articleExcerpt}>{a.excerpt}</p>
              <a href="https://mrhrcollective.org/news/" className={styles.readLink}>
                Browse Insights
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
