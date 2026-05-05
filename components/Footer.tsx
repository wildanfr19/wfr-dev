export default function Footer() {
  return (
    <footer style={{
      padding: '40px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'var(--accent)' }}>
            WFR<span style={{ color: 'var(--muted)' }}>.dev</span>
          </span>
          <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
            Wildan Fathur Rohman — Full Stack Developer
          </p>
        </div>
        <p className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
