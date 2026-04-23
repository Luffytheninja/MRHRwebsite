import styles from "./Legal.module.css";

export default function PrivacyPage() {
  return (
    <main className="container" style={{ padding: '8rem 2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '3rem', marginBottom: '2rem', color: '#5A02B9' }}>Privacy Policy</h1>
      <div style={{ lineHeight: '1.8', color: '#4A4D55' }}>
        <p style={{ marginBottom: '1.5rem' }}>Effective Date: April 22, 2026</p>
        <p style={{ marginBottom: '1.5rem' }}>
          MRHR Collective is committed to protecting your privacy. This policy outlines how we handle personal information.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1A1B1E' }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We collect information you provide directly to us when you make a donation, sign up for our newsletter, or contact us.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1A1B1E' }}>2. How We Use Information</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We use your information to process donations, provide updates on our mission, and improve our services.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1A1B1E' }}>3. Data Security</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We implement industry-standard security measures to protect your data.
        </p>
        <p style={{ marginTop: '3rem' }}>
          For more information, please contact us at <a href="mailto:info@mrhrcollective.org">info@mrhrcollective.org</a>.
        </p>
      </div>
    </main>
  );
}
