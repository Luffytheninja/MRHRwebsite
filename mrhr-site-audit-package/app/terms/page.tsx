export default function TermsPage() {
  return (
    <main className="container" style={{ padding: '8rem 2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '3rem', marginBottom: '2rem', color: '#5A02B9' }}>Terms of Use</h1>
      <div style={{ lineHeight: '1.8', color: '#4A4D55' }}>
        <p style={{ marginBottom: '1.5rem' }}>Effective Date: April 22, 2026</p>
        <p style={{ marginBottom: '1.5rem' }}>
          By using this website, you agree to the following terms and conditions.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1A1B1E' }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Accessing and using mrhrcollective.org constitutes your acceptance of these terms.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1A1B1E' }}>2. Use of Content</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          All content on this site is property of MRHR Collective unless otherwise stated.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1A1B1E' }}>3. Donations</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Donations are processed through secure third-party processors. All contributions are final.
        </p>
        <p style={{ marginTop: '3rem' }}>
          For questions regarding these terms, please contact us at <a href="mailto:info@mrhrcollective.org">info@mrhrcollective.org</a>.
        </p>
      </div>
    </main>
  );
}
