"use client";
import PageHero from "../components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Counter, ProgressRing } from "../components/ImpactComponents";

/* ─── Infographic stat card ─────────────────────── */
function StatCard({
  icon,
  value,
  suffix,
  prefix,
  decimals,
  label,
  context,
  ring,
  ringColor,
  active,
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  context: string;
  ring?: number;
  ringColor?: string;
  active: boolean;
}) {
  return (
    <div style={{
      padding: "2.5rem 2rem",
      background: "white",
      borderRadius: "12px",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative corner fill */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "80px", height: "80px",
        background: "linear-gradient(135deg, var(--clr-primary-surface) 0%, transparent 70%)",
        borderRadius: "0 12px 0 80px"
      }} aria-hidden="true" />

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {ring !== undefined ? (
          <div style={{ position: "relative", flexShrink: 0 }}>
            <ProgressRing pct={ring} active={active} color={ringColor ?? "var(--clr-primary)"} size={80} />
            <div style={{
              position: "absolute", inset: 0, display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "0.7rem", fontWeight: "700", color: ringColor ?? "var(--clr-primary)"
            }}>
              {ring}%
            </div>
          </div>
        ) : (
          <span style={{
            width: "48px", height: "48px", display: "flex",
            alignItems: "center", justifyContent: "center",
            background: "var(--clr-primary-surface)", borderRadius: "12px",
            color: "var(--clr-primary)", flexShrink: 0
          }}>{icon}</span>
        )}

        <div>
          <p style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: "800",
            color: "var(--clr-primary)",
            lineHeight: 1,
            letterSpacing: "-0.025em"
          }}>
            <Counter value={value} suffix={suffix} prefix={prefix} decimals={decimals} active={active} />
          </p>
          <p style={{ fontWeight: "700", fontSize: "0.875rem", marginTop: "0.25rem", letterSpacing: "-0.01em" }}>{label}</p>
        </div>
      </div>

      <p style={{ fontSize: "0.875rem", color: "var(--clr-text-light)", lineHeight: "1.6" }}>{context}</p>
    </div>
  );
}

