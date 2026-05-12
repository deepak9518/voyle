// app/thank-you/page.tsx
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ color: 'var(--secondary)', marginBottom: '20px' }}>Thank You!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>We’ve received your request and will call you within 1 hour.</p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </main>
  );
}