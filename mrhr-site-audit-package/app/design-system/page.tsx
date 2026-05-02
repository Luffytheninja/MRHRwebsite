"use client";
import PageHero from "../components/PageHero";
import { ProgressRing, Counter } from "../components/ImpactComponents";

export default function DesignSystemPage() {
  return (
    <main style={{ paddingBottom: "10rem" }}>
      <PageHero
        titleNode={<>The <span className="serif-italic accent-pink">Design System</span></>}
        subtitle="A living guide to the visual and typographic standards of the MRH Collective editorial platform."
        label="BRAND GUIDELINES"
      />

      <section className="container page-section">
        <p className="section-label">01 — TYPOGRAPHY</p>
        <div className="section-divider" />
        <div style={{ display: "grid", gap: "2rem", maxWidth: "800px" }}>
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--clr-text-light)", marginBottom: "0.5rem" }}>H1 Page Title (800 Bold)</p>
            <h1>Giving life should never mean losing yours.</h1>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--clr-text-light)", marginBottom: "0.5rem" }}>H2 Section Header (700 Bold)</p>
            <h2>A professor watched women die.</h2>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--clr-text-light)", marginBottom: "0.5rem" }}>H2 with Moving Word (.serif-italic)</p>
            <h2>Led by <span className="serif-italic">experts.</span> Driven by purpose.</h2>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--clr-text-light)", marginBottom: "0.5rem" }}>H3 Subsection (600 Semibold)</p>
            <h3>MamaBase: Data-Driven Care</h3>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--clr-text-light)", marginBottom: "0.5rem" }}>Body Copy (300 Light, 1.7 Line-height)</p>
            <p>Our rigorous, evidence-based programs guide national interventions and inform governmental policies across Nigeria. We believe that with the right data, every maternal death is preventable.</p>
          </div>
        </div>
      </section>

      <section className="page-section--soft">
        <div className="container">
          <p className="section-label">02 — COLOR PALETTE</p>
          <div className="section-divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: "Primary Purple", hex: "#5A02B9", var: "--clr-primary" },
              { name: "Accent Pink", hex: "#FF2183", var: "--clr-accent-pink" },
              { name: "Navy Night", hex: "#0F0F1E", var: "--clr-navy" },
              { name: "Accent Border", hex: "#FF8EBD", var: "--clr-accent-border" },
              { name: "Off-White", hex: "#F8F9FA", var: "--clr-off-white" },
            ].map((color) => (
              <div key={color.name} style={{ background: "white", padding: "1rem", borderRadius: "8px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ height: "100px", background: color.hex, borderRadius: "4px", marginBottom: "1rem" }} />
                <p style={{ fontWeight: "700", fontSize: "0.875rem" }}>{color.name}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--clr-text-light)" }}>{color.hex}</p>
                <code style={{ fontSize: "0.7rem", color: "var(--clr-primary)" }}>{color.var}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container page-section">
        <p className="section-label">03 — INFOGRAPHICS</p>
        <div className="section-divider" />
        <div className="grid-auto-3">
          <div style={{ padding: "2rem", background: "var(--clr-off-white)", borderRadius: "12px", textAlign: "center" }}>
            <ProgressRing pct={99.9} active={true} color="#1a7a4a" size={100} />
            <p style={{ fontSize: "1.5rem", fontWeight: "800", marginTop: "1rem" }}><Counter value={99.9} active={true} decimals={1} suffix="%" /></p>
            <p style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>Maternal Survival</p>
          </div>
          <div style={{ padding: "2rem", background: "var(--clr-off-white)", borderRadius: "12px", textAlign: "center" }}>
            <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "3rem", color: "var(--clr-primary)", fontWeight: "800" }}>
                <Counter value={22883} active={true} />
              </span>
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>Women Impacted</p>
          </div>
          <div style={{ padding: "2rem", background: "var(--clr-off-white)", borderRadius: "12px", textAlign: "center" }}>
            <ProgressRing pct={80} active={true} color="var(--clr-accent-pink)" size={100} />
            <p style={{ fontSize: "1.5rem", fontWeight: "800", marginTop: "1rem" }}><Counter value={80} active={true} suffix="%" /></p>
            <p style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>Facility Access</p>
          </div>
        </div>
      </section>

      <section className="page-section--tinted">
        <div className="container">
          <p className="section-label">04 — INTERACTIVE ELEMENTS</p>
          <div className="section-divider" />
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <button className="btn btn-primary">Primary Action</button>
            <button className="btn btn-accent">Accent Action</button>
            <button className="btn btn-outline">Outline Action</button>
            <button className="btn btn-outline-dark">Dark Outline</button>
          </div>
        </div>
      </section>
    </main>
  );
}
