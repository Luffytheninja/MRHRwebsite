"use client";
import styles from "./FloatingDonate.module.css";

export default function FloatingDonate() {
  return (
    <a
      href="https://flutterwave.com/donate/zotqysbetmmt"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Donate to MRH Collective — opens Flutterwave"
      id="floating-donate-cta"
    >
      <span className={styles.pulse} aria-hidden="true" />
      {/* Heart icon */}
      <svg
        className={styles.heart}
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
      <span className={styles.label}>DONATE</span>
    </a>
  );
}
