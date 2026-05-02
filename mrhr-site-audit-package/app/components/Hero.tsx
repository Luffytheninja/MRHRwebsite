"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const slideImages = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);


  return (
    <section className={styles.hero} aria-label="Hero — Childbirth should be a celebration of life">
      <div className={styles.heroBg} aria-hidden="true">
        {slideImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            quality={85}
            className={`${styles.bgImg} ${i === currentSlide ? styles.visibleSlide : ""}`}
            style={{ objectFit: 'cover' }}
          />
        ))}
        <div className={styles.bgOverlay} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <p className={`section-label ${styles.label}`}>
            59,450 WOMEN IMPACTED (2025)
          </p>

          <h1 className={styles.headline}>
            Giving life should never mean <span className="serif-italic accent-pink">losing</span> yours.
          </h1>

          <p className={styles.subline}>
            MRH Collective is Nigeria&apos;s leading research and advocacy organization dedicated to reducing maternal mortality through evidence, community action, and policy influence.
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
