'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} className="pulse-glow" />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Vertical line decoration */}
      <div style={{
        position: 'absolute', left: '40px', top: '15%', bottom: '15%',
        width: '1px', background: 'linear-gradient(to bottom, transparent, var(--border), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', paddingLeft: '32px' }}>
        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E',
            boxShadow: '0 0 8px #22C55E',
          }} className="pulse-glow" />
          <span className="font-mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display"
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            color: 'var(--text)',
          }}
        >
          Wildan<br />
          <span style={{ color: 'var(--accent)', WebkitTextStroke: '0px' }}>Fathur</span><br />
          <span style={{
            WebkitTextStroke: '1px rgba(232,237,245,0.3)',
            color: 'transparent',
            fontSize: 'clamp(40px, 6.5vw, 80px)',
          }}>Rohman</span>
        </h1>

        {/* Role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <div style={{ height: '1px', width: '40px', background: 'var(--accent)' }} />
          <span className="font-mono" style={{ fontSize: '14px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Full Stack Web Developer
          </span>
        </div>

        {/* Description */}
        <p style={{
          maxWidth: '500px',
          fontSize: '16px',
          lineHeight: 1.8,
          color: 'var(--muted)',
          marginBottom: '48px',
        }}>
          Building enterprise-grade web systems with{' '}
          <span style={{ color: 'var(--text)' }}>Laravel</span>,{' '}
          <span style={{ color: 'var(--text)' }}>React</span>, and{' '}
          <span style={{ color: 'var(--text)' }}>MySQL</span>.
          From ERP migrations, HRIS portals, to QA monitoring dashboards - turning complex problems into elegant solutions.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px', marginTop: '80px',
          paddingTop: '40px', borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '14+', label: 'Projects Delivered' },
            { num: '5+', label: 'Years Coding' },
            { num: '3', label: 'Enterprise Clients' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: '36px', fontWeight: 800, color: 'var(--accent)' }}>{s.num}</div>
              <div className="font-mono" style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.2em' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '60px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
