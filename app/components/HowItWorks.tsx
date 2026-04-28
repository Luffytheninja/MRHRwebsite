"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./HowItWorks.module.css";

const initiatives = [
  {
    num: "01",
    img: "/images/hero/hero-1.png",
    title: "MamaBase",
    description:
      "A data-driven community e-registry that identifies, registers, and follows up pregnant women in Lagos, focusing on indigent women with no health insurance.",
    detail: "7,883 Registered · 99.9% Survival · 80% Facility Birth",
  },
  {
    num: "02",
    img: "/images/hero/hero-2.png",
    title: "Iyaloju Initiative",
    description:
      "A systems-directed intervention training birth attendants in Emergency Obstetric Care (EmOC) and strengthening facility data systems.",
    detail: "11,000+ Women · 431 Workers Trained · 42 Communities",
  },
  {
    num: "03",
    img: "/images/hero/hero-3.png",
    title: "MamaLink",
    description:
      "An innovative digital platform providing emergency transport and referral support, connecting pregnant women to skilled personnel and transport providers.",
    detail: "Emergency Transport · Referral Support · Digital Platform",
  },
  {
    num: "04",
    img: "/images/hero/hero-4.png",
    title: "CAPREMAN",
    description:
      "Implementation research to co-design and test frameworks for the screening, prevention, and treatment of anemia during pregnancy and postpartum.",
    detail: "Research · Anemia Prevention · System Strengthening",
  },
  {
    num: "05",
    img: "/images/hero/hero-5.png",
    title: "Cb-ANC",
    description:
      "Community-based Ante-Natal Care providing life-saving services in low-income areas, improving outcomes for indigent women.",
    detail: "Community-based · Zero Mortality · Referral Support",
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
          <p className="section-label fade-in">Our Pillars: Research, Programs, Advocacy</p>
          <h2 className={`${styles.title} fade-in fade-in-delay-1`}>
            Transforming Maternal<br />Health Systems.
          </h2>
          <div className="section-divider fade-in fade-in-delay-1" />
          <p className={`${styles.subtitle} fade-in fade-in-delay-2`}>
            We operate at the intersection of evidence, community action, and policy influence to ensure every African woman has access to quality care.
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
          <a href="https://mrhrcollective.org/what-we-do/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Read Our Strategy</a>
        </div>
      </div>
    </section>
  );
}
