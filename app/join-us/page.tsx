"use client";
import PageHero from "../components/PageHero";
import { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function JoinUsPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you! We will be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <main>
      <PageHero
        titleNode={
          <>
            Every mother deserves a <span className="serif-italic accent-pink">chance to thrive.</span>
          </>
        }
        subtitle="When you support MRH Collective, you are literally saving lives, empowering families, and helping us build a world where no woman dies while giving life."
        label="JOIN THE MOVEMENT"
        backgroundImage="/images/hero/hero-1.png"
      />

      {/* Giving options */}
      <section className="page-section container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>SUPPORT OUR WORK</p>
          <h2>
            Fund a life-saving intervention.
          </h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "560px", margin: "0 auto", fontSize: "1.1rem" }}>
            Every donation directly powers our on-the-ground programs.
          </p>
        </div>

        <div className="grid-auto-2">
          {/* One-time donation */}
          <div style={{ padding: "3.5rem", backgroundColor: "white", borderRadius: "12px", borderTop: "4px solid var(--clr-primary)", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-md)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Individual Giving</h3>
            <p style={{ color: "var(--clr-text-muted)", marginBottom: "2rem", lineHeight: "1.75", flex: 1 }}>
              Your donation directly funds life-saving programs that provide respectful maternity care, education, and support to underserved women.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "grid", gap: "0.875rem" }}>
              {[
                "Prenatal and postnatal care support",
                "Health worker training and education",
                "Emergency transport coordination"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9375rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--clr-primary)", fontWeight: "800", marginTop: "0.1rem" }} aria-hidden="true">✓</span>
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
          <div style={{ padding: "3.5rem", backgroundColor: "var(--clr-primary-surface)", borderRadius: "12px", borderTop: "4px solid var(--clr-accent-pink)", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-md)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Become a Lifeline</h3>
            <p style={{ color: "var(--clr-text-muted)", marginBottom: "2rem", lineHeight: "1.75", flex: 1 }}>
              Your consistent monthly support helps us deliver continuous care, education, and advocacy for maternal health — ensuring reliable impact all year round.
            </p>
            <div style={{ padding: "1.5rem", backgroundColor: "white", borderRadius: "8px", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--clr-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Monthly Impact</p>
              <p style={{ fontSize: "1.05rem", marginTop: "0.5rem", lineHeight: "1.6", fontWeight: "500" }}>Ensures reliable prenatal care for 5+ mothers every single month.</p>
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

      {/* ── Photo Break ── */}
      <section style={{ position: "relative", height: "45vh", minHeight: "360px", overflow: "hidden" }}>
        <Image
          src="/images/scraped/policy_2.png"
          alt="MRH Collective stakeholder meeting"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          priority={false}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15, 15, 30, 0.55)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2 style={{ color: "#fff", textAlign: "center", maxWidth: "800px" }}>
            Real change requires a collective.
          </h2>
        </div>
      </section>

      {/* Partner + Contact */}
      <section className="page-section--dark">
        <div className="container">
          <div className="grid-2col" style={{ alignItems: "flex-start" }}>
            {/* Left: other ways */}
            <div>
              <p className="section-label" style={{ color: "var(--clr-accent-border)" }}>OTHER WAYS TO HELP</p>
              <h2 style={{ color: "#fff", marginBottom: "2.5rem" }}>
                Partner with the Collective.
              </h2>
              <div style={{ display: "grid", gap: "2.25rem" }}>
                {[
                  { title: "Fundraise for Mothers", desc: "Turn your passion into action by starting your own fundraiser. Whether it's your birthday, a community run, or a workplace challenge." },
                  { title: "Corporate Partnerships", desc: "Are you a company or institution looking to create meaningful impact? Sponsor maternal health programs or fund life-saving research." },
                  { title: "Volunteer Your Time", desc: "Offer your expertise in healthcare, communications, fundraising, or administration. Virtual and in-person opportunities available." }
                ].map((item, i) => (
                  <div key={i} style={{ paddingLeft: "1.5rem", borderLeft: "2px solid rgba(255,255,255,0.15)" }}>
                    <h4 style={{ color: "var(--clr-accent-border)", marginBottom: "0.5rem" }}>{item.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7", fontSize: "0.9375rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact form */}
            <div style={{ backgroundColor: "var(--clr-navy-mid)", padding: "3.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
              <h3 style={{ marginBottom: "0.5rem", color: "#fff" }}>Get in touch to partner</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", fontSize: "0.9375rem" }}>We&apos;ll respond within 2 business days.</p>
              <form
                onSubmit={handleSubmit}
                aria-label="Partnership contact form"
                style={{ display: "grid", gap: "1.75rem" }}
              >
                <div>
                  <label htmlFor="join-name" style={{ fontSize: "0.75rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Name *</label>
                  <input
                    id="join-name"
                    type="text"
                    required
                    placeholder="Ada Okonkwo"
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "0.5rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem", transition: "border-color 0.2s ease" }}
                  />
                </div>
                <div>
                  <label htmlFor="join-email" style={{ fontSize: "0.75rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address *</label>
                  <input
                    id="join-email"
                    type="email"
                    required
                    placeholder="ada@organisation.ng"
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "0.5rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem", transition: "border-color 0.2s ease" }}
                  />
                </div>
                <div>
                  <label htmlFor="join-type" style={{ fontSize: "0.75rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>I am interested in...</label>
                  <select
                    id="join-type"
                    style={{ width: "100%", background: "var(--clr-navy-mid)", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "0.5rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem" }}
                  >
                    <option value="">Please select</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="join-message" style={{ fontSize: "0.75rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
                  <textarea
                    id="join-message"
                    placeholder="Tell us about yourself and how you'd like to get involved..."
                    rows={4}
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "0.5rem 0", color: "white", fontFamily: "inherit", fontSize: "1rem", resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn btn-outline-white" style={{ marginTop: "1rem", justifyContent: "center" }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="page-section--tinted">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1.5rem", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            Every gift. Every partnership. Brings us closer.
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
        </div>
      </section>
    </main>
  );
}
