import PageHero from "../components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "About Us | MRH Collective",
  description: "Founded in 2007, MRH Collective leads transformative research, programs, and advocacy that strengthen national health systems for quality maternal healthcare.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero 
        title="Reducing Maternal Mortality Through Evidence & Action."
        subtitle="We lead transformative research, programs, and advocacy that strengthen national health systems so that women and girls have access to quality maternal and reproductive healthcare."
        label="ABOUT US — FOUNDED 2007"
        backgroundImage="/images/hero/hero-1.png"
      />

      {/* Why We Exist */}
      <section className="page-section container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="section-divider" />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "1.5rem", fontFamily: "var(--font-serif)", fontWeight: "400" }}>
            Why We Exist
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.85", color: "var(--clr-text-muted)", marginBottom: "3rem" }}>
            We were founded in 2007 by a Professor of Obstetrics &amp; Gynaecology who has witnessed the needless deaths of women during childbirth. Our mission is to ensure that giving life should never mean losing yours.
          </p>

          <div className="grid-auto-2" style={{ marginTop: "2.5rem" }}>
            <div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "0.875rem", color: "var(--clr-primary)" }}>Our Mission</h3>
              <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.7" }}>
                MRH Research Collective leads transformative research, programs, and advocacy that strengthen national health systems so that women and girls have access to quality maternal and reproductive healthcare.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "0.875rem", color: "var(--clr-primary)" }}>Our Vision</h3>
              <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.7" }}>
                A world where every mother has access to the care, support, and resources she needs to survive childbirth and live a healthy, fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="page-section--soft">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>OUR CORE VALUES</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontFamily: "var(--font-serif)", fontWeight: "400", marginBottom: "3.5rem" }}>
            The Principles That Guide Us
          </h2>
          
          <div className="grid-auto-4">
            {[
              { title: "Excellence", text: "We strive to ensure our programs and research are of the highest quality and have a real impact on the lives of the communities we serve." },
              { title: "Integrity", text: "We focus on research, programs, and advocacy that affect women and girls in our communities, and do not allow external pressures to divert us from our mission." },
              { title: "Collaboration & Justice", text: "We aim to work in true partnership with the women, girls, governments, and partners within the systems where our work is based." },
              { title: "Respect", text: "At MRH Collective, we treat all our partners, allies, and staff with respect regardless of differences in opinions." }
            ].map((value, idx) => (
              <div key={idx} style={{ padding: "2.5rem", backgroundColor: "white", borderRadius: "8px", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.875rem", color: "var(--clr-primary)" }}>{value.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--clr-text-muted)", lineHeight: "1.65" }}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="page-section container">
        <div className="grid-2col">
          <div>
            <p className="section-label">OUR STRATEGY</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontFamily: "var(--font-serif)", fontWeight: "400", marginBottom: "2rem" }}>
              A Unified Approach to Change
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>1. Generate Evidence</h3>
                <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.7" }}>We start with research—deep, participatory, and actionable. By mapping systems and listening to women and frontline workers, we uncover what works.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>2. Deliver Solutions</h3>
                <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.7" }}>We use evidence to design community-based programs that target the most vulnerable populations and strengthen local health systems.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>3. Drive Systemic Change</h3>
                <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.7" }}>We amplify what we learn on the ground to advocate for national-level transformation, hand-in-hand with government agencies.</p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", minHeight: "500px", boxShadow: "var(--shadow-xl)" }}>
            <Image 
              src="/images/scraped/abt-7_strategy-1.png" 
              alt="MRH Collective Strategy" 
              fill 
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14, 18, 59, 0.8), transparent)" }} />
            <div style={{ position: "absolute", bottom: "3rem", left: "3rem", right: "3rem" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "#fff", lineHeight: "1.3", marginBottom: "1.5rem" }}>
                &ldquo;Every mother deserves a chance to thrive.&rdquo;
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {[
                  { num: "22,883", lbl: "Women impacted in 2024" },
                  { num: "2007", lbl: "Year founded" }
                ].map((s, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "1rem" }}>
                    <span style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--clr-accent-border)", display: "block" }}>{s.num}</span>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
