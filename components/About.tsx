'use client';
import { useState } from 'react';

export default function About() {
  const [photoLoaded, setPhotoLoaded] = useState(true);

  return (
    <section id="about" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* Left - text */}
        <div>
          <div className="section-line" />
          <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
            01 / About
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Crafting Digital<br />
            <span style={{ color: 'var(--accent)' }}>Experiences</span>
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '20px' }}>
            I&apos;m a Full Stack Engineer based in Indonesia with a passion for building robust, 
            scalable systems. I started my journey in 2020 with my thesis project - an E-Raport system 
            with Telegram Bot integration - and never looked back.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '32px' }}>
            Today, I build enterprise-level systems including HRIS portals, ERP migration systems, 
            QA skill matrix apps, inspection dashboards, asset management tools, and crack detection software. My stack is centered around 
            <span style={{ color: 'var(--text)' }}> Laravel</span>, 
            <span style={{ color: 'var(--text)' }}> React</span>, and 
            <span style={{ color: 'var(--text)' }}> MySQL</span>, with a deep commitment to clean code and great UX.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Laravel', 'ReactJS', 'Vue JS', 'Inertia', 'TypeScript', 'MySQL', 'Docker', 'CI/CD'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right - card */}
        <div style={{ position: 'relative' }}>
          {/* Decorative frame */}
          <div style={{
            position: 'absolute', top: '-16px', left: '-16px', right: '16px', bottom: '16px',
            border: '1px solid var(--border)', borderRadius: '2px',
            pointerEvents: 'none',
          }} />

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '40px',
            position: 'relative',
          }}>
            {/* Avatar */}
            <div style={{
              width: '80px', height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-dim))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '24px',
              fontSize: '28px', fontWeight: 800, color: 'var(--bg)',
              fontFamily: "'Syne', sans-serif",
              overflow: 'hidden',
              border: '1px solid rgba(245,166,35,0.35)',
            }}>
              {photoLoaded ? (
                <img
                  src="/wildan-profile.jpg"
                  alt="Wildan Fathur Rohman"
                  onError={() => setPhotoLoaded(false)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    display: 'block',
                  }}
                />
              ) : (
                'W'
              )}
            </div>

            <div className="font-display" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>
              Wildan Fathur Rohman
            </div>
            <div className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '24px' }}>
              Full Stack Developer
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Location', value: 'Indonesia' },
                { label: 'Education', value: 'Computer Science, 2020' },
                { label: 'Thesis', value: 'E-Raport + Telegram Bot' },
                { label: 'Focus', value: 'Enterprise Web Systems' },
                { label: 'Email', value: 'fathurrohmanwildan136@gmail.com' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingBottom: '16px', borderBottom: '1px solid var(--border)',
                }}>
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text)' }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Corner accent */}
            <div style={{
              position: 'absolute', top: '0', right: '0',
              width: '40px', height: '40px',
              borderBottom: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)',
              transform: 'translate(0, 0)',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
