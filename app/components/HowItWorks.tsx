"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./HowItWorks.module.css";

const initiatives = [
  {
    num: "01",
    img: "https://mrhrcollective.org/wp-content/uploads/2025/01/mamabase-impact.png",
    title: "MamaBase",
    description:
      "A data-driven lifeline. We identify and map pregnant women in underserved communities, ensuring every mother is registered, monitored, and supported until her baby is safe at home.",
    detail: "7,883+ Protected · 99.9% Survival · Direct Support",
  },
  {
    num: "02",
    img: "https://mrhrcollective.org/wp-content/uploads/2025/02/iyaloju444.png",
    title: "Iyaloju Initiative",
    description:
      "Strengthening the health ecosystem. We train frontline workers in emergency care and mobilize communities to break the silence around maternal risks.",
    detail: "2,040+ Workers Equipped · 1.9M Sensitized · Advocacy",
  },
  {
    num: "03",
    img: "https://mrhrcollective.org/wp-content/uploads/2025/10/capreman-link-1.png",
    title: "CAPREMAN",
    description:
      "Research that saves lives. We conduct clinical implementation research to co-design guidelines for preventing anaemia — a silent but treatable threat in pregnancy.",
    detail: "Clinical Research · Guideline Design · Specialist Care",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label fade-in">Built for Survival</p>
          <h2 className={`${styles.title} fade-in fade-in-delay-1`}>
            A System That<br />Reaches First.
          </h2>
          <div className="section-divider fade-in fade-in-delay-1" />
          <p className={`${styles.subtitle} fade-in fade-in-delay-2`}>
            We don&apos;t wait for the tragedy to occur. Our evidence-based pathways ensure that every birth story has a beginning, a middle, and a joyous conclusion.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {initiatives.map((item, i) => (
            <div
              key={item.num}
              className={`${styles.step} fade-in`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className={styles.imageWrap}>
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={400}
                  height={200}
                  quality={85}
                  className={styles.progImg} 
                />
                <div className={styles.stepNum}>{item.num}</div>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.description}</p>
              <div className={styles.stepDetail}>
                {item.detail.split(" · ").map((d) => (
                  <span key={d} className={styles.detailChip}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.bottomCta} fade-in`}>
          <p>Want to understand our full intervention model?</p>
          <a href="#how-it-works" className="btn btn-outline">Read Our Strategy</a>
        </div>
      </div>
    </section>
  );
}
