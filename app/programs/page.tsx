import PageHero from "../components/PageHero";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Programs | MRH Collective",
  description: "Our rigorous and well-researched programs impact and guide interventions as well as inform governmental policies across Nigeria.",
};

const programs = [
  {
    id: "mamabase",
    title: "MamaBase",
    description: "A data-driven intervention that identifies pregnant women within Lagos State, creates a community registry, and ensures they are linked to care and supported throughout pregnancy.",
    impact: [
      "7,883 pregnant women registered in Phase 1",
      "80% of enrollees delivered at a health facility",
      "99.9% of mothers survived childbirth",
      "60% completed all 4+ recommended ANC visits"
    ],
    details: "Focuses on indigent women with limited access to family-based health insurance, implemented through the M.I.L.E.S framework. Phase 2 commenced March 2025 across 12 LGAs in Lagos."
  },
  {
    id: "iyaloju",
    title: "Iyaloju Initiative",
    description: "A systems-focused intervention designed to improve maternal health outcomes for urban poor women by addressing both supply- and demand-side barriers to care.",
    impact: [
      "11,055+ women reached through outreaches",
      "1,938,749 people reached via radio jingles",
      "431 health workers trained in EmOC",
      "2,040 PHC staff trained in Respectful Maternity Care"
    ],
    details: "Trains skilled birth attendants in Emergency Obstetric Care and Respectful Maternal Care, while strengthening data systems and driving demand for facility-based care."
  },
  {
    id: "mamalink",
    title: "MamaLink",
    description: "An innovative, technology-driven solution providing fast, reliable, and effective emergency transport and referral support for pregnant women in underserved slum areas.",
    impact: [
      "Digital connection to skilled health personnel",
      "Coordinated tricycle & ambulance emergency response",
      "Integrated triage officer support",
      "Serving Ajegunle & Ijegun/Ibeshe slums, Lagos"
    ],
    details: "Leverages the MamaBase registry to connect pregnant women to transport providers and skilled personnel through a dedicated digital platform and triage coordination system."
  }
];

export default function ProgramsPage() {
  return (
    <main>
      <PageHero 
        title="Evidence-Based Interventions That Save Lives."
        subtitle="Our rigorous and well-researched programs impact and guide interventions as well as inform governmental policies across Nigeria."
        label="OUR PROGRAMS"
        backgroundImage="/images/hero/hero-2.png"
      />

      <section className="page-section container">
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {programs.map((program, idx) => (
            <div key={program.id} id={program.id} className={`${styles.programRow} ${idx % 2 !== 0 ? styles.programRowReverse : ""}`}>
              {/* Text */}
              <div className={styles.programText}>
                <p className="section-label">PROGRAM 0{idx + 1}</p>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-serif)", fontWeight: "400", margin: "0.75rem 0 1.25rem" }}>
                  {program.title}
                </h2>
                <p style={{ fontSize: "1.1rem", color: "var(--clr-text-muted)", marginBottom: "2rem", lineHeight: "1.75" }}>
                  {program.description}
                </p>
                <div style={{ backgroundColor: "var(--clr-off-white)", padding: "2rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem", color: "var(--clr-primary)", letterSpacing: "0.12em", textTransform: "uppercase" }}>KEY IMPACT</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.625rem" }}>
                    {program.impact.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{ width: "6px", height: "6px", minWidth: "6px", backgroundColor: "var(--clr-accent-pink)", borderRadius: "50%" }} aria-hidden="true" />
                        <span style={{ fontSize: "0.9375rem", color: "var(--clr-text)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p style={{ fontSize: "0.9375rem", color: "var(--clr-text-light)", lineHeight: "1.6" }}>
                  {program.details}
                </p>
              </div>

              {/* Visual card */}
              <div className={styles.programVisual}>
                <Image 
                  src={
                    idx === 0 
                    ? "/images/scraped/mamabase-impact.png" 
                    : idx === 1
                    ? "/images/scraped/iyalogu.png"
                    : "/images/scraped/capreman-link-1.png"
                  }
                  alt={program.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, var(--clr-primary), var(--clr-accent-pink))" }} aria-hidden="true" />
                <div style={{ 
                  position: "absolute", 
                  bottom: "1.5rem", 
                  left: "1.5rem", 
                  right: "1.5rem", 
                  backgroundColor: "rgba(255, 255, 255, 0.95)", 
                  backdropFilter: "blur(4px)",
                  padding: "1.5rem", 
                  borderRadius: "8px", 
                  boxShadow: "var(--shadow-lg)", 
                  zIndex: 10 
                }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: "700", color: "var(--clr-primary)", marginBottom: "0.4rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>FEATURED METRIC</p>
                  <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-serif)", color: "var(--clr-text)", lineHeight: "1.25" }}>{program.impact[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional training */}
      <section className="page-section--dark">
        <div className="container">
          <p className="section-label center" style={{ color: "var(--clr-accent-border)" }}>CLINICAL TRAINING</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-serif)", fontWeight: "400", color: "#fff", margin: "1rem 0 3rem" }}>
            Specialized Training Programmes
          </h2>
          <div className="grid-auto-3">
            {[
              { title: "Emergency Obstetric Care", desc: "Training doctors and nurses from PHCs across Lagos State on identifying emergency signs during pregnancy and administering appropriate care — including uterotonics, maternal sepsis, and PPH." },
              { title: "Respectful Maternity Care", desc: "Equipping PHC staff to provide care that maintains the dignity, privacy, and confidentiality of every woman they serve — because quality care is a human right." },
              { title: "Cervical Cancer Screening", desc: "Screening hundreds of women in Lagos using visual inspection with acetic acid (VIA) to determine their risk level and refer them to appropriate care pathways." }
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2.5rem", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "var(--clr-accent-border)" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
