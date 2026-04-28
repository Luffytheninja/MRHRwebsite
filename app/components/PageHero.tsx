import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, label, backgroundImage }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      {backgroundImage && (
        <div className={styles.bgOverlay} style={{ backgroundImage: `url(${backgroundImage})` }} />
      )}
      <div className={`container ${styles.content}`}>
        {label && <p className={`section-label ${styles.heroLabel}`}>{label}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
