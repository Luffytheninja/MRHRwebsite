import PageHero from "../components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | MRH Collective",
  description: "Founded in 2007, MRH Collective leads transformative research, programs, and advocacy that strengthen national health systems for quality maternal healthcare.",
};

const values = [
  {
    icon: "✦",
    title: "Excellence",
    text: "Programs and research of the highest quality — measured by real impact, not output.",
  },
  {
    icon: "◆",
    title: "Integrity",
    text: "Our mission stays firm. No external pressure will redirect us from women and girls.",
  },
  {
    icon: "●",
    title: "Collaboration",
    text: "True partnership with women, governments, and communities inside the systems we serve.",
  },
  {
    icon: "▲",
    title: "Respect",
    text: "Every partner, ally, and staff member treated with dignity — regardless of differences.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────── */}
      <PageHero
        titleNode={
          <>
            Childbirth should be a <span className="serif-italic accent-pink">celebration of life.</span>
          </>
        }
        subtitle="Since 2007, MRH Collective has led the research, programs, and advocacy that strengthen Nigeria's health systems — so every mother can survive childbirth."
        label="ABOUT US — FOUNDED 2007"
        backgroundImage="/images/hero/hero-1.png"
        cta={{ label: "See Our Impact", href: "/impact" }}
        ctaSecondary={{ label: "Join the Movement", href: "/join-us" }}
      />

      {/* ── Why We Exist ─────────────────────────── */}
      <section className="page-section container">
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p className="section-label">WHY WE EXIST</p>
          <div className="section-divider" />
          <h2>
            A professor watched women die. She decided to stop it.
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.85", color: "var(--clr-text-muted)", marginBottom: "2rem" }}>
            MRH Collective was founded by a Professor of Obstetrics &amp; Gynaecology who had seen — firsthand — the needless deaths of women during childbirth. She built this organisation on a single conviction: that with the right evidence, programs, and advocacy, maternal death is preventable.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--clr-text-muted)" }}>
            Today, we operate across Lagos State and beyond, working alongside governments, clinicians, and communities to close the gap between life-saving knowledge and life-saving action.
          </p>
        </div>
      </section>

      {/* ── Photo Break — full-bleed community moment ─ */}
      <section style={{ position: "relative", minHeight: "40vh", overflow: "hidden" }}>
        <Image
          src="/images/scraped/PROF-AFOLABI.png"
          alt="Prof. Bosede Afolabi, Founder"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(15,15,30,0.88) 0%, rgba(15,15,30,0.35) 60%, transparent 100%)"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, height: "100%", padding: "4rem 2rem", display: "flex", alignItems: "center" }}>
          <blockquote style={{ maxWidth: "540px" }}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 4vw, 2.25rem)",
              color: "#fff",
              lineHeight: "1.35",
              fontStyle: "italic",
              marginBottom: "1.5rem"
            }}>
              &ldquo;Every mother deserves to come home to her family.&rdquo;
            </p>
            <cite style={{ color: "var(--clr-accent-border)", fontStyle: "normal", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              — Prof. Bosede Afolabi, Founder
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────── */}
      <section className="page-section--soft">
        <div className="container">
          <div className="grid-auto-2">
            <div style={{ padding: "3rem", background: "white", borderRadius: "8px", borderTop: "3px solid var(--clr-primary)", boxShadow: "var(--shadow-sm)" }}>
              <p className="section-label">MISSION</p>
              <h3>What we do</h3>
              <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.75", fontSize: "1rem" }}>
                Lead transformative research, programs, and advocacy that strengthen national health systems — so women and girls have access to quality maternal and reproductive healthcare.
              </p>
            </div>
            <div style={{ padding: "3rem", background: "white", borderRadius: "8px", borderTop: "3px solid var(--clr-accent-pink)", boxShadow: "var(--shadow-sm)" }}>
              <p className="section-label">VISION</p>
              <h3>What we&apos;re building toward</h3>
              <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.75", fontSize: "1rem" }}>
                A world where every mother has the care, support, and resources she needs to survive childbirth — and live a healthy, fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────── */}
      <section className="page-section container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>OUR CORE VALUES</p>
          <h2>
            The principles that guide us
          </h2>
        </div>

        <div className="grid-auto-4">
          {values.map((value, idx) => (
            <div key={idx} style={{
              padding: "2.5rem 2rem",
              backgroundColor: "var(--clr-off-white)",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden"
            }}>
              <span style={{
                position: "absolute", top: "1.5rem", right: "1.75rem",
                fontSize: "1.5rem", color: "var(--clr-primary)", opacity: 0.15, lineHeight: 1
              }} aria-hidden="true">{value.icon}</span>
              <h4 style={{ color: "var(--clr-primary)", marginBottom: "0.625rem", fontSize: "1rem" }}>{value.title}</h4>
              <p style={{ fontSize: "0.9375rem", color: "var(--clr-text-muted)", lineHeight: "1.65" }}>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Strategy — text + photo ───────────────── */}
      <section className="page-section--dark">
        <div className="container">
          <div className="grid-2col">
            <div>
              <p className="section-label" style={{ color: "var(--clr-accent-border)" }}>OUR STRATEGY</p>
              <h2 style={{ color: "#fff" }}>
                Three steps from evidence to change.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem", marginTop: "2.5rem" }}>
                {[
                  {
                    num: "01", title: "Generate Evidence",
                    body: "Deep, participatory research mapping systems and listening to women and frontline workers — to uncover what actually works."
                  },
                  {
                    num: "02", title: "Deliver Solutions",
                    body: "Evidence-backed community programs targeting the most vulnerable populations and strengthening local health systems."
                  },
                  {
                    num: "03", title: "Drive Systemic Change",
                    body: "Amplifying ground-truth insights to advocate for national-level transformation, hand-in-hand with government."
                  },
                ].map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <span style={{
                      fontSize: "0.7rem", fontWeight: "800", color: "var(--clr-primary)",
                      background: "rgba(90,2,185,0.15)", padding: "0.4rem 0.75rem",
                      borderRadius: "4px", flexShrink: 0, letterSpacing: "0.05em", marginTop: "0.2rem"
                    }}>{step.num}</span>
                    <div>
                      <h4 style={{ color: "var(--clr-accent-border)", marginBottom: "0.375rem" }}>{step.title}</h4>
                      <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9375rem", lineHeight: "1.7" }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", minHeight: "400px", aspectRatio: "4/5", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/scraped/abt-7_strategy-1.png"
                alt="MRH Collective team in strategy session"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,18,59,0.88), transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[
                    { num: "22,883", lbl: "Women impacted (2024)" },
                    { num: "18+", lbl: "Years of evidence" }
                  ].map((s, i) => (
                    <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: "0.75rem" }}>
                      <span style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--clr-accent-border)", display: "block" }}>{s.num}</span>
                      <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Photography strip ────────────────── */}
      <section className="page-section container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>THE PEOPLE BEHIND THE WORK</p>
          <h2>
            Led by experts. Driven by purpose.
          </h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
            Our team spans obstetrics, public health, research, policy, and community mobilisation — united by the belief that maternal death is never inevitable.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
          {[
            { img: "/images/scraped/PROF-AFOLABI.png", name: "Prof. Bosede Afolabi", role: "Founder & Executive Director" },
            { img: "/images/scraped/DR-AISHA.png", name: "Dr. Aisha Abdullahi", role: "Research Lead" },
            { img: "/images/scraped/DR-OLADIPO.png", name: "Dr. Oladipo", role: "Clinical Programs" },
            { img: "/images/scraped/MARYAM-ALIKO.png", name: "Maryam Aliko", role: "Partnerships & Advocacy" },
          ].map((member, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                position: "relative", width: "100%", paddingBottom: "110%",
                borderRadius: "8px", overflow: "hidden", marginBottom: "1rem",
                boxShadow: "var(--shadow-md)", backgroundColor: "var(--clr-bg-soft)"
              }}>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <h4 style={{ marginBottom: "0.25rem", fontSize: "0.9375rem" }}>{member.name}</h4>
              <p style={{ fontSize: "0.8125rem", color: "var(--clr-text-light)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────── */}
      <section className="page-section--tinted">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>
            Ready to make{" "}
            <span className="serif-italic accent-pink">a difference?</span>
          </h2>
          <p style={{ color: "var(--clr-text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", maxWidth: "540px", margin: "0 auto 2.5rem" }}>
            Support our programs, volunteer your expertise, or partner with the Collective.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/join-us" className="btn btn-primary">JOIN THE MOVEMENT</Link>
            <Link href="/programs" className="btn btn-outline">SEE OUR PROGRAMS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
