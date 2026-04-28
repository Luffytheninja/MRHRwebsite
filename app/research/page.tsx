import PageHero from "../components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Research | MRH Collective",
  description: "Our rigorous research impacts and guides interventions and informs governmental policies across Nigeria.",
};

const researchProjects = [
  {
    title: "Lagos State PHC Digitisation Project",
    duration: "July 2023 – June 2026",
    partner: "Lagos State Government",
    desc: "An evaluation research project assessing the feasibility, effectiveness, and cost-effectiveness of digital tools implemented within Primary Health Centres."
  },
  {
    title: "Birth Companion (BC) Intervention",
    duration: "15 Months",
    partner: "JHPIEGO",
    desc: "A cluster-randomised controlled trial evaluating the effect of birth companionship on maternal health outcomes in Nasarawa and Kano States."
  },
  {
    title: "Group Antenatal Care (G-ANC) Study",
    duration: "5 Months",
    partner: "JHPIEGO",
    desc: "A mixed-methods study describing how G-ANC influences care-seeking for childbirth and influences facility-based delivery decisions."
  },
  {
    title: "CAPREMAN – Anaemia Prevention",
    duration: "Ongoing",
    partner: "Lagos, Kano & Kaduna States",
    desc: "Implementation research to co-design and test guidelines for screening, prevention, and treatment of anaemia during pregnancy."
  }
];

const publications = [
  { citation: "Actions and Adaptations for MNCH Service Provision During COVID-19 in Lagos (Ann Glob Health, 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35291514/" },
  { citation: "Reaching health facilities in situations of emergency: qualitative study in Lagos (Reprod Health, 2020)", url: "https://reproductive-health-journal.biomedcentral.com/articles/10.1186/s12978-020-00996-7" },
  { citation: "Assessment of geographical access and travel time to EmOC in Lagos (Health Policy Plan, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34424314/" },
  { citation: "Genetic polymorphisms of VEGF associated with endometriosis in Nigerian women (Hum Genomics, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34717756/" }
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero 
        title="Evidence-Led Transformation."
        subtitle="Our rigorous and well-researched programs impact and guide interventions as well as inform governmental policies across Africa."
        label="RESEARCH"
        backgroundImage="/images/hero/hero-4.png"
      />

      {/* Intro */}
      <section className="page-section container">
        <div className="grid-2col">
          <div>
            <div className="section-divider" />
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontFamily: "var(--font-serif)", fontWeight: "400", marginBottom: "1.5rem" }}>
              Closing the Knowledge-to-Action Gap
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--clr-text-muted)", lineHeight: "1.85", marginBottom: "2rem" }}>
              Despite efforts to improve maternal health, critical data is often unavailable or underused. Our research pillar generates deep, actionable insights into the systemic and cultural factors contributing to maternal mortality.
            </p>
            <div className="grid-auto-2">
              {[
                "Health System Mapping",
                "User-Centered Research",
                "Data Audit & Quality",
                "Implementation Science",
                "Clinical Trials",
                "Feasibility Studies"
              ].map((area, i) => (
                <div key={i} style={{ padding: "1.25rem 1.5rem", border: "1px solid var(--clr-border)", borderRadius: "4px", borderLeft: "3px solid var(--clr-primary)" }}>
                  <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--clr-text)" }}>{area}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", minHeight: "450px", borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <Image 
              src="/images/scraped/IMAGINE-3-6-1024x683.webp" 
              alt="Researcher in community" 
              fill 
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="page-section--soft">
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center", textAlign: "center" }}>ACTIVE PROJECTS</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-serif)", fontWeight: "400", margin: "1rem 0 3rem" }}>
            Current Research Initiatives
          </h2>
          <div className="grid-auto-2">
            {researchProjects.map((project, i) => (
              <div key={i} style={{ padding: "2.5rem", backgroundColor: "white", borderRadius: "12px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--clr-accent-pink)" }}>{project.duration}</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--clr-text-light)" }}>{project.partner}</span>
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.875rem", fontFamily: "var(--font-serif)", fontWeight: "400" }}>{project.title}</h3>
                <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9375rem", lineHeight: "1.7" }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="page-section--dark">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p className="section-label" style={{ color: "var(--clr-accent-border)", justifyContent: "center" }}>ACADEMIC CONTRIBUTIONS</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-serif)", fontWeight: "400", margin: "1rem 0 3rem", color: "#fff" }}>
              Peer-Reviewed Publications
            </h2>
            <div style={{ display: "grid", gap: "2rem" }}>
              {publications.map((pub, i) => (
                <div key={i} style={{ paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ fontSize: "1.05rem", fontFamily: "var(--font-serif)", marginBottom: "0.875rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.6" }}>{pub.citation}</p>
                  <a 
                    href="mailto:info@mrhrcollective.org" 
                    style={{ color: "var(--clr-accent-border)", fontSize: "0.8125rem", textDecoration: "none", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    REQUEST FULL PAPER →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
