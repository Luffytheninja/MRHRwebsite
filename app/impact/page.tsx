import PageHero from "../components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Our Impact | MRH Collective",
  description: "Explore the numbers. More women die from pregnancy-related illnesses in Nigeria than in any other country. We are changing that.",
};

export default function ImpactPage() {
  return (
    <main>
      <PageHero 
        title="Measuring Progress. Saving Lives."
        subtitle="Explore the numbers behind our mission. Every life saved is a legacy preserved and a community strengthened."
        label="OUR IMPACT"
        backgroundImage="/images/hero/hero-3.png"
      />

      {/* Stats */}
      <section className="page-section container">
        <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "700px", margin: "0 auto 4rem" }}>
          <p className="section-label">THE SILENT CRISIS</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontFamily: "var(--font-serif)", fontWeight: "400", margin: "1rem 0 1.5rem" }}>
            Nigeria accounts for nearly 28.5% of global maternal deaths.
          </h2>
          <p style={{ fontSize: "1.15rem", color: "var(--clr-text-muted)", lineHeight: "1.7" }}>
            Despite having only 2.6% of the world&apos;s population, the maternal mortality ratio remains significantly above global targets. Our work is focused on closing this gap.
          </p>
        </div>

        <div className="grid-auto-4">
          {[
            { value: "22,883", label: "Women Impacted in 2024", desc: "Through our direct intervention and advocacy programs." },
            { value: "80%", label: "Facility Access", desc: "With our programs, at least 80% of women will access maternal services." },
            { value: "99.9%", label: "Survival Rate", desc: "Of mothers enrolled in the MamaBase program survive childbirth." },
            { value: "12,600", label: "Digital Tools Deployed", desc: "Across PHCs in Lagos State to strengthen health data systems." }
          ].map((stat, i) => (
            <div key={i} style={{ padding: "2.5rem", border: "1px solid var(--clr-border)", borderRadius: "12px", textAlign: "center" }}>
              <p style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: "700", color: "var(--clr-primary)", marginBottom: "0.5rem" }}>{stat.value}</p>
              <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>{stat.label}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--clr-text-light)", lineHeight: "1.6" }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stakeholder engagement */}
      <section className="page-section--tinted">
        <div className="container">
          <div className="grid-2col">
            <div style={{ backgroundColor: "white", padding: "3.5rem", borderRadius: "12px", boxShadow: "var(--shadow-lg)" }}>
              <p className="section-label">STAKEHOLDER ENGAGEMENT</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontFamily: "var(--font-serif)", fontWeight: "400", margin: "1rem 0 1.25rem" }}>
                Communicating Data to Policy Makers
              </h2>
              <p style={{ color: "var(--clr-text-muted)", marginBottom: "2rem", lineHeight: "1.7" }}>
                MRH Collective held a major stakeholders&apos; meeting with Lagos State Policy Makers to communicate insights from data collected, leading to a 76% increase in workshop participation.
              </p>
              <div style={{ display: "flex", gap: "2rem" }}>
                <div style={{ flex: 1, borderTop: "2px solid var(--clr-primary)", paddingTop: "1rem" }}>
                  <p style={{ fontSize: "2rem", fontWeight: "700", color: "var(--clr-primary)" }}>76%</p>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--clr-text-muted)" }}>Engagement Growth</p>
                </div>
                <div style={{ flex: 1, borderTop: "2px solid var(--clr-accent-pink)", paddingTop: "1rem" }}>
                  <p style={{ fontSize: "2rem", fontWeight: "700", color: "var(--clr-accent-pink)" }}>12k+</p>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--clr-text-muted)" }}>Health Records Audited</p>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "400px", borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Image 
                src="/images/scraped/policy_2.png" 
                alt="Stakeholder engagement meeting" 
                fill 
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
              <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem" }}>
                <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", color: "#fff", lineHeight: "1.5", fontStyle: "italic", marginBottom: "1rem" }}>
                  &ldquo;We believe that data is the most powerful tool for advocacy. By showing the numbers, we make the invisible visible.&rdquo;
                </blockquote>
                <p style={{ color: "var(--clr-accent-border)", fontWeight: "600", fontSize: "0.875rem" }}>— MRH Leadership Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="page-section container" style={{ textAlign: "center" }}>
        <p className="section-label" style={{ justifyContent: "center" }}>OUR PARTNERS</p>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontFamily: "var(--font-serif)", fontWeight: "400", margin: "1rem 0 3rem" }}>
          Strengthening Impact Through Strategic Partnerships
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3rem 4rem", opacity: 0.55 }}>
          {["JHPIEGO", "CHAI", "Sterling One Foundation", "Bella Disu Foundation", "Redwire Marketing", "Nigerian Breweries"].map((partner, i) => (
            <span key={i} style={{ fontSize: "1rem", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase" }}>{partner}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
