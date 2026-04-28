"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Insights.module.css";

import { newsItems } from "../news/newsData";

const displayArticles = newsItems.slice(0, 3);

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
          {displayArticles.map((a, i) => (
            <article
              key={a.slug}
              className={`${styles.articleCard} fade-in`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              id={`insight-${a.slug}`}
            >
              <div className={styles.articleTop}>
                <span className={styles.articleTag}>{a.category}</span>
                <span className={styles.readTime}>{a.date}</span>
              </div>
              <h3 className={styles.articleTitle}>{a.title}</h3>
              <p className={styles.articleExcerpt}>{a.excerpt}</p>
              <Link href={`/news/${a.slug}`} className={styles.readLink}>
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/news" className="btn btn-outline-dark fade-in fade-in-delay-3">
            VIEW ALL NEWS
          </Link>
        </div>
      </div>
    </section>
  );
}