/* ─── Horizontal bar chart ──────────────────────── */
function BarChart({
  bars,
  active,
}: {
  bars: { label: string; value: number; max: number; color?: string }[];
  active: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {bars.map((bar, i) => {
        const pct = (bar.value / bar.max) * 100;
        return (
          <div key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>{bar.label}</span>
              <span style={{ fontSize: "0.875rem", fontWeight: "700", color: bar.color ?? "var(--clr-primary)" }}>
                {bar.value.toLocaleString()}
              </span>
            </div>
            <div style={{ height: "8px", background: "var(--clr-border)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: active ? `${pct}%` : "0%",
                background: bar.color ?? "var(--clr-primary)",
                borderRadius: "8px",
                transition: `width ${0.8 + i * 0.15}s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const stats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 22883, label: "Women Impacted (2024)",
    context: "Direct beneficiaries of MRH programs in the 2024 cycle.",
    suffix: "",
  },
  {
    value: 99.9, label: "Maternal Survival Rate",
    context: "Verified survival rate for every woman enrolled in MamaBase.",
    suffix: "%", decimals: 1, ring: 99.9, ringColor: "#1a7a4a",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    value: 12600, label: "Digital Tools Deployed",
    context: "Health data devices rolled out across Lagos PHCs.",
    suffix: "+",
  },
  {
    value: 80, label: "Facility Access Rate",
    context: "Of enrolled women deliver at a recognised health facility.",
    suffix: "%", ring: 80, ringColor: "var(--clr-accent-pink)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    value: 1938749, label: "Radio Reach",
    context: "People sensitized via broadcast media on maternal health.",
    suffix: "",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 431, label: "Health Workers Trained",
    context: "Birth attendants certified in Emergency Obstetric Care.",
    suffix: "",
  },
];

const timeline = [
  { year: "2007", event: "MRH Collective founded by Prof. Bosede Afolabi in response to preventable maternal deaths." },
  { year: "2015", event: "Launched the Iyaloju Initiative — reaching 11,000+ underserved women across Lagos." },
  { year: "2019", event: "Partnered with JHPIEGO for Birth Companion clinical trial across two Nigerian states." },
  { year: "2021", event: "Published 4 peer-reviewed papers on maternal health outcomes in Nigeria." },
  { year: "2022", event: "MamaBase Phase 1: Registered 7,883 pregnant women, achieving 99.9% survival rate." },
  { year: "2023", event: "Lagos State PHC Digitalisation Project launched — 12,600+ digital tools deployed." },
  { year: "2025", event: "MamaBase Phase 2 expanded to 12 LGAs. Total reach exceeds 59,000 women." },
];

export default function ImpactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <PageHero
        titleNode={
          <>
            Numbers that{" "}
            <span className="serif-italic accent-pink">represent lives.</span>
          </>
        }
        subtitle="28.5% of global maternal deaths happen in Nigeria. We are closing that gap — one program, one woman, one community at a time."
        label="OUR IMPACT"
        backgroundImage="/images/hero/hero-3.png"
        cta={{ label: "See Our Programs", href: "/programs" }}
      />

      {/* ── The Crisis Context ────────────────────── */}
      <section className="page-section container">
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>THE SILENT CRISIS</p>
          <h2>
            Nigeria. 2.6% of the world's population. 28.5% of maternal deaths.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--clr-text-muted)", lineHeight: "1.75" }}>
            Despite decades of commitment, the maternal mortality ratio remains critically above global targets. MRH Collective exists to change that — with evidence, programs, and relentless advocacy.
          </p>
        </div>
      </section>

      {/* ── Infographic Stats Grid ────────────────── */}
      <section ref={sectionRef} className="page-section--soft">
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center" }}>KEY METRICS</p>
          <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            Our impact at a glance.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem" }}>
            {stats.map((s, i) => (
              <StatCard
                key={i}
                icon={s.icon}
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
                label={s.label}
                context={s.context}
                ring={s.ring}
                ringColor={s.ringColor}
                active={active}
              />
            ))}
          </div>

          <p style={{
            textAlign: "center", marginTop: "2.5rem",
            fontSize: "0.8rem", color: "var(--clr-text-light)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
          }}>
            <span style={{ width: "6px", height: "6px", background: "#1a7a4a", borderRadius: "50%", display: "inline-block" }} />
            Data verified across 2023–2025 programme cycles · Lagos State, Nigeria
          </p>
        </div>
      </section>

      {/* ── Programme Reach Bar Chart ─────────────── */}
      <section className="page-section container">
        <div className="grid-2col">
          <div>
            <p className="section-label">PROGRAMME REACH</p>
            <h2>
              Geographic reach by program
            </h2>
            <p style={{ color: "var(--clr-text-muted)", marginBottom: "2.5rem", lineHeight: "1.7" }}>
              From dense urban slums to peri-urban communities — our programs meet women exactly where they are.
            </p>
            <BarChart
              bars={[
                { label: "MamaBase (Phase 1 + 2)", value: 7883, max: 25000, color: "var(--clr-primary)" },
                { label: "Iyaloju Initiative", value: 11055, max: 25000, color: "var(--clr-accent-pink)" },
                { label: "MamaLink Transport", value: 2400, max: 25000, color: "#1a7a4a" },
                { label: "Clinical Training", value: 2471, max: 25000, color: "#b45309" },
              ]}
              active={active}
            />
          </div>

          <div style={{ position: "relative", minHeight: "420px", borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <Image
              src="/images/scraped/impact-slider-578x1024.png"
              alt="MRH Collective community impact"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem" }}>
              <blockquote style={{
                fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "#fff", lineHeight: "1.5", fontStyle: "italic", marginBottom: "1rem"
              }}>
                &ldquo;Data is the most powerful tool for advocacy. By showing the numbers, we make the invisible visible.&rdquo;
              </blockquote>
              <p style={{ color: "var(--clr-accent-border)", fontWeight: "700", fontSize: "0.8125rem" }}>— MRH Research Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────── */}
      <section className="page-section--dark">
        <div className="container">
          <p className="section-label" style={{ color: "var(--clr-accent-border)", justifyContent: "center" }}>18+ YEARS OF IMPACT</p>
          <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "4rem" }}>
            A timeline of transformation
          </h2>

          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "88px", top: 0, bottom: 0,
              width: "2px", background: "linear-gradient(to bottom, var(--clr-primary), var(--clr-accent-pink))",
              opacity: 0.4
            }} aria-hidden="true" />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "72px", textAlign: "right" }}>
                    <span style={{
                      fontSize: "0.8rem", fontWeight: "800", color: "var(--clr-accent-border)",
                      letterSpacing: "0.05em"
                    }}>{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div style={{
                    width: "12px", height: "12px", borderRadius: "50%",
                    background: i % 2 === 0 ? "var(--clr-primary)" : "var(--clr-accent-pink)",
                    flexShrink: 0, marginTop: "0.2rem", zIndex: 1,
                    boxShadow: "0 0 0 3px rgba(255,255,255,0.08)"
                  }} aria-hidden="true" />
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9375rem", lineHeight: "1.65", paddingBottom: "0.5rem" }}>
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stakeholder engagement photo ─────────── */}
      <section className="page-section--tinted">
        <div className="container">
          <div className="grid-2col">
            <div style={{ backgroundColor: "white", padding: "3.5rem", borderRadius: "12px", boxShadow: "var(--shadow-md)" }}>
              <p className="section-label">STAKEHOLDER ENGAGEMENT</p>
              <h2>Policy makers now listen.</h2>
              <p style={{ color: "var(--clr-text-muted)", marginBottom: "2.5rem", lineHeight: "1.75" }}>
                MRH Collective convened Lagos State Policy Makers to communicate evidence-backed insights from the field — a meeting that drove a 76% increase in institutional engagement.
              </p>
              <div style={{ display: "flex", gap: "2.5rem" }}>
                <div style={{ borderTop: "3px solid var(--clr-primary)", paddingTop: "1rem" }}>
                  <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--clr-primary)", lineHeight: 1 }}>76%</p>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--clr-text-muted)", marginTop: "0.375rem" }}>Engagement Growth</p>
                </div>
                <div style={{ borderTop: "3px solid var(--clr-accent-pink)", paddingTop: "1rem" }}>
                  <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--clr-accent-pink)", lineHeight: 1 }}>12k+</p>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--clr-text-muted)", marginTop: "0.375rem" }}>Health Records Audited</p>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "420px", borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/scraped/policy_3.png"
                alt="Policy stakeholder meeting"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Logos ─────────────────────────── */}
      <section className="page-section container">
        <p className="section-label" style={{ justifyContent: "center" }}>OUR PARTNERS</p>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Impact amplified through partnership
        </h2>
        <p style={{ textAlign: "center", color: "var(--clr-text-muted)", marginBottom: "3.5rem", maxWidth: "520px", margin: "0 auto 3.5rem" }}>
          We work alongside institutions who share our conviction that maternal death is preventable.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "2rem 3rem" }}>
          {[
            "JHPIEGO", "CHAI", "Sterling One Foundation",
            "Bella Disu Foundation", "Redwire Marketing", "Nigerian Breweries", "SOGON", "AFEMSON"
          ].map((partner, i) => (
            <span key={i} style={{
              fontSize: "0.75rem", fontWeight: "800", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--clr-text-light)",
              padding: "0.75rem 1.5rem", border: "1px solid var(--clr-border)",
              borderRadius: "4px"
            }}>
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="page-section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff" }}>
            Help us write the{" "}
            <span className="serif-italic accent-pink">next chapter.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", fontSize: "1.1rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Every contribution funds a direct intervention that saves a mother&apos;s life.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://flutterwave.com/donate/zotqysbetmmt" target="_blank" rel="noopener noreferrer" className="btn btn-white">
              DONATE NOW
            </a>
            <Link href="/programs" className="btn btn-outline-white">SEE OUR PROGRAMS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
