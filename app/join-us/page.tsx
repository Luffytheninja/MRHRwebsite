"use client";
import PageHero from "../components/PageHero";
import { FormEvent } from "react";

export default function JoinUsPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Future: wire to form backend / email service
    alert("Thank you! We will be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <main>
      <PageHero 
        title="Every Mother Deserves a Chance to Thrive."
        subtitle="When you support MRH Collective, you are literally saving lives, empowering families, and helping us build a world where no woman dies while giving life."
        label="JOIN THE MOVEMENT"
        backgroundImage="/images/hero/hero-1.png"
      />

      {/* Giving options */}
      <section className="page-section container">
        <div className="grid-auto-2">
          {/* One-time donation */}
          <div style={{ padding: "3.5rem", backgroundColor: "var(--clr-off-white)", borderRadius: "12px", borderTop: "4px solid var(--clr-primary)", display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-serif)", fontWeight: "400", marginBottom: "1.25rem" }}>
              Individual Giving
            </h2>
            <p style={{ color: "var(--clr-text-muted)", marginBottom: "2rem", lineHeight: "1.75", flex: 1 }}>
              Your donation directly funds life-saving programs that provide respectful maternity care, education, and support to underserved women and communities.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "grid", gap: "0.875rem" }}>
              {[
                "Prenatal and postnatal care support",
                "Health worker training and education",
                "Emergency transport coordination for mothers"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9375rem", alignItems: "center" }}>
                  <span style={{ color: "var(--clr-primary)", fontWeight: "700" }} aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://flutterwave.com/donate/zotqysbetmmt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
            >
              DONATE NOW
            </a>
          </div>

          {/* Monthly giving */}
          <div style={{ padding: "3.5rem", backgroundColor: "var(--clr-primary-surface)", borderRadius: "12px", borderTop: "4px solid var(--clr-accent-pink)", display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-serif)", fontWeight: "400", marginBottom: "1.25rem" }}>
              Become a Lifeline
            </h2>
            <p style={{ color: "var(--clr-text-muted)", marginBottom: "2rem", lineHeight: "1.75", flex: 1 }}>
              Your consistent monthly support helps us deliver continuous care, education, and advocacy for maternal health — ensuring reliable impact all year round.
            </p>
            <div style={{ padding: "1.5rem", backgroundColor: "white", borderRadius: "8px", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--clr-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Monthly Impact</p>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem", lineHeight: "1.6" }}>Ensures reliable prenatal care for 5+ mothers every single month.</p>
            </div>
            <a
              href="https://flutterwave.com/donate/zotqysbetmmt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ justifyContent: "center" }}
            >
              BECOME A LIFELINE
            </a>
          </div>
        </div>
      </section>

      {/* Partner + Contact */}
      <section className="page-section--dark">
        <div className="container">
          <div className="grid-2col">
            {/* Left: other ways */}
            <div>
              <p className="section-label" style={{ color: "var(--clr-accent-border)" }}>OTHER WAYS TO HELP</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-serif)", fontWeight: "400", color: "#fff", margin: "1rem 0 2.5rem" }}>
                Partner with the Collective.
              </h2>
              <div style={{ display: "grid", gap: "2.25rem" }}>
                {[
                  { title: "Fundraise for Mothers", desc: "Turn your passion into action by starting your own fundraiser. Whether it's your birthday, a community run, or a workplace challenge." },
                  { title: "Corporate Partnerships", desc: "Are you a company or institution looking to create meaningful impact? Sponsor maternal health programs or fund life-saving research." },
                  { title: "Volunteer Your Time", desc: "Offer your expertise in healthcare, communications, fundraising, or administration. Virtual and in-person opportunities available." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize: "1.1rem", color: "var(--clr-accent-border)", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.7", fontSize: "0.9375rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact form */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "3.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", fontFamily: "var(--font-serif)", color: "#fff" }}>Get in touch to partner</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem", fontSize: "0.9rem" }}>We&apos;ll respond within 2 business days.</p>
              <form
                onSubmit={handleSubmit}
                aria-label="Partnership contact form"
                style={{ display: "grid", gap: "1.5rem" }}
              >
                <div>
                  <label htmlFor="join-name" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.4rem" }}>Full Name *</label>
                  <input
                    id="join-name"
                    type="text"
                    required
                    placeholder="Ada Okonkwo"
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", padding: "0.75rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="join-email" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.4rem" }}>Email Address *</label>
                  <input
                    id="join-email"
                    type="email"
                    required
                    placeholder="ada@organisation.ng"
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", padding: "0.75rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="join-type" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.4rem" }}>I am interested in...</label>
                  <select
                    id="join-type"
                    style={{ width: "100%", background: "#1A1A3A", border: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", padding: "0.75rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem" }}
                  >
                    <option value="">Please select</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="join-message" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                  <textarea
                    id="join-message"
                    placeholder="Tell us about yourself and how you'd like to get involved..."
                    rows={4}
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", padding: "0.75rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem", resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn btn-outline-white" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="page-section container" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontFamily: "var(--font-serif)", fontWeight: "400", marginBottom: "1.5rem", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
          Every gift. Every fundraiser. Every partnership brings us closer.
        </h2>
        <p style={{ color: "var(--clr-text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
          Because no mother should die giving life.
        </p>
        <a
          href="https://flutterwave.com/donate/zotqysbetmmt"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          MAKE A DIFFERENCE TODAY
        </a>
      </section>
    </main>
  );
}
