import styles from "./PageHero.module.css";
import Link from "next/link";

interface PageHeroProps {
  /** Plain text title — use this OR titleNode */
  title?: string;
  /** Rich JSX title containing serif-italic spans for moving words */
  titleNode?: React.ReactNode;
  subtitle?: string;
  label?: string;
  backgroundImage?: string;
  /** Optional primary CTA rendered at the bottom of the hero */
  cta?: { label: string; href: string };
  /** Optional secondary CTA */
  ctaSecondary?: { label: string; href: string };
}

export default function PageHero({
  title,
  titleNode,
  subtitle,
  label,
  backgroundImage,
  cta,
  ctaSecondary,
}: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      {backgroundImage && (
        <div
          className={styles.bgOverlay}
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}
      <div className={`container ${styles.content}`}>
        {label && <p className={`section-label ${styles.heroLabel}`}>{label}</p>}
        <h1 className={styles.title}>{titleNode ?? title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {(cta || ctaSecondary) && (
          <div className={styles.heroActions}>
            {cta && (
              <Link href={cta.href} className="btn btn-white">
                {cta.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn btn-outline-white">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
      <div className={styles.bottomGradient} aria-hidden="true" />
    </section>
  );
}
