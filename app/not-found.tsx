import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#FDFCFA',
      color: '#1A1B1E',
      fontFamily: 'var(--font-sans), sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#5A02B9' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Every story matters, but this page doesn&apos;t exist.</h2>
      <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>We couldn&apos;t find the path you were looking for. Let&apos;s get you back to our mission.</p>
      <Link href="/" style={{
        backgroundColor: '#5A02B9',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Return Home
      </Link>
    </div>
  );
}
