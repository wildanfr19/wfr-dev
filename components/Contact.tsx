'use client';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('fathurrohmanwildan136@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="responsive-section" style={{ padding: '120px 40px', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px',
        border: '1px solid var(--border)',
        borderRadius: '50%',
        opacity: 0.3,
      }} />
      <div style={{
        position: 'absolute', bottom: '-150px', left: '-150px',
        width: '400px', height: '400px',
        border: '1px solid var(--border)',
        borderRadius: '50%',
        opacity: 0.2,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="section-line" />
        <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
          04 / Contact
        </p>

        <div className="two-column contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              Let&apos;s Build<br />
              <span style={{ color: 'var(--accent)' }}>Something</span><br />
              Together.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '48px', maxWidth: '400px' }}>
              I&apos;m open to freelance projects, full-time positions, or just a good conversation about web development. 
              Let&apos;s connect.
            </p>

            {/* Email */}
            <div
              className="contact-email"
              onClick={copyEmail}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 24px',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                cursor: 'none',
                transition: 'all 0.3s',
                marginBottom: '16px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; }}
            >
              <span style={{ fontSize: '18px' }}>✉</span>
              <div style={{ flex: 1 }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Email</div>
                <div style={{ fontSize: '14px', color: 'var(--text)' }}>fathurrohmanwildan136@gmail.com</div>
              </div>
              <span className="font-mono" style={{ fontSize: '11px', color: copied ? '#22C55E' : 'var(--muted)' }}>
                {copied ? 'COPIED!' : 'CLICK TO COPY'}
              </span>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/wildanfr19' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wildan-fathur-rohman-96151a176/?locale=in' },
                { label: 'WhatsApp', href: 'https://wa.me/089652325523' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary" style={{ padding: '10px 20px', textDecoration: 'none', fontSize: '11px' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form" style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            padding: '40px',
            position: 'relative',
          }}>
            <div className="contact-form-corner" style={{
              position: 'absolute', top: 0, left: 0,
              width: '40px', height: '40px',
              borderRight: '1px solid var(--accent)', borderBottom: '1px solid var(--accent)',
            }} />

            <h3 className="font-display contact-form-title" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '32px' }}>
              Send a Message
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { label: 'Subject', type: 'text', placeholder: 'Project inquiry...' },
              ].map(field => (
                <div key={field.label}>
                  <label className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      color: 'var(--text)', fontSize: '14px',
                      outline: 'none', transition: 'border-color 0.2s',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              ))}

              <div>
                <label className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{
                    width: '100%', padding: '12px 16px',
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    color: 'var(--text)', fontSize: '14px',
                    outline: 'none', transition: 'border-color 0.2s',
                    fontFamily: "'DM Sans', sans-serif",
                    resize: 'vertical',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '14px' }}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
