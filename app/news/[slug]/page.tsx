import { newsItems } from "../newsData";
import PageHero from "../../components/PageHero";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | MRH Collective`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <PageHero 
        title={article.title}
        label={`${article.category} — ${article.date}`}
        backgroundImage="/images/hero/hero-5.png"
      />

      <article className="page-section">
        <div className="container">
          <div style={{ maxWidth: "840px", margin: "0 auto" }}>
            
            {/* Featured Image */}
            {article.imageUrl && (
              <div style={{ 
                position: "relative", 
                width: "100%", 
                aspectRatio: "16/9", 
                marginBottom: "3.5rem", 
                borderRadius: "12px", 
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)"
              }}>
                <Image 
                  src={article.imageUrl} 
                  alt={article.title} 
                  fill 
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}

            {/* Article Header Info */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              paddingBottom: "2rem", 
              marginBottom: "3rem", 
              borderBottom: "1px solid var(--clr-border)" 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "50%", 
                  backgroundColor: "var(--clr-primary-surface)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "var(--clr-primary)"
                }}>
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--clr-text)" }}>{article.author}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--clr-text-light)" }}>Author, MRH Collective</p>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "0.8125rem", color: "var(--clr-text-light)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Published</p>
                <p style={{ fontSize: "0.9375rem", fontWeight: "600" }}>{article.date}</p>
              </div>
            </div>

            {/* Article Content */}
            <div className="article-body" style={{ 
              fontSize: "1.1875rem", 
              lineHeight: "1.9", 
              color: "var(--clr-text-muted)",
              whiteSpace: "pre-line",
              fontFamily: "var(--font-sans)"
            }}>
              {article.content}
            </div>

            {/* Footer / Back */}
            <div style={{ marginTop: "5rem", paddingTop: "3rem", borderTop: "1px solid var(--clr-border)" }}>
              <Link 
                href="/news" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  color: "var(--clr-primary)", 
                  textDecoration: "none", 
                  fontWeight: "600",
                  fontSize: "0.9375rem",
                  letterSpacing: "0.05em"
                }}
              >
                ← BACK TO ALL NEWS
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Final CTA */}
      <section className="page-section--dark">
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", color: "#fff", marginBottom: "1.5rem" }}>
              Make an Impact
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
              Join us in our mission to ensure that giving life should never mean losing yours.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", flexWrap: "wrap" }}>
              <Link href="/join-us" className="btn btn-accent">JOIN THE COLLECTIVE</Link>
              <a href="https://flutterwave.com/donate/zotqysbetmmt" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">DONATE NOW</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
