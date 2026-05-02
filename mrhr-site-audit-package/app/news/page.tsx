"use client";
import PageHero from "../components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { newsItems } from "./newsData";

const categoryColors: Record<string, string> = {
  Insights: "var(--clr-primary)",
  Research: "var(--clr-accent-pink)",
  Programs: "#1a7a4a",
  Events: "#b45309"
};

export default function NewsPage() {
  return (
    <main>
      <PageHero
        titleNode={
          <>
            News &amp; <span className="serif-italic accent-pink">Insights.</span>
          </>
        }
        subtitle="Stay connected with our latest updates, research findings, and stories from the communities we serve."
        label="LATEST UPDATES"
        backgroundImage="/images/hero/hero-5.png"
      />

      <section className="page-section container">
        {/* Featured article — first item, larger */}
        {newsItems[0] && (
          <article style={{ marginBottom: "5rem", paddingBottom: "5rem", borderBottom: "1px solid var(--clr-border)" }}>
            <div className="grid-2col" style={{ gap: "4rem" }}>
              <div style={{
                position: "relative",
                aspectRatio: "16/10",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)"
              }}>
                <Image
                  src={newsItems[0].imageUrl}
                  alt={newsItems[0].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, var(--clr-primary), var(--clr-accent-pink))" }} aria-hidden="true" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "0.35rem 1rem",
                    borderRadius: "50px",
                    fontSize: "0.7rem",
                    fontWeight: "800",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    backgroundColor: categoryColors[newsItems[0].category] ?? "var(--clr-primary)",
                    color: "#fff"
                  }}>
                    {newsItems[0].category}
                  </span>
                  <span style={{ fontSize: "0.8125rem", color: "var(--clr-text-light)", fontWeight: "600" }}>{newsItems[0].date}</span>
                </div>
                <h2 style={{ lineHeight: "1.2", marginBottom: "1.25rem" }}>
                  <Link href={`/news/${newsItems[0].slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {newsItems[0].title}
                  </Link>
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--clr-text-muted)", lineHeight: "1.75", marginBottom: "2rem" }}>
                  {newsItems[0].excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "var(--clr-text-light)" }}>By <span style={{ color: "var(--clr-text)", fontWeight: "600" }}>{newsItems[0].author}</span></span>
                  <Link
                    href={`/news/${newsItems[0].slug}`}
                    style={{ fontSize: "0.8125rem", fontWeight: "700", color: "var(--clr-primary)", textDecoration: "none", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    READ ARTICLE <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Remaining articles grid */}
        <div className="grid-auto-3" style={{ gap: "4rem 3rem" }}>
          {newsItems.slice(1).map((item, i) => (
            <article key={i} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "1.5rem",
                backgroundColor: "var(--clr-bg-soft)"
              }}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{
                  display: "inline-block",
                  padding: "0.25rem 0.875rem",
                  borderRadius: "50px",
                  fontSize: "0.65rem",
                  fontWeight: "800",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  backgroundColor: categoryColors[item.category] ?? "var(--clr-primary)",
                  color: "#fff"
                }}>
                  {item.category}
                </span>
                <time dateTime={item.date} style={{ fontSize: "0.75rem", color: "var(--clr-text-light)", fontWeight: "600" }}>{item.date}</time>
              </div>
              <h3 style={{ lineHeight: "1.4", marginBottom: "1rem", flex: 1 }}>
                <Link href={`/news/${item.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {item.title}
                </Link>
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--clr-text-muted)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                {item.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--clr-border)", paddingTop: "1rem", marginTop: "auto" }}>
                <span style={{ fontSize: "0.8125rem", color: "var(--clr-text-light)" }}>By {item.author}</span>
                <Link
                  href={`/news/${item.slug}`}
                  style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--clr-primary)", textDecoration: "none", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                >
                  READ <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="page-section--tinted">
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>STAY IN THE LOOP</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Stories from the <span className="serif-italic">frontline.</span>
            </h2>
            <p style={{ color: "var(--clr-text-muted)", marginBottom: "2.5rem", lineHeight: "1.7", fontSize: "1.05rem" }}>
              Get the latest maternal health research, program updates, and field stories delivered straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter sign-up"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                style={{
                  flex: 1,
                  minWidth: "260px",
                  maxWidth: "360px",
                  padding: "1rem 1.25rem",
                  borderRadius: "4px",
                  border: "1px solid var(--clr-border)",
                  fontFamily: "inherit",
                  fontSize: "1rem"
                }}
              />
              <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
