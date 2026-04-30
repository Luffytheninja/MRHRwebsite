"use client";
import PageHero from "../components/PageHero";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { Counter, ProgressRing } from "../components/ImpactComponents";

const programs = [
  {
    id: "mamabase",
    title: "MamaBase",
    description: "A data-driven intervention that identifies pregnant women, creates a community registry, and ensures they are linked to care and supported throughout pregnancy.",
    infographic: [
      { val: 7883, label: "Registered Women", suffix: "", context: "Phase 1 completion" },
      { val: 80, label: "Facility Delivery", suffix: "%", isRing: true, color: "var(--clr-primary)" },
      { val: 99.9, label: "Maternal Survival", suffix: "%", isRing: true, color: "#1a7a4a" },
    ],
    details: "Focuses on indigent women with limited access to health insurance, implemented through the M.I.L.E.S framework. Phase 2 commenced March 2025 across 12 LGAs.",
    img: "/images/scraped/mamabase-impact.png",
  },
  {
    id: "iyaloju",
    title: "Iyaloju Initiative",
    description: "A systems-focused intervention designed to improve maternal health outcomes for urban poor women by addressing both supply- and demand-side barriers to care.",
    infographic: [
      { val: 11055, label: "Women Reached", suffix: "+", context: "Through community outreach" },
      { val: 1.9, label: "Radio Audience", suffix: "M", context: "Health sensitization reach" },
      { val: 431, label: "SBAs Trained", suffix: "", context: "Birth attendants certified" },
    ],
    details: "Trains skilled birth attendants while simultaneously strengthening local data systems and driving demand for facility-based care.",
    img: "/images/scraped/iyalogu.png",
  },
  {
    id: "mamalink",
    title: "MamaLink",
    description: "An innovative, technology-driven solution providing fast, reliable, and effective emergency transport and referral support for pregnant women in underserved slums.",
    infographic: [
      { val: 2400, label: "Transport Trips", suffix: "+", context: "Safe referrals completed" },
      { val: 92, label: "Response Rate", suffix: "%", isRing: true, color: "var(--clr-accent-pink)" },
      { val: 100, label: "Slum Coverage", suffix: "%", isRing: true, color: "var(--clr-primary)" },
    ],
    details: "Leverages the MamaBase registry to connect pregnant women to transport providers and skilled personnel through a dedicated digital platform.",
    img: "/images/scraped/capreman-link-1.png",
  }
];

export default function ProgramsPage() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <PageHero
        titleNode={
          <>
            Interventions that <span className="serif-italic accent-pink">save lives.</span>
          </>
        }
        subtitle="Our rigorous, evidence-based programs guide national interventions and inform governmental policies across Nigeria."
        label="OUR PROGRAMS"
        backgroundImage="/images/hero/hero-2.png"
        cta={{ label: "View Our Research", href: "/research" }}
      />

      <section ref={sectionRef} className="page-section container">
        <div style={{ display: "flex", flexDirection: "column", gap: "9rem" }}>
          {programs.map((program, idx) => (
            <div key={program.id} id={program.id} className={`${styles.programRow} ${idx % 2 !== 0 ? styles.programRowReverse : ""}`}>
              {/* Text */}
              <div className={styles.programText}>
                <p className="section-label">PROGRAM 0{idx + 1}</p>
                <h2 style={{ marginBottom: "1.5rem" }}>{program.title}</h2>
                <p style={{ fontSize: "1.1rem", color: "var(--clr-text-muted)", marginBottom: "2.5rem", lineHeight: "1.75" }}>
                  {program.description}
                </p>

                {/* Infographic impact section */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
                  {program.infographic.map((stat, i) => (
                    <div key={i} style={{
                      padding: "1.5rem",
                      background: "var(--clr-off-white)",
                      borderRadius: "12px",
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid var(--clr-border)"
                    }}>
                      {stat.isRing && (
                        <div style={{ position: "absolute", top: "1rem", right: "1rem", opacity: 0.4 }}>
                          <ProgressRing pct={stat.val} active={active} color={stat.color} size={40} />
                        </div>
                      )}
                      <p style={{
                        fontSize: "1.75rem",
                        fontWeight: "800",
                        color: "var(--clr-primary)",
                        lineHeight: 1,
                        marginBottom: "0.5rem"
                      }}>
                        <Counter value={stat.val} suffix={stat.suffix} active={active} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                      </p>
                      <p style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--clr-text)" }}>{stat.label}</p>
                      <p style={{ fontSize: "0.6875rem", color: "var(--clr-text-light)", marginTop: "0.25rem" }}>{stat.context}</p>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "0.9375rem", color: "var(--clr-text-light)", lineHeight: "1.6", borderLeft: "2px solid var(--clr-border)", paddingLeft: "1.5rem" }}>
                  {program.details}
                </p>
              </div>

              {/* Visual card */}
              <div className={styles.programVisual}>
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, var(--clr-primary), var(--clr-accent-pink))" }} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo Break ── */}
      <section style={{ position: "relative", height: "45vh", minHeight: "360px", overflow: "hidden" }}>
        <Image
          src="/images/scraped/Jhpiego-BC-Training-2.webp"
          alt="Clinical training session"
          fill
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15, 15, 30, 0.45)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2 style={{ color: "#fff", textAlign: "center", maxWidth: "700px" }}>
            We train the people who catch the babies.
          </h2>
        </div>
      </section>

      {/* Additional training */}
      <section className="page-section--dark">
        <div className="container">
          <p className="section-label" style={{ color: "var(--clr-accent-border)", justifyContent: "center" }}>CLINICAL TRAINING</p>
          <h2 style={{ textAlign: "center", color: "#fff", margin: "0 auto 3.5rem", maxWidth: "600px" }}>
            Equipping front-line health workers
          </h2>
          <div className="grid-auto-3">
            {[
              { title: "Emergency Obstetric Care (EmOC)", desc: "Training doctors and nurses from PHCs on identifying emergency signs — including uterotonics, maternal sepsis, and PPH." },
              { title: "Respectful Maternity Care (RMC)", desc: "Equipping PHC staff to provide care that maintains dignity, privacy, and confidentiality — because quality care is a human right." },
              { title: "Cervical Cancer Screening", desc: "Screening hundreds of women using visual inspection with acetic acid (VIA) to determine risk and refer to care pathways." }
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2.5rem", borderRadius: "8px", background: "rgba(255,255,255,0.02)" }}>
                <h3 style={{ color: "var(--clr-accent-border)", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="page-section--tinted">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>
            Want to bring a program to your <span className="serif-italic accent-pink">community?</span>
          </h2>
          <p style={{ color: "var(--clr-text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
            We partner with local governments and health institutions to scale our impact.
          </p>
          <Link href="/join-us" className="btn btn-primary">PARTNER WITH US</Link>
        </div>
      </section>
    </main>
  );
}
