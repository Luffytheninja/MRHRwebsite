import PageHero from "../components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Research | MRH Collective",
  description: "Rigorous research driving maternal health interventions across Nigeria.",
};

const researchProjects = [
  {
    title: "Lagos State PHC Digitisation Project",
    duration: "July 2023 – June 2026",
    partner: "Lagos State Government",
    desc: "An evaluation assessing the feasibility, effectiveness, and cost of digital health tools implemented within Primary Health Centres."
  },
  {
    title: "Birth Companion (BC) Intervention",
    duration: "15 Months",
    partner: "JHPIEGO",
    desc: "A cluster-randomised controlled trial evaluating the effect of birth companionship on maternal health outcomes in Nasarawa and Kano."
  },
  {
    title: "Group Antenatal Care (G-ANC) Study",
    duration: "5 Months",
    partner: "JHPIEGO",
    desc: "A mixed-methods study describing how G-ANC influences care-seeking for childbirth and facility-based delivery decisions."
  },
  {
    title: "CAPREMAN – Anaemia Prevention",
    duration: "Ongoing",
    partner: "Lagos, Kano & Kaduna States",
    desc: "Implementation research to co-design and test guidelines for screening, prevention, and treatment of anaemia during pregnancy."
  }
];

const publications = [
  { citation: "Actions and Adaptations for MNCH Service Provision During COVID-19 in Lagos (Annals of Global Health, 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35291514/" },
  { citation: "Reaching health facilities in situations of emergency: qualitative study in Lagos (Reproductive Health, 2020)", url: "https://reproductive-health-journal.biomedcentral.com/articles/10.1186/s12978-020-00996-7" },
  { citation: "Assessment of geographical access and travel time to EmOC in Lagos (Health Policy Plan, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34424314/" },
  { citation: "Genetic polymorphisms of VEGF associated with endometriosis in Nigerian women (Human Genomics, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34717756/" }
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        titleNode={
          <>
            Evidence-led <span className="serif-italic accent-pink">transformation.</span>
          </>
        }
        subtitle="We generate deep, actionable insights into the systemic and cultural factors contributing to maternal mortality — closing the gap between knowledge and action."
        label="RESEARCH"
        backgroundImage="/images/hero/hero-4.png"
      />

      {/* Intro section */}
      <section className="page-section container">
        <div className="grid-2col">
          <div>
            <div className="section-divider" />
            <h2>
              Mapping the system to change it.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--clr-text-muted)", lineHeight: "1.85", marginBottom: "2.5rem" }}>
              Despite massive investments in maternal health, critical data remains unavailable or underused. By mapping systems and listening to women and frontline workers, our research uncovers what truly works — ensuring interventions are guided by reality, not assumptions.
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
                <div key={i} style={{ padding: "1rem 1.25rem", background: "var(--clr-off-white)", borderRadius: "4px", borderLeft: "3px solid var(--clr-primary)" }}>
                  <p style={{ fontWeight: "700", fontSize: "0.875rem", color: "var(--clr-text)" }}>{area}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", minHeight: "450px", borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <Image
              src="/images/scraped/IMAGINE-3-6-1024x683.webp"
              alt="Researcher conducting community outreach"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="page-section--soft">
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center" }}>ACTIVE PROJECTS</p>
          <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            Current Initiatives
          </h2>
          <div className="grid-auto-2">
            {researchProjects.map((project, i) => (
              <div key={i} style={{ padding: "3rem", backgroundColor: "white", borderRadius: "12px", boxShadow: "var(--shadow-sm)", borderTop: "3px solid var(--clr-primary)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "800", letterSpacing: "0.08em", color: "var(--clr-accent-pink)", textTransform: "uppercase" }}>{project.duration}</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.05em", color: "var(--clr-text-light)" }}>PARTNER: {project.partner}</span>
                </div>
                <h3>{project.title}</h3>
                <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9375rem", lineHeight: "1.75" }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="page-section--dark">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p className="section-label" style={{ color: "var(--clr-accent-border)" }}>ACADEMIC CONTRIBUTIONS</p>
            <div className="section-divider" style={{ background: "var(--clr-accent-border)" }} />
            <h2 style={{ color: "#fff", marginBottom: "2.5rem" }}>
              Peer-Reviewed Publications
            </h2>
            <div style={{ display: "grid", gap: "2.5rem" }}>
              {publications.map((pub, i) => (
                <div key={i} style={{ paddingBottom: "2.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: "1rem", color: "rgba(255,255,255,0.92)", lineHeight: "1.6" }}>
                    &ldquo;{pub.citation}&rdquo;
                  </p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-accent-border)", fontSize: "0.8125rem", textDecoration: "none", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    VIEW ABSTRACT →
                  </a>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "4rem" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Looking for a specific dataset or full publication?</p>
              <a href="mailto:info@mrhrcollective.org" className="btn btn-outline-white">REQUEST FULL PAPERS</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
