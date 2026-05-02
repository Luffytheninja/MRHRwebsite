"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#5A02B9' }}>Something went wrong</h1>
      <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>We encountered an unexpected error. Our team has been notified.</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: 'transparent',
            color: '#5A02B9',
            border: '2px solid #5A02B9',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          Try again
        </button>
        <Link href="/" style={{
          backgroundColor: '#5A02B9',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
